const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const newUser ={
        id: new Date(),
        name: action.name,
        age: Math.floor(Math.random() * 30),
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
