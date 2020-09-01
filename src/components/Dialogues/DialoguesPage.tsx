import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { actions } from '../../redux/dialogue-reducer'
import { getDialoguesPage } from '../../redux/dialogue-selector'
import {
    DialoguesContainer,
    MessagesContainer,
    StyledDialogues,
} from '../../styles/Dialogues-styles'
import AddMessageForm from './AddMessageForm/AddMessageForm'
import DialoguesItem from './DialogueItem/DialogueItem'
import Message from './Message/Message'

export type NewMessageFormType = {
    newMassageBody: string
}

const DialoguesPage: React.FC = (props) => {
    const { createMessage } = actions
    const state = useSelector(getDialoguesPage)

    const dispatch = useDispatch()

    let dArr = state.dialoguesData.map((d) => (
        <DialoguesItem name={d.name} key={d.id} id={d.id} />
    ))

    let messagesArr = state.messagesData.map((m) => (
        <Message message={m.message} key={m.id} />
    ))

    let addNewMessage = (values: NewMessageFormType) => {
        dispatch(createMessage(values.newMassageBody))
    }

    return (
        <>
            <DialoguesContainer>
                <StyledDialogues>{dArr}</StyledDialogues>
                <MessagesContainer>
                    {messagesArr}
                    <AddMessageForm onSubmit={addNewMessage} />
                </MessagesContainer>
            </DialoguesContainer>
        </>
    )
}

export default compose<React.ComponentType>(withAuthRedirect)(DialoguesPage)
