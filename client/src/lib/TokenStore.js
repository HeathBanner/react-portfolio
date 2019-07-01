class TokenStore {
    static setToken(token) {
        console.log('TOKEN SET!', token)
        localStorage.setItem('token', token);
    }

    static getToken() {
        console.log(localStorage.getItem('token'))
        return localStorage.getItem('token');
    }

    static clearToken() {
        localStorage.removeItem('token');
    }
}

export default TokenStore;