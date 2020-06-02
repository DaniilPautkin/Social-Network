import React from 'react'
import s from './../Dialogues.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
    id: number
    name: string
}

const DialoguesItem: React.FC<PropsType> = (props) => {
    let path = '/dialogues/' + props.id

    return (
        <div className={s.dialogue + ' ' + s.active}>
            <NavLink to={path} className={s.dialoguesItem}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialoguesItem
