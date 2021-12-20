import { reducerType } from './reducer';
export function increment() {
    return {
        type: reducerType.INCREMENT,
    };
}
export function decrement() {
    return {
        type: reducerType.DECREMENT,
    };
}
export function change(newValue) {
    return {
        payload: newValue,
        type: reducerType.CHANGE,
    };
}
export function changeTitle() {
    return {
        type: reducerType.CHANGE_TITLE,
    };
}
export function changeToken(userData) {
    // userData = {
    //     token: 'token',
    //     role: 'admin',
    // };
    return {
        payload: userData,
        type: reducerType.CHANGE_TOKEN,
    };
}
