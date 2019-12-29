import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export default {
    
    createWork(data) {
        return axios.post('/posts/', data)
    },
    
    getwork() {
        return axios.get('/posts/')
    },

    deleteWork(id) {
        return axios.delete('/posts/'+ String(id))
    }
}