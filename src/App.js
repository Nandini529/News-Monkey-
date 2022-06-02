import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {

  render() {
    return (
      <div>
         <NavBar/>
         <BrowserRouter>
         <NavBar/>
          <Routes>
          <Route exact path="/" element = {<News pageSize = {5} country = "in" category = "general"/>}/>. 
          <Route exact path="/buisness" element = {<News pageSize = {5} country = "in" category = "buisness"/>}/>. 
          <Route exact path="/entertainment" element = {<News pageSize = {5} country = "in" category = "entertainment"/>}/>. 
          <Route exact path="/general" element = {<News pageSize = {5} country = "in" category = "general"/>}/>. 
          <Route exact path="/health" element = {<News pageSize = {5} country = "in" category = "health"/>}/>. 
          <Route exact path="/science" element = {<News pageSize = {5} country = "in" category = "science"/>}/>. 
          <Route exact path="/sports" element = {<News pageSize = {5} country = "in" category = "sports"/>}/>. 
          <Route exact path="/technology" element = {<News pageSize = {5} country = "in" category = "technology"/>}/>. 
          
          </Routes>
         </BrowserRouter>
       
      </div>
    )
  }
}