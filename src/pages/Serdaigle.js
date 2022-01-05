import Content from "../components/Content";

function Serdaigle ({school}) {
    return ( 
        <>
        <Content 
          content={
            <>
              <h1 className="text-white text-center py-4">{school.school}</h1>
              <img src={school.coverImg} className='img-fluid' />
              <h4 className="text-white my-3">Présentation de {school.school}</h4>
              <p className="text-white">
                {school.presentation}
              </p>
            </>

          }
        
        />      
      </>
     );
}

export default Serdaigle;