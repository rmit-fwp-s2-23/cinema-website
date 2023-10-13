import axios from "axios";
import { getPostsByFilm } from "./post";

// --- Constants ----------------------------------------------------------------------------------
const API_HOST = "http://localhost:3002";

async function getFilm(){
    const response = await axios.get(API_HOST + `/api/film`);
    return response.data;
};



export {getFilm};

