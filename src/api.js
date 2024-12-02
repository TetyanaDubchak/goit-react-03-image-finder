import axios from "axios";

const API_KEY = '47412002-dfc287cd912bac3fd6a52367a';

const URL = "https://pixabay.com/api/";

axios.defaults.baseURL = URL;

export const fetchImages = async (searchValue, page) => {
    const response = await axios.get(`?q=${searchValue}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`)
    return response
}