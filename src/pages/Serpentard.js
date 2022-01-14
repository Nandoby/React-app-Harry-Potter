import Content from "../components/Content";
import {useState} from "react";
import Galleries3d from "../components/Galleries3d";
function Serpentard({school}) {
  const [ display, setDisplay ] = useState(true)
  const [ avantage, setAvantage ] = useState(false)
  const [ inconvenient, setInconveniant ] = useState(false)

  const showPresentation = () => {
    let toggle = !display
    setDisplay(toggle)
  }

  const handleClickAvantage = () => {
    let toggle = !avantage
    setAvantage(toggle)
  }

  const handleClickInconvenient = () => {
    let toggle = !inconvenient
    setInconveniant(toggle)
  }


  let head = {color: school.HeadColor,fontFamily: 'magic', fontSize: '100px'}
  let head2 = { color: school.HeadColor, cursor: 'pointer' }
  let text = {color: school.textColor}
  let left = <svg xmlns="http://www.w3.org/2000/svg" style={{width: '24px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
  let down = <svg xmlns="http://www.w3.org/2000/svg" style={{width: '24px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>

  return (
      <>
        <Content
            colors={{
              backgroundImage: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${school.coverImg})`,
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
              width: '100%',
              minHeight: 'calc(100vh - 70px)',
              backgroundPosition: 'center center',
              mixBlendMode: 'darken'
            }}
            content={
              <>
                <div className="container mt-5 p-4">
                  <h1 style={head} className="text-center head">{school.school}</h1>

                  <h3 style={head2}  onClick={showPresentation}>Présentation {display ? down : left }</h3>
                  {display ? (<div style={text}  dangerouslySetInnerHTML={{__html: school.presentation}}/>) : null}

                  <h3 style={head2} onClick={handleClickAvantage} >Avantages {avantage ? down : left}</h3>
                  {avantage ? (
                      <ul>
                        {school.avantages.map(av => <li style={text} className="mb-4">{av}</li>)}
                      </ul>
                  ) : null}

                  <h3 onClick={handleClickInconvenient} style={head2}>Inconvénients {inconvenient ? down : left}</h3>
                  {inconvenient ? (
                      <ul>
                        {school.inconvenients.map(inc => <li style={text} className="mb-4">{inc}</li>)}
                      </ul>
                  ) : null}
                </div>

                <Galleries3d>
                  <img src="https://pbs.twimg.com/profile_images/1163568191983034369/xsE__Ro3_400x400.jpg" alt=""/>
                  <img src="https://actualitte.com/uploads/images/Severus-Snape-severus-snape-9231013-1920-1280-4a4e4103-3fc6-4ed2-a11e-8ae6a657df33.jpg" alt=""/>
                  <img src="https://thebmuffin.files.wordpress.com/2016/03/dolores-ombrage.jpg" alt=""/>
                </Galleries3d>

              </>

            }

        />
      </>
  );
}

export default Serpentard;