import {useState, useEffect} from "react";

const OnLineStatus = () => {
    const [isOnLine, setIsOnLine] = useState(navigator.onLine);

    useEffect(() => {
        const handler = () => setIsOnLine(navigator.onLine);

        window.addEventListener('online', handler);
        window.addEventListener('offline', handler);

        return () => {
            window.removeEventListener('online', handler);
            window.removeEventListener('offline', handler);
        }

    },[])

    return (
        <>
            <div className="text-center text-xl py-4">
                <h1>You are: {isOnLine ? "Online" : "Offline"}</h1>
            </div>


        </>
    )
}

export default OnLineStatus