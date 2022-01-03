import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Rooter, Route,Routes} from 'react-router-dom';
import {Gryffondor as Grif} from "./pages/Gryffondor"
import {Serpentard as Serp} from "./pages/Serpentard"
import {Poufsouffle as Pouf} from "./pages/Poufsouffle"
import {Serdaigle as Serd} from "./pages/Serdaigle"
function App(){
  <Rooter>
    <Routes>
      <Route path={"/"} component={App} />
      <Route path={"/serpentard"} component={Serp} />
      <Route path={"/gryffondor"} component={Grif} />
      <Route path={"/poufsouffle"} component={Pouf} />
      <Route path={"/serdaigle"} component={Serd} />
    </Routes>
  </Rooter>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
