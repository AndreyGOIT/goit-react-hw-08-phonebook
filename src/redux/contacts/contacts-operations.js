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
      console.log(data);
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
      console.log(data);
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
        `https://connections-api.herokuapp.com/contacts/${id}`,
        {
          headers: {
            authorization: 'admin',
          },
        }
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
        `https://connections-api.herokuapp.com/contacts/${contact.id}`
      );
      console.log(contact);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
