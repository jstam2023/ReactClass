import {useEffect} from "react"
import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"



const formSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().
    trim().nonempty("Email is required").
    email("Email is invalid"),
    message: z.string()
        .trim()
        .nonempty("bale message")
        .min(5, "Message must be at least 5 characters")
        .max(8, "Message must be tops 8 characters"),
});


type FormValues = z.infer<typeof formSchema>

// type FormErrors = {
//     name?: string;
//     email?: string;
//     message?: string;
// }

const initialValues = {
    name: "",
    email: "",
    message: "",
}

const MultiFieldFormWithReactHook = () => {


    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        watch,
    } = useForm<FormValues>({
        resolver:zodResolver(formSchema),
        defaultValues: initialValues,
    })

    const onClear = () => {
        reset()
    }

    const watchedValues = watch()


    useEffect(() => {
        document.title = "New User";
    }, []);


    // const handleSubmit = (e:React.FormEvent) => {
    //     e.preventDefault()
    //     const isValid = validateForm()
    //     if(isValid) {
    //         setSubmittedData(values)
    //         setValues(initialValues)
    //     }
    //
    // }


    // const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const {name, value} = e.target;
    //     setValues(prev => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    //     setErrors(
    //         prev => ({
    //             ...prev,
    //             [name]: undefined,
    //         })
    //     )
    //
    // };
    //
    // const handleClear = ()=> {
    //     setValues(initialValues)
    //     setSubmittedData(null)
    //     setErrors(null)
    //
    // }

    const onSubmit = (data: FormValues) => {
        console.log(data)
        reset()
    }


    return(
        <>
            <div className="flex max-w-sm mt-8 mx-auto ">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div>
                        <input
                            {...register("name")}
                            // value={values.name}
                            placeholder="Name"
                            // onChange={handleChange}
                            className="w-full px-4 py-2 rounded border"
                            autoComplete="off"

                        />
                        {errors?.name && (
                            <p className="text-cf-dark-red">{errors.name.message}</p>
                        )}
                    </div>
                    <div>
                        <input
                            {...register("email")}
                            // value={values.email}
                            placeholder="Email"
                            // onChange={handleChange}
                            className="w-full px-4 py-2 rounded border"
                            autoComplete="off"
                        />
                        {errors?.email && (
                            <p className="text-cf-dark-red">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                   <textarea
                       {...register("message")}
                       placeholder="Type your message..."
                       className="w-full px-4 py-2 rounded border"
                   >
                   </textarea>
                        {errors?.message && (
                            <p className="text-cf-dark-red">{errors.message.message}</p>
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
                            onClick={onClear}
                            className="bg-gray-400 text-black px-4 py-2 rounded hover:text-white"
                        >Clear
                        </button>
                        <Button>Click me</Button>

                    </div>

                    {/*{submittedData && (*/}
                        <div className="mt-6 border-t pt-4 space-y-2">
                            <h2 className="font-semibold">Live data:</h2>
                            <p><strong>Name: </strong>{watchedValues.name}</p>
                            <p><strong>Email: </strong>{watchedValues.email}</p>
                            <p><strong>Message: </strong>{watchedValues.message}</p>
                        </div>
                    {/*)}*/}
                </form>
            </div>


        </>
    )
}

export default MultiFieldFormWithReactHook