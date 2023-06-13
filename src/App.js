// app.js
import './App.css';
import React, { useState } from 'react';
import Navbar from './Componants/Navbar';
import News from './Componants/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

function  App () {
  const[progress, setProgress] = useState([]);
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar color="yellow" progress={this.state.progress} height={3} />
          <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country='in' category='general' />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country='in' category='business' />} />
            <Route exact path="/entertaient" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertaient" pageSize={this.pageSize} country='in' category='entertainment' />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country='in' category='general' />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country='in' category='health' />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country='in' category='science' />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country='in' category='sports' />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country='in' category='technology' />} />
          </Routes>
        </BrowserRouter>
      </div>
    );

}
export default App;