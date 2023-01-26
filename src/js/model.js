import { API_KEY } from "./config.js";
import { getJSON } from "./helpers.js";


export const getArticles = async() => {
    try {
    const res = await getJSON(API_KEY); 
    return res.articles;
    } catch(err) {
        return null;
    }
    
}