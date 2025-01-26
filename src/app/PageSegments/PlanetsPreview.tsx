import Image from "next/image";
import React from "react";
import jupiterImg from "../../../public/images/planets/jupiter.svg";
import saturnImg from "../../../public/images/planets/saturn.svg";
import venusImg from "../../../public/images/planets/venus.svg";
import marsImg from "../../../public/images/planets/mars.svg";
import earthImg from "../../../public/images/planets/earth.svg";
import mercuryImg from "../../../public/images/planets/mercury.svg";

const PlanetsPreview = () => {
    const planetBehavourStyles = `hover:scale-105 hover:cursor-pointer transition-all duration-500 ease-in-out`;

    const planetNameStyle = ` text-2xl relative z-20 -translate-x-32 translate-y-7 peer-hover:translate-x-0 peer-hover:-translate-y-20 peer-hover:scale-[1.1] peer-hover:bg-black/30 rounded-full px-4 transition-all duration-500 ease-in-out`;

    return (
        <div className="bg-[#0F1322] h-[120vh] w-[100vw] text-white px-6 sm:px-[10vw] space-y-6 transition-all duration-200 ">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl pt-[12vh] tracking-wide ">
                Learn about the Solar system{" "}
            </h2>

            <div className="h-[80vh] w-[100vw] relative -translate-x-[10vw]  overflow-y-hidden overflow-x-hidden">
                <img
                    className="absolute h-full w-full inset-0 content-cover z-0"
                    src="./images/bg.jpeg"
                    alt=""
                />

                <div className="overflow-x-scroll overflow-y-hidden h-[100%] w-[100vw] absolute z-20 grid grid-flow-col pt-[10%] gap-6">
                    <div className="flex flex-col items-center min-w-[35vw] ml-[5vw]">
                        <Image
                            src={mercuryImg}
                            alt=""
                            className={`peer h-[80%] top-[10%] group ${planetBehavourStyles} `}
                        />
                        <span className={`${planetNameStyle}`}>Mercury</span>
                    </div>
                    <div className=" flex flex-col items-center min-w-[35vw]">
                        <Image
                            src={venusImg}
                            alt=""
                            className={`peer h-[80%] top-[10%] ${planetBehavourStyles}`}
                        />
                        <span className={`${planetNameStyle}`}>Venus</span>
                    </div>
                    <div className=" flex flex-col items-center min-w-[35vw]">
                        <Image
                            src={earthImg}
                            alt=""
                            className={`peer h-[80%] top-[10%] ${planetBehavourStyles}`}
                        />
                        <span className={`${planetNameStyle}`}>Earth</span>
                    </div>
                    <div className=" flex flex-col items-center min-w-[35vw]">
                        <Image
                            src={marsImg}
                            alt=""
                            className={`peer h-[80%] top-[10%] ${planetBehavourStyles}`}
                        />
                        <span className={`${planetNameStyle}`}>Mars</span>
                    </div>
                    <div className=" flex flex-col items-center min-w-[35vw]">
                        <Image
                            src={jupiterImg}
                            alt=""
                            className={`peer h-[80%] top-[10%] hover:scale-105 ${planetBehavourStyles}`}
                        />
                        <span className={`${planetNameStyle}`}>Jupiter</span>
                    </div>
                    <div className=" flex flex-col items-center min-w-[35vw] mr-[5vw]">
                        <Image
                            src={saturnImg}
                            alt=""
                            className={`peer h-[80%%] translate-y-[-20%] ${planetBehavourStyles}`}
                        />
                        <span className={` ${planetNameStyle}`}>Saturn</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanetsPreview;
