const FRIEND_LIST = 'FRIEND_LIST';

let initialState = {
    friends: [
        { name: 'Vladik', id: 1 },
        { name: 'Bodich', id: 2 },
        { name: 'Sergei', id: 3 },
        { name: 'Sergei', id: 4 }
    ]
};


const sidebarReducer = (state = initialState, action) => {
    // switch (action.type) {
    //     case FRIEND_LIST:
    //         state.friends = state.friends;
    //         return state;
    //     default:
    //         return state;    
    // }
    return state;
}

export default sidebarReducer;