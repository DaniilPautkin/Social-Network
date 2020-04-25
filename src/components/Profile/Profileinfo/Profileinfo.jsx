import React, { useState } from "react"
import s from "./Profileinfo.module.css"
import Preloader from "../../common/Preloader/Preloader"
import ProfileStatus from "./ProfileStatus"
import ProfileDataFormReduxForm from "./ProfileDataForm"
import userPhoto from '../../../assets/images/USER.png'

const Profileinfo = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelect = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }


  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false)
      }
    )
  }

  return (
    <div className={s.ProfileInfo}>
      <div>
        <img className={s.profileImg} src={profile.photos.large || userPhoto} alt="" />
        {isOwner &&
          <div>
            {/* <label htmlFor="inputFile">Upload photo</label> */}
            <input className={s.inputPhotos}
              name="inputFile"
              type={"file"}
              onChange={onMainPhotoSelect} />
          </div>
        }

        {editMode
          ? <ProfileDataFormReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
          : <ProfileData activateEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}

        <ProfileStatus status={status ? status : <div className={s.noStatusBar}>User Have No Status</div>} updateStatus={updateStatus} />
      </div>
    </div>
  )
}


const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  return <div className={s.desc}>

    {isOwner && <button onClick={activateEditMode}>Edit</button>}

    <div>
      <b>Fullname:</b> {profile.FullName}
    </div>

    <div>
      <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    <div>
      <b>Skills and background:</b> {profile.lookingForAJob && <div>{profile.lookingForAJobDescription}</div>}
    </div>

    <div>
      <b>About me:</b> {profile.aboutMe}
    </div>

    <div className={s.contacts}>
      <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
    </div>
  </div>
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div className={s.contact}>{contactTitle}: {contactValue}</div>
}

export default Profileinfo
