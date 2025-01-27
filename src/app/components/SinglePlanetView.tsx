/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { Key, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setPlanetSelected,
    setSelectedPlanetIndex,
    setSelectedPlanetName,
} from "../../../redux/features/planetSlice";
import { RootState } from "../../../redux/store";
import Image from "next/image";
import Jupiter from "../../../public/images/planets/jupiter.png";
import Saturn from "../../../public/images/planets/saturn.png";
import Uranus from "../../../public/images/planets/uranus.png";
import Neptune from "../../../public/images/planets/neptune.png";
import Venus from "../../../public/images/planets/venus.png";
import Mars from "../../../public/images/planets/mars.png";
import Earth from "../../../public/images/planets/earth.png";
import Mercury from "../../../public/images/planets/mercury.png";
import instructionsImg from "../../../public/images/instructions.png";

import backArrow from "../../../public/images/backArrow.svg";

import mercury01 from "../../../public/images/planetImages/mercury01.png";
import mercury02 from "../../../public/images/planetImages/mercury02.png";
import mercury03 from "../../../public/images/planetImages/mercury03.png";

import venus01 from "../../../public/images/planetImages/venus01.png";
import venus02 from "../../../public/images/planetImages/venus02.png";
import venus03 from "../../../public/images/planetImages/venus03.png";

import earth01 from "../../../public/images/planetImages/earth01.png";
import earth02 from "../../../public/images/planetImages/earth02.png";
import earth03 from "../../../public/images/planetImages/earth03.png";

import mars01 from "../../../public/images/planetImages/mars01.png";
import mars02 from "../../../public/images/planetImages/mars02.png";
import mars03 from "../../../public/images/planetImages/mars03.png";
import mars04 from "../../../public/images/planetImages/mars04.png";

import jupiter01 from "../../../public/images/planetImages/jupiter01.png";
import jupiter02 from "../../../public/images/planetImages/jupiter02.png";
import jupiter03 from "../../../public/images/planetImages/jupiter03.png";
import jupiter04 from "../../../public/images/planetImages/jupiter04.png";

import saturn01 from "../../../public/images/planetImages/saturn01.png";
import saturn02 from "../../../public/images/planetImages/saturn02.png";
import saturn03 from "../../../public/images/planetImages/saturn03.png";

import uranus01 from "../../../public/images/planetImages/uranus01.png";
import uranus02 from "../../../public/images/planetImages/uranus02.png";
import uranus03 from "../../../public/images/planetImages/uranus03.png";

import neptune01 from "../../../public/images/planetImages/neptune01.png";
import neptune02 from "../../../public/images/planetImages/neptune02.png";
import neptune03 from "../../../public/images/planetImages/neptune03.png";

import rightArrow from "../../../public/images/rightArrow.svg";
import EarthThreeD from "@/components/Earth";
// import image4 from "../../../public/images/planetImages/earth04.png";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

import PlanetFog from "./PlanetFog";
import solarSystem from "../PlanetInfo";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { div } from "framer-motion/client";
// import solarSystem from "../PlanetInfo";

