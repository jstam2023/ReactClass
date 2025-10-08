import {useState, useEffect} from "react";

const useEffect1 = () => {
    const [name, setName] = useState("");
    const [counter, setCounter] = useState(0);
    const [start, setStart] = useState(false);


    useEffect(() => {
        let interval:any;
        if(start){
            interval = setInterval(()=> {
                setCounter((prevCounter) => prevCounter + 1)
            }, 1000);
        }else if (!start) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[start])

    
    return (
        <>
            <h1 className="text-center text-xl py-4">useEffect1 Page</h1>
            <div className="text-center">
                <input
                    className="border rounded-sm px-2 h-8"
                    placeholder=" enter name here..."
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <div className="py-4 text-xl">Your name is: {name}</div>
                <div>Secs: {counter}</div>
                <button
                    className="border p-2 rounded bg-green-400"
                    onClick={() => setStart(!start)}
                >Start</button>
            </div>

        </>
    )
}

export default useEffect1