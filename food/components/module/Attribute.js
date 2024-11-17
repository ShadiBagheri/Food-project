//Icons
import Fast from "@/components/icons/Fast";
import Choice from "@/components/icons/Choice";
import Clock from "@/components/icons/Clock";
import Food from "@/components/icons/Food";

const Attribute = () => {
    return(
        <div className="flex flex-col w-3/6 mx-auto my-20 px-5">
            <h1 className="text-xl font-bold text-green-500">Why Us?</h1>
            <div className="flex items-center justify-between my-8">
                <div className="flex flex-col items-center w-[120px] h-[120px] p-4 bg-white shadow-md rounded-xl">
                    <Fast/>
                    <p className="mt-2 text-sm text-center font-bold">Fast</p>
                </div>
                <div className="flex flex-col items-center w-[120px] h-[120px] p-4 bg-white shadow-md rounded-xl">
                    <Food/>
                    <p className="mt-3 text-sm text-center font-bold">Best Restaurants</p>
                </div>
                <div className="flex flex-col items-center w-[120px] h-[120px] p-4 bg-white shadow-md rounded-xl">
                    <Choice/>
                    <p className="mt-2 text-sm text-center font-bold">Your Choice</p>
                </div>
                <div className="flex flex-col items-center w-[120px] h-[120px] p-4 bg-white shadow-md rounded-xl">
                    <Clock/>
                    <p className="mt-2 text-sm text-center font-bold">24-7</p>
                </div>
            </div>
        </div>
    )
}

export default Attribute