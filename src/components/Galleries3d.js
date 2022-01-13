import React, {Fragment, useEffect,useState} from "react";
import { useRef } from "react/cjs/react.development";
import { Children, Component } from "react/cjs/react.production.min";
import './carrousel3d.css';
const Galleries3d = ({children}) => {
    //-------------------
    //variables
    let min = 0
   // let img = [...props.children]
    let max = 360
    let test = useRef()
    let w=0
    let [actif,setActif] = useState(true)
    let [z,setZ] = useState(0)
    let [tab,setTab] = useState(Children.toArray(children))
    let elements = tab.length;
    //console.log(Children.toArray(children))
    let [ar,setAr] = useState(elements)
    let [deg,setDeg] = useState(0)
 
    let [actifs,setActifs] = useState(actif)
    //resize
    window.onresize = () =>{
        checkDisplay()
    }
    useEffect(() => {
        checkDisplay()
        console.log(React.Children)
    },[])

    const checkDisplay =()=>{
        if(window.innerWidth < 600)  z = 400;
        else if(window.innerWidth < 820) z = 250
        else if (window.innerWidth < 1200) z = 400
        else if (window.innerWidth < 1600) z = 500  
        else if (window.innerWidth >= 1600) z = 600
        setZ(z)
    }
//FUNCTION CONTROLS

    const handleClickLeft =()=>{
        
            if(deg !== min){
                
                deg += max/ar;
                setDeg(deg)

            }
    }
    const handleClickRight =()=>{
        if(deg !==max){
            deg -= max/ar; 
            setDeg(deg) 
     
            
        }
    }
    return ( 
    <div className="carrousel overflow-hidden ">
        <div  className="box" style={{transform:`perspective(4000px) rotatey(${deg}deg)`}}> 
        
        { tab.map((t,k)=>   <span  ref={test} key={k}    className={`${ actif ? 'actif' : 'passif'}`} style={{transform :`rotateY(${(max/ar) * (k)}deg) translatez(${z}px)`  }} >
            
            {t}
        </span>
            )}
           
          
            </div>
        <div onClick={handleClickLeft}  className="left"><i className="far fa-arrow-alt-circle-left text-white"></i></div>
        <div onClick={handleClickRight} className="right"><i className="far fa-arrow-alt-circle-right text-white"></i></div>
    </div>
     );
}
 
export default Galleries3d;