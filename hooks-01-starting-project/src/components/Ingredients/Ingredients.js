import React, { useReducer, useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(
        (ingredient) => ingredient.id !== action.id
      );
    default:
      throw new Error('Should not get there!');
  }
};

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return { loading: true, erorr: null };
    case 'RESPONSE':
      return { ...curHttpState, loading: false };
    case 'ERROR':
      return { loading: false, error: action.error };
    case 'CLEAR_ERROR':
      return { ...curHttpState, error: null };
    default:
      throw new Error('Should not get there!');
  }
};

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  //const [userIngredients, setUserIngredients] = useState([]);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    console.log('RENDERING INGREDIENTS', userIngredients);
  }, [userIngredients]);

  const addIngredientHandler = useCallback((ingredient) => {
    //setIsLoading(true);
    dispatchHttp({ type: 'SEND' });
    fetch('https://hooks-u-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        //setIsLoading(false);
        dispatchHttp({ type: 'RESPONSE' });
        return response.json();
      })
      .then((responseData) => {
        // setUserIngredients((prevState) => [
        //   ...prevState,
        //   { id: responseData.name, ...ingredient },
        // ]);
        dispatch({
          type: 'ADD',
          ingredient: { id: responseData.name, ...ingredient },
        });
      })
      .catch((error) => {
        //setIsLoading(false);
        //setError(error.message);
        dispatchHttp({ type: 'ERROR', error: error.message });
      });
  }, []);

  const removeIngredientHandler = useCallback((ingredientId) => {
    //setIsLoading(true);
    dispatchHttp({ type: 'SEND' });
    fetch(
      `https://hooks-u-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,
      {
        method: 'DELETE',
      }
    )
      .then((response) => {
        //setIsLoading(false);
        dispatchHttp({ type: 'RESPONSE' });
        // setUserIngredients((prevState) => [
        //   ...prevState.filter((ingredient) => ingredient.id !== ingredientId),
        // ]);
        dispatch({ type: 'DELETE', id: ingredientId });
      })
      .catch((error) => {
        //setIsLoading(false);
        //setError(error.message);
        dispatchHttp({ type: 'ERROR', error: error.message });
      });
  }, []);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    //setUserIngredients(filteredIngredients);
    dispatch({ type: 'SET', ingredients: filteredIngredients });
  }, []);

  const clearError = useCallback(() => {
    //setError(null);
    //setIsLoading(false);
    dispatchHttp({ type: 'CLEAR_ERROR' });
  }, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients,removeIngredientHandler ]);

  return (
    <div className='App'>
      {httpState.error && (
        <ErrorModal onClose={clearError}>
          <p style={{ textAlign: 'center' }}>{httpState.error}</p>
        </ErrorModal>
      )}
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
