import React, { useEffect, useState } from "react";

function BackToTop({ scrollFunction }){
    const [display, setDisplay] = useState(false);

    useEffect( () => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 256)   setDisplay(true);
                else    setDisplay(false);
        });

        return window.removeEventListener("scroll", () => {
            if (window.scrollY > 256)   setDisplay(true);
                else    setDisplay(false);
        });
    }, [])

    return(
        <>
            {display && (<button onClick={() => scrollFunction(null)} className="fixed w-16 h-16 z-50 bottom-8 right-8 rounded-full opacity-70 bg-gray-600">UP</button>)}
        </>
    )
}

export default BackToTop;