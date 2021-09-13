// contoh deklarasi store reduce action tanpa redux toolkit, pelajari lebih lanjut https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

// store
const intialState = {
    value1: 0,
    value2: 0,
};

//reducer
function reducer(state = intialState, action) {
    if (action.type === 'value1') {
        return {
            ...state,
            value1: action.payload,
        };
    } else if (action.type === 'value2') {
        return {
            ...state,
            value2: action.payload,
        };
    } else if (action.type === 'resetValue1') {
        return {
            ...state,
            value1: 0,
        };
    }
}

//action
const changeValue1 = (newValue) => {
    return {
        type: 'value1',
        payload: newValue,
    };
};
const resetValue1 = () => {
    return {
        type: 'resetValue1',
    };
};

// contoh pemanggilan
changeValue1(5);
resetValue1();
