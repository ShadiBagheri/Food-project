//Module
import Card from "@/components/module/Card";

const MenuPage = ({ data }) => {
    return(
        <div className="flex flex-col w-3/6 mx-auto py-12 px-6">
            <h1 className="mb-10 text-3xl font-bold text-gray-700">Menu</h1>
            <ul className="grid grid-cols-3 items-center gap-14">
                {data.map(food => (
                    <Card key={food.id} {...food}/>
                ))}
            </ul>
        </div>
    )
}

export default MenuPage