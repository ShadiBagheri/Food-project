import Apple from "@/components/icons/Apple";
import Binance from "@/components/icons/Binance";
import SpaceX from "@/components/icons/SpaceX";
import Tesla from "@/components/icons/Tesla";

const Companies = () => {
    return(
        <div className="flex items-center justify-between w-3/6 mx-auto px-12">
            <Apple/>
            <SpaceX/>
            <Binance/>
            <Tesla/>
        </div>
    )
}

export default Companies