import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogsElements =
        props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements =
        props.messages.map(message => <Message message={message.message}/>);


    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(text));
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <div></div>
                <textarea onChange={onMessageChange} value={props.newMessageText} />
                <div>
                    <button onClick={addMessage}>send message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;