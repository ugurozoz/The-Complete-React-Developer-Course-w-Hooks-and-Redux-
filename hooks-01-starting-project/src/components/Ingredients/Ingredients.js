import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = (ingredient) => {
    setUserIngredients((prevState) => [
      ...prevState,
      { id: Math.random().toString(), ...ingredient },
    ]);
  };

  const removeIngredientHandler = (ingredientId) => {
    setUserIngredients((prevState) => [
      ...prevState.filter(ingredient => ingredient.id !== ingredientId)
    ]);    
  };

  return (
    <div className='App'>
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={(ingredientId) => removeIngredientHandler(ingredientId)}
        />
      </section>
    </div>
  );
};

export default Ingredients;
