import Text from 'antd/lib/typography/Text'
import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { StyledDefaultButton } from '../../../styles/App-styles'
import { FormSummaryError } from '../../../styles/FormsControls-styles'
import {
    EditContacts,
    EditStyledContact,
    SingleForm,
} from '../../../styles/Profile-styles'
import { ProfileType } from '../../../types/types'
import {
    createField,
    GetStringKeys,
    RFCheckbox,
    RFInput,
    RFTextarea,
} from '../../common/FormsControls/FormsControls'

const ProfileDataForm: React.FC<
    InjectedFormProps<ProfileType, PropsType> & PropsType
> = ({ handleSubmit, profile, error }) => {
    return (
        // FIX:
        <form>
            <StyledDefaultButton onClick={handleSubmit}>
                Save
            </StyledDefaultButton>
            {error && <FormSummaryError>{error}</FormSummaryError>}
            <SingleForm>
                <b>Fullname:</b>{' '}
                <div>
                    {createField<ProfileTypeKeys>(
                        'Full name',
                        'fullName',
                        [],
                        RFInput
                    )}
                </div>
            </SingleForm>

            <SingleForm>
                <div>
                    <b>Looking for a job:</b>{' '}
                    {createField<ProfileTypeKeys>(
                        '',
                        'lookingForAJob',
                        [],
                        RFCheckbox,
                        {
                            type: 'checkbox',
                        }
                    )}
                </div>
            </SingleForm>

            <SingleForm>
                <b>Skills and background:</b>{' '}
                <div>
                    {createField<ProfileTypeKeys>(
                        'Skills and background',
                        'lookingForAJobDescription',
                        [],
                        RFTextarea
                    )}
                </div>
            </SingleForm>

            <SingleForm>
                <b>About me:</b>{' '}
                <div>
                    {createField<ProfileTypeKeys>(
                        'About me',
                        'aboutMe',
                        [],
                        RFTextarea
                    )}
                </div>
            </SingleForm>

            <EditContacts>
                <b>Contacts:</b>{' '}
                {Object.keys(profile.contacts).map((key) => {
                    // TODO: create some solution for embedded objects
                    return (
                        <EditStyledContact key={key}>
                            <Text code>{key}: </Text>
                            {createField(key, 'contacts.' + key, [], RFInput)}
                        </EditStyledContact>
                    )
                })}
            </EditContacts>
        </form>
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
