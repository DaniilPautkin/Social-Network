import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom"

const Header = (props) => {
  return (
    <header className={s.header}>
      <img alt="" src="https://about.canva.com/en_in/wp-content/uploads/sites/3/2016/08/logos-1.png" />
      <div className={s.loginBlock}>
        {props.isAuth
          ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}

      </div>
    </header>
  );
};

export default Header;
