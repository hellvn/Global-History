import './App.css';
import Main from"./Main";
import {BrowserRouter} from "react-router-dom";
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
