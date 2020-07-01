import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { StyledButton } from '../../../../styles/App-styles'
import { StyledAddPostForm } from '../../../../styles/Profile-styles'
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

const AddPostForm: React.FC<
    InjectedFormProps<AddPostValuesType, PropsType> & PropsType
> = (props) => {
    return (
        <StyledAddPostForm>
            <div>
                {createField<AddPostFormValuesTypeKeys>(
                    'Post',
                    'newPostText',
                    [required],
                    RFInput
                )}
            </div>
            <div>
                <StyledButton onClick={props.handleSubmit}>Post</StyledButton>
            </div>
        </StyledAddPostForm>
    )
}
export default reduxForm<AddPostValuesType, PropsType>({
    form: 'profile-add-post',
})(AddPostForm)
