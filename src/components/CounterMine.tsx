import {useState} from "react";

const CounterMine = () => {

    const [count, setCount] = useState(0)
    return (
        <>
            <h1 className="text-center py-14">Count is {count}</h1>
            <button className="border px-2 rounded-xl bg-gray-400" onClick={() => setCount(count + 1)}>increase</button>

        </>
    )
}

export default CounterMine