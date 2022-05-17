import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    countries: [],
    filteredCountries: [],
    fetching: false,
    groupBy: 'continent'
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
            state.filteredCountries = action.payload === '' ? [] : result
        },
        groupHandler: (state, action) => {
            state.groupBy = action.payload
        }
    }
})

export const { setCountries, filterCountries, groupHandler } = countrySlice.actions

export const countryState = (state) => state.country

export default countrySlice.reducer