const CREATE_MESSAGE = "dialoguesPage/CREATE-MESSAGE"

let initialState = {
    dialoguesData: [
        { id: 0, name: "dimych" },
        { id: 1, name: "Sveta" },
        { id: 2, name: "Dania" },
        { id: 3, name: "Diana" },
        { id: 4, name: "Velar" }
    ],
    messagesData: [
        { id: 0, message: "hi" },
        { id: 1, message: "Nice" },
        { id: 2, message: "Uou" },
    ]
}

const dialogueReducer = (state = initialState, action) => {



    // eslint-disable-next-line default-case
    switch (action.type) {
        case CREATE_MESSAGE:
            let body = action.newMessageText;

            return {
                ...state,
                messages: [...state.messagesData, { id: 0, message: body }],
            }

        default:
            return state;

    }

}

export const createMessage = (newMassageBody) => ({ type: CREATE_MESSAGE, newMassageBody })

export default dialogueReducer