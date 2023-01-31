import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://63bfe4190cc56e5fb0e18db0.mockapi.io';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        'https://connections-api.herokuapp.com/contacts'
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `https://connections-api.herokuapp.com/contacts`,
        contact
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${id}`
      );
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateContact = createAsyncThunk(
  '/contacts/updateContact',
  async (contact, { rejectWithValue }) => {
    try {
      await axios.patch(
        `https://connections-api.herokuapp.com/contacts/${contact.id}`,
        { name: contact.name, number: contact.number }
      );

      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
