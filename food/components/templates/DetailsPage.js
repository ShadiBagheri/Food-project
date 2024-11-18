//Icons
import Location from "@/components/icons/Location";
import Dollar from "@/components/icons/Dollar";

const DetailsPage = (props) => {
    const { id, name, price, discount, introduction, ingredients, details, recipe } = props;

    return(
        <div className="flex flex-col w-3/6 mx-auto py-10">
            <h1 className="mb-10 text-3xl font-bold text-gray-700">Details</h1>
            <div className="flex flex-col">
                <div className="flex w-full p-6 gap-10 shadow-xl rounded-md">
                    <img className="w-[350px] h-[230px]" src={`/images/${id}.jpeg`} alt={name}/>
                    <div className="flex flex-col items-start">
                        <div className="flex flex-col py-5">
                            <h3 className="text-2xl text-green-500 font-bold">{name}</h3>
                            <span className="flex mt-8">
                                <Location/>
                                <p className="mt-[-5px] ml-1 text-gray-500 font-bold">
                                   {details[0].Cuisine}
                                </p>
                            </span>
                        </div>
                        <div className="flex">
                            {discount ?
                                (<span className="flex text-md font-bold text-red-500">
                                    <Dollar/>
                                    {(price * (100 * discount)) / 100} $
                                 </span>) :
                                (<span className="flex mt-1 text-md font-bold"><Dollar/> {price} $</span>)
                            }
                            {discount ?
                                (<div className="w-[290px] mt-12 p-2 text-center text-md font-bold text-white bg-red-500 rounded-sm shadow-md absolute">
                                    {discount}% OFF
                                </div>) : null}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col my-16">
                    <div className="w-full mb-12 p-5 text-sm shadow-xl rounded-md">
                        <p>{introduction}</p>
                    </div>
                    {/*Details*/}
                    <div className="w-full mb-12 p-5 text-sm shadow-xl rounded-md">
                        <h1 className="mb-5 text-xl text-green-500 font-bold">Details</h1>
                        <ul>
                            {details.map((detail, index) => (
                                <li className="flex" key={index}>
                                    -<p className="ml-2 mt-[-3px] text-sm font-bold leading-loose">{Object.keys(detail)[0]} :</p>
                                    <span className="ml-3 mt-[-3px] text-sm text-gray-500 leading-loose">{Object.values(detail)[0]}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*Ingredients*/}
                    <div className="w-full mb-12 p-5 text-sm shadow-xl rounded-md">
                        <h1 className="mb-5 text-xl text-green-500 font-bold">Ingredients</h1>
                        <ul>
                            {ingredients.map((item, index) => (
                                <li className="flex" key={index}>
                                    -<p className="ml-2 mt-[-3px] text-sm font-bold leading-loose">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                {/*Recipe*/}
                    <div className="flex flex-col shadow-xl rounded-md">
                        <h1 className="mb-5 pt-5 pl-5 text-xl text-green-500 font-bold">Recipe</h1>
                        <ul className="text-sm">
                            {recipe.map((item, index) => (
                                <div key={index} className={index % 2 ? "flex p-4 bg-green-300 shadow-md"  : "flex p-4 bg-green-400 shadow-md"}>
                                    <p className="flex text-xl font-bold">{index + 1}</p>
                                    <p className="ml-3 mt-[-1.5px] text-justify leading-loose">{item}</p>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
                <button className="w-full mb-12 py-3 font-bold text-white bg-green-500 hover:bg-green-600 shadow-xl rounded-md">Add To Cart</button>
            </div>
        </div>
    )
}

export default DetailsPage