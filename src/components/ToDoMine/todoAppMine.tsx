import {useState} from "react";



const TodoAppMine = () => {
    const [text,setText] = useState("");
    const [note, setNote] = useState("");



    const handleNote = () => {
        setNote(text);
        setText("")

    }

    const clearNote = () => {
        setNote("");
        setText("");
    }

    return (
        <>
            <div className="max-w-sm mx-auto">
                <h1 className=" text-center py-4 text-xl">NoteAppMine</h1>
                <form className="flex gap-4 mb-4">
                    <input
                        placeholder=" Enter note..."
                        className="border rounded-sm h-8 w-auto"
                        onChange={(e) => setText(e.target.value)}s
                        type="text" value={text}/>
                    <button
                        onClick={handleNote}

                        className="rounded border bg-cf-dark-gray text-white hover:text-green-500 h-8 w-12">
                    Save
                    </button>
                    <button
                        onClick={clearNote}

                        className="rounded border bg-blue-500 text-white mx-2 hover:text-black h-8 w-12">
                        Clear
                    </button>
                </form>

                <div>{note}</div>



            </div>

        </>
    )
}

export default TodoAppMine