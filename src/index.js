import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Rooter, Route, Routes} from 'react-router-dom';
import Gryffondor from "./pages/Gryffondor"
import Serpentard from "./pages/Serpentard"
import Poufsouffle from "./pages/Poufsouffle"
import Serdaigle from "./pages/Serdaigle"
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import School from './components/data'


function Root() {

  const [school] = useState(School)

  const findSchool = (name) => {
    return school.findIndex(value => value.school === name)
  }


  return (

      <Rooter>
        <>
          <Header/>
          
            
              <Routes>
                <Route path="/" element={<App/>}/>
                <Route path={"/serpentard"} element={<Serpentard school={school[findSchool('Serpentard')]}/>}/>
                <Route path={"/gryffondor"} element={<Gryffondor school={school[findSchool('Gryffondor')]}/>}/>
                <Route path={"/poufsouffle"} element={<Poufsouffle school={school[findSchool('Poufsouffle')]}/>}/>
                <Route path={"/serdaigle"} element={<Serdaigle school={school[findSchool('Serdaigle')]}/>}/>
              </Routes>
          <Footer/>
        </>
      </Rooter>
  )
}

ReactDOM.render(
    <React.StrictMode>
      <Root/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
