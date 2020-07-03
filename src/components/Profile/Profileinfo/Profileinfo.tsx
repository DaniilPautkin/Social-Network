import React, { ChangeEvent, useState } from 'react'
import userPhoto from '../../../assets/images/USER.png'
import { StyledDefaultButton } from '../../../styles/App-styles'
import {
    ChooseFileForm,
    Contacts,
    ContactTitle,
    Description,
    ProfileImage,
    ProfileInfoItem,
    StyledContact,
} from '../../../styles/Profile-styles'
import { ContactsType, ProfileType } from '../../../types/types'
import Preloader from '../../common/Preloader/Preloader'
import ProfileDataFormReduxForm from './ProfileDataForm'
import ProfileStatus from './ProfileStatus'

type PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (props: ProfileType) => Promise<any>
}

const Profileinfo: React.FC<PropsType> = ({
    isOwner,
    profile,
    status,
    updateStatus,
    savePhoto,
    saveProfile,
}) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType) => {
        // TODO: remove then
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <Description>
            <div>
                <ProfileImage src={profile.photos.large || userPhoto} alt="" />
                {isOwner && (
                    <div>
                        {/* <label htmlFor="inputFile">Upload photo</label> */}
                        <ChooseFileForm
                            name="inputFile"
                            type={'file'}
                            onChange={onMainPhotoSelect}
                        />
                    </div>
                )}

                {editMode ? (
                    <ProfileDataFormReduxForm
                        initialValues={profile}
                        onSubmit={onSubmit}
                        profile={profile}
                    />
                ) : (
                    <ProfileData
                        activateEditMode={() => {
                            setEditMode(true)
                        }}
                        profile={profile}
                        isOwner={isOwner}
                    />
                )}

                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
        </Description>
    )
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    activateEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({
    profile,
    isOwner,
    activateEditMode,
}) => {
    return (
        <div>
            {isOwner && (
                <StyledDefaultButton onClick={activateEditMode}>
                    Edit
                </StyledDefaultButton>
            )}

            <ProfileInfoItem>
                <b>Fullname:</b> <div>{profile.fullName}</div>
            </ProfileInfoItem>

            <ProfileInfoItem>
                <b>Looking for a job:</b>{' '}
                <div>{profile.lookingForAJob ? 'yes' : 'no'}</div>
            </ProfileInfoItem>
            <ProfileInfoItem>
                <b>Skills and background:</b>{' '}
                {profile.lookingForAJob && (
                    <div>{profile.lookingForAJobDescription}</div>
                )}
            </ProfileInfoItem>

            <ProfileInfoItem>
                <b>About me:</b> {profile.aboutMe}
            </ProfileInfoItem>

            <Contacts>
                <b>Contacts:</b>{' '}
                {Object.keys(profile.contacts).map((key) => {
                    return (
                        <Contact
                            key={key}
                            contactTitle={key}
                            contactValue={
                                profile.contacts[key as keyof ContactsType]
                            }
                        />
                    )
                })}
            </Contacts>
        </div>
    )
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactPropsType> = ({
    contactTitle,
    contactValue,
}) => {
    return (
        <StyledContact>
            <ContactTitle>{contactTitle}: </ContactTitle> {contactValue}
        </StyledContact>
    )
}

export default Profileinfo
