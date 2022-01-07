import Content from "../components/Content";

function Serdaigle ({school}) {
  let head = {color: school.HeadColor}
  let text = {color: school.textColor}
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
                  <div className="container mt-5 p-4" >
                    <h1 style={ head } className="text-center display-2">{school.school}</h1>
                    <p style={text} className="text-white fw-light" dangerouslySetInnerHTML={{__html: school.presentation}}/>
                  </div>
                </>

              }

          />
      </>
     );
}

export default Serdaigle;