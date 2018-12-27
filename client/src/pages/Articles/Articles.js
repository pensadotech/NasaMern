import React, { Component } from "react"
import API from "../../utils/API"

class Articles extends Component {
  
  render() {

    return(
      <>
        <h1>Articles in DB</h1> 
        {this.props.savedArticles.length ? (
           <ul>
             {this.props.savedArticles.map(article => (
               <>
                <li key={article.pubId}>
                  {article.title}
                </li>
               </>
             ))}
           </ul>
        ) : (
           <h3>No Results to Display</h3>
        )}   
      </>
    )
  }

}

export default Articles;