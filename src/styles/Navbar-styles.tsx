import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Colors } from './App-styles'

export const StyledNavBar = styled.div`
    border-bottom-left-radius: 5px;
    padding: 20px;
    grid-auto-flow: row;
    background: ${Colors.darkGrey};
    grid-area: navbar;

    @media screen and (max-width: 900px) {
        border-bottom-left-radius: 0;
    }
`

export const NavItem = styled.div``

export const StyledNavbarNavLink = styled(NavLink)`
    text-decoration: none;
    color: #fffaf7;

    :hover {
        padding-left: 5px;
        border-left: 1px solid ${Colors.lightGreen};
        transition: 0.1s ease-in;
        color: ${Colors.lightGreen};
    }
    :focus,
    :active {
        color: ${Colors.lightGreen};
    }
    .active {
        padding-left: 10px;
        border-left: 3px solid ${Colors.lightGreen};
        color: ${Colors.lightGreen};
    }
`
