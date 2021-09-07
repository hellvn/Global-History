import logo from './logo.svg';
import './App.css';
import Post from "./Component/Post";
import aside from "./layout/aside";
import Main from"./Main";
import {BrowserRouter} from "react-router-dom";
import Aside from "./layout/aside";
import Header from "./Component/Header";
import React from "react";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
               <Main/>
          </div>
      </BrowserRouter>
  );
}

export default App;
