import React from 'react';
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../state/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
return {
    dialogsPage: state.dialogsPage
}
}

let mapDispatchToProps = (dispatch) => {
return {
    updateNewMessageBody : (body) => {
        dispatch(updateNewMessageBodyActionCreator(body));
    },
    sendMessage : () => {
        dispatch(addMessageActionCreator());
    }
}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;