import {useEffect, useState} from "react";
import { useRouter } from "next/router";
import Card from "@/components/module/Card";

const CategoriesPage = ({ data }) => {
    const router = useRouter();
    const [query, setQuery] = useState({
        difficulty: "",
        time: ""
    });

    useEffect(() => {
        const { difficulty, time } = router.query;

        if (query.difficulty !== difficulty || query.time !== time){
            setQuery({ difficulty, time })
        }
    },[]);

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
                        <option value="more">More than 30 min</option>
                        <option value="less">Less than 30 min</option>
                    </select>
                    <button className="py-2 px-3 text-sm text-white font-bold rounded-md bg-green-500 hover:bg-green-600"
                            onClick={searchHandler}>
                        Search
                    </button>
                </div>
                <div className="grid grid-cols-3 items-center mx-auto my-16">
                    {!data.length ? <img className="w-[400px] h-[300px] my-16 ml-[260px]" src="/images/search.png" alt="searchImage"/> : null}
                    {data.map(food => (
                        <Card key={food.id} {...food}/>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default CategoriesPage