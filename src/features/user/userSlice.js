import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logDetails } from "./logSlice";

// Email: eve.holt@reqres.in
// Password: cityslicka

const initialState = {
  user: null,
  token: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log({ data });
    if (!response.ok) {
      return thunkAPI.rejectWithValue(data);
    }
    // Dispatch logDetails action on successful login
    thunkAPI.dispatch(logDetails({ email, message: "Login successful" }));

    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error;
      });
  },
});

export default authSlice.reducer;
