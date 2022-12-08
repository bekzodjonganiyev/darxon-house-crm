import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { typeAPI } from "../api";

export const getType = createAsyncThunk("type/getType", async () => {
  try {
    const response = await typeAPI.getType();
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const getTypeById = createAsyncThunk("type/getTypeById", async (id) => {
  try {
    const response = await typeAPI.getTypeById(id);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const addType = createAsyncThunk("type/addType", async (body) => {
  try {
    const response = await typeAPI.addType(body);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const editType = createAsyncThunk("type/editType", async (body) => {
  try {
    const response = await typeAPI.editType(body);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const deleteType = createAsyncThunk("type/deleteType", async (body) => {
  try {
    const response = await typeAPI.deleteType(body);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const typeSlice = createSlice({
    name: "type",
    initialState: {
        
    },
    reducers:{

    },
    extraReducers:{

    }
})
