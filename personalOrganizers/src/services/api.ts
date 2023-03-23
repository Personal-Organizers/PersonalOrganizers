import axios from "axios";

export const api = axios.create({
    baseURL: 'https://personalorganizers.onrender.com',
    timeout: 3000,
});
