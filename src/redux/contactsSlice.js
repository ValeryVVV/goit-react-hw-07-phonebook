const { createSlice } = require('@reduxjs/toolkit');
const shortid = require('shortid');

const contactsInitialState = [
  { id: 0, name: 'Learn HTML and CSS', number: true },
  { id: 1, name: 'Get good at JavaScript', number: true },
  { id: 2, name: 'Master React', number: false },
  { id: 3, name: 'Discover Redux', number: false },
  { id: 4, name: 'Build amazing apps', number: false },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(newContact) {
        return {
          payload: {
            ...newContact,
            id: shortid.generate(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
