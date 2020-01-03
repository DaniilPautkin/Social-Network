import React from "react";
import s from "./Profileinfo.module.css";

const Profileinfo = () => {
  return (
    <div className={s.ProfileInfo}>
      <img className={s.profileMainImg} src="https://r-cf.bstatic.com/images/hotel/max1024x768/179/179169854.jpg" />
      <div className={s.desc}>description</div>
    </div>
  );
};

export default Profileinfo;
