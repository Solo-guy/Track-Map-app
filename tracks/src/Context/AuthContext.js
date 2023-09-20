import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error': 
            return { ...state, errorMessage: action.payload };
        default: 
            return state;
    }
};

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data)
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'something went wrong with sign up'});
        }   
    };
};

const signin = dispatch => {
    return ({ email, password }) => {
        //try to signin
        //hanlde success by update state
        //handle failure by showing error message (somehow)
    };
};

const signout = dispatch => {
    return () => {
        //somehow signout
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup},
    { isSignedIn: false, errorMessage: '' }
);