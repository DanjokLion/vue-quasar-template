import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        Accept: 'application/json',
        'app-version': process.env.VUE_APP_VERSION,
        os: 'WEB'
    }
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const res = error.response

        if (res) {
            switch (res.status) {
                case 401:
                    if (!error.response.data) {
                        window.location.reload()
                    }
                    break
                case 404:
                    break
            }
        }

        return Promise.reject(error)
    }
)

export default axiosInstance
