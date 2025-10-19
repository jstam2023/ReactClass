import JsLogo from "./JsLogo.tsx";
import {Link} from "react-router";

const Header = () => {
    return (
        <>
            <header className="bg-[#782024] fixed w-full">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <JsLogo/>
                    <nav className="flex gap-4">
                        {/*<a className="text-white hover:text-gray-400 hover:underline hover:underline-offset-4" href="/">Home</a>*/}
                        <Link className="text-white hover:text-gray-400 hover:underline hover:underline-offset-4" to="/">Home</Link>
                        <Link className="text-white hover:text-gray-400 hover:underline hover:underline-offset-4" to="name-changer">NameChanger</Link>

                    </nav>

                </div>
            </header>
        </>
    )
}

export default Header;