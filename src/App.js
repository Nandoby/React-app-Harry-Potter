
import './App.css';
import Header from "./components/Header"
import Content from './components/Content';
import Cards from './components/Cards';
import { Fragment } from 'react';
import Music from './components/Music';
function App() {
  let school =
  [
    {
      id:1,
        title : "Gryffondor",
        images : "/images/blasons/gryff.jpg",
        alt  : "gryffondor blason",
        describe : "Gryffondor a été fondée par Godric Gryffondor. Ses couleurs sont le rouge et l'or et son emblème est le lion. Elle valorise le courage, la hardiesse, la force, la bravoure et la détermination. ",
        link    : "gryffondor",
       
    },
    {
      id:2,  
          title : "Serpentard",
          images : "/images/blasons/serpentard.jpg",
          alt  : "gryffondor blason",
          describe : "Gryffondor a été fondée par Godric Gryffondor. Ses couleurs sont le rouge et l'or et son emblème est le lion. Elle valorise le courage, la hardiesse, la force, la bravoure et la détermination. ",
          link    : "serpentard",
          
      },
      {
        id:3,
            title : "Serdaigle",
            images : "/images/blasons/serdaigle.jpg",
            alt  : "gryffondor blason",
            describe : "C'est Rowena Serdaigle qui a fondé la maison Serdaigle. Représentée par un aigle, ses couleurs sont le bleu et le bronze. L'intelligence, la sagesse, la créativité l'originalité et la curiosité. ",
            link    : "serdaigle",
            
        },
        {
          id:4,
              title : "Poufsouffle",
              images : "/images/blasons/poufsouffle.jpg",
              alt  : "gryffondor blason",
              describe : "Fondée par Helga Poufsouffle, Poufsouffle est représentée par un blaireau et ses couleurs sont le jaune et le noir. On trouve parmi les nombreuses qualités des Poufsouffle la loyauté, la patience.",
              link    : "poufsouffle",
              
          }

  ]
  console.log(school)
  return (
    <Fragment>
    <Content
    
    largeContent={
      
      <div className="container-fluid headContent">
         <Music />
        </div>
        }
        colors={{background:"black"}}
        content={
          <>
        <div className="row p-0 justify-content-center">
          <h2 className='text-white text-center pt-4 pb-4'>Découvrez nos divers écoles de magies</h2>
          {school.map(s => 
          <Fragment key={s.id}>  
          {console.log(s)},
          <Cards
          title={s.title}
          images={s.images}
          alt={s.alt}
          describe={s.describe}
          link={s.link}
          btnColor={s.link}
          linkName={s.link}
          
          />
          </Fragment>
          )}
    
         </div>
     
        </>

}  

    />


    </Fragment>
  );
}

export default App;
