// import banner from "../../public/images/banner.png";

import Link from "next/link";

const Banner = () => {
    return(
        <div className="w-3/6 flex flex-col mx-auto p-5">
            <h1 className="mt-10 text-xl font-bold text-green-500">ProFood</h1>
            <div className="flex items-center justify-between mt-[-20px]">
                <div className="flex flex-col">
                    <h3 className="text-sm font-bold">Food Delivery and Takeout!</h3>
                    <p className="w-[250px] my-4 text-justify text-sm text-gray-500">
                        ProFood is an online food ordering and delivery platform launched by
                        Uber in 2014. Meals are delivered couriers using cars, scooters,
                        bikes, or on foot.
                    </p>
                    <Link className="w-[80px] h-[35px] mt-3 pt-1.5 px-4 text-center text-sm font-bold text-white rounded-md bg-green-400 hover:bg-green-500"
                          href="/menu">
                        See All
                    </Link>
                </div>
                <img className="w-[380px] h-[250px]" src="/images/banner.png" alt="banner"/>
            </div>
        </div>
    )
}

export default Banner