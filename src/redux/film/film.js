import { createSlice } from "@reduxjs/toolkit";

const currentFilm = localStorage.getItem('currentFilm') ? JSON.parse(localStorage.getItem('currentFilm')) : null;

const filmSlice = createSlice({
    name: 'films',
    initialState: {
        currentFilm: currentFilm
    },
    reducers: {
        setCurrentFilm: (state, action) => {
            state.currentFilm = action.payload
            localStorage.setItem('cerrentFilm', JSON.stringify(state.currentFilm))
        }
    }
})

export const { setCurrentFilm } = filmSlice.actions
export default filmSlice.reducer