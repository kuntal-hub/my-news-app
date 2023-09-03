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
    this.state = { country: "in", progress: 0, apikey: key }
  }
  updateprogress = (amount) => {
    this.setState({ progress: amount })
  }

  render() {

    return (
      <Main>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          onLoaderFinished={() => this.setState({ progress: 100 })}
        />
        <Navbar />
        <Routes>

          <Route exact path="/" element={<News updateprogress={this.updateprogress} apikey={this.state.apikey} key={"genaral"} country={this.state.country} pagetitle="News 24 General Headlines" />} />
          <Route exact path="/business" element={<News updateprogress={this.updateprogress} apikey={this.state.apikey} key={"business"} category="business" country={this.state.country} pagetitle="News 24 Business Headlines" />} />
          <Route exact path="/entertainment" element={<News updateprogress={this.updateprogress} apikey={this.state.apikey} key={"entertainment"} category="entertainment" country={this.state.country} pagetitle="News 24 Entertainment Headlines" />} />
          <Route exact path="/health" element={<News updateprogress={this.updateprogress} apikey={this.state.apikey} key={"helth"} category="health" country={this.state.country} pagetitle="News 24 Health Headlines" />} />
          <Route exact path="/science" element={<News updateprogress={this.updateprogress} apikey={this.state.apikey} key={"science"} category="science" country={this.state.country} pagetitle="News 24 Csience Headlines" />} />
          <Route exact path="/sports" element={<News updateprogress={this.updateprogress} apikey={this.state.apikey} key={"sports"} category="sports" country={this.state.country} pagetitle="News 24 Sports Headlines" />} />
          <Route exact path="/technology" element={<News updateprogress={this.updateprogress} apikey={this.state.apikey} key={"technology"} category="technology" country={this.state.country} pagetitle="News 24 Technology Headlines" />} />



        </Routes>
      </Main>
    )
  }
}



