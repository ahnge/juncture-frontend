import axios from "axios";

export const API_URL = "http://127.0.0.1:8000/"

export const getMethod = () => {
    const res = {
        method : 'GET',
        headers : {
            Accept  : 'application/json'
        }
    }
    return res;
}

export const postMethod = ( data) => {
    const res = {
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            Accept  : 'application/json'
        }
    }

    return res;
}

export const fetchData = async (url , options) => {
    const response = await axios.get(url,options);

    return response;
}

