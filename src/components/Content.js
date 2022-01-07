import { useState } from "react";
const Content = ({content,largeContent=null,colors}) => {

    return (    
        <>

        {largeContent}
        <div className="container-fluid m-0  pb-5" style= {colors} >
            <div className="container p-1">
            {content }
            </div>
            
        </div>
        </>

     );
}
 
export default Content;