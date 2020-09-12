import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledDefaultButton, StyledLinkButton } from '../../styles/App-styles'
import { AuthContainer, Logo, StyledHeader } from '../../styles/Header-styles'
import { useDispatch, useSelector } from 'react-redux'
import { getIsAuth, getAuthLogin } from '../../redux/auth-selector'
import { logout } from '../../redux/auth-reducer'

const Header: React.FC = (props) => {
    const dispatch = useDispatch()

    const isAuth = useSelector(getIsAuth)
    const profileName = useSelector(getAuthLogin)

    return (
        <StyledHeader>
            <Logo
                alt=''
                src='https://about.canva.com/en_in/wp-content/uploads/sites/3/2016/08/logos-1.png'
            />
            <AuthContainer>
                {isAuth ? (
                    <AuthContainer>
                        {profileName}{' '}
                        <StyledLinkButton onClick={() => dispatch(logout())}>
                            Log out
                        </StyledLinkButton>
                    </AuthContainer>
                ) : (
                    <NavLink to={'/login'}>
                        <StyledDefaultButton>Login</StyledDefaultButton>
                    </NavLink>
                )}
            </AuthContainer>
        </StyledHeader>
    )
}

export default Header
