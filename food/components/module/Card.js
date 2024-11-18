import Link from "next/link";
import Location from "@/components/icons/Location";
import Dollar from "@/components/icons/Dollar";

const Card = (props) => {
    const {id, name, price, details, discount} = props;
    return(
        <div className="flex flex-col w-[210px] h-[265px] p-2 gap-8 bg-white shadow-lg rounded-md">
            <img className="[200px] h-[130px] rounded-md" src={`/images/${id}.jpeg`} alt={name}/>
            <div className="flex flex-col mt-[-20px]">
                <h4 className="text-sm font-bold text-green-500">{name}</h4>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex">
                        <Dollar/>
                        {discount ?
                            (<span className="mt-1 text-sm font-bold text-red-500">
                            {(price * (100 * discount)) / 100} $
                        </span>) :
                            (<span className="mt-1 text-sm font-bold">{price} $</span>)
                        }
                        {discount ?
                            (<div className="mt-[-165px] ml-[10px] p-1 text-sm font-bold text-white bg-red-500 rounded-sm absolute">
                                {discount}% OFF
                            </div>) : null}
                    </div>
                    <div className="flex mt-[3px]">
                        <Location/>
                        <p className="text-xs text-gray-500">{details[0].Cuisine}</p>
                    </div>
                </div>
            </div>
            <Link className="w-[195px] mt-[-15px] p-1 text-sm text-center font-bold text-white bg-green-500 hover:bg-green-600 rounded-md" href={`/menu/${id}`}>
                See Details
            </Link>
        </div>
    )
}

export default Card