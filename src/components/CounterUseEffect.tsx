import {useEffect, useState} from "react";

const CounterUseEffect = () => {
    const [secs, setSecs] = useState(0);
    const [stop, setStop] = useState(true);
    const test = stop ? ` hover:text-green-400` : ` hover:text-red-400`


    useEffect(() => {
        document.title = "CounterUseEffect | JStam";
    },[])


    function count() {
        const countInterval = setInterval(timer, 1000)
        setSecs(secs + 1);
        if (stop) {
            clearInterval(timer);
        }
    }


    const timer = setInterval(()=>{
        if(!stop){
            setSecs(secs+1);
        }
        else if(stop){
            clearInterval(timer);
        }
    },1000)



    return (
        <>
            <div className="text-center">
                <h1 className="text-center py-2 text-xl">Seconds: {secs}</h1>
                <button
                    onClick={() => setStop(!stop)}
                    className={"rounded bg-cf-dark-gray text-white w-14" + test }
                >
                    {stop ? "Start" : "Stop"}
                </button>
                <button
                    className="rounded bg-cf-dark-gray text-white w-14 mx-2"
                    onClick={() => setSecs(0)}
                >
                    Clear
                </button>
                <h3 className="py-4">Total Seconds: {secs}</h3>
            </div>


        </>
    )
}

export default CounterUseEffect;