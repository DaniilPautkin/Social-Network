import React from "react"
import s from "./../Dialogues.module.css"

const Message = (props) => {

    return <div className={s.message}>{props.message}</div>

}

export default Message
