import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { StyledButton } from '../../../styles/App-styles'
import {
    StyledAddMessageForm,
    AddMessageFormButtonContainer,
} from '../../../styles/Dialogues-styles'
import {
    MaxLenghtCreator,
    required,
} from '../../../utils/validators/validators'
import {
    createField,
    RFTextarea,
} from '../../common/FormsControls/FormsControls'
import { NewMessageFormType } from '../Dialogues'

const maxLength50 = MaxLenghtCreator(50)

type NewMessageFormKeysValueType = Extract<keyof NewMessageFormType, string>

type PropsType = {}

const AddMessageForm: React.FC<
    InjectedFormProps<NewMessageFormType, PropsType> & PropsType
> = (props) => {
    return (
        <StyledAddMessageForm>
            <div>
                {createField<NewMessageFormKeysValueType>(
                    'Enter your message',
                    'newMassageBody',
                    [required, maxLength50],
                    RFTextarea
                )}
            </div>
            <AddMessageFormButtonContainer>
                <StyledButton onClick={props.handleSubmit}>Send</StyledButton>
            </AddMessageFormButtonContainer>
        </StyledAddMessageForm>
    )
}

export default reduxForm<NewMessageFormType>({
    form: 'dialog-add-message-form',
})(AddMessageForm)
