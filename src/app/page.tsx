/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect } from "react";
import oopsImg from "../../public/images/oops.png";
import rightArrow from "../../public/images/rightArrow.svg";

// import MainScene from "@/components/MainScene";
import LandingPage from "./PageSegments/LandingPage";
import Navbar from "./PageSegments/Navbar";
import PlanetsPreview from "./PageSegments/PlanetsPreview";
import Image from "next/image";

export default function Page() {
    const [showPopup, setShowPopup] = React.useState(false);

    useEffect(() => {
        if (window.innerWidth < 500) {
            setShowPopup(true);
        }
    }, []);
    return (
        <>
            <div className="w-full h-full overflow-y-hidden">
                {showPopup && (
                    <div className="w-[96vw] h-[96vh] text-white flex flex-col  p-8 items-center rounded-md z-40 fixed top-[2vh] left-[2vw] bg-black ">
                        <div className="pt-[13vh] items-center flex flex-col">
                            <Image src={oopsImg} alt="" className="h-[7rem] w-[7rem]" />
                            <span className="text-2xl">OOps!</span>
                        </div>
                        <div className="text-2xl text-center pt-[6rem]">
                            This page might have some problems in Vertical format
                        </div>
                        <span className="text-center pt-[4rem]">
                            Open the page in Desktop / Horizontal display for best experience
                        </span>
                        <button
                            className="bg-[#7482B4] px-4 py-2 rounded-md absolute bottom-[4rem] flex items-center gap-2"
                            onClick={() => setShowPopup(false)}
                        >
                            <span>I will continue here</span>
                            <Image src={rightArrow} alt="" className="h-4 w-4" />
                        </button>
                    </div>
                )}
                <div>
                    <Navbar />
                    <LandingPage />
                    <PlanetsPreview />
                </div>
            </div>
        </>
    );
}
