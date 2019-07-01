

import TokenStore from '../lib/TokenStore';

const initialState = {
    username: '',
    user: undefined,
    authToken: TokenStore.getToken(),
    onLogin: handleLogin,
    onLogout: handleLogout,
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    console.log(action);
    if(action.type==="USER"){
        newState.username = action.val
    }

    return newState;
};

export default reducer;

