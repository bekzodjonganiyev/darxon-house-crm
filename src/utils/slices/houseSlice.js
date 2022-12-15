import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { houseAPI } from "../api";

export const getHouse = createAsyncThunk("house/getHouse", async () => {
  try {
    const response = await houseAPI.getHouse();
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const getHouseById = createAsyncThunk("house/getHouseById", async (id) => {
  try {
    const response = await houseAPI.getHouseById(id);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const addHouse = createAsyncThunk("house/addHouse", async (body) => {
  try {
    const response = await houseAPI.addHouse(body);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const editHouse = createAsyncThunk("house/editHouse", async (body, id) => {
  try {
    const response = await houseAPI.editHouse(body, id);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const deleteHouse = createAsyncThunk("house/deleteHouse", async (id) => {
  try {
    const response = await houseAPI.deleteHouse(id);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const houseSlice = createSlice({
  name: "house",
  initialState: {
    houses: [],
    currentHouse: [],
    loadingStatus: "default",
  },
  reducers: {},
  extraReducers: {
    [getHouse.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [getHouse.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.houses = action.payload.data.data;
      }
    },

    [getHouseById.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [getHouseById.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.currentHouse = state.houses.filter(
          (i) => i._id === action.payload.data.data._id
        );
      }
    },

    [addHouse.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [addHouse.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.houses.push(action.payload.data)
      }
    },

    [editHouse.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [editHouse.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.currentHouse = state.houses.map((i) => {
          if (i._id === action.payload?.data?.data?._id) {
            return action.payload?.data?.data;
          }
          return state.currentHouse
        });

      }
    },

    [deleteHouse.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [deleteHouse.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.houses = state.houses.filter(i => i._id !== action.data.data._id);
      }
    },
  },
});

// export const {} = houseSlice.actions
export default houseSlice.reducer;
