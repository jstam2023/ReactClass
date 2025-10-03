import {useReducer}  from "react";

type State = {
    count: number;
    error: string | null
    time: string | null
    action: string | null
}

type Action = {
    type: "Increment" | "Decrement" | "Reset";
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "Increment":
            return {...state, count: state.count + 1,action: "Increase", time: new Date().toLocaleTimeString()};
        case "Decrement":
            return {...state, count: state.count - 1,action: "Decrease", time: new Date().toLocaleTimeString()};
        case "Reset":
            return {...state, count: 0, action: "Reset", time: new Date().toLocaleTimeString()};
        default:
            return state;
    }
}

const CounterUseReducer = () => {
    const [state,dispatch] = useReducer(reducer, {
        count: 0,
        error: null,
        time: null,
        action: null,
    })

    return (
        <>
            <div className="text-center">
                <h1 className="text-xl py-4">Count is: {state.count}</h1>
                <button
                    onClick={() => dispatch({type: "Increment"})}
                    className="bg-cf-dark-gray text-white rounded w-18 h-8 hover:text-blue-500"
                >Increase</button>
                <button
                    disabled={state.count === 0}
                    onClick={() => dispatch({type: "Decrement"})}
                    className="bg-cf-dark-gray text-white rounded w-18 h-8 hover:text-red-500 mx-2 disabled:bg-gray-400 disabled:hover:text-white"
                >Decrease</button>
                <button
                    onClick={() => dispatch({type: "Reset"})}
                    className="bg-cf-dark-gray text-white rounded w-18 h-8 hover:text-green-500 disabled:bg-gray-400 disabled:hover:text-white"
                    disabled={state.count === 0}
                >Reset</button>
            </div>
            <p className="text-center py-4">Action: <span className="font-bold">{state.action}</span> at: <span className="font-bold">{state.time}</span></p>


        </>
    )
}


export default CounterUseReducer;