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
            dispatch({
                type: types.SIGN_UP_ERROR,
                error: 'Error creating the account'
            });
        }
    }
};

// ES6 Version
export const signIn = userInfo => async dispatch => {
    try {
        const resp = await axios.post('http://api.reactprototypes.com/signin', userInfo);

        localStorage.setItem('token', resp.data.token);

        dispatch({
            type: types.SIGN_IN
        });
    }
    catch(err){
        dispatch({
            type: types.SIGN_IN_ERROR,
            error: 'Invalid Email and/or Password'
        });
    }
}

// ES6 Version
export const signOut = () => {
    localStorage.removeItem('token');
    
    return {
        type: types.SIGN_OUT
    };
}

export const getMovieQuote = () => async dispatch => {
    try {
        const resp = await axios.get('http://api.reactprototypes.com');
        console.log('Movie Quote Response', resp);
    } catch(err) {
        console.log('Movie Quote Error', err.message);
    }
}