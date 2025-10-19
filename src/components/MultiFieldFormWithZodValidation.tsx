import {useEffect, useState} from "react"
import {z} from "zod"



const formSchema = z.object({
    name: z.string().nonempty("Bale onoma"),
    email: z.string().
    trim().nonempty("Bale email").
    email("email is invalid"),
    message: z.string()
        .trim()
        .nonempty("bale message")
        .min(5, "Message must be at least 5 characters")
        .max(8, "Message must be tops 8 characters"),
});


type FormValues = z.infer<typeof formSchema>


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

const MultiFieldFormWithZodValidation = () => {
    const [values,setValues] = useState<FormValues>(initialValues)
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null)
    const [errors, setErrors] = useState<FormErrors | null>(null)


    const validateForm = () => {
        const result = formSchema.safeParse(values);

        if (!result.success) {
            const newErrors: FormErrors = {}

            result.error.issues.forEach((issue) => {
                const filedName = issue.path[0] as keyof FormValues;
                newErrors[filedName] = issue.message;
            })
            setErrors(newErrors);
            return false
        }
        setErrors({})
        return true

    }


    useEffect(() => {
        document.title = "New User";
    }, []);


    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        const isValid = validateForm()
        if(isValid) {
            setSubmittedData(values)
            setValues(initialValues)
        }

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
        setErrors(null)

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
                            autoComplete="off"

                        />
                        {errors?.name && (
                            <p className="text-cf-dark-red">{errors.name}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="email"
                            value={values.email}
                            placeholder="Email"
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border"
                            autoComplete="off"
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

export default MultiFieldFormWithZodValidation