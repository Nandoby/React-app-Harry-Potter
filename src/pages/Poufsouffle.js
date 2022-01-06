import Content from "../components/Content";
function Poufsouffle ({school}) {
    return ( 
        <>
        <Content 
          colors={"red"}
          content={
            <>
              <h1 className="text-white text-center py-4">{school.school}</h1>
              <img src={school.coverImg} className='img-fluid' />
              <h4 className="text-white my-3">Présentation de {school.school}</h4>
              <p className="text-white" dangerouslySetInnerHTML={{__html: school.presentation}} />
            </>
          }
        
        />      
      </>
     );
}

export default Poufsouffle;