import { DialogueType, MessageType } from './../types/types';
import { InferActionsTypes } from './redux-store';

let initialState = {
    dialoguesData: [
        { id: 0, name: 'Dummy' },
        { id: 1, name: 'Messages' }
        // { id: 0, name: "dimych" },
        // { id: 1, name: "Sveta" },
        // { id: 2, name: "Dania" },
        // { id: 3, name: "Diana" },
        // { id: 4, name: "Velar" }
    ] as Array<DialogueType>,
    messagesData: [
        { id: 0, message: "Still" },
        { id: 1, message: "In" },
        { id: 2, message: "Progress" },
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    createMessage: (newMassageBody: string) => ({ type: 'SN/DIALOGUES/CREATE-MESSAGE', newMassageBody } as const)
}


const dialogueReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/DIALOGUES/CREATE-MESSAGE':
            let body = action.newMassageBody

            return {
                ...state,
                messagesData: [...state.messagesData, { id: 0, message: body }],
            }

        default:
            return state

    }

}



export default dialogueReducer