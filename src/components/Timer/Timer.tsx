import {useState, useEffect} from "react";

const Timer = () => {
    const [counter, setCounter] = useState(0);
    const [start, setStart] = useState(false);
    const startBtn = !start ? ` bg-green-400 text-black` : ` bg-blue-400`;

    useEffect(() => {
        let interval:any;
        if(start) {
            interval = setInterval(()=> {
                setCounter(prevCounter => prevCounter + 1);
            },1000)
        }else if (!start) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[start])


    return(
        <>
            <div className="text-center">
                <h1 className="text-2xl font-bold py-4">Timer</h1>

                <div className="py-2 text-xl">Secs: {counter}</div>
                <button
                    className={"text-black border h-8 w-12 rounded" + startBtn}
                    onClick={() => setStart(!start)}
                >{start ? "Stop" : "Start"}</button>
                <button
                    className="text-black border h-8 w-12 rounded bg-green-400 mx-2 disabled:bg-gray-400 disabled:text-black"
                    onClick={() => setCounter(0)}
                    disabled={counter === 0}
                >Reset</button>
            </div>

        </>
    )
}

export default Timer