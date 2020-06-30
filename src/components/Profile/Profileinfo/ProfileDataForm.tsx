import React from 'react'
import { Form, InjectedFormProps, reduxForm } from 'redux-form'
import { FormSummaryError } from '../../../styles/FormsControls-styles'
import {
    Contacts,
    SingleForm,
    StyledContact,
} from '../../../styles/Profile-styles'
import { ProfileType } from '../../../types/types'
import {
    createField,
    GetStringKeys,
    RFInput,
    RFTextarea,
} from '../../common/FormsControls/FormsControls'

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> &
    PropsType> = ({ handleSubmit, profile, error }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <button>Save</button>
            {error && <FormSummaryError>{error}</FormSummaryError>}
            <SingleForm>
                <b>Fullname:</b>{' '}
                {createField<ProfileTypeKeys>(
                    'Full name',
                    'fullName',
                    [],
                    RFInput
                )}
            </SingleForm>

            <SingleForm>
                <b>Looking for a job:</b>{' '}
                {createField<ProfileTypeKeys>(
                    '',
                    'lookingForAJob',
                    [],
                    RFInput,
                    {
                        type: 'checkbox',
                    }
                )}
            </SingleForm>

            <SingleForm>
                <b>Skills and background:</b>{' '}
                {createField<ProfileTypeKeys>(
                    'Skills and background',
                    'lookingForAJobDescription',
                    [],
                    RFTextarea
                )}
            </SingleForm>

            <SingleForm>
                <b>About me:</b>{' '}
                {createField<ProfileTypeKeys>(
                    'About me',
                    'aboutMe',
                    [],
                    RFTextarea
                )}
            </SingleForm>

            <Contacts>
                <b>Contacts:</b>{' '}
                {Object.keys(profile.contacts).map((key) => {
                    // TODO: create some solution for embedded objects
                    return (
                        <StyledContact key={key}>
                            <b>{key}: </b>
                            {createField(key, 'contacts.' + key, [], RFInput)}
                        </StyledContact>
                    )
                })}
            </Contacts>
        </Form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({
    form: 'edit-profile',
})(ProfileDataForm)

type PropsType = {
    profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>

export default ProfileDataFormReduxForm
