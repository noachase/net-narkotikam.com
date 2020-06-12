const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Dimich molodec' },
        { id: 2, message: 'Vanya molodec' },
        { id: 3, message: 'Bodya molodec' },
        { id: 4, message: 'Vladik molodec' },
        { id: 5, message: 'Serega molodec' },
        { id: 6, message: 'Olya molodec' }
    ],
    newMessageBody: '',

    dialogs: [
        { id: 1, name: 'Dimich', ava: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg' },
        { id: 2, name: 'Vanya', ava: 'https://i.pinimg.com/236x/07/c7/e0/07c7e0e30aa496b3f9ee416ded4428fa.jpg' },
        { id: 3, name: 'Bodya', ava: 'https://avatarfiles.alphacoders.com/165/thumb-165762.jpg' },
        { id: 4, name: 'Vladik', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS886vwrHl0kGBrIpd7ohcv2s3CQMoQQaG9wZMk2b90nlxbF_d_' },
        { id: 5, name: 'Serega', ava: 'https://2.bp.blogspot.com/-Nluqr5JsqIc/Vk1p5T38BzI/AAAAAAAAE7g/NwVhT3ZMPLA/s1600/CuteAvatar2.png' },
        { id: 6, name: 'Olya', ava: 'https://cf.ltkcdn.net/socialnetworking/images/std/168646-425x425-Cat-Avatar-Primary.jpg' }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    
    // let stateCopy = {
    //     ...state
    // };

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.body
            };
        
        case SEND_MESSAGE: 
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 7, message: body }]
            };
        
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;