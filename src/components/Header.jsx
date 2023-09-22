
const Header = () => {
    return (
        <header className="container mx-auto">
            <ul className="p-10 flex gap-8 border-b">
                <li>
                    <a href="#" className="text-pink-500  pb-10 border-b-4 border-pink-500 font-medium ">About</a>
                </li>
                <li>
                    <a href="#" className="  pb-10 border-b-4 border-transparent font-medium hover:border-pink-500 hover:text-pink-500 transition-colors duration-300">How to works</a>
                </li>
                <li>
                    <a href="#" className="  pb-10 border-b-4 border-transparent font-medium hover:border-pink-500 hover:text-pink-500 transition-colors duration-300 ">Get a photographer</a>
                </li>
                <li>
                    <a href="#" className="  px-4 py-2 border-2 font-medium rounded-lg ">Login</a>
                </li>

            </ul>
        </header>
    )
}

export default Header