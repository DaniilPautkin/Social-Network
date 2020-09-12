import React from 'react'
import { StyledMessage } from '../../../styles/Dialogues-styles'

type PropsType = {
    message: string
}

const Message: React.FC<PropsType> = (props) => {
    return <StyledMessage>{props.message}</StyledMessage>
}

export default Message
