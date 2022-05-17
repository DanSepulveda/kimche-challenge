import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    countries: [],
    filteredCountries: [],
    fetching: false
}

export const countrySlice = createSlice({
    'name': 'country',
    initialState,
    reducers: {
        setCountries: (state, action) => {
            state.countries = action.payload
        }
    }
})

export const { setCountries } = countrySlice.actions

export const countryState = (state) => state.country

export default countrySlice.reducer