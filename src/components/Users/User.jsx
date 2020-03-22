import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/USER.png";
import { NavLink } from "react-router-dom"

let User = ({ user, followingInProgress, unfollow, follow }) => {

    return <div className={s.main}>
        <div>
            <NavLink to={"/profile/" + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                    className={s.userPhoto} alt="" />
            </NavLink>
        </div>
        <div>
            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => { unfollow(user.id) }}>
                    Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => { follow(user.id) }}>
                    Follow</button>}

        </div>
        <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
        </span>

    </div>
}

export default User;