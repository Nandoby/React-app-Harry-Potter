import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Rooter, Route, Router} from 'react-router-dom';
import {Serpentard as Serp , Gryffondor as Grif,Poufsouffle as Pouf, Serdaigle as Serd} from "./pages"
function App(){
  <Router>
    <Routes>
      <Route path={"/"} component={App} />
      <Route path={"/"} component={App} />
    </Routes>
  </Router>
}

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
