import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements =
        props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messagesElements =
        props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id}/>);


    let addMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <div></div>
                <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText} />
                <div>
                    <button onClick={addMessage}>send message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;