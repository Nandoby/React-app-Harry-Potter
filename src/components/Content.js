import { useState } from "react";
const Content = ({content,colors}) => {

    return (    
        <div className="container min-vh-100" style={{ backgroundColor:colors }} >
            {content}
        </div>

     );
}
 
export default Content;