import { useInRouterContext } from "react-router-dom";
import { HashRouter } from "react-router-dom";

const Content = ({content,image=""}) => {
    console.log(HashRouter.bind("gryffondor"))
    return ( 
<>
  
        {content}
</>
     );
}
 
export default Content;