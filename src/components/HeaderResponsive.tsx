import {Link} from "react-router";
import {useState} from "react";
import {Menu, X} from "lucide-react"
import JsLogo from "./JsLogo.tsx";

const HeaderResponsive = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            <header className="bg-[#782024] fixed w-full">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <JsLogo/>

                    <button
                        className="text-white md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={36}/> : <Menu size={36}/> }


                    </button>

                    <nav
                        className={`${
                            menuOpen ? "block" : "hidden"
                        } md:flex gap-4 bg-cf-dark-red text-white absolute top-24 left-0 w-full md:w-auto md:static p-4 md:p-0
                        `}
                        // className="flex gap-4"
                    >
                        {/*<a className="text-white hover:text-gray-400 hover:underline hover:underline-offset-4" href="/">Home</a>*/}
                        <Link
                            onClick={()=> setMenuOpen(false)}
                            className="block md:inline hover:text-gray-400 hover:underline hover:underline-offset-4"
                            to="/">Home</Link>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            className="text-white hover:text-gray-400 hover:underline hover:underline-offset-4"
                            to="name-changer">NameChanger</Link>

                    </nav>

                </div>
            </header>
        </>
    )
}

export default HeaderResponsive;