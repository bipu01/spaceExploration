"use client";
import Image from "next/image";
import React from "react";
import jupiterImg from "../../../public/images/planets/jupiter.png";
import saturnImg from "../../../public/images/planets/saturn.png";
import venusImg from "../../../public/images/planets/venus.png";
import marsImg from "../../../public/images/planets/mars.png";
import earthImg from "../../../public/images/planets/earth.png";
import mercuryImg from "../../../public/images/planets/mercury.png";
import uranusImg from "../../../public/images/planets/uranus.png";
import neptuneImg from "../../../public/images/planets/neptune.png";
// import starbg from "../../../public/images/bg.jpeg";

import { useDispatch, useSelector } from "react-redux";
import {
    setPlanetSelected,
    setSelectedPlanetIndex,
    setSelectedPlanetName,
} from "../../../redux/features/planetSlice";
import { RootState } from "../../../redux/store";
import SinglePlanetView from "../components/SinglePlanetView";

const PlanetsPreview = () => {
    const isPlanetSelected = useSelector((state: RootState) => state.planetSlice.planetSelected);
    return (
        <div className="bg-[#0F1322]  md:h-[105vh] w-[100vw] text-white  md:px-[10vw] space-y-6 transition-all duration-200 ">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl pt-[12vh] tracking-wide pl-4 sm:pl-0">
                Learn about the Solar system{" "}
            </h2>

            <div
                className={`h-[170vh] overflow-y-scroll md:h-[80vh] ${
                    isPlanetSelected && isPlanetSelected
                        ? "w-[98vw] sm:w-[80vw] mx-[1vw] sm:mx-[10vw]"
                        : "w-[100vw] mx-[3vw] sm:mx-0"
                } relative sm:-translate-x-[10vw] md:overflow-y-hidden overflow-x-hidden transition-all duration-700 ease-in-out `}
            >
                {/* <Image className="absolute h-full w-full  content-cover z-0" src={starbg} alt="" /> */}
                {/* <div className="absolute inset-0 bg-black"></div> */}
                {isPlanetSelected && <SinglePlanetView />}
                {!isPlanetSelected && <PlanetsList />}
            </div>
        </div>
    );
};

export default PlanetsPreview;

