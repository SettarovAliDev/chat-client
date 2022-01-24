import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import chatApi from '../api/api';

export const checkRegister = createAsyncThunk<
  {
    token: string;
  },
  {
    email: string;
  },
  {
    rejectValue: string;
  }
>('auth/checkRegister', async (email, { rejectWithValue }) => {
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

export const checkRegisterSecret = createAsyncThunk<
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
>(
  'auth/checkRegisterSecret',
  async (userData, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const response = await chatApi.post('register/secret', userData, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token,
        },
      });

      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error: any) {
      console.error(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const checkLogin = createAsyncThunk<
  {
    token: string;
  },
  {
    email: string;
    password: string;
  },
  {
    rejectValue: string;
  }
>('auth/checkLogin', async (credentials, { rejectWithValue }) => {
  try {
    const response = await chatApi.post('login', credentials, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    console.error(error);
    if (error.response.data.message)
      return rejectWithValue(error.response.data.message);
    return rejectWithValue('Email must be email');
  }
});

export const checkLoginSecret = createAsyncThunk<
  {
    token: string;
  },
  {
    secretKey: string;
  },
  {
    state: RootState;
    rejectValue: string;
  }
>('auth/checkLoginSecret', async (userData, { getState, rejectWithValue }) => {
  try {
    const { token } = getState().auth;
    const response = await chatApi.post('login/secret', userData, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token,
      },
    });

    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error: any) {
    console.error(error);
    return rejectWithValue(error.response.data.message);
  }
});

export const loginUserByToken = createAsyncThunk<
  {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    photo: string;
  },
  undefined,
  {
    state: RootState;
    rejectValue: string;
  }
>('auth/loginUserByToken', async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('token')!;
    const response = await chatApi.get('find', {
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
  user: null | {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    photo: string;
  };
}

const initialState: AuthState = {
  token: '',
  isLoading: false,
  isAuth: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser(state) {
      state.token = '';
      state.isAuth = false;
      state.isLoading = false;
      state.error = null;
      state.user = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(checkRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(checkRegisterSecret.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkRegisterSecret.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(checkRegisterSecret.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(checkLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(checkLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(checkLoginSecret.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkLoginSecret.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(checkLoginSecret.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUserByToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserByToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload;
      })
      .addCase(loginUserByToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser, clearError } = authSlice.actions;
export default authSlice.reducer;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectError = (state: RootState) => state.auth.error;
export const selectUser = (state: RootState) => state.auth.user;
