import { LOGIN, LOGOUT } from './types';

const finishLogin = (email, token) => {
    return {
        type: LOGIN,
        payload: {
            email,
            token,
        }
    }
}

export const loginUser = (email, password) => {
    return (dispatch) => {
        fetch('http://localhost:4000/api/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
        .then(response => {
            if (response.success) {
                dispatch(finishLogin(response.email, response.token));
            }
        })
    };
}

export const logoutUser = () => {
    return {
        type: LOGOUT,
        payload: null,
    }
}