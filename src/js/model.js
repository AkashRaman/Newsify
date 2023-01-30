import { API_SEARCH, API_SEARCH_REST , API_HEADER} from "./config.js";
import { getJSON } from "./helpers.js";


export const getArticles = async(name) => {
    try {
        name = name ? name : 'topheadlines';
        const res = await getJSON(`${API_SEARCH}${name}${API_SEARCH_REST}`,API_HEADER); 
        console.log(`${API_SEARCH}${name}${API_SEARCH_REST}`);
        const articles = res.value.length > 10 ? res.value.slice(0,10) : res.value;
        return articles;
    } catch(err) {
        console.log(err);
        return null;
    }
    
}