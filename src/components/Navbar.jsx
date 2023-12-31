import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo_img from "./logo.png";
export default class Navbar extends Component {

  chenge =(event)=>{
    this.props.updatequery(event.target.value)
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary-subtle" style={{ position: 'sticky', top: '0px', left: '0px', zIndex: 1 }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={logo_img} alt="Logo" width="33" height="35" className="d-inline-block align-text-top" style={{ marginRight: "5px" }} />
            NEWS 24</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/">Link</Link>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorys
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to={"/"}>General</Link></li>
                  <li><Link className="dropdown-item" to={"/business"}>Business</Link></li>
                  <li><Link className="dropdown-item" to={"/entertainment"}>Entertainment</Link></li>
                  <li><Link className="dropdown-item" to={"/health"}>Health</Link></li>
                  <li><Link className="dropdown-item" to={"/science"}>Science</Link></li>
                  <li><Link className="dropdown-item" to={"/sports"}>Sports</Link></li>
                  <li><Link className="dropdown-item" to={"/technology"}>Technology</Link></li>
                </ul>
              </li>

            </ul>
            <div className="d-flex">
              <input className="form-control me-2" placeholder="Search" id='search_bar' onChange={this.chenge}/>
              <Link className="btn btn-outline-success" to={"/query"} >Search</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