const SinglePlanetView = () => {
    const dispatch = useDispatch();
    const selectedPlanetName = useSelector(
        (state: RootState) => state.planetSlice.selectedPlanetName
    );
    const selectedPlanetIndex = useSelector(
        (state: RootState) => state.planetSlice.selectedPlanetIndex
    );

    const planetImagePng = {
        Mercury: Mercury,
        Venus: Venus,
        Earth: Earth,
        Mars: Mars,
        Jupiter: Jupiter,
        Saturn: Saturn,
        Uranus: Uranus,
        Neptune: Neptune,
    };

    const planetFogColor = {
        Mercury: "#938D76",
        Venus: "#7F3F15",
        Earth: "#7482B4",
        Mars: "#7C482F",
        Jupiter: "#B19D79",
        Saturn: "#D1C0A4",
        Uranus: "#408ba7",
        Neptune: "#385ad7",
    };

    const planetsSequence = [
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
    ];

    const planetSurfaceImages = {
        Mercury: [mercury01, mercury02, mercury03],
        Venus: [venus01, venus02, venus03],
        Earth: [earth01, earth02, earth03],
        Mars: [mars01, mars02, mars03, mars04],
        Jupiter: [jupiter01, jupiter02, jupiter03, jupiter04],
        Saturn: [saturn01, saturn02, saturn03],
        Uranus: [uranus01, uranus02, uranus03],
        Neptune: [neptune01, neptune02, neptune03],
    };

    const [imageLoaded, setImageLoaded] = useState(false);
    const [startSecondAnimation, setStartSecondAnimation] = useState(false);
    const [showSatellites, setShowSatellites] = useState(false);

    const [imageOpened, setImageOpened] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [factFetched, setFactFetched] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setFactFetched(true);
            setStartSecondAnimation(true);
        }, 1000);
    }, [imageLoaded]);

    const handleRightArrowClick = useCallback(() => {
        setImageIndex((prevIndex) =>
            prevIndex < planetSurfaceImages[selectedPlanetName].length - 1 ? prevIndex + 1 : 0
        );
    }, [selectedPlanetName]);

    // Handle left arrow click/key press
    const handleLeftArrowClick = useCallback(() => {
        setImageIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : planetSurfaceImages[selectedPlanetName].length - 1
        );
    }, [selectedPlanetName]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                handleRightArrowClick();
            } else if (e.key === "ArrowLeft") {
                handleLeftArrowClick();
            }
        };

        if (imageOpened) {
            document.addEventListener("keydown", handleKeyDown);
        }

        // Cleanup event listener
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [imageOpened, handleRightArrowClick, handleLeftArrowClick]);

    // const planetImagesStyle = " object-cover rounded-md ";

    return (
        <div className={`w-full md:h-full absolute z-20 ${montserrat.className}`}>
            <button
                className="bg-[#7482B4]/80 px-4 py-1.5 rounded-full absolute top-4 left-4 z-20"
                onClick={() => {
                    dispatch(setSelectedPlanetName(""));
                    dispatch(setPlanetSelected(false));
                    console.log("clicked");
                }}
            >
                Back
            </button>

            {/* Show and Hide satellites button */}
            {selectedPlanetName === "Earth" && (
                <div className="px-4 py-1.5 rounded-full absolute top-4 left-32 z-30 flex gap-4 items-center">
                    <div className=" text-lg">Satellites</div>
                    <div className="relative z-50 bg-[#4a5068]/50 rounded-full px-2 py-1.5 text-md text-white tracking-wider font-light flex gap-2">
                        <div
                            className={`absolute rounded-full top-[10%] -z-30 w-[45%] h-[80%] transition-all duration-500 ${
                                showSatellites && showSatellites ? "left-1.5" : "right-1.5"
                            } bg-[#7482B4]/80`}
                        ></div>
                        <button
                            className={` px-4 py-1.5 rounded-full`}
                            onClick={() => setShowSatellites(true)}
                        >
                            Show
                        </button>
                        <button
                            className={` px-4 py-1.5 rounded-full`}
                            onClick={() => setShowSatellites(false)}
                        >
                            Hide
                        </button>
                    </div>
                </div>
            )}
            {/* {showSatellites && (
                <div className={`w-full h-full  flex relative $`}>
                    <div className="w-[150%] h-full absolute top-0 right-0 backdrop-blur-2xl -z-10"></div>
                    <div className="w-[105%] h-full absolute top-0 right-0 bg-black  -z-20"></div>

                    <PlanetFog
                        height={1200}
                        width={1200}
                        color={selectedPlanetName ? planetFogColor[selectedPlanetName] : "#7482B4"}
                        class="absolute -z-10  top-0 -left-[5%]"
                    />
                </div>
            )} */}

            <div className={`w-full h-full  flex relative flex-col md:flex-row $`}>
                <div className="w-[150%] h-full absolute top-0 right-0 backdrop-blur-2xl -z-10"></div>
                <div className="w-[105%] h-full absolute top-0 right-0 bg-black  -z-20"></div>

                {/* Instructions for satellites */}
                {showSatellites && showInstructions && (
                    <div
                        className="w-full h-full absolute flex items-center justify-center  bg-black/50 cursor-pointer z-30"
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

                {/* Earth with Satellites */}
                {showSatellites && (
                    <div
                        className={`w-full h-full z-20 bg-transparent  absolute top-0 left-0 transition-all delay-1000 duration-1000 ${
                            showSatellites && showSatellites
                                ? "translate-y-[0rem]"
                                : "-translate-y-[50rem] "
                        }`}
                    >
                        <Canvas camera={{ position: [0, 0, 15], fov: 30 }}>
                            <OrbitControls enableZoom={true} enableRotate={true} />

                            <spotLight
                                position={[10, 1, 5]}
                                angle={0.15}
                                penumbra={0.5}
                                intensity={1.5}
                            />
                            <pointLight position={[10, 1, 10]} decay={0} intensity={1} />

                            <ambientLight intensity={2} />
                            <EarthThreeD />
                        </Canvas>
                    </div>
                )}

                {/* Main Big planet on the Left */}
                <div className="flex relative z-10">
                    <Image
                        src={planetImagePng[selectedPlanetName]}
                        alt=""
                        className={`relative h-[40vmax] w-[40vmax] z-40 left-0 -top-[10%] md:-left-[15%] md:top-[3rem] transition-all duration-1000 ${
                            showSatellites && showSatellites
                                ? "-translate-x-[50rem]"
                                : "translate-x-[0rem]"
                        }  ${
                            imageLoaded && imageLoaded
                                ? " translate-x-20 translate-y-24 "
                                : "translate-x-0 translate-y-0"
                        } ${
                            startSecondAnimation && startSecondAnimation
                                ? "-translate-x-8 -translate-y-11"
                                : " translate-x-0 translate-y-0 "
                        }`}
                        onLoad={() => setImageLoaded(true)}
                    />

                    <PlanetFog
                        height={1200}
                        width={1200}
                        color={selectedPlanetName ? planetFogColor[selectedPlanetName] : "#7482B4"}
                        class="absolute -z-10  top-0 -left-[5%]"
                    />
                </div>

                {/* Next planet Preview  */}
                <div
                    className={`absolute z-30 w-[10%] md:w-[6%] aspect-square cursor-pointer transition-all ease-out duration-1000 ${
                        showSatellites && showSatellites ? "-translate-y-[15rem]" : "translate-y-0"
                    }  ${
                        startSecondAnimation && startSecondAnimation
                            ? "md:top-[10%] md:right-[50%] top-[2%] right-[20%]"
                            : "-top-[30%] right-[30%]"
                    }`}
                    onClick={() => {
                        dispatch(setPlanetSelected(true));
                        if (
                            selectedPlanetIndex >= 0 &&
                            selectedPlanetIndex < planetsSequence.length - 1
                        ) {
                            dispatch(
                                setSelectedPlanetName(planetsSequence[selectedPlanetIndex + 1])
                            );
                            dispatch(setSelectedPlanetIndex(selectedPlanetIndex + 1));
                        } else if (selectedPlanetIndex === planetsSequence.length - 1) {
                            dispatch(setSelectedPlanetName(planetsSequence[0]));
                            dispatch(setSelectedPlanetIndex(0));
                        }
                    }}
                >
                    {
                        <Image
                            src={planetImagePng[planetsSequence[(selectedPlanetIndex + 1) % 8]]}
                            alt=""
                            className="h-full w-full object-contain"
                        />
                    }
                </div>

                {/* Previous planet Preview  */}
                <div
                    className={`absolute z-30 w-[10%] md:w-[4%] aspect-square cursor-pointer transition-all ease-out duration-1000 ${
                        showSatellites && showSatellites ? "-translate-x-[15rem]" : "translate-x-0"
                    } ${
                        startSecondAnimation && startSecondAnimation
                            ? "md:bottom-[10%] md:left-[4%] bottom-[71%] left-[85%] "
                            : "-bottom-[30%] -left-[40%]"
                    }`}
                    onClick={() => {
                        dispatch(setPlanetSelected(true));
                        if (
                            selectedPlanetIndex > 0 &&
                            selectedPlanetIndex < planetsSequence.length
                        ) {
                            dispatch(
                                setSelectedPlanetName(planetsSequence[selectedPlanetIndex - 1])
                            );
                            dispatch(setSelectedPlanetIndex(selectedPlanetIndex - 1));
                        } else if (selectedPlanetIndex === 0) {
                            dispatch(setSelectedPlanetName(planetsSequence[7]));
                            dispatch(setSelectedPlanetIndex(7));
                        }
                    }}
                >
                    {
                        <Image
                            src={
                                planetImagePng[
                                    planetsSequence[
                                        selectedPlanetIndex > 0 ? selectedPlanetIndex - 1 : 7
                                    ]
                                ]
                            }
                            alt=""
                            className="h-full w-full object-contain"
                        />
                    }
                </div>

                {/* Info contents of planet */}
                <div
                    className={`relative z-20 pt-[5%] px-6 w-full md:w-[45%] flex flex-col gap-12 transition-all duration-1000 ${
                        showSatellites && showSatellites ? "translate-x-[150%]" : "translate-x-0"
                    } `}
                >
                    <div className="text-white font-semibold text-xl md:text-2xl lg:text-4xl tracking-widest">
                        Planet: {selectedPlanetName}
                    </div>
                    <div className=" flex flex-nowrap overflow-x-scroll overflow-y-scroll md:h-[50%] w-full gap-4">
                        {planetSurfaceImages[selectedPlanetName].map((image, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`cursor-pointer transition-all duration-200 hover:border-[1px] hover:border-white rounded-md
                                        h-[8rem] w-[16rem] `}
                                >
                                    <Image
                                        src={image}
                                        alt={image.toString()}
                                        className={`h-full w-full object-cover rounded-md`}
                                        quality={100}
                                        //     key={index}
                                        onClick={() => {
                                            setImageOpened(true);
                                            setImageIndex(index as number);
                                            dispatch(setSelectedPlanetName(selectedPlanetName));
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* Big Image preview  */}
                    {imageOpened && (
                        <div
                            className={`fixed top-0 left-0 w-full h-full flex justify-center items-center `}
                        >
                            <button
                                className="px-4 py-1.5 rounded-full absolute top-[10%] left-[10%] z-40 bg-white/20 border-2 border-black/40"
                                onClick={() => {
                                    setImageOpened(false);
                                }}
                            >
                                <Image src={backArrow} alt="" className="w-6 aspect-square" />
                            </button>

                            <div
                                className={`  bg-black/80 inset-0 absolute z-10 cursor-pointer`}
                                onClick={() => {
                                    setImageOpened(false);
                                }}
                            ></div>

                            {/* Left right buttons */}
                            <div className="absolute top-[45%] w-[100%] flex justify-between px-[2%] z-30">
                                <div>
                                    <Image
                                        src={rightArrow}
                                        alt=""
                                        className="w-8 aspect-square rotate-180 cursor-pointer"
                                        onClick={handleLeftArrowClick}
                                    />
                                </div>
                                <div>
                                    <Image
                                        src={rightArrow}
                                        alt=""
                                        className="w-8 aspect-square cursor-pointer"
                                        onClick={handleRightArrowClick}
                                    />
                                </div>
                            </div>

                            {/* Actual Image */}
                            <div className="relative z-20 top-0 left-0 w-[85%] h-[85%] ">
                                <Image
                                    src={planetSurfaceImages[selectedPlanetName][imageIndex]}
                                    alt={planetSurfaceImages[selectedPlanetName][imageIndex]}
                                    className={`  h-full w-full rounded-md`}
                                />
                            </div>
                        </div>
                    )}

                    {/* Fun fact */}
                    <div className={`overflow-scroll space-y-6 ${imageOpened && "hidden"}`}>
                        <div>
                            <span>Fun fact:</span>
                            {!factFetched ? (
                                <div className="space-y-2 pt-2 animate-pulse">
                                    <div className="w-full h-4 bg-white/80 rounded-sm"></div>
                                    <div className="w-full h-4 bg-white/80 rounded-sm"></div>
                                    <div className="w-[45%] h-4 bg-white/80 rounded-sm"></div>
                                </div>
                            ) : (
                                <div className="space-y-2 pt-2">
                                    {" "}
                                    {
                                        solarSystem[selectedPlanetName.toLowerCase()]
                                            ?.interestingFact
                                    }{" "}
                                </div>
                            )}
                        </div>

                        {/* Planet infos start */}
                        <div
                            className={`bg-white/50  w-full p-4 flex flex-col gap-3 rounded-md ${
                                imageOpened && "hidden"
                            }`}
                        >
                            <span>{selectedPlanetName} Info:</span>
                            <div className="bg-black/20 text-sm p-2 rounded-md flex flex-col space-y-2">
                                <span className="opacity-80">Suface temperature:</span>
                                <span className=" pl-4">
                                    {
                                        solarSystem[selectedPlanetName.toLowerCase()]
                                            ?.surfaceTemperature
                                    }
                                </span>
                            </div>

                            <div className="bg-black/20 text-sm p-2 rounded-md flex flex-col space-y-2">
                                <span className="opacity-80 ">Diameter:</span>
                                <span className=" pl-8">
                                    {solarSystem[selectedPlanetName.toLowerCase()]?.diameter} km
                                </span>
                            </div>

                            <div className="bg-black/20 text-sm p-2 rounded-md flex flex-col space-y-2">
                                <span className="opacity-80 ">Atmosphere composition:</span>
                                <span className=" ">
                                    {solarSystem[
                                        selectedPlanetName.toLowerCase()
                                    ]?.atmosphereComposition.map((composition, index) => {
                                        return (
                                            <span key={index} className="pl-8">
                                                {composition}
                                                <br />
                                            </span>
                                        );
                                    })}
                                </span>
                            </div>

                            <div className="bg-black/20 text-sm p-2 rounded-md flex flex-col space-y-2">
                                <span className="opacity-80  ">Abundant Resources:</span>
                                <span className=" ">
                                    {solarSystem[
                                        selectedPlanetName.toLowerCase()
                                    ]?.abundantResources.map((resource, index) => {
                                        return (
                                            <span key={index} className="pl-8">
                                                {resource}
                                                <br />
                                            </span>
                                        );
                                    })}
                                </span>
                            </div>

                            <div className="bg-black/20 text-sm p-2 rounded-md flex flex-col space-y-2">
                                <span className="opacity-80  ">Distance from sun:</span>
                                <span className=" pl-8">
                                    {solarSystem[selectedPlanetName.toLowerCase()]?.distanceFromSun}{" "}
                                    km
                                </span>
                            </div>

                            <div className="bg-black/20 text-sm p-2 rounded-md flex flex-col space-y-2">
                                <span className="opacity-80  ">Rotation Time:</span>
                                <span className=" pl-8">
                                    {solarSystem[selectedPlanetName.toLowerCase()]?.rotationTime}
                                </span>
                            </div>

                            <div className="bg-black/20 text-sm p-2 rounded-md flex flex-col space-y-2">
                                <span className="opacity-80  ">Revolution Time:</span>
                                <span className=" pl-8">
                                    {solarSystem[selectedPlanetName.toLowerCase()]?.revolutionTime}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

type PlanetInfo = {
    diameter: number;
    surfaceTemperature: string;
    atmosphereComposition: string[];
    abundantResources: string[];
    distanceFromSun: number;
    rotationTime: string;
    revolutionTime: string;
    interestingFact: string;
    numberOfMoons: number;
};

export default SinglePlanetView;
