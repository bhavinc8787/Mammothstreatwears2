import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        // Update quantity if product already exists
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      // Add new product if it does not exist
      return {
        ...state,
        cart: [...state.cart, { ...product, quantity: 1 }]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;
