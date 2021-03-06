const router = require("express").Router();
const axios = require("axios");
// const articleController = require("../../controllers/articleController");

router.route("/:searchTerm")
  .get((req, res)=> {
      let searchTerm = req.params.searchTerm;
       axios.get(`${URL}?q=${searchTerm}&api-key=${KEY}`)
       .then((result)=>{
        res.json(result.data.response.docs)
       })
      
    // console.log(result.data.response.docs, "this is our results"))
    .catch((result)=>
    console.log(result))

  })

const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const KEY = "z7pfmv2UV0x9gbdbAvH4sqfZxLe7pQQT";

module.exports = router