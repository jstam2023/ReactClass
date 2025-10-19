import {useEffect, useState} from "react"

type FormValues = {
    name: string;
    email: string;
    message: string;
}

type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
}

const initialValues = {
    name: "",
    email: "",
    message: "",
}

const MultiFieldFormWithValidation = () => {
    const [values,setValues] = useState<FormValues>(initialValues)
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null)
    const [errors, setErrors] = useState<FormErrors | null>(null)


    const validateForm = (values:FormValues): FormErrors => {
        const errors: FormErrors = {};
        if(!values.name.trim()) {
            errors.name = "Name is required";
        }
        if(!values.email.trim()||
            !/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(values.email.trim())){
            errors.email = "Email is required";
        }
        if(values.message.length < 5) {
            errors.message = "Message is required to be at least 5 characters long";
        }
        return errors;

    }


    useEffect(() => {
        document.title = "New User";
    }, []);


    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()

        const validationErrors = validateForm(values)

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            setSubmittedData(null)
            return;
        }

        setSubmittedData(values)
        setValues(initialValues)
        setErrors(null)
    }


    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value,
        }));
        setErrors(
            prev => ({
                ...prev,
                [name]: undefined,
            })
        )

    };

    const handleClear = ()=> {
        setValues(initialValues)
        setSubmittedData(null)

    }


    return(
        <>
            <div className="flex max-w-sm mt-8 mx-auto ">
                <form onSubmit={handleSubmit} className="space-y-2">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={values.name}
                            placeholder="Name"
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border"

                        />
                        {errors?.name && (
                            <p className="text-cf-dark-red">{errors.name}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            placeholder="Email"
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border"
                        />
                        {errors?.email && (
                            <p className="text-cf-dark-red">{errors.email}</p>
                        )}
                    </div>
                    <div>
                   <textarea
                       name="message"
                       onChange={handleChange}
                       value={values.message}
                       placeholder="Type your message..."
                       className="w-full px-4 py-2 rounded border"
                       minLength={5}
                   >
                   </textarea>
                        {errors?.message && (
                            <p className="text-cf-dark-red">{errors.message}</p>
                        )}
                    </div>
                    <div className="flex gap-4 justify-center">
                        <button
                            type="submit"
                            className="bg-cf-dark-red text-white px-4 py-2 rounded hover:text-black"
                        >Submit
                        </button>
                        <button
                            type="button"
                            onClick={handleClear}
                            className="bg-gray-400 text-black px-4 py-2 rounded hover:text-white"
                        >Clear
                        </button>
                    </div>

                    {submittedData && (
                        <div className="mt-6 border-t pt-4 space-y-2">
                            <h2 className="font-semibold">Submitted data:</h2>
                            <p><strong>Name: </strong>{submittedData.name}</p>
                            <p><strong>Email: </strong>{submittedData.email}</p>
                            <p><strong>Message: </strong>{submittedData.message}</p>
                        </div>
                    )}
                </form>
            </div>


        </>
    )
}

export default MultiFieldFormWithValidation