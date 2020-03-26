import { DialogType, MessageType } from './../types/types';
const CREATE_MESSAGE = "dialoguesPage/CREATE-MESSAGE"



let initialState = {
    dialoguesData: [
        { id: 0, name: "dimych" },
        { id: 1, name: "Sveta" },
        { id: 2, name: "Dania" },
        { id: 3, name: "Diana" },
        { id: 4, name: "Velar" }
    ] as Array<DialogType>,
    messagesData: [
        { id: 0, message: "hi" },
        { id: 1, message: "Nice" },
        { id: 2, message: "Uou" },
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState


const dialogueReducer = (state = initialState, action: any): InitialStateType => {

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

type createMessageCreatorActionType = {
    type: typeof CREATE_MESSAGE,
    newMassageBody: string
}

export const createMessage = (newMassageBody: string): createMessageCreatorActionType => ({ type: CREATE_MESSAGE, newMassageBody })

export default dialogueReducer