//Module
import Banner from "@/components/module/Banner";
import Attribute from "@/components/module/Attribute";
import Definition from "@/components/module/Definition";
import Guide from "@/components/module/Guide";
import Companies from "@/components/module/Companies";
import Instruction from "@/components/module/Instruction";

const HomePage = () => {
    return(
        <>
            <Banner/>
            <Attribute/>
            <Definition/>
            <Companies/>
            <Instruction/>
            <Guide/>
        </>
    )
}

export default HomePage