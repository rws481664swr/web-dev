import axios from "axios";
// const {get} = axios
// const BASE_URL = process.env.WEBDEV_PORT ? 'http://localhost:4000' : 'https://sraph-web-dev-backend.herokuapp.com'
const API_BASE = process.env.REACT_APP_API_BASE;
// console.log('API_BASE',API_BASE)
const TUITS_API = `${API_BASE}/tuits`;
console.log('TUITS_APi',TUITS_API)
// console.log('env',process.env.REACT_APP_API_BASE)
// console.log("api", process.env)

export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    return response.data;
}

export const updateTuit = async (tuit) => {
    const response = await axios
            .put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}
export const deleteTuit = async (tuit) => {
    const response = await axios
        .delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
}
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}