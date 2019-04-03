

const initialState = {
    userlist: [],
    postedUser: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_USERS' :
            return {
                ...state,
                userlist: action.payload
            };
         case 'POST_USER' :
        return {
            ...state,
            postedUser: action.payload
        };
        default:
            return state;
    }
}