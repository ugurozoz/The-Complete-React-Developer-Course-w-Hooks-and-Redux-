const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const newUser ={
        id: Math.random(),
        name: action.personData.name,
        age: action.personData.age,
      }
      return {
        ...state,
        users: state.users.concat(newUser),
      };
    case "DELETE":
      const newUsers = state.users.filter((user) => user.id !== action.id);
      return {
        ...state,
        users: newUsers,
      };
  }

  return state;
};

export default reducer;
