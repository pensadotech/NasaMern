import React, { Component } from "react"

class Articles extends Component {
  
  render() {
    return(
      <>
        <h1>Articles in DB</h1> 
        {this.props.articles.length ? (
           <ul>
             {this.props.articles.map(article => (
               <>
                <li key={article.pubId}>
                  {article.title}
                </li>
               </>
             ))}
           </ul>
        ) : (
           null
        )}   
      </>
    )
  }

}

export default Articles;