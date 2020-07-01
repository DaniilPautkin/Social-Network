import { Button } from 'antd'
import Form from 'antd/lib/form/Form'
import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
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
