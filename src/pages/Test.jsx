import React, { useEffect, useRef } from "react";

const Test = () => {
    const currentBox = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((enteris) => {
            if(enteris[0].isIntersecting){
                console.log("hello");
            }

        }, {});
        observer.observe(currentBox.current);

        return ()=> observer.disconnect();
    }, []);
    return (
        <div className="flex flex-col items-center gap-4 mt-2">
            <div className="border-2 border-red-200 w-[300px] h-[300px]">1</div>
            <div className="border-2 border-red-200 w-[300px] h-[300px]">2</div>
            <div className="border-2 border-red-200 w-[300px] h-[300px]">3</div>
            <div className="border-2 border-red-200 w-[300px] h-[300px]">4</div>
            <div className="border-2 border-red-200 w-[300px] h-[300px]" ref={currentBox}>5</div>
            <div className="border-2 border-red-200 w-[300px] h-[300px]">6</div>
        </div>
    );
};

export default Test;
