import React from "react";

const Navbar = () => {
    //     const activeBtnColor = "#7482B4";
    const [homeActive, setHomeActive] = React.useState(true);
    return (
        <div className="absolute top-12 z-50 left-[15vw] bg-[#2A2D3B]/50  rounded-full px-2 py-1.5 text-white tracking-wider font-light flex gap-2">
            <button
                className={`${homeActive && `bg-[#7482B4]/80`} px-6 py-1.5 rounded-full`}
                onClick={() => setHomeActive(true)}
            >
                Home
            </button>
            <button
                className={`${!homeActive && `bg-[#7482B4]/80`}  px-4 py-1.5 rounded-full`}
                onClick={() => setHomeActive(false)}
            >
                Playground
            </button>
        </div>
    );
};

export default Navbar;
