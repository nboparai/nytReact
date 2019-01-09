import React, {Component} from 'react';
import Search from "./components/Search";
import Results from "./components/Result";
import Saved from "./components/Saved";
import Title from "./components/Title";
import API from "./utils/api";

class App extends Component {
  state = {
    search: "",
    start: "",
    end: "",
    result: [],
    savedArticles: []
  }

   componentDidMount() {
    this.loadArticles();
   };

  loadArticles = () => {
    API.getSavedArticles().then((res) => {
      this.setState({savedArticles: res.data});
    }).catch((err) => {
      console.log(err);
    });
  };

  deleteArticle = (id) => {
    API.deleteArticle(id).then((res) => {
      this.loadArticles()
    }).catch((err) => {
      console.log(err);
    });
  };

  handleSaveButton = (title, url, date) => {
    API.saveArticles({title, url, date}).then((res) => {
      this.loadArticles()
    }).catch((err) => {
      console.log(err);
    });
  };

  handleFormSubmit = (event) => {
    this.setState({search: ""});
    event.preventDefault();
  };

  handleInputChange = (event) => {
    this.setState({search: event.target.value});
  };

  handleButtonClick = () => {
    if (this.state.search !== "") {
      API.getData(this.state.search).then((res) => {
        this.setState({result: res.data.response.docs})
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  render() {
    return (
      <div>
        <Title/>
        <Search handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleButtonClick={this.handleButtonClick} search={this.state.search}/>
        <Results result={this.state.result} handleSaveButton={this.handleSaveButton}/>
        <Saved savedArticles={this.state.savedArticles} deleteArticle={this.deleteArticle}/>
      </div>
    );
  }
}

export default App;

