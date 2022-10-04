// Expenses Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      //...state is known as a "spreader" and it basically lists the array as is, and then concats what comes after. in this case, its the expense.
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      //.filter creates a new array.
      //here, it is creating a new array with only the id's that are not the id wanting to be deleted by the user.
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
