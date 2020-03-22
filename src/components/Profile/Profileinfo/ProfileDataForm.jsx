import React from 'react'
import { Form, reduxForm } from 'redux-form'
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls'
import s from './Profileinfo.module.css'
import sform from '../../common/FormsControls/FormsControl.module.css'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <Form onSubmit={handleSubmit}>
        <button>Save</button>
        {error && <div className={sform.formSummaryError}>
            {error}
        </div>
        }
        <div className={s.singleForm}>
            <b>Fullname:</b> {createField("Full name", "fullName", [], Input)}
        </div>

        <div className={s.singleForm}>
            <b>Looking for a job:</b>  {createField("", "jobDescription", [], Input, { type: 'checkbox' })}
        </div>
        <div className={s.singleForm}>
            <b>Skills and background:</b>  {createField("Skills and background", "lookingForAJobDescription", [], Textarea)}
        </div>

        <div className={s.singleForm}>
            <b>About me:</b> {createField("About me", "aboutMe", [], Textarea)}
        </div>

        <div className={s.contacts}>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact} ><b>{key}: {createField(key, "contacts." + key, [], Input)}</b></div>
            })}
        </div>
    </Form >
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm