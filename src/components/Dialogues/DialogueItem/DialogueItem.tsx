import React from 'react'
import { DialogueNavLink } from '../../../styles/Dialogues-styles'

type PropsType = {
    id: number
    name: string
}

const DialoguesItem: React.FC<PropsType> = (props) => {
    let path = '/dialogues/' + props.id

    return (
        <DialogueNavLink activeClassName="dialoguesItemActive" to={path}>
            {props.name}
        </DialogueNavLink>
    )
}

export default DialoguesItem
