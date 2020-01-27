import Axios from 'axios';

export const instanceAxios = () => {
    const token = localStorage.getItem('token')

    return Axios.create({
        baseURL:'https://better-reads-bw.herokuapp.com/api/',
        headers: {
            // "Content-Type": "application/json",
            "Authorization": token
        }
    })
}