const initialState = {
    users: [
        {
            username: 'emma',
            books: [
                {
                    title: 'Harry Potter and the Sorcer\'s Stone',
                    authors: 'J.K. Rowling',
                    rating: null,
                    ISBN: null,
                    read: 0
                }
            ]
        }
    ],
    searches: [
        {
            phrase: '',
            results: [
                {
                    title: '',
                    authors: '',
                    rating: '',
                    ISBN: null
                }
            ]
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REGISTER':
            return { ...state, users: action.user}
        default:
            return state;
    }
}

export default reducer;