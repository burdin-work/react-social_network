const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Grisha'},
        {id: 2, name: 'Zoya'},
        {id: 3, name: 'Taras'},
        {id: 4, name: 'Panas'},
        {id: 5, name: 'Yu Chan'},
        {id: 6, name: 'Artemon'},
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'how are you?'},
        {id: 3, message: 'all is good. What are you doing?'},
        {id: 4, message: 'drink tea. and you?'},
        {id: 5, message: 'nothing)'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText : '',
                messages : [...state.messages, {id: 6,message: state.newMessageText}]
            };

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageText : action.newText
            };

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