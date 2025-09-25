const Footer = () => {
    const currentYear: number = new Date().getFullYear()

    return (
        <>
            <footer className="bg-gray-700 py-4 ">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <span className="text-white mx-2">
                        Copyright © {currentYear}
                    </span>
                    <span className="mx-4 text-white">You are </span>
                </div>
            </footer>

        </>
    )
}

export default Footer;