import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledNavBar = styled.div`
    border-radius: 5px;
    padding: 20px;
    grid-auto-flow: row;
    background: #1f2833;
    grid-area: navbar;

    @media screen and (max-width: 900px) {
        border-bottom-left-radius: 0;
    }
`

export const NavItem = styled.div``

export const StyledNavnarNavLink = styled(NavLink)`
    text-decoration: none;
    color: #fffaf7;

    :hover {
        padding-left: 5px;
        border-left: 1px solid #66fcf1;
        transition: 0.1s ease-in;
        color: #66fcf1;
    }

    .active {
        padding-left: 10px;
        border-left: 3px solid #66fcf1;
        color: #379683;
    }
`
