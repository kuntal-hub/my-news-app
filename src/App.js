import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as
    Main,
  Route,
  Routes

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor(props) {
    super(props)
    let key = process.env.REACT_APP_NEWS_API;
    this.state = { country: "in", progress: 0, apikey: key,query:null}
  }
  updateprogress = (amount) => {
    this.setState({ progress: amount })
    
  }
  updatequery = (amount) => {
    //let amount = document.getElementById("search_bar").value
    this.setState({ query: amount })
    
  }


  render() {
  
    return (
      <Main>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          onLoaderFinished={() => this.setState({ progress: 100 })}
        />
        <Navbar updatequery={this.updatequery}/>
        <Routes>

          <Route exact path="/" element={<News updateprogress={this.updateprogress} apikey={this.state.apikey} key={"genaral"} country={this.state.country} pagetitle="News 24 General Headlines" />} />
          <Route exact path="/business" element={<News updateprogress={this.updateprogress} apikey={this.state.apikey} key={"business"} category="business" country={this.state.country} pagetitle="News 24 Business Headlines" />} />
          <Route exact path="/entertainment" element={<News updateprogress={this.updateprogress} apikey={this.state.apikey} key={"entertainment"} category="entertainment" country={this.state.country} pagetitle="News 24 Entertainment Headlines" />} />
          <Route exact path="/health" element={<News updateprogress={this.updateprogress} apikey={this.state.apikey} key={"helth"} category="health" country={this.state.country} pagetitle="News 24 Health Headlines" />} />
          <Route exact path="/science" element={<News updateprogress={this.updateprogress} apikey={this.state.apikey} key={"science"} category="science" country={this.state.country} pagetitle="News 24 Science Headlines" />} />
          <Route exact path="/sports" element={<News updateprogress={this.updateprogress} apikey={this.state.apikey} key={"sports"} category="sports" country={this.state.country} pagetitle="News 24 Sports Headlines" />} />
          <Route exact path="/technology" element={<News updateprogress={this.updateprogress} apikey={this.state.apikey} key={"technology"} category="technology" country={this.state.country} pagetitle="News 24 Technology Headlines" />} />
          
          <Route exact path="/query" element={<News updateprogress={this.updateprogress} apikey={this.state.apikey} key={this.state.query} query={this.state.query} pagetitle={`News 24 Search Results "${this.state.query}"`} />} />



        </Routes>
      </Main>
    )
  }
}



