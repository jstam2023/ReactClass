import NameChanger from "../components/NameChanger.tsx";
import {useEffect} from "react";

const NameChangerPage = () => {

    useEffect(() => {
        document.title = "NameChanger | JStam";
    }, []);
    return (
        <>
            <NameChanger/>

        </>
    )
}

export default NameChangerPage;