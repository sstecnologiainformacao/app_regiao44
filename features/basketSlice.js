import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const itemReference = state.items.find((item) => item.id === action.payload.id);
      if (itemReference) {
        itemReference.quantity += 1;
      } else {
        state.items = [...state.items, { ...action.payload, quantity: 1 }]
      }
    },
    removeFromBasket: (state, action) => {
      const itemReference = state.items.find((item) => item.id === action.payload.id);
      if (itemReference && itemReference.quantity > 1) {
        itemReference.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsById = (state, id) => {
  return state.basket.items.find((item) => item.id === id);
};

export default basketSlice.reducer