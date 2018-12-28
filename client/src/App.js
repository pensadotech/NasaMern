import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
// components
import Header from './components/Header'
import NavbarA from './components/NavbarA'
import NavbarB from './components/NavbarB'
import Articles from './pages/Articles'
import NewArticles from './pages/NewArticles'

// API bridge fro express routes
import API from './utils/API'
// Style
import './App.css'

class App extends Component {
 
  state = {
    articles: [],
    newarticles: [],
    currentPage : 'Home'
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

  handleSearchNewArticles = event => {
    
    API.scrapArtilces()
      .then(res => {
        // Store new articles from ibternet in array
        let tgtarticles = res.data
        this.setState({ newarticles: tgtarticles })
      })
      .catch(err => console.log(err))
  }

  handleClearScreen = event =>  {
     
    console.log("handleClearScreen")

     // Clear searched artilces
     let tgtarticles = []
     this.setState({ newarticles: tgtarticles })
  }

  handleDeleteAllArticles = event => {

    console.log("handleDeleteAllArticles")

    // API.deleteAllArticles()
    //   .then(res => {
    //     this.setState({ articles: [] })
    //   })
    //   .catch(err => console.log(err))
  }

  handlePageChange = page => {
    console.log('page',page)
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    // Depending on selection present a navbar and the proper list of artciles
    if (this.state.currentPage === "Search") {
      // Scrape Artticles: Navbar and articles in memory
      return (
        <>
        <NavbarB handlePageChange={this.handlePageChange}
                 handleSearchNewArticles={this.handleSearchNewArticles}
                 handleClearScreen={this.handleClearScreen} />
         <NewArticles articles={this.state.newarticles}/>
        </>
      )
    } else {
      // Home : navbar and stored articles in DB
      return (
        <>
         <NavbarA handlePageChange={this.handlePageChange}
                  handleDeleteAllArticles={this.handleDeleteAllArticles} />
          <Articles articles={this.state.articles} />
        </>
      )
    }
  }
    
  render() {
    
    return (
      <>
      <Header />  
      {this.renderPage()}
      </>
    )
  }
}

export default App;
