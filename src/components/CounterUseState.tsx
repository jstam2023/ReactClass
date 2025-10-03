import {useState}  from "react";
const CounterUseState = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="text-center">
                <h1 className="text-xl py-4">Count is: {count}</h1>
                <button
                    onClick={() => setCount(count+1)}
                    className="bg-cf-dark-gray text-white rounded w-18 h-8 hover:text-blue-500"
                >Increase</button>
                <button
                    disabled={count === 0}
                    onClick={() => count>0 ? setCount(count-1) : setCount(0)}
                    className="bg-cf-dark-gray text-white rounded w-18 h-8 hover:text-red-500 mx-2 disabled:bg-gray-400 disabled:hover:text-white"
                >Decrease</button>
                <button
                    onClick={() => setCount(0)}
                    className="bg-cf-dark-gray text-white rounded w-18 h-8 hover:text-green-500 disabled:bg-gray-400 disabled:hover:text-white"
                    disabled={count === 0}
                >Reset</button>
            </div>

        </>
    )
}


export default CounterUseState;