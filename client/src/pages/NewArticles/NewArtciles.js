import React, { Component } from "react"

class NewArticles extends Component {
  
  render() {
    return(
      <>
        <h1>new Articles Scraped</h1> 
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

export default NewArticles;