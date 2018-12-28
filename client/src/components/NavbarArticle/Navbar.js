import React, { Component } from "react"

class Navbar extends Component {
   
  render() {

    return (
      <>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark justify-content-end">
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
               <li className="nav-item ml-auto">
                 <a className="nav-link" 
                    href="#home"
                    onClick={() => this.props.handlePageChange("Home")}>Home</a>
               </li>
               <li className="nav-item ml-auto">
                 <a className="nav-link" 
                    href="#scrapearticles"
                    onClick={() => this.props.handlePageChange("Search")}>Get Articles</a>
               </li>
               <li className="nav-item ml-auto">
                 <a className="btn btn-secondary"
                    onClick={() => this.props.handleDeleteAllArticles()}>Delete All Articles</a>
               </li>
            </ul>
        </div>
        </nav>
      </>
    )
  }
}

export default Navbar;