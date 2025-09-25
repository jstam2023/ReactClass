import {useState} from "react";
import CounterButton from "./CounterButton.tsx";
const FunctionalComponentWithState = ()=> {

    const [count,setCount] = useState(0)
    const [disabled, setDisabled] = useState(true);


    const increaseCount = () => {
        setCount(count+1)
        setDisabled(false)
    }

    const decreaseCount = () => {
        if(count === 1 ) {
            setDisabled(true)
        } if(count>=1){
            setCount(count-1)
        }
    }

    const reset = () => {
        setCount(0)
        setDisabled(true)
    }



    return(
        <>
            <div className="space-y-4 pt-12">
                <h1 className="text-center py-2 font-bold text-xl">Count is {count}</h1>
                <div className="text-center">
                    <CounterButton onClick={increaseCount} disabled={false} label="Increase"/>
                    <CounterButton onClick={decreaseCount} disabled={disabled} label="Decrease" addClass="bg-cf-dark-red"/>
                    <CounterButton onClick={reset} disabled={disabled} label="Reset" addClass="bg-green-400 hover:text-black"/>

                </div>
            </div>

        </>
    )
}

export default FunctionalComponentWithState;