import { Fragment } from "react/cjs/react.production.min";
import { useRef,useEffect } from "react";
function Galleries ({tab=[]}) {
 const tabRef = useRef();
 let fullImg = [];
 console.log(tabRef.current)
 useEffect(() => {
    console.log(tabRef.current)   
 }, [])
    return ( 
        <>
        <div className="row flex-nowrap mt-3 mb-3 position-relative p-0 galleries overflow-hidden">
            {
              tab.map(
                  (image,i)=>  
 
                      <Fragment key={Object.keys(image)}> 

                      <img  ref={tabRef[i]}  src={image} alt="" />
                      </Fragment>
                    
            )
            }
            <div className="col-1 d-flex align-items-center justify-content-center position-absolute start-0 bottom-0 top-0 btn">
                <i className="far fa-arrow-alt-circle-left text-white"></i>
            </div>
            <div className="col-1  d-flex align-items-center justify-content-center position-absolute end-0 bottom-0 top-0 btn">
                <i className="far fa-arrow-alt-circle-right text-white"></i>
            </div>
        </div>
        </>
     );
}

export default Galleries ;