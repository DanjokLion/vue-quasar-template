import BaseApi from './base-api'

class AuthApi extends BaseApi {
    constructor() {
        super({
            api: '/api/auth'
        })
    }

    me() {
        return this
            .get('me')
            .then((response) => response.data)
    }

    sendOtp(data) {
        return this
            .post('otp', data)
            .then((response) => response.data)
    }

    login(data) {
        return this
            .post('login', data)
            .then((response) => response.data)
    }

    register(data) {
        return this
            .post('register', data)
            .then((response) => response.data)
    }

    logout() {
        return this
            .post('logout')
    }

    refresh() {
        return this
            .post('refresh')
            .then((response) => response.data)
    }
}

export default new AuthApi
