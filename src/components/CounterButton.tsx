type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    label: string;
    addClass?: string;
}

const CounterButton = ({onClick, disabled= true, label, addClass="bg-black"}: ButtonProps) => {
    return (
        <>
            <button
                    className={"disabled:bg-gray-400  bg-black text-white rounded-xl py-2 px-4 mx-2 " + addClass}
                    onClick={onClick}
                    disabled={disabled}
            >{label}
            </button>

        </>

    )
}

export default CounterButton;