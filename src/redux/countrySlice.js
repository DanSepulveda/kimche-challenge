import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    countries: [],
    filteredContries: [],
    fetching: false
}

export const countrySlice = createSlice({
    'name': 'country',
    initialState,
    reducers: {
        prueba: (state) => {
            state.countries = null
        }
    }
})

export const { } = countrySlice.actions

export const countryState = (state) => state.country

export default countrySlice.reducer