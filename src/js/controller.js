import headerView from "./view/headerView";
import * as model from "./model.js"
import windowsView from "./view/windowsView";
import sliderView from "./view/sliderView";
// import * as bootstrap from 'bootstrap'

const loadArticle = async() => {
    console.log('Loading Article');
    const name = window.location.search.slice(6);
    const articles = await model.getArticles(name);
    if(articles){
        sliderView.loadSlides(articles);
        sliderView.startSlideshow();
    }
}

const init = () => {
    windowsView.addHandlerUrl(loadArticle);
    setTimeout(() => {
        windowsView.addHandler();
        headerView.addHandlerBtns();
    },10);
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