const PlanetsList = () => {
    const dispatch = useDispatch();

    const planetBehavourStyles = `hover:scale-105 hover:cursor-pointer transition-all duration-500 ease-in-out`;

    const planetNameStyle = `text-lg md:text-2xl relative z-20 -translate-x-12 translate-y-7 peer-hover:translate-x-0 peer-hover:-translate-y-8 peer-hover:scale-[1.1] peer-hover:bg-black/30 rounded-full px-4 transition-all duration-500 ease-in-out`;

    return (
        <div className="overflow-x-scroll overflow-y-hidden h-[100%] w-[100vw] absolute z-20 flex pt-[10%] gap-6 sm:gap-6">
            <div
                className="flex flex-col items-center min-h-[12rem] min-w-[12rem] sm:min-w-[32rem]  ml-[10vw] sm:ml-[5vw] cursor-pointer"
                onClick={() => {
                    dispatch(setSelectedPlanetName("Mercury"));
                    dispatch(setPlanetSelected(true));
                    dispatch(setSelectedPlanetIndex(0));
                    console.log("clicked");
                }}
            >
                <Image
                    src={mercuryImg}
                    alt=""
                    className={`peer h-[12rem] w-[12rem] sm:h-[25rem] sm:w-[25rem] top-[10%] group ${planetBehavourStyles} `}
                />
                <span className={`${planetNameStyle}`}>Mercury</span>
            </div>
            <div
                className="flex flex-col items-center min-h-[12rem] min-w-[12rem] sm:min-w-[32rem] cursor-pointer"
                onClick={() => {
                    dispatch(setSelectedPlanetName("Venus"));
                    dispatch(setPlanetSelected(true));
                    dispatch(setSelectedPlanetIndex(1));
                }}
            >
                <Image
                    src={venusImg}
                    alt=""
                    className={`peer h-[12rem] w-[12rem] sm:h-[25rem] sm:w-[25rem] top-[10%] group ${planetBehavourStyles} `}
                />
                <span className={`${planetNameStyle}`}>Venus</span>
            </div>
            <div
                className="flex flex-col items-center min-h-[12rem] min-w-[12rem] sm:min-w-[32rem] cursor-pointer"
                onClick={() => {
                    dispatch(setSelectedPlanetName("Earth"));
                    dispatch(setPlanetSelected(true));
                    dispatch(setSelectedPlanetIndex(2));
                }}
            >
                <Image
                    src={earthImg}
                    alt=""
                    className={`peer h-[12rem] w-[12rem] sm:h-[25rem] sm:w-[25rem] top-[10%] group ${planetBehavourStyles} `}
                />
                <span className={`${planetNameStyle}`}>Earth</span>
            </div>
            <div
                className="flex flex-col items-center min-h-[12rem] min-w-[12rem] sm:min-w-[32rem] cursor-pointer"
                onClick={() => {
                    dispatch(setSelectedPlanetName("Mars"));
                    dispatch(setPlanetSelected(true));
                    dispatch(setSelectedPlanetIndex(3));
                }}
            >
                <Image
                    src={marsImg}
                    alt=""
                    className={`peer h-[12rem] w-[12rem] sm:h-[25rem] sm:w-[25rem] top-[10%] group ${planetBehavourStyles} `}
                />
                <span className={`${planetNameStyle}`}>Mars</span>
            </div>
            <div
                className="flex flex-col items-center min-h-[12rem] min-w-[12rem] sm:min-w-[32rem] cursor-pointer"
                onClick={() => {
                    dispatch(setSelectedPlanetName("Jupiter"));
                    dispatch(setPlanetSelected(true));
                    dispatch(setSelectedPlanetIndex(4));
                }}
            >
                <Image
                    src={jupiterImg}
                    alt=""
                    className={`peer h-[12rem] w-[12rem] sm:h-[25rem] sm:w-[25rem] top-[10%] group ${planetBehavourStyles} `}
                />
                <span className={`${planetNameStyle}`}>Jupiter</span>
            </div>

            <div
                className="flex flex-col items-center min-h-[12rem] min-w-[12rem] sm:min-w-[32rem] cursor-pointer"
                onClick={() => {
                    dispatch(setSelectedPlanetName("Saturn"));
                    dispatch(setPlanetSelected(true));
                    dispatch(setSelectedPlanetIndex(5));
                }}
            >
                <Image
                    src={saturnImg}
                    alt=""
                    className={`peer h-[12rem] w-[12rem] sm:h-[25rem] sm:w-[25rem] top-[10%] group ${planetBehavourStyles} `}
                />
                <span
                    className={` ${planetNameStyle} -translate-x-32 -translate-y-24 peer-hover:translate-x-0 peer-hover:-translate-y-32 peer-hover:scale-[1.1] peer-hover:bg-black/30 rounded-full px-4 transition-all duration-500 ease-in-out`}
                >
                    Saturn
                </span>
            </div>

            <div
                className="flex flex-col items-center min-h-[12rem] min-w-[12rem] sm:min-w-[32rem] cursor-pointer "
                onClick={() => {
                    dispatch(setSelectedPlanetName("Uranus"));
                    dispatch(setPlanetSelected(true));
                    dispatch(setSelectedPlanetIndex(6));
                }}
            >
                <Image
                    src={uranusImg}
                    alt=""
                    className={`peer h-[12rem] w-[12rem] sm:h-[25rem] sm:w-[25rem] top-[10%] group ${planetBehavourStyles} `}
                />
                <span className={` ${planetNameStyle}`}>Uranus</span>
            </div>

            <div
                className="flex flex-col items-center min-h-[12rem] min-w-[12rem] sm:min-w-[32rem] cursor-pointer mr-[5vw]"
                onClick={() => {
                    dispatch(setSelectedPlanetName("Neptune"));
                    dispatch(setPlanetSelected(true));
                    dispatch(setSelectedPlanetIndex(7));
                }}
            >
                <Image
                    src={neptuneImg}
                    alt=""
                    className={`peer h-[12rem] w-[12rem] sm:h-[25rem] sm:w-[25rem] top-[10%] group ${planetBehavourStyles} `}
                />
                <span className={` ${planetNameStyle}`}>Neptune</span>
            </div>
        </div>
    );
};
