/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Scene from "@/components/Scene";
import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";
// import EarthNew from "../../public/earth/EarthNew";
import Saturn from "@/components/Saturn";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Image from "next/image";
import bg from "../../public/images/bg.jpeg";

import MainScene from "@/components/MainScene";
import LandingPage from "./PageSegments/LandingPage";
import Navbar from "./PageSegments/Navbar";
import PlanetsPreview from "./PageSegments/PlanetsPreview";

import SinglePlanetView from "./components/SinglePlanetView";

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
