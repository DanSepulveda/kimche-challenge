import { createSlice } from '@reduxjs/toolkit'
import { filterCountriesByName, groupBy } from '../utils/groupCountries'

const initialState = {
    countries: [],
    filteredCountries: [],
    groupedCountries: {},
    groupBy: 'continent',
    inputEmpty: true
}

export const countrySlice = createSlice({
    'name': 'country',
    initialState,
    reducers: {
        setCountries: (state, action) => {
            state.countries = action.payload
        },
        filterCountries: (state, action) => {
            const filtered = filterCountriesByName(state.countries, action.payload)
            const grouped = groupBy(filtered, state.groupBy)
            state.filteredCountries = action.payload === '' ? [] : filtered
            state.groupedCountries = action.payload === '' ? [] : grouped
            state.inputEmpty = action.payload === ''
        },
        groupHandler: (state, action) => {
            state.groupBy = action.payload
            state.groupedCountries = groupBy(state.filteredCountries, state.groupBy)
        }
    }
})

export const { setCountries, filterCountries, groupHandler } = countrySlice.actions

export const countryState = (state) => state.country

export default countrySlice.reducer