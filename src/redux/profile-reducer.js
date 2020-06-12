const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [
        { id: 1, message: 'molodec', likesCount: 12 },
        { id: 2, message: 'I will learn React !', likesCount: 2 },
        { id: 3, message: 'Bodya molodec', likesCount: 112 },
        { id: 4, message: 'Vladik molodec', likesCount: 1 },
        { id: 5, message: 'Serega molodec', likesCount: 12 },
        { id: 6, message: 'Olya molodec', likesCount: 12 }
    ],
    newPostText: 'kamasutra',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0
            }

            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

            return stateCopy;
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            };
            
        
        default:
            return state;
    }



    
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});

export default profileReducer;