const SET_PAGE_CONTENT = 'SET_PAGE_CONTENT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING';

const initialState = {
    currentPage: 1,
    isFetching: false,
    pageContent: []
};

const pageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case TOGGLE_ISFETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_PAGE_CONTENT: {
            return { ...state, pageContent: action.pageContent }
        }

        default:
            return state;
    }
}
//ACTION CREATORS

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_ISFETCHING, isFetching});
export const setPageContent = (pageContent) => ({type: SET_PAGE_CONTENT, pageContent: pageContent});

export default pageReducer;