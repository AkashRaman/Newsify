import { API_KEY, API_LINK, API_SEARCH, API_SEARCH_REST} from "./config.js";
import { getJSON } from "./helpers.js";


export const getArticles = async(name) => {
    try {
    const res = !name ? await getJSON(API_LINK) : await getJSON(`${API_SEARCH}${name}${API_SEARCH_REST}`); 
    const articles = res.articles.length > 10 ? res.articles.slice(0,10) : res.articles;
    return articles;
    } catch(err) {
        return null;
    }
    
}