import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLength50, required} from "../../utils/validators/validators";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <Field component={Textarea}
                   validate={[required, maxLength50]}
                   name="newMessageBody"
                   placeholder="enter your message"
            />

            <div>
                <button>send message</button>
            </div>
        </form>
    )
}


const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


const Dialogs = (props) => {

    let dialogsElements =
        props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messagesElements =
        props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id}/>);



    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>


            </div>
        </div>
    )
};

export default Dialogs;