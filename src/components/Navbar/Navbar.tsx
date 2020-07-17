import React from 'react'
import {
    NavItem,
    StyledNavBar,
    StyledNavbarNavLink,
} from '../../styles/Navbar-styles'

const Navbar: React.FC = (props) => {
    return (
        <StyledNavBar>
            <NavItem>
                <StyledNavbarNavLink to="/profile" activeClassName="active">
                    Profile
                </StyledNavbarNavLink>
            </NavItem>
            <NavItem>
                <StyledNavbarNavLink to="/dialogues" activeClassName="active">
                    Messages
                </StyledNavbarNavLink>
            </NavItem>
            {/* TODO: remove comments due to added News & Music */}
            {/* <NavItem>
                <StyledNavnarNavLink to="/News" activeClassName={active}>
                    News
                </StyledNavnarNavLink>
            </NavItem>
            <NavItem>
                <StyledNavnarNavLink to="/Music" activeClassName={active}>
                    Music
                </StyledNavnarNavLink>
            </NavItem> */}
            <NavItem>
                <StyledNavbarNavLink to="/settings" activeClassName="active">
                    Settings
                </StyledNavbarNavLink>
            </NavItem>
            <NavItem>
                <StyledNavbarNavLink to="/users" activeClassName="active">
                    Users
                </StyledNavbarNavLink>
            </NavItem>
        </StyledNavBar>
    )
}

export default Navbar
