import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import chatApi from '../api/api';

type Email = {
  email: string;
};

export const checkEmail = createAsyncThunk<
  {
    token: string;
  },
  {
    email: string;
  },
  {
    rejectValue: string;
  }
>('auth/checkEmail', async (email: Email, { rejectWithValue }) => {
  try {
    const response = await chatApi.post('register', email, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    console.error(error);
    return rejectWithValue(error.response.data.message);
  }
});

export const createNewUser = createAsyncThunk<
  {
    token: string;
  },
  {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    secretKey: string;
  },
  {
    state: RootState;
    rejectValue: string;
  }
>('auth/createNewUser', async (userData, { getState, rejectWithValue }) => {
  try {
    const { token } = getState().auth;
    const response = await chatApi.post('register/secret', userData, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error(error);
    return rejectWithValue(error.response.data.message);
  }
});

interface AuthState {
  token: string;
  isLoading: boolean;
  isAuth: boolean;
  error: string | null | undefined;
}

const initialState: AuthState = {
  token: '',
  isLoading: false,
  isAuth: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser(state) {
      state.isAuth = true;
    },
    logoutUser(state) {
      state.token = '';
      state.isAuth = false;
      state.isLoading = false;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(checkEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createNewUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { authUser, logoutUser, clearError } = authSlice.actions;
export default authSlice.reducer;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectError = (state: RootState) => state.auth.error;
