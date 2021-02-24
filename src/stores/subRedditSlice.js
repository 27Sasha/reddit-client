import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';

const initialState = {
    subreddits: [],
    error: false,
    isLoading: false
};

const subRedditSlice = createSlice({
    name: "subreddits",
    initialState,
    reducers: {

    }
});

export const {

} = subRedditSlice.actions;

export default subRedditSlice.reducer;