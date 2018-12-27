import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
// components
import Articles from './pages/Articles'
import Navbar from './components/Navbar'
// API bridge fro express routes
import API from './utils/API'
// Style
import './App.css'

class App extends Component {
 
  state = {
    articles: [],
    newarticles: [],
    currentPage: "Home"
  }

  componentDidMount() {
    this.loadArticles()
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => {
        // store artciles from DB in Array
        this.setState({ articles: res.data })
      })
      .catch(err => console.log(err))
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Search") {
      return <Route exact path="/" component= {() => <Articles savedArticles={this.state.articles}/>} />
    } else {
      return <Route exact path="/" component= {() => <Articles savedArticles={this.state.articles}/>} />
    }
  }

  handleSearchNewArticles = event => {
    API.scrapArtilces()
      .then(res => {
        // Sotre new articles from ibternet in array
        let tgtarticles = res.data
        this.setState({ newarticles: tgtarticles })
      })
      .catch(err => console.log(err))
  }

  handleDeleteAllArticles = event => {
    API.deleteAllArticles()
      .then(res => {
        this.setState({ articles: [] })
      })
      .catch(err => console.log(err))
  }

  handleClearScreen = event =>  {
     // Clear searched artilces
     let tgtarticles = []
     this.setState({ newarticles: tgtarticles })
  }
    

  render() {
    return (
      <>
      <Navbar 
         handlePageChange={this.handlePageChange}
         searchNewArticles={this.handleSearchNewArticles} 
         deleteAllArticles={this.handleDeleteAllArticles} />
      <Router>
         {this.renderPage()}
      </Router>
      </>
    )
  }
}

export default App;
