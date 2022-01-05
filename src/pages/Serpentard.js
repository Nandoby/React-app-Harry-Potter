import Content from "../components/Content";
function Serpentard ({school}) {
    return (
        <>
        <Content 
          content={
            <>
              <img src={school.coverImg} className='img-fluid' />
              <h1>{school.school}</h1>
            </>

          }
        
        />      
      </>
     );
}

export default Serpentard;