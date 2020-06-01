import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={styles.dialog}>
            <NavLink to={path} activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return <div className={styles.message}>{props.message}</div>
};


const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name="Grisha" id="1"/>
                <DialogItem name="Zoya" id="2"/>
                <DialogItem name="Taras" id="3"/>
                <DialogItem name="Panas" id="4"/>
                <DialogItem name="Yu Chan" id="5"/>
                <DialogItem name="Artemon" id="6"/>
            </div>
            <div className={styles.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
};

export default Dialogs;