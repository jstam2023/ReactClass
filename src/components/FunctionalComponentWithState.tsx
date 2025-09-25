import {useState} from "react";
const FunctionalComponentWithState = ()=> {

    const [count,setCount] = useState(0)

    const increaseCount = () => {
        setCount(count+1)
    }

    const decreaseCount = () => {
        if(count>0){
            setCount(count-1)
        }
    }

    const reset = () => {
        setCount(0)
    }



    return(
        <>
            <div className="space-y-4 pt-12">
                <h1 className="text-center py-2 font-bold text-xl">Count is {count}</h1>
                <div className="text-center">
                    <button onClick={increaseCount}
                            className="hover:text-green-500 bg-black text-white rounded-xl py-2 px-4 mx-2">Increase
                    </button>
                    <button onClick={decreaseCount}
                            className="hover:text-red-500 bg-black text-white rounded-xl py-2 px-4 mx-2">Decrease
                    </button>
                    <button onClick={reset}
                            className="hover:text-blue-500 bg-black text-white rounded-xl py-2 px-4 mx-2">Reset
                    </button>
                </div>
            </div>

        </>
    )
}

export default FunctionalComponentWithState;