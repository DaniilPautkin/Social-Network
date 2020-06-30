import React from 'react'
import { InitialStateType } from '../../redux/dialogue-reducer'
import {
    DialoguesContainer,
    MessagesContainer,
    StyledDialogues,
} from '../../styles/Dialogues-styles'
import AddMessageForm from './AddMessageForm/AddMessageForm'
import DialoguesItem from './DialogueItem/DialogueItem'
import Message from './Message/Message'

type OwnPropsType = {
    dialoguesPage: InitialStateType
    sendMessage: (messageText: string) => void
}

export type NewMessageFormType = {
    newMassageBody: string
}

const Dialogues: React.FC<OwnPropsType> = (props) => {
    let state = props.dialoguesPage

    let dArr = state.dialoguesData.map((d) => (
        <DialoguesItem name={d.name} key={d.id} id={d.id} />
    ))

    let messagesArr = state.messagesData.map((m) => (
        <Message message={m.message} key={m.id} />
    ))

    let addNewMessage = (values: NewMessageFormType) => {
        props.sendMessage(values.newMassageBody)
    }

    return (
        <div>
            <DialoguesContainer>
                <StyledDialogues>{dArr}</StyledDialogues>
                <MessagesContainer>
                    {messagesArr}
                    <AddMessageForm onSubmit={addNewMessage} />
                </MessagesContainer>
            </DialoguesContainer>
        </div>
    )
}

export default Dialogues
