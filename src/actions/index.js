import types from './types';
import axios from 'axios';

export const signUp = (userInfo) => {
    return async (dispatch) => {
        try {
            const resp = await axios.post('http://api.reactprototypes.com/signup', userInfo);
            console.log('Sign up resp: ', resp);
        }
        catch(error){
            console.log('Sign up error: ', err.message);
        }
    }
};