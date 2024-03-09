import axiosInstance from './axiosInstance'

export default class BaseApi {
    constructor({ api }) {
        this.api = api
    }

    get(endpoint, params) {
        return axiosInstance.get(`${this.api}/${endpoint}`, { params })
    }

    post(endpoint, data, cancelToken) {
        const cancelObject = cancelToken ? { cancelToken } : null

        return axiosInstance.post(`${this.api}/${endpoint}`, data, cancelObject)
    }

    put(endpoint, data, params) {
        return axiosInstance.put(`${this.api}/${endpoint}`, data, { params })
    }

    patch(endpoint, data, params) {
        return axiosInstance.patch(`${this.api}/${endpoint}`, data, { params })
    }

    delete(endpoint, params) {
        return axiosInstance.delete(`${this.api}/${endpoint}`, { params })
    }
}
