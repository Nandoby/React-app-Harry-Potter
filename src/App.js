
import './App.css';
import Header from "./components/Header"
import Content from './components/Content';
import Cards from './components/Cards';
import { Fragment } from 'react';
function App() {
  let school =
  [
    {
      id:1,
        title : "Gryffondor",
        images : "/images/blasons/gryff.jpg",
        alt  : "gryffondor blason",
        describe : "lorem test 24",
        link    : "gryffondor",
       
    },
    {
      id:2,  
          title : "Serpentard",
          images : "/images/blasons/serpentard.jpg",
          alt  : "gryffondor blason",
          describe : "lorem test 24",
          link    : "serpentard",
          
      },
      {
        id:3,
            title : "Serdaigle",
            images : "/images/blasons/serdaigle.jpg",
            alt  : "gryffondor blason",
            describe : "lorem test 24",
            link    : "serdaigle",
            
        },
        {
          id:4,
              title : "Poufsouffle",
              images : "/images/blasons/poufsouffle.jpg",
              alt  : "gryffondor blason",
              describe : "lorem teste 24",
              link    : "poufsouffle",
              
          }

  ]
  console.log(school)
  return (
    <>
    <Content
      content={
        <>
        <h1 className='text-center pt-4  textMagic text-warning fs-1'>Magic School</h1>
        <div className="row p-0 justify-content-center">
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


    </>
  );
}

export default App;
