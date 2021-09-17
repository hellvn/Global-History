import './App.css';
import Main from"./Main";
import {BrowserRouter} from "react-router-dom";
import Header from "./Component/Header";
import React from "react";
import Footer from "./Component/Footer";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
               <Main/>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
