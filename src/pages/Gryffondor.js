import Content from "../components/Content";

function Gryffondor ({school}) {
  return (
      <>
        <Content 
        largeContent={null}
        colors={{background:`url('/images/fond.jpg') no-repeat`, backgroundSize:'cover'}}
          content={
            <>
            <div className="container">
              <img src={school.coverImg} className='img-fluid' />
              <h1>{school.school}</h1>
            </div>
            </>

          }
        
        />      
      </>
  )
}

export default Gryffondor;