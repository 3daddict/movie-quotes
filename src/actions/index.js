import types from './types';
import axios from 'axios';

// ES5 Version
export const signUp = (userInfo) => {
    return async (dispatch) => {
        try {
            const resp = await axios.post('http://api.reactprototypes.com/signup', userInfo);
            
            localStorage.setItem('token', resp.data.token);

            dispatch({
                type: types.SIGN_UP
            });
        }
        catch(err){
            console.log('Sign up error: ', err.message);
        }
    }
};

// ES6 Version
export const signIn = userInfo => async dispatch => {
    try {
        const resp = await axios.post('http://api.reactprototypes.com/signin', userInfo);
        console.log('Sign in resp: ', resp);

        localStorage.setItem('token', resp.data.token);

        dispatch({
            type: types.SIGN_IN
        });
    }
    catch(err){
        console.log('Sign in error: ', err.message);
    }
}

// ES6 Version
export const signOut = () => {
    localStorage.removeItem('token');
    
    return {
        type: types.SIGN_OUT
    }
};