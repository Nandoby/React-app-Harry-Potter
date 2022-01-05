import React from 'react'
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


function Root() {

  const schools = [
    {
      school: 'Gryffondor',
      coverImg: 'https://www.piwwie.com/wp-content/uploads/2020/04/gryff.jpg',
    },
    {
      school: 'Serpentard',
      coverImg: 'https://www.piwwie.com/wp-content/uploads/2020/04/serpentard.jpg'
    },
    {
      school: 'Poufsouffle',
      coverImg: 'https://www.piwwie.com/wp-content/uploads/2020/04/poufsouffle.jpg',
      presentation: 'La création de cette maison revient à <b>Helga Poufsouffle</b>, lors de la fondation de Poudlard. Cette dernière fait figure de modèle maternel encore aujourd’hui. À l’époque, elle rassembla des gens aux modes de vie différents pour aider à construire Poudlard et était aimée pour ses manières charmantes. En outre, Helga Poufsouffle était particulièrement connue pour ses sortilèges appliqués à la nourriture. D’ailleurs, un bon nombre de recettes encore utilisées traditionnellement pour les fêtes de Poudlard proviennent d’elle. Elle a valorisé le sens du partage et la bienveillance et a donc souhaité que tous les élèves de sa Maison partage ces qualités. Par ailleurs, il s’agissait d’une grande amie de Rowena Serdaigle. Elle était originaire des vallée galloises et vécu, comme les trois autres fondateurs, au 10ème siècle.'
    },
    {
      school: 'Serdaigle',
      coverImg: 'https://www.piwwie.com/wp-content/uploads/2020/04/serdaigle.jpg'
    }
  ]

  const findSchool = (school) => {
    return schools.findIndex(value => value.school === school)
  }

  return (

      <Rooter>
        <>
          <Header/>
          <div className="container-fluid" style={{backgroundColor: "black"}}>

            <div className="container min-vh-100">
              <Routes>
                <Route path="/" element={<App/>}/>
                <Route path={"/serpentard"} element={<Serpentard school={schools[findSchool('Serpentard')]}/>}/>
                <Route path={"/gryffondor"} element={<Gryffondor school={schools[findSchool('Gryffondor')]}/>}/>
                <Route path={"/poufsouffle"} element={<Poufsouffle school={schools[findSchool('Poufsouffle')]}/>}/>
                <Route path={"/serdaigle"} element={<Serdaigle school={schools[findSchool('Serdaigle')]}/>}/>
              </Routes>
            </div>
          </div>
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
