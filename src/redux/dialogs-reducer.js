const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const ADD_MESSAGE = 'ADD_MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}


export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}

export const updateNewMessageBodyActionCreator = text => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newText: text
});

export default dialogsReducer;