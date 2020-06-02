import React from 'react'
import { Form, InjectedFormProps, reduxForm } from 'redux-form'
import { ProfileType } from '../../../types/types'
import sform from '../../common/FormsControls/FormsControl.module.css'
import {
    createField,
    GetStringKeys,
    Input,
    Textarea,
} from '../../common/FormsControls/FormsControls'
import s from './Profileinfo.module.css'

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> &
    PropsType> = ({ handleSubmit, profile, error }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <button>Save</button>
            {error && <div className={sform.formSummaryError}>{error}</div>}
            <div className={s.singleForm}>
                <b>Fullname:</b>{' '}
                {createField<ProfileTypeKeys>(
                    'Full name',
                    'fullName',
                    [],
                    Input
                )}
            </div>

            <div className={s.singleForm}>
                <b>Looking for a job:</b>{' '}
                {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, {
                    type: 'checkbox',
                })}
            </div>
            <div className={s.singleForm}>
                <b>Skills and background:</b>{' '}
                {createField<ProfileTypeKeys>(
                    'Skills and background',
                    'lookingForAJobDescription',
                    [],
                    Textarea
                )}
            </div>

            <div className={s.singleForm}>
                <b>About me:</b>{' '}
                {createField<ProfileTypeKeys>(
                    'About me',
                    'aboutMe',
                    [],
                    Textarea
                )}
            </div>

            <div className={s.contacts}>
                <b>Contacts:</b>{' '}
                {Object.keys(profile.contacts).map((key) => {
                    // todo: create some solution for embedded objects
                    return (
                        <div key={key} className={s.contact}>
                            <b>{key}: </b>
                            {createField(key, 'contacts.' + key, [], Input)}
                        </div>
                    )
                })}
            </div>
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
