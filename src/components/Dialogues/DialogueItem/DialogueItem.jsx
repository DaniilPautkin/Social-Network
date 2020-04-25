import React from "react"
import s from "./../Dialogues.module.css"
import { NavLink } from "react-router-dom"

const DialoguesItem = (props) => {


    let path = "/dialogues/" + props.id


    return <div class={s.dialogue + ' ' + s.active}>
        <NavLink to={path} className={s.dialoguesItem}>{props.name}</NavLink>
    </div>
}

export default DialoguesItem