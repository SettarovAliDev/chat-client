import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from './store';
import chatApi from '../api/api';
import { IChat } from '../types/chat.types';

export const getChats = createAsyncThunk<
  IChat[],
  {
    start: number;
    howMany: number;
  },
  {
    rejectValue: string;
  }
>('chats/getChats', async (chats, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('token')!;
    const response = await chatApi.get(
      `chat-list/${chats.start}/${chats.howMany}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error(error);
    return rejectWithValue(error.response.data.message);
  }
});

interface IChatsState {
  chats: IChat[];
  isLoading: boolean;
  error: string | null | undefined;
}

const initialState: IChatsState = {
  chats: [],
  isLoading: false,
  error: null,
};

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addRoom(state, action) {
      state.chats.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chats = action.payload;
      })
      .addCase(getChats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addRoom } = chatsSlice.actions;
export default chatsSlice.reducer;

export const selectChats = (state: RootState) => state.chats.chats;
