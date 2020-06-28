import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { required } from '../../../../utils/validators/validators'
import {
    createField,
    GetStringKeys,
    RFInput,
} from '../../../common/FormsControls/FormsControls'

type PropsType = {}

export type AddPostValuesType = {
    newPostText: string
}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostValuesType>

const AddPostForm: React.FC<InjectedFormProps<AddPostValuesType, PropsType> &
    PropsType> = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                {createField<AddPostFormValuesTypeKeys>(
                    'Post',
                    'newPostText',
                    [required],
                    RFInput
                )}
            </div>
            <div>
                <button>post</button>
            </div>
        </form>
    )
}
export default reduxForm<AddPostValuesType, PropsType>({
    form: 'profile-add-post',
})(AddPostForm)
