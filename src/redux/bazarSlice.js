import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productData: [],
    userInfo: null,
}
export const bazarSlice = createSlice({
    name: "bazar",
    initialState,
    reducers: {
      // addToCart function
      addToCart: (state, action) => {
        const item = state.productData.find(
          (item) => item._id === action.payload._id
        );
  
        if (item) {
          item.quantity += action.payload.quantity;
        } else {
          state.productData.push(action.payload);
        }
      },
      // increase qty function
      increamentQuantity: (state, action) => {
        const item = state.productData.find(
          (item) => item._id === action.payload._id
        );
        if (item) {
          item.quantity++;
        }
      },
      // decrease qty function
      decrementQuantity: (state, action) => {
        const item = state.productData.find(
          (item) => item._id === action.payload._id
        );
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      },
      // delete item function
      deleteItem: (state, action) => {
        state.productData = state.productData.filter(
          (item) => item._id !== action.payload
        );
      },
      // reset cart
      resetCart: (state) => {
        state.productData = [];
      },
      // =============== User Start here ==============
      addUser: (state, action) => {
        state.userInfo = action.payload;
      },
      removeUser: (state) => {
        state.userInfo = null;
      },
      // =============== User End here ================
    },
  });
  
  export const {
    addToCart,
    deleteItem,
    resetCart,
    increamentQuantity,
    decrementQuantity,
    addUser,
    removeUser,
  } = bazarSlice.actions;
  
  export default bazarSlice.reducer;




