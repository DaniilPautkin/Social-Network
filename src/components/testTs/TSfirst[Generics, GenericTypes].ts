export { }

type PhotoType = {
    large: string
    small: string
}

//Generic
type DataType = {
    numbers: Array<number>
}

//Generic Type
type ServerResponseType<T> = {
    name: string
    data: T
}

const response: ServerResponseType<PhotoType> = {
    name: 'Dan',
    data: {
        large: '1',
        small: '2'
    }
}