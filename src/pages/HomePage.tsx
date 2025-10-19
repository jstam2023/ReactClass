import {useEffect} from "react";


const HomePage = () => {
    useEffect(() => {
        document.title = 'Home Page | JStam';
    }, []);
    return (
        <>
            <h1 className="text-center text-2xl">HomePage</h1>

        </>
    )
}

export default HomePage;