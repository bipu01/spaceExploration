"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowPlayground } from "../../../redux/features/planetSlice";
import { RootState } from "../../../redux/store";
import { setSatelliteLoading } from "../../../redux/features/pagesSlice";

const Navbar = () => {
    const [homeActive, setHomeActive] = React.useState(true);
    const dispatch = useDispatch();
    const showPlayground = useSelector((state: RootState) => state.planetSlice.showPlayground);

    useEffect(() => {
        if (showPlayground) {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [showPlayground]);

    return (
        <div
            className={` top-12 z-50 left-[15vw] bg-[#2A2D3B]/50  rounded-full px-2 py-1.5 text-white tracking-wider font-light flex gap-2 ${
                showPlayground && showPlayground ? "fixed" : "absolute"
            }`}
        >
            <button
                className={`${homeActive && `bg-[#7482B4]/80`} px-6 py-1.5 rounded-full`}
                onClick={() => {
                    setHomeActive(true);
                    dispatch(setShowPlayground(false));
                }}
            >
                Home
            </button>
            <button
                className={`${!homeActive && `bg-[#7482B4]/80`}  px-4 py-1.5 rounded-full`}
                onClick={() => {
                    setHomeActive(false);
                    dispatch(setShowPlayground(true));
                    dispatch(setSatelliteLoading(true));
                }}
            >
                Playground
            </button>
        </div>
    );
};

export default Navbar;
