import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const itemReference = state.items.find((item) => item.id === action.payload.id && item.storeId === action.payload.storeId);
      if (itemReference) {
        itemReference.quantity += 1;
      } else {
        state.items = [...state.items, { ...action.payload, quantity: 1 }]
      }
    },
    removeFromBasket: (state, action) => {
      const itemReference = state.items.find((item) => item.id === action.payload.id && item.storeId === action.payload.storeId);
      console.log(state);
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

const selectBasket = state => state.basket;

export const selectBasketByStore = createSelector(
  [selectBasket, (_, storeId) => storeId],
  (basket, storeId) => basket.items.filter(item => item.storeId === storeId)
);

export const selectStores = createSelector(
  [selectBasket],
  basket => {
    const addedStores = [];
    return basket.items.reduce((stores, item) => {
      if (!addedStores.includes(item.storeId)) {
        const { storeId, storeName } = item;
        stores.push({ id: storeId, name: storeName });
        addedStores.push(storeId);
      }
      return stores;
    }, []);
  }
);

export const selectBasketQuantity = (state) => state.basket.items.reduce((total, item) => total + item.quantity, 0);

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default basketSlice.reducer