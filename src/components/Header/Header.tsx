import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledButton } from '../../styles/App-styles'
import { AuthContainer, Logo, StyledHeader } from '../../styles/Header-styles'

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
                        <StyledButton onClick={props.logout}>
                            Log out
                        </StyledButton>
                    </AuthContainer>
                ) : (
                    <NavLink to={'/login'}>
                        <StyledButton>Login</StyledButton>
                    </NavLink>
                )}
            </AuthContainer>
        </StyledHeader>
    )
}

export default Header
