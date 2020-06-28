import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import {
    RFTextarea,
    createField,
} from '../../common/FormsControls/FormsControls'
import {
    MaxLenghtCreator,
    required,
} from '../../../utils/validators/validators'
import { NewMessageFormType } from '../Dialogues'

const maxLength50 = MaxLenghtCreator(50)

type NewMessageFormKeysValueType = Extract<keyof NewMessageFormType, string>

type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<
    NewMessageFormType,
    PropsType
> &
    PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormKeysValueType>(
                    'Enter your message',
                    'newMassageBody',
                    [required, maxLength50],
                    RFTextarea
                )}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm<NewMessageFormType>({
    form: 'dialog-add-message-form',
})(AddMessageForm)
