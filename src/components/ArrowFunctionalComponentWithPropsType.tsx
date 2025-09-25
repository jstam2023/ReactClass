
// interface Props {
//     title: string,
//     description: string
// }

interface Props {
    title: string;
}

interface Props {
    description: string;
}



const ArrowFunctionalComponentWithPropsType = ({title, description}: Props) => {
    return (
        <>
            <h1 className="text-center text-xl font-bold mt-12">{title}</h1>
            <p className="text-center">{description}</p>
        </>
    )
}

export default ArrowFunctionalComponentWithPropsType