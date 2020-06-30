import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd'
import { StyledHeader, AuthContainer, Logo } from '../../styles/Header-styles'
import { LogoutButton, SubmitLoginButton } from '../../styles/Login-styles'

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}

export type DispatchPropsType = {
    logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return (
        <StyledHeader>
            <Logo
                alt=""
                src="https://about.canva.com/en_in/wp-content/uploads/sites/3/2016/08/logos-1.png"
            />
            <AuthContainer>
                {props.isAuth ? (
                    <AuthContainer>
                        {props.login}{' '}
                        <LogoutButton onClick={props.logout}>
                            Log out
                        </LogoutButton>
                    </AuthContainer>
                ) : (
                    <NavLink to={'/login'}>
                        <SubmitLoginButton>Login</SubmitLoginButton>
                    </NavLink>
                )}
            </AuthContainer>
        </StyledHeader>
    )
}

export default Header
