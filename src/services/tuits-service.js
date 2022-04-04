import axios from "axios";
// const {get} = axios
const BASE_URL = process.env.NUID ? 'http://localhost:4000' : 'https://sraph-web-dev-backend.herokuapp.com/'

const TUITS_API_REST = '/api/tuits'
const TUITS_API = `${BASE_URL}${TUITS_API_REST}`

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