
import axios from "axios";

const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const KEY = "z7pfmv2UV0x9gbdbAvH4sqfZxLe7pQQT";


export default {
  // NYT API query
  getData: function(search) {
    return axios.get(`/api/nyt/${search}`);
  },
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  saveArticles: function(article) {
    console.log(`this is for saving in api.js`);
    return axios.post("/api/articles", article);
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  }
};