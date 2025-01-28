"use client";
import Image from "next/image";
import React, { useState } from "react";
import homebg from "../../../public/images/gradientBg.svg";
import sunbg from "../../../public/images/sunbg.png";
import avatar from "../../../public/images/AIavatar.svg";
import satelliteImg from "../../../public/images/satellite.svg";
import downArrow from "../../../public/images/downArrow.svg";

import { Montserrat } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EarthThreeD from "@/components/Earth";
import instructionsImg from "../../../public/images/instructions.png";

import loadingIcon from "../../../public/images/loadingIcon.svg";
import { setSatelliteLoading } from "../../../redux/features/pagesSlice";
import {
    setShow30DaysSatellites,
    setShowAllSatellites,
    setShowISS,
} from "../../../redux/features/planetSlice";

const montserrat = Montserrat({ subsets: ["latin"] });

const LandingPage = () => {
    const [showInstructions, setShowInstructions] = useState(true);

    const showPlayground = useSelector((state: RootState) => state.planetSlice.showPlayground);
    const satelliteLoading = useSelector((state: RootState) => state.pagesSlice.satelliteLoading);
    const showAllSatellites = useSelector(
        (state: RootState) => state.planetSlice.showAllSatellites
    );

    const show30DaysSatellites = useSelector(
        (state: RootState) => state.planetSlice.show30DaysSatellites
    );

    const showISS = useSelector((state: RootState) => state.planetSlice.showISS);

    const dispatch = useDispatch();
    return (
        <>
            {showPlayground && (
                <div
                    className={`w-full h-full z-40 bg-[#0F1322]  fixed top-0 left-0 transition-all delay-1000 duration-1000 ${
                        showPlayground && showPlayground
                            ? "translate-y-[0rem]"
                            : "-translate-y-[50rem] "
                    }`}
                >
                    <Canvas
                        camera={{ position: [0, 0, 15], fov: 60 }}
                        onCreated={() => {
                            dispatch(setSatelliteLoading(false));
                        }}
                    >
                        <OrbitControls enableZoom={true} enableRotate={true} />

                        <spotLight
                            position={[10, 1, 5]}
                            angle={0.15}
                            penumbra={0.5}
                            intensity={1.5}
                        />
                        <pointLight position={[10, 1, 10]} decay={0} intensity={1} />

                        <ambientLight intensity={3} />

                        {showAllSatellites && <EarthThreeD />}
                        {show30DaysSatellites && <EarthThreeD />}
                        {showISS && <EarthThreeD />}
                    </Canvas>

                    {/* Instructions for satellites */}
                    {showInstructions && (
                        <div
                            className="w-full h-full fixed flex items-center justify-center top-0 left-0 bg-black/50 cursor-pointer z-50"
                            onClick={() => setShowInstructions(false)}
                        >
                            <Image
                                src={instructionsImg}
                                alt=""
                                className=" h-[30%] w-auto user-select-none"
                                draggable={false}
                            />
                        </div>
                    )}

                    {/* Menu to change the satellites number */}
                    <div className="md:h-auto md:w-[20vw] h-[9rem] w-[96vw] bg-white/50 rounded-md absolute right-[2vw] md:top-[60%]  top-[80vh] md:right-[3rem] p-4 md:space-y-4 space-y-2 items-center flex flex-col justify-center">
                        <button
                            className="px-4 py-2 bg-white rounded-full text-xs md:text-sm "
                            onClick={() => {
                                dispatch(setShowAllSatellites(true));
                                dispatch(setShow30DaysSatellites(false));
                                dispatch(setShowISS(false));
                            }}
                        >
                            Show all active satellites
                        </button>
                        <button
                            className="px-4 py-2 bg-white rounded-full text-xs md:text-sm"
                            onClick={() => {
                                dispatch(setShowAllSatellites(false));
                                dispatch(setShow30DaysSatellites(true));
                                dispatch(setShowISS(false));
                            }}
                        >
                            Satellites launched in last 30 Days
                        </button>
                        <button
                            className="px-4 py-2 bg-white rounded-full text-xs md:text-sm"
                            onClick={() => {
                                dispatch(setShowAllSatellites(false));
                                dispatch(setShow30DaysSatellites(false));
                                dispatch(setShowISS(true));
                            }}
                        >
                            Show International space stations
                        </button>
                    </div>
                </div>
            )}

            {/* Loading icon */}
            {satelliteLoading && (
                <div className="flex items-center justify-center fixed z-40 top-[10vh] w-full">
                    <Image
                        src={loadingIcon}
                        alt=""
                        className=" w-[4rem] aspect-square z-20 animate-spin fixed top-[25vh]  "
                    />
                </div>
            )}
            <div className={`${montserrat.className} relative h-[100vh]   overflow-hidden`}>
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
                <div className="absolute top-[20vh] sm:top-1/4 left-0 z-30 text-white ml-[15vw] ">
                    <div className="flex flex-col gap-8 tracking-[0.8rem] pb-16 text-4xl lg:text-6xl">
                        <span className="font-bold">VAST YET TINY</span>
                        <span
                            className="font-extrabold text-5xl lg:text-[5rem] text-transparent bg-clip-text bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/images/solarSystemTextBG.png')",
                            }}
                        >
                            SOLAR SYSTEM{" "}
                        </span>
                        <span className="font-bold">OF OURS</span>
                    </div>
                    <div className="flex gap-3 items-center font-light ">
                        <span className="text-sm sm:text-lg  tracking-widest">
                            Learn interactively with AI
                        </span>
                        <Image src={avatar} alt="" className="w-6 sm:w-8 aspect-square" />
                    </div>

                    {/* Floating Satellite */}
                    <div className="absolute sm:top-0 sm:left-0 sm:translate-x-1/3 ">
                        <Image
                            src={satelliteImg}
                            alt=""
                            className="sm:w-[50vw] w-[100vw] aspect-square scale-150 sm:scale-100"
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
