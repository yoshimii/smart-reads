import Axios from 'axios';
export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return Axios.create({
        baseURL: 'https://better-reads-bw.herokuapp.com/api/auth/',
        headers: {
            Authorization: token
        }
    })
}