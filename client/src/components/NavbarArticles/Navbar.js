import React, { Component } from "react"

class NavbarArticles extends Component {
   
  render() {

    return (
      <>
       <header className="header">
          <div className="row">
            <div className="col-md-4">
               <img src="./images/nasa1.png" alt="NasaLogo" />
            </div>
            <div className="col-md-3 headerLetters">
            </div>
            <div className="col-md-5">
            </div>
          </div>
        </header>

        <nav className="navbar navbar-expand-md bg-dark navbar-dark justify-content-end">
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li class="nav-item ml-auto">
                <a class="nav-link" href="/" onClick={() => props.handlePageChange("Home")} >Home</a>

              </li>
              <li className="nav-item ml-auto">
                <a className="nav-link" href="/scrapearticles" onClick={() => props.handlePageChange("Search")} >Get Articles</a>
              </li>
              <li className="nav-item ml-auto">
                <a className="btn btn-secondary" onclick={this.props.deleteAllArticles}>Delete All Articles</a>
              </li>
            </ul>
        </div>
        </nav>
      </>
    )
  }
}

export default NavbarArticles;