import Link from "next/link";

const Layout = ({ children }) => {
    return(
        <>
            <header>
                <div className="w-full flex items-center justify-between mx-auto py-5 px-10 bg-green-500  z-10 shadow-md">
                    <div className="mx-auto text-3xl font-bold text-white">
                        <Link className="hover:text-green-600" href="/">ProFood</Link>
                    </div>
                    <div className="flex items-center mx-auto text-lg text-white font-bold">
                        <Link className="hover:text-green-600" href="/menu">Menu</Link>
                        <Link className="ml-5 hover:text-green-600" href="/categories">Categories</Link>
                    </div>
                </div>
            </header>
            <div className="mx-auto">
                {children}
            </div>
            <footer className="w-full flex items-center mx-auto py-2 bg-green-500">
                <a className="mx-auto text-center text-md text-white font-bold" href="https://botostart.ir" target="_blank" rel="">
                    Food Project | Next.js &copy;
                </a>
            </footer>
        </>
    )
}

export default Layout