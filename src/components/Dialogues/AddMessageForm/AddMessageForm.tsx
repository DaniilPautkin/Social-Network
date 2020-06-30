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
import { Button } from 'antd'
import Form from 'antd/lib/form/Form'

const maxLength50 = MaxLenghtCreator(50)

type NewMessageFormKeysValueType = Extract<keyof NewMessageFormType, string>

type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<
    NewMessageFormType,
    PropsType
> &
    PropsType> = (props) => {
    return (
        <Form>
            <div>
                {createField<NewMessageFormKeysValueType>(
                    'Enter your message',
                    'newMassageBody',
                    [required, maxLength50],
                    RFTextarea
                )}
            </div>
            <div>
                <Button onClick={props.handleSubmit}>Send</Button>
            </div>
        </Form>
    )
}

export default reduxForm<NewMessageFormType>({
    form: 'dialog-add-message-form',
})(AddMessageForm)
