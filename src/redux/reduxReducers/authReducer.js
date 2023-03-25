const initialState = {
    isAuthenticated: false,
    user: {
        role: null,
    },
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTHENTICATED':
            return {
                ...state, isAuthenticated: action.payload,
            };

        case 'SET_USER_ROLE':
            return {
                ...state, user: { ...state.user, role: action.payload },
            };

        default:
            return state;
    }
};

export default authReducer;