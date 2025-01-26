import Image from "next/image";
import React from "react";
import homebg from "../../../public/images/gradientBg.svg";
import sunbg from "../../../public/images/sunbg.png";
import avatar from "../../../public/images/AIavatar.svg";
import satelliteImg from "../../../public/images/satellite.svg";
import downArrow from "../../../public/images/downArrow.svg";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

const LandingPage = () => {
    return (
        <>
            <div className={`${montserrat.className} relative h-[100vh] `}>
                {/* Background and blur */}
                <div className="w-[100vw] h-[100vh] backdrop-blur-3xl absolute top-0 left-0 z-20"></div>
                <Image
                    src={homebg}
                    alt=""
                    className=" w-[100vw] h-[110vh] object-cover relative -top-[10vh]  z-0"
                />

                {/* Sun */}
                <div className="absolute top-0 right-0  z-30">
                    <Image src={sunbg} alt="" className=" " />
                </div>

                {/* Big texts in Home */}
                <div className="absolute top-1/4 left-0 z-30 text-white ml-[15vw] ">
                    <div className="flex flex-col gap-8 tracking-[0.8rem] pb-16 text-3xl sm:text-4xl lg:text-6xl">
                        <span className="font-bold">VAST YET TINY</span>
                        <span
                            className="font-extrabold text-4xl sm:text-5xl lg:text-[5rem] text-transparent bg-clip-text bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/images/solarSystemTextBG.png')",
                            }}
                        >
                            SOLAR SYSTEM{" "}
                        </span>
                        <span className="font-bold">OF OURS</span>
                    </div>
                    <div className="flex gap-3 items-center font-light ">
                        <span className="text-lg  tracking-widest">
                            Learn interactively with AI
                        </span>
                        <Image src={avatar} alt="" className="w-8 aspect-square" />
                    </div>

                    {/* Floating Satellite */}
                    <div className="absolute top-0 left-0 translate-x-1/3">
                        <Image
                            src={satelliteImg}
                            alt=""
                            className="w-[50vw] aspect-square"
                            quality={100}
                        />
                    </div>
                </div>
                {/* Scroll  */}
                <div className="absolute bottom-8 sm:bottom-20 left-1/2 -translate-x-1/2 flex gap-2 items-center text-white z-30">
                    <span>Scroll</span>
                    <Image src={downArrow} alt="" />
                </div>
            </div>
        </>
    );
};

export default LandingPage;
