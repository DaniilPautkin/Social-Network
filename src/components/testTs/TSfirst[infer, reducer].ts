export { }

type PhotoType = {
    large: string
    small: string
}

type UserType = {
    age: number
    name: string
}

//Nullable
type Nullable<T> = null | T

//Old Union
// type CurrentActionTypes = ActionsTypes<typeof actions>  REDO

// type AC1Type = ReturnType<typeof AC1>
// type AC2Type = ReturnType<typeof AC2>

const InitialState = {
    name: 'Dan',
    age: 16,
    data: null as Nullable<PhotoType>, // better!
    photo: null as PhotoType | null // !automatic
}

type InitialStateType = typeof InitialState

const reducer = (state: InitialStateType, action: any) => { //  REDO
    switch (action.type) {
        case "SET-AGE": return { ...state, age: 17 }
        case "SET-NAME": return { ...state, firstname: 'Daniil', lastname: 'P' }
        default: return state
    }

}

//As Const
const actions = {
    AC1: (age: number) => ({ type: 'SET-AGE', age } as const),
    AC2: (firstName: string, lastName: string) => ({ type: 'SET-NAME', firstName, lastName } as const)
}



// const action: AC1Type = { type: 'SET-AGE', age: 1}


type Hiphop<T> = T extends 'user' ? UserType : T extends 'photo' ? PhotoType : never


const a: Hiphop<'user'> = {
    age: 1,
    name: ''
}

const b: Hiphop<'photo'> = {
    large: 's',
    small: 'a'
}

const names = {
    a: { name: 'Dan' },
    b: { age: 16 }
}

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

// type ActionsTypes<T> = ReturnType<PropertiesType<T>

// type MyReturnType<T> = T extends (...arg: any[]) => infer R ? R : never  REDO