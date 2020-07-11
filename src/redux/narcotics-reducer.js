const SET_NARCOTIC = "SET_NARCOTIC";

const initialState = {
    narcotics: [
        { id: "Opium", visibility: false },
        { id: "Barbiturati", visibility: false },
    ],
};

const narcoticsReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SET_NARCOTIC: {
            switch (action.id) {
                case "Opium": {
                    return { ...state, narcotics.visibility: action.id };
                }
                default:
                    return state;
            }
            return { ...state };
        }
        default:
            return state;
    }
};

export const setNarcoticAC = (id) => ({ type: SET_NARCOTIC, id });

// export const setUserProfile = (profile) => ({
//     type: SET_USER_PROFILE,
//     profile,
// });

export default narcoticsReducer;
