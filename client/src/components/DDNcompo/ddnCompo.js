import React from "react"
import { useParams,Link } from "react-router-dom";

function Compo(props) {
    let params = useParams();
    const img = [
        {
            src1: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
            src2: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            title: "Delivery",
            isBg: (params.section === "delivery"),
            url: "/delivery"

        },
        {
            src1: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            src2: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            title: "Dining Out",
            isBg: (params.section === "dining-out"),
            url: "/dining-out"

        },
        {
            src1: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            src2: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
            title: "NightLife",
            isBg: (params.section === "night-life"),
            url: "/night-life"
        }
    ];
    return (
        <>
            <div className="flex justify-around lg:w-4/5 w-full m-auto py-2">
                {
                    img.map((elem) => (
                        <Link to={elem.url}>
                        <div className={`flex justify-center gap-4 md:flex-row flex-col items-center pb-2 ${elem.isBg ? "border-b-[3px] border-b-[#fd8196]" : ""}`}>
                            <div className={`md:w-[30%] w-[50%] p-4 rounded-full ${elem.isBg ? "bg-[#FCEEC0]" : "bg-[#F8F8F8]"}`}>
                                <img src={elem.src1} className={`w-full ${elem.isBg ? "" : "hidden"}`} alt="img"/>
                                <img src={elem.src2} className={`w-full ${elem.isBg ? "hidden" : ""}`} alt="img"/>
                            </div>
                            <div className={`font-semibold ${elem.isBg ? "text-[#fd8196]" : "text-gray-600"}`}>
                                {elem.title}
                            </div>
                        </div>
                        </Link>
                    ))
                }
            </div>
        </>
    );
}

function DDNcompo(props) {

    return (
        <>
            <div className="w-full md:shadow-xl md:shadow-cyan-100 hidden md:block bg-white">
                <Compo />
            </div>
            <div className="w-full md:hidden fixed bottom-0 shadow-inner shadow-cyan-100 bg-white">
                <Compo />
            </div>
        </>
    )
}

export default DDNcompo;