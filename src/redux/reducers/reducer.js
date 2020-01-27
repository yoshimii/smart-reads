const initialState = {
    user: [
        {
            username: '',
            id: null,
            //books saved from search results
            books: [
                {
                    title: '',
                    authors: '',
                    id: null,
                    rating: null,
                    ISBN: null,
                    read: false
                },
            ],
            //saved search phrases
            descriptions: []
        }
    ],
    isFetching: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REGISTER':
            return { ...state, user: action.user}
        case 'REQUEST_BOOKS':
            return {...state, isFetching: true};
        case 'RECEIVE_BOOKS':
            return {...state, isFetching: false};
        case 'SAVE_SEARCH':
            return {...state, descriptions: action.description}
        case 'SAVE_BOOK':
            return {
                ...state,
            }
        case 'SAVED_BOOK':
            return {
                ...state,
                user: {
                    ...state.user,
                    books: action.book
                }
            }             
        default:
            return state;
    }
};


export default reducer;