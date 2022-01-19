import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import chatApi from '../api/api';

type Email = {
  email: string;
};

export const checkEmail = createAsyncThunk(
  'auth/checkEmail',
  async (email: Email) => {
    try {
      const response = await chatApi.post('register', email, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      console.log(response);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

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
  }
>('auth/createNewUser', async (userData, { getState }) => {
  try {
    console.log(userData);
    const { token } = getState().auth;
    const response = await chatApi.post('register/secret', userData, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token,
      },
    });

    console.log(response);

    return response.data;
  } catch (error) {
    console.error(error);
  }
});

interface AuthState {
  token: string;
  isLoading: boolean;
  isAuth: boolean;
}

const initialState: AuthState = {
  token: '',
  isLoading: false,
  isAuth: false,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      });
  },
});

export const { authUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
