import { useState } from "react";
import { useRouter } from "next/router";

const CategoriesPage = () => {
    const router = useRouter();
    const [query, setQuery] = useState({ difficulty: "", time: "" });

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setQuery({...query, [name]: value});
    }

    const searchHandler = () => {
        console.log(query);
        router.push({
            pathName: "/categories",
            query,
        })
    }

    return(
        <div className="flex flex-col w-3/6 mx-auto py-10">
            <h1 className="text-3xl font-bold text-gray-700">Categories</h1>
            <div>
                <div className="flex my-10 gap-5">
                    <select className="w-[165px] px-2 text-green-500 focus:border-none shadow-md rounded-lg"
                            name="difficulty"
                            value={query.difficulty}
                            onChange={changeHandler}>
                        <option value="">Difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <select className="w-[165px] px-2 text-green-500 focus:border-none shadow-md rounded-lg"
                            name="time"
                            value={query.time}
                            onChange={changeHandler}>
                        <option value="">Cooking Time</option>
                        <option value="More">More than 30 min</option>
                        <option value="Less">Less than 30 min</option>
                    </select>
                    <button className="py-2 px-3 text-sm text-white font-bold rounded-md bg-green-500 hover:bg-green-600"
                            onClick={searchHandler}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CategoriesPage