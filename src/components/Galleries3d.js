import { getByDisplayValue } from "@testing-library/react";
import React, {useEffect,useRef,useState} from "react";
import './carrousel3d.css';
const Galleries3d = ({pictures}) => {
    //-------------------
    let box = useRef()
    //variables
    let min = -360
    let max = 360
    let deg = 0;
    let elements;

    //resize
    window.onresize = () =>{
        checkDisplay()
    }
    useEffect(() => {
        checkDisplay()
    },[box])

    const checkDisplay =()=>{
        let z;
        if(window.innerWidth < 600) z = 400;
        else if(window.innerWidth < 820) z = 250
        else if (window.innerWidth < 1200) z = 400
        else if (window.innerWidth < 1600) z = 500  
        else if (window.innerWidth >= 1600) z = 600
        const span = document.querySelectorAll('.box span')
        elements= span.length
        span.forEach((elems,i) => {
            const val= (360/elements) * (i+1)
            elems.style.transform =`rotateY(${val}deg) translatez(${z}px)`
        });
    }


    const handleClickLeft =()=>{
 
            if(deg !== min){
                deg -= 360/elements;
                box.current.style.transform=`perspective(4000px) rotatey(${deg}deg)`
            }
    }

    const handleClickRight =()=>{
        if(deg !==max){
            deg += 360/elements;
            box.current.style.transform=`perspective(4000px) rotatey(${deg}deg)`
        }
        
    }
    
    return ( 

    <div className="carrousel overflow-hidden ">
        <div ref={box} className="box">
        {pictures}
        </div>
        <div onClick={handleClickLeft}  className="left"><i className="far fa-arrow-alt-circle-left text-white"></i></div>
        <div onClick={handleClickRight} className="right"><i className="far fa-arrow-alt-circle-right text-white"></i></div>
    </div>
     );
}
 
export default Galleries3d;