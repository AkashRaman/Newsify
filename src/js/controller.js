import headerView from "./view/headerView";
import * as model from "./model.js"
import * as bootstrap from 'bootstrap'

const loadArticle = async() => {
    const articles = await model.getArticles();
    console.log(articles)

    if(!articles){

    }
}

const init = () =>{
    loadArticle();
    setTimeout(headerView.addHandlerMoreBtn(),100);
    setTimeout(headerView.addHandlerClick(),100);
};
init();

// const { async } = require("regenerator-runtime");

// const getJSON = async(url,errorMsg = "Something went wrong") => {
//     const response = await fetch(url);
//     // if (!response.ok) throw new Error(errorMsg);
//     return response.json();
// }
// const funct = async() => {
//     const res = await getJSON("https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=9425de20df7845f3a1ea538a6af43f94"); 
//     console.log(res);
// }

// funct();