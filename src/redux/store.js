import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
