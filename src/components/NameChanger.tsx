import {useState} from "react";

const NameChanger = () => {
    const [name, setName] = useState("")


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }



    return (
        <>
            <h1 className="text-center py-4">Hello, {name || "Stranger"}</h1>
            <div className="text-center mt4">
                <input type="text"
                       value={name}
                       onChange={handleChange}
                       className="border px-4 py-2"
                       placeholder="Enter name here..."
                />
            </div>

        </>
    )
}

export default NameChanger