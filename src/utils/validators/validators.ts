export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (!value) {
        return 'No empty fields accepted'
    }
    return undefined
}

export const MaxLenghtCreator = (maxLength: number): FieldValidatorType => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}

export const MinLenghtCreator = (minLength: number): FieldValidatorType => (value) => {
    if (value.length < minLength) return `Min length is ${minLength} symbols`
    return undefined
}
