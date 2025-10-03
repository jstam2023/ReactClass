import {useReducer} from "react";
import ToDoFormMine1 from "./ToDoFormMine1.tsx";

type TodoProps = {
    id: number;
    text: string;
}

type Action =
    | {type: "Add"; payload:string}
    | {type: "Delete"; payload:number}
    | {type: "Edit"; payload: number}


const todoReducer = (state: TodoProps[], action: Action): TodoProps[] => {
    switch (action.type) {
        case "Add": {
            const newTodo: TodoProps = {
                id: Date.now(),
                text: action.payload,
            }
            return {
                [...state, newTodo]
            }
        }
        case "Delete": {
            return state.filter(todo=> todo.id !== action.payload)
        }
        case "Edit": {
            return {}
        }
        default: state
    }

}

const TodoAppMine1 = () => {
    const [Todos, dispatch] = useReducer(todoReducer, [])


    return (
        <>
            <div className="max-w-sm mx-auto p-6">
                <h1 className=" text-center py-4 text-xl">NoteAppMine</h1>
                <ToDoFormMine1/>

                {/*<div>{note}</div>*/}



            </div>

        </>
    )
}

export default TodoAppMine1