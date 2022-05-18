export const filterCountriesByName = (countries, name) => {
    return countries.filter(country => country.name.toLowerCase().includes(name.toLowerCase()))
}

const groupByLanguage = (countries) => {
    const groupedCountries = countries.reduce((result, item) => {
        item.languages.forEach(language => {
            result[language.name] = [...result[language.name] || [], item]
        })
        return result
    }, {})
    return Object.entries(groupedCountries).sort((a, b) => a[0].localeCompare(b[0]))
}

const groupByContinent = (countries) => {
    const groupedCountries = countries.reduce((result, item) => {
        result[item.continent.name] = [...result[item.continent.name] || [], item]
        return result
    }, {})

    return Object.entries(groupedCountries).sort((a, b) => a[0].localeCompare(b[0]))
}

export const groupBy = (countries, condition) => {
    if (condition === 'continent') {
        return groupByContinent(countries)
    } else {
        return groupByLanguage(countries)
    }
}