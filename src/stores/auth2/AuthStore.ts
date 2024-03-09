import { defineStore } from 'pinia'
import { IAuthData } from './AuthStoreTypes'

export const useAuthStore = defineStore('auth', {
    state: (): IAuthData => ({
        email: '',
        phone: '',
        name: '',
        nick: '',
        otp: ''
    }),
    getters: {},
    actions: {
        setPhone(phone: string) {
            this.phone = phone
        },
        setName(name: string) {
            this.name = name
        },
        setNick(nick: string) {
            this.nick = nick
        },
        setOtp(otp: string) {
            this.otp = otp
        }
    }
})
