import {useState, useEffect} from "react";


const Footer = () => {
    const currentYear: number = new Date().getFullYear()
    const [isOnLine, setIsOnLine] = useState(navigator.onLine);
    const network = isOnLine ? "text-green-400" : "text-red-400";


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
            <footer className="bg-gray-700 py-4 ">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <span className="text-white mx-2">
                        JStam Copyright © {currentYear}
                    </span>
                    <span className="mx-4 text-white" >
                        Network Status:
                        <span className={network}>{isOnLine ? " Connected" : " Disconnected"}</span>
                    </span>
                </div>
            </footer>

        </>
    )
}

export default Footer;