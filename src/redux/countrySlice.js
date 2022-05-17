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
        },
        filterCountries: (state, action) => {
            const result = state.countries.filter(country => country.name.toLowerCase().includes(action.payload.toLowerCase()))
            state.filteredCountries = result
        }
    }
})

export const { setCountries, filterCountries } = countrySlice.actions

export const countryState = (state) => state.country

export default countrySlice.reducer