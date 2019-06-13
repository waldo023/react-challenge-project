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
        const reqBody = {
            email,
            password,
        }
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
                console.log('login resp', response)
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