export const required = (value) => {
    if (!value) {
        return 'No empty fields accepted'
    }
    return undefined
}

export const MaxLenghtCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}

export const MinLenghtCreator = (minLength) => (value) => {
    if (value.length < minLength) return `Min length is ${minLength} symbols`
    return undefined
}
