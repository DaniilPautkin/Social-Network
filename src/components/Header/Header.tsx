import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd'

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}

export type DispatchPropsType = {
    logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img
                alt=""
                src="https://about.canva.com/en_in/wp-content/uploads/sites/3/2016/08/logos-1.png"
            />
            <div className={s.loginBlock}>
                {props.isAuth ? (
                    <div>
                        {props.login}{' '}
                        <Button className={s.logout} onClick={props.logout}>
                            Log out
                        </Button>
                    </div>
                ) : (
                    <NavLink to={'/login'}>
                        <Button className={s.login}>Login</Button>
                    </NavLink>
                )}
            </div>
        </header>
    )
}

export default Header
