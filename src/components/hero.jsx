import { useRef, useEffect } from "react";

export default function Hero() {
    const videoRef = useRef(); 

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 4; 
    },[]);
    return(
        <section id="hero">
            <div>
                <h1>Macbook Pro</h1>
                <img src="/title.png" alt="MacTitle"/>                
            </div>

            <video  autoPlay muted playsInline playbackRate ='2'>
            <source src={'/videos/hero.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
            </video>


            <button>Buy</button>
            <p>From $1599 or $129/mo for 12 months</p>
        </section>
    )
}