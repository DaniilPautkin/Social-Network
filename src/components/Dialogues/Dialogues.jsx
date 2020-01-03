import React from "react";
import s from "./Dialogues.module.css";
import Message from "./Message/Message"
import DialoguesItem from "./DialogueItem/DialogueItem"






const Dialogues = (props) => {

  let dArr =
    props.state.dialoguesData.map(d => (
      <DialoguesItem id={d.id} name={d.name} />
    ))

  let messagesArr =
    props.state.messagesData.map(m => (
      <Message message={m.message} id={m.id} />
    ))

  return (
    <div className={s.dialogues}>
      <div className={s.dialoguesItems}>
        {dArr}
      </div>
      <div className={s.messages}>
        {messagesArr}
      </div>
    </div>
  );
};

export default Dialogues;
