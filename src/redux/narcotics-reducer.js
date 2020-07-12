const SET_NARCOTIC = "SET_NARCOTIC";
const IS_OPIUM = "IS_OPIUM";
const IS_DURMAN = "IS_DURMAN";
const IS_BARBITURATI = "IS_BARBITURATI";
const IS_KONOPLI = "IS_KONOPLI";
const IS_ALCOHOL = "IS_ALCOHOL";
const IS_LSD = "IS_LSD";
const IS_COCAINE = "IS_COCAINE";

const initialState = {
    narcotics: [
        { id: "Opium", visibility: false },
        { id: "Barbiturati", visibility: false },
    ],
};

const narcoticsReducer = (state = initialState, action) => {
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
