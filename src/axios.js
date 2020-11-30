import axios from "axios";

/** base url to request the database to fetch movies */

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;