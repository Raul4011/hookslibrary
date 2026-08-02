import {type AxiosInstance} from 'axios'

export const setCommonHeaders = (instance: AxiosInstance) => {
         
    instance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('authorization') ?? null}`

    instance.defaults.headers.common.Accept = 'application/json'

}