const getLangList = (languages) => {
    const result = languages.reduce((list, item) => {
        list += `${item.name}, `
        return list
    }, '')
    return result.slice(0, result.length - 2) + '.'
}

export default getLangList