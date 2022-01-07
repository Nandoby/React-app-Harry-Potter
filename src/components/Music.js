import { useRef,useEffect,useState } from "react";

const Music = () => {
    const [music,setMusic] = useState(0)
    const myRef = useRef()
    const btnRef = useRef()
    let refresh;
    //function
    const audioPlay =()=>{
        if(myRef.current.paused){

            myRef.current.currentTime = music
            myRef.current.play()
            refresh = setInterval(() => {
                setMusic(myRef.current.currentTime)
                localStorage.setItem('test',myRef.current.currentTime)
            }, 500);
        }
    }
    const audioPaused =()=>{
        clearInterval(refresh)
        myRef.current.pause()
    }
    useEffect(() => {
        if(localStorage.test) setMusic(localStorage.getItem('test'))
        else  setMusic(myRef.current.currentTime)   
        myRef.current.volume = 0.3
        myRef.current.loop = true         
    }, [myRef])
    return ( 
     <>
     <div  className="container-fluid m-0 p-0 bg-black d-flex justify-content-center music">
         <audio className="audio" ref={myRef}>
             <source  src="/musics/music1.mp4"/>
         </audio>
         <div className="controls">
             <button ref={btnRef} onClick={()=>audioPlay()} className=" btn btn-warning"><i className="fas fa-play-circle"></i></button>
             <button  onClick={()=>audioPaused()} className=" btn btn-danger"><i className="fas fa-pause-circle"></i></button>
         </div>
         
     </div>
     </>
     );
}
 
export default Music;