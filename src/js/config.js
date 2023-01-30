// export const API_LINK = `https://bing-news-search1.p.rapidapi.com/news/trendingtopics?textFormat=Raw&safeSearch=Off`;
export const API_HEADER = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eddcc6d6bamshc8a73273d065269p10b4bbjsna099f1c9e073',
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
	}
};
export const API_SEARCH = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=`;
export const API_SEARCH_REST = `&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null`;