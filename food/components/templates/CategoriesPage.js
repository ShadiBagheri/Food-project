const CategoriesPage = () => {
    return(
        <div className="flex flex-col w-3/6 mx-auto py-10">
            <h1 className="text-3xl font-bold text-gray-700">Categories</h1>
            <div>
                <div className="flex my-10 gap-5">
                    <select className="w-[160px] px-2 text-green-500 focus:border-none shadow-md rounded-lg">
                        <option>Difficulty</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                    <select className="w-[160px] px-2 text-green-500 focus:border-none shadow-md rounded-lg">
                        <option>Cooking Time</option>
                        <option>More than 30 min</option>
                        <option>Less than 30 min</option>
                    </select>
                    <button className="py-2 px-3 text-sm text-white font-bold rounded-md bg-green-500 hover:bg-green-600">Search</button>
                </div>
            </div>
        </div>
    )
}

export default CategoriesPage