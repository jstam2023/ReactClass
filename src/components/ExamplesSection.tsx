import { NavLink} from "react-router"

const ExamplesSection = () => {
    return (
        <>
            <div className="bg-gray-200 py-24">
                <ul className="container mx-auto flex justify-center space-x-4">
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? "text-cf-dark-red underline underline-offset-4" : "text-cf-gray"}
                            to="/examples/name-changer">Name Changer</NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? "text-cf-dark-red underline underline-offset-4" : "text-cf-gray"}
                            to="/examples">Examples</NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? "text-cf-dark-red underline underline-offset-4" : "text-cf-gray"}
                            to="/">Home</NavLink>
                    </li>
                </ul>

            </div>


        </>
    )
}

export default ExamplesSection;