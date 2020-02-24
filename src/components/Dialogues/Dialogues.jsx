import React from "react";
import s from "./Dialogues.module.css";
import Message from "./Message/Message"
import DialoguesItem from "./DialogueItem/DialogueItem"
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogues = (props) => {

  let state = props.dialoguesPage;

  let dArr =
    state.dialoguesData.map(d => <DialoguesItem name={d.name} key={d.id} id={d.id} />);

  let messagesArr =
    state.messagesData.map(m => <Message message={m.message} key={m.id} />);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMassageBody)
  }

  return (
    <div>
      <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
          {dArr}
        </div>
        <div className={s.messages}>
          <div>{messagesArr}</div>
          <AddMessageForm onSubmit={addNewMessage} />
        </div>
      </div>

    </div>
  );
};

export default Dialogues;
