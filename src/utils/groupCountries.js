export const filterCountriesByName = (countries, name) => {
    return countries.filter(country => country.name.toLowerCase().includes(name.toLowerCase()))
}

const groupByLanguage = (countries) => {
    const groupedCountries = countries.reduce((result, item) => {
        result[item.languages[0].name] = [...result[item.languages[0].name] || [], item]
        return result
    })
    return groupedCountries
}

const groupByContinent = (countries) => {
    const groupedCountries = countries.reduce((result, item) => {
        result[item.continent.name] = [...result[item.continent.name] || [], item]
        return result
    }, {})

    return Object.entries(groupedCountries)
}

export const groupBy = (countries, condition) => {
    if (condition === 'continent') {
        return groupByContinent(countries)
    } else {
        return groupByLanguage(countries)
    }
}