import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { homeAPI } from "../api";

export const getHome = createAsyncThunk("home/getHome", async () => {
  try {
    const response = await homeAPI.getHome();
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const getHomeById = createAsyncThunk("home/getHomeById", async (id) => {
  try {
    const response = await homeAPI.getHomeById(id);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const addHome = createAsyncThunk("home/addHome", async (body) => {
  try {
    const response = await homeAPI.addHome(body);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const editHome = createAsyncThunk("home/editHome", async (body, id) => {
  try {
    const response = await homeAPI.editHome(body, id);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const deleteHome = createAsyncThunk("home/deleteHome", async (id) => {
  try {
    const response = await homeAPI.deleteHome(id);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    homes: [],
    currentHomes: [],
    loadingStatus: "default",
  },
  reducers: {},
  extraReducers: {
    [getHome.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [getHome.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.homes = action.payload.data.data;
      }
    },

    [getHomeById.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [getHomeById.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.currentHomes = state.homes.filter(
          (i) => i._id === action.payload.data.data._id
        );
      }
    },

    [addHome.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [addHome.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.homes.push(action.payload.data)
      }
    },

    [editHome.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [editHome.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.currentHomes = state.homes.map((i) => {
          if (i._id === action.payload?.data?.data?._id) {
            return action.payload?.data?.data;
          }
          return state.currentHomes
        });

      }
    },

    [deleteHome.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [deleteHome.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.homes = state.homes.filter(i => i._id !== action.data.data._id);
      }
    },
  },
});

// export const {} = homeSlice.actions
export default homeSlice.reducer;
