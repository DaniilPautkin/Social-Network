import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const DialoguesContainer = styled.div`
    max-width: 1200px;
    padding: 10px;
    display: grid;
    grid-template-columns: 3fr 8fr;
`

export const StyledDialogues = styled.div``

export const DialogueNavLink = styled(NavLink)`
    color: #000000;
    text-decoration: none;
    font-weight: 500;

    .active {
        color: tomato;
    }
`

export const MessagesContainer = styled.div``

export const StyledMessage = styled.div``
