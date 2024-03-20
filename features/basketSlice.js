import { createSlice } from '@reduxjs/toolkit';

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
      if (itemReference && itemReference.quantity > 0) {
        itemReference.quantity -= 1;
      }
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsById = (state, id) => {
  return state.basket.items.find((item) => item.id === id);
};

export const selectBasketByStore = (state, storeId) => {
  return state.basket.items.filter((item) => item.storeId === storeId);
}

export const selectStores = (state) => {
  const addedStores = [];
  return state.basket.items.reduce((stores, item) => {
    if (!addedStores.includes(item.storeId)) {
      const { storeId, storeName } = item;
      stores.push({ id: storeId, name: storeName });
      addedStores.push(storeId);
    }
    return stores;
  }, []);
}

export const selectBasketQuantity = (state) => state.basket.items.reduce((total, item) => total + item.quantity, 0);

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default basketSlice.reducer