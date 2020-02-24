import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'SET-INITIALIZED';


let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}


export const initializingSuccess = () => ({
    type: INITIALIZED_SUCCESS
});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initializingSuccess())
    })

}

export default appReducer;