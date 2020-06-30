import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledHeader = styled.div`
    z-index: 1;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: space-between;
    grid-area: head;
    background: #0b0c10;

    img {
        border-radius: 20px;
        margin: 5px;
        height: 50px;
    }

    @media screen and (max-width: 900px) {
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }
`

export const AuthContainer = styled.a`
    text-decoration: none;
    color: #ffffff;
`

export const LoginLink = styled(NavLink)`
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
    border-radius: 5px;
`

export const Logo = styled.img``
