const initialState = {
    num: 0,
    title: '',
    token: '',
    role: '',
};

export const reducerType = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    CHANGE: 'CHANGE',
    CHANGE_TITLE: 'CHANGE_TITLE',
    CHANGE_TOKEN: 'CHANGE_TOKEN',
};

const numberDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case reducerType.INCREMENT:
            return {
                ...state,
                num: state.num + 1,
            };
        case reducerType.DECREMENT:
            return {
                ...state,
                num: state.num - 1,
            };
        case reducerType.CHANGE:
            return {
                ...state,
                num: action.payload,
            };
        case reducerType.CHANGE_TITLE:
            return {
                ...state,
                title: 'Hello',
            };
        case reducerType.CHANGE_TOKEN:
            // action = {
            //     type: 'CHANGE',
            //     payload: {
            //         token: 'token',
            //         role: 'admin',
            //     },
            // };
            return {
                ...state,
                token: action.payload.token,
                role: action.payload.role,
            };
        default:
            return state;
    }
};

export default numberDataReducer;
