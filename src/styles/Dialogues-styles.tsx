import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const DialoguesContainer = styled.div`
    max-width: 1200px;
    padding: 10px;
    display: grid;
    grid-template-columns: 3fr 8fr;
`
export const StyledAddMessageForm = styled.div`
    display: flex;
    flex-direction: row;
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

export const AddMessageFormButtonContainer = styled.div`
    margin-left: 5px;
`

export const MessagesContainer = styled.div``

export const StyledMessage = styled.div``
