import React from 'react'
import {
    NavItem,
    StyledNavBar,
    StyledNavnarNavLink,
} from '../../styles/Navbar-styles'

const Navbar: React.FC = (props) => {
    return (
        <StyledNavBar>
            <NavItem>
                <StyledNavnarNavLink to="/profile" activeClassName="active">
                    Profile
                </StyledNavnarNavLink>
            </NavItem>
            <NavItem>
                <StyledNavnarNavLink to="/dialogues" activeClassName="active">
                    Messages
                </StyledNavnarNavLink>
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
                <StyledNavnarNavLink to="/settings" activeClassName="active">
                    Settings
                </StyledNavnarNavLink>
            </NavItem>
            <NavItem>
                <StyledNavnarNavLink to="/users" activeClassName="active">
                    Users
                </StyledNavnarNavLink>
            </NavItem>
        </StyledNavBar>
    )
}

export default Navbar
