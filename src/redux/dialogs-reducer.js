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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                messages : [...state.messages, {id: 7,message: action.newMessageBody}]
            };


        default:
            return state;
    }
}


export const addMessageActionCreator = (newMessageBody) => {
    return {type: ADD_MESSAGE, newMessageBody}
}

export default dialogsReducer;