import React from "react";
import Image from "next/image";

const KartuGas = ({ percentage }) => {
    return (
        <div className="relative w-30 h-40 sm:w-40 sm:h-52 border-4 border-[#355F2E] rounded-3xl overflow-hidden">
            {/* Back Background */}
            <div className="absolute inset-0 bg-[#A9E06D]"></div>
            {/* Front Background (Progress) */}
            <div
                className="absolute bottom-0 left-0 w-full bg-[#5CB338]"
                style={{ height: `${percentage}%` }} // Dynamic height based on percentage
            ></div>
            {/* Displays */}
            <div className="relative flex flex-col items-center justify-center h-full">
                <p className="text-2xl font-bold text-black z-10">{percentage}%</p>
                <div className="flex items-center justify-center size-[60%] sm:size-[65%]">
                    <Image
                        aria-hidden
                        src='/logo.png'
                        alt="icon"
                        width={120}
                        height={120}
                    />
                    
                </div>
            </div>
        </div>
    );
};

export default KartuGas;
