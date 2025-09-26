import {useState} from "react";
import CounterButton from "./CounterButton.tsx";


const CounterWithMoreStates = () => {
    const [count, setCount] = useState(0);
    const [lastAction, setLastAction] = useState("");
    const [time, setTime] = useState("");
    const [disabled, setDisabled] = useState(true);

    const getCurrentTime = () => new Date().toLocaleTimeString();


    const increaseCount = () => {
        setCount(count+1)
        setDisabled(false)
        setLastAction("Increase")
        setTime(getCurrentTime())
    }

    const decreaseCount = () => {
        if(count === 1 ) {
            setDisabled(true)
        } if(count>=1){
            setCount(count-1)
            setLastAction("Decrease")
            setTime(getCurrentTime())
        }
    }

    const reset = () => {
        setCount(0)
        setDisabled(true)
        setLastAction("Reset")
        setTime(getCurrentTime())
    }



    return(
        <>
            <div className="space-y-4 pt-10">
                <h1 className="text-center font-bold text-xl">Count is {count}</h1>

                <div className="text-center py-4">
                    <CounterButton onClick={increaseCount} disabled={false} label="Increase"/>
                    <CounterButton onClick={decreaseCount} disabled={disabled} label="Decrease" addClass="bg-cf-dark-red"/>
                    <CounterButton onClick={reset} disabled={disabled} label="Reset" addClass="bg-green-400 hover:text-black"/>
                </div>
                <div className="text-center">
                    <span className="mx-4">Last change: <span className="font-bold">{lastAction || "-"}</span></span>
                    <span> at: <span className="font-bold">{time || "-"}</span></span>
                </div>
            </div>

        </>
    )
}



export default CounterWithMoreStates