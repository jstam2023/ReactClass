import {useState} from "react";


type Action =
    | {type: "Add"; payload:string}
    | {type: "Delete"; payload:number}
    | {type: "Edit"; payload: number}

type TodoFormProps = {
    dispatch: React.Dispatch<any>;
}


const TodoFormMine1 = () => {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }


    return (
        <>
            <form
                className="flex gap-4 mb-4"
                onSubmit={handleSubmit}
            >
                <input
                    placeholder=" New task..."
                    className="flex-1 border rounded-sm h-8 w-auto"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                    type="text" value={text}
                />
                <button
                    type={"submit"}
                    onClick={handleSubmit}

                    className="rounded border bg-cf-dark-gray text-white hover:text-green-500 h-8 w-12">
                    Add
                </button>

            </form>


        </>
    )
}

export default TodoFormMine1