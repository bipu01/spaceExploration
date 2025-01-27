/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";

// import MainScene from "@/components/MainScene";
import LandingPage from "./PageSegments/LandingPage";
import Navbar from "./PageSegments/Navbar";
import PlanetsPreview from "./PageSegments/PlanetsPreview";

export default function Page() {
    return (
        <>
            <div className="w-full h-full overflow-y-hidden">
                <div>
                    <Navbar />
                    <LandingPage />
                    <PlanetsPreview />
                </div>
            </div>
        </>
    );
}
