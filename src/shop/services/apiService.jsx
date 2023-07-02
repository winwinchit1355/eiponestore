import axios from "axios";

const serverUrl = 'http://jewelstoreapi.test';

export const apiService = {
    get: (url,params) => {
        return axios.get(`${serverUrl}/${url}`,{params})
        .then((response) => response.data);
    },
    post: (url, data) => {
        return axios.post(`${serverUrl}/${url}`, data).then((response) => response.data);
    },
    put: (url, data) => {
        return axios.put(`${serverUrl}/${url}`, data).then((response) => response.data);
    },
    delete: (url) => {
        return axios.delete(`${serverUrl}/${url}`).then((response) => response.data);
    },

}