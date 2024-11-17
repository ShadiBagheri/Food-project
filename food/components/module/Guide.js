import Link from "next/link";

const Guide = () => {
    return(
        <div className="flex items-center justify-between w-3/6 mx-auto my-12 py-5 px-5">
            <Link className="w-[140px] py-2 px-4 text-center text-gray-700 hover:text-green-600 font-bold rounded-md shadow-lg" href="/menu">
                Menu
            </Link>
            <Link className="w-[140px] py-2 px-4 text-center text-gray-700 hover:text-green-600 font-bold rounded-md shadow-lg" href="/categories">
                Categories
            </Link>
            <Link className="w-[140px] py-2 px-4 text-center text-gray-700 hover:text-green-600 font-bold rounded-md shadow-lg" href="discount">
                Discount
            </Link>
        </div>
    )
}

export default Guide