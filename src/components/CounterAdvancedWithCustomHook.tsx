import CounterButton from "./CounterButton.tsx";
import {useAdvancedCounter} from "../hooks/useAdvancedCounter.ts";
const CounterAdvancedWithCustomHook = () => {

    const {count, time, lastAction, increase, decrease, reset} = useAdvancedCounter()



    return (
        <>
            <div className="space-y-4 pt-10">
                <h1 className="text-center font-bold text-xl">Count is {count}</h1>

                <div className="text-center py-4">
                    <CounterButton onClick={increase} disabled={false} label="Increase"/>
                    <CounterButton onClick={decrease} disabled={count === 0} label="Decrease" addClass="bg-cf-dark-red"/>
                    <CounterButton onClick={reset} disabled={count === 0} label="Reset" addClass="bg-green-400 hover:text-black"/>
                </div>
                <div className="text-center">
                    <span className="mx-4">Last change: <span className="font-bold">{lastAction || "-"}</span></span>
                    <span> at: <span className="font-bold">{time || "-"}</span></span>
                </div>
            </div>

        </>
    )
}

export default CounterAdvancedWithCustomHook;