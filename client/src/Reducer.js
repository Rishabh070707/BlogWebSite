export const initialState = {
  cart: [],
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "REMOVE":
      let index = state.cart.FindIndex((newCart) => newCart.id === action.id);
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn("error");
      }
      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};

export default Reducer;
