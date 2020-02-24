import React from "react";
import s from "./ProfileStatus.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const Profileinfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.ProfileInfo}>
      {/* <img className={s.profileMainImg} src="https://r-cf.bstatic.com/images/hotel/max1024x768/179/179169854.jpg" alt="" /> */}
      <div className={s.desc}>
        <img className={s.profileImg} src={props.profile.photos.large ? props.profile.photos.large : "https://www.meme-arsenal.com/memes/8ab5fe07681cd172915e9472a0a8443d.jpg"} alt="" />
        <ProfileStatus status={props.status ? props.status : <div className={s.noStatusBar}>User Have No Status</div>} updateStatus={props.updateStatus} /></div>
    </div>
  );
};

export default Profileinfo;
