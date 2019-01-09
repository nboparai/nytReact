
import axios from "axios";

const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const KEY = "55b0b7e90b4948dd9cb656b149999664";


export default {
  // NYT API query
  getData: function(search) {
    return axios.get(`${URL}?q=${search}&api-key=${KEY}`);
  },
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  saveArticles: function(article) {
    return axios.post("/api/articles", article);
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  }
};