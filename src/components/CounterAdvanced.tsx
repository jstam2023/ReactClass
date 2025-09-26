import {useState} from "react";
import CounterButton from "./CounterButton.tsx";
type CounterState = {
    count:number,
    lastAction:string,
    time:string,
}

const CounterAdvanced = () => {
    // const [disabled, setDisabled] = useState(true);
    const [state, setState] = useState<CounterState>({
        count: 0,
        lastAction: "",
        time: "",
    });

    const getCurrentTime = () => new Date().toLocaleTimeString();


    const increaseCount = () => {
        setState({
            count: state.count + 1,
            lastAction: "Increase",
            time: getCurrentTime()
        })
    }

    const decreaseCount = () => {
        if(state.count === 1 ) {
            // setDisabled(true)
        } if(state.count>=1){
            setState({
                count: state.count -1,
                lastAction: "Decrease",
                time: getCurrentTime()
            })
        }
    }

    const reset = () => {
        setState({
            count: 0,
            lastAction: "Reset",
            time: getCurrentTime()
        })
        // setDisabled(true)
    }



    return(
        <>
            <div className="space-y-4 pt-10">
                <h1 className="text-center font-bold text-xl">Count is {state.count}</h1>

                <div className="text-center py-4">
                    <CounterButton onClick={increaseCount} disabled={false} label="Increase"/>
                    <CounterButton onClick={decreaseCount} disabled={state.count === 0} label="Decrease" addClass="bg-cf-dark-red"/>
                    <CounterButton onClick={reset} disabled={state.count === 0} label="Reset" addClass="bg-green-400 hover:text-black"/>
                </div>
                <div className="text-center">
                    <span className="mx-4">Last change: <span className="font-bold">{state.lastAction || "-"}</span></span>
                    <span> at: <span className="font-bold">{state.time || "-"}</span></span>
                </div>
            </div>
        </>
    )
}

export default CounterAdvanced