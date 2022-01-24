import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import chatApi from '../api/api';

interface IChat {
  id: string;
  isRoom: boolean;
  time: number;
  status: string;
  photo: string;
  online: boolean;
  noChecked: number;
  message: string;
  file?: string;
  name: string;
  exitDate: number | false;
}

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
  reducers: {},
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

export default chatsSlice.reducer;
