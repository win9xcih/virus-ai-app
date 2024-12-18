'use client'

import ArrowRight from "@/icons/ArrowRight";
import Community from "@/icons/Community";
import PawsLogo from "@/icons/PawsLogo";
import Star from "@/icons/Star";
import Wallet from "@/icons/Wallet";
import { sparkles } from "@/images";
import Image from "next/image";

const HomeTab = () => {
    return (
        <div className={`home-tab-con transition-all duration-300`}>
        {/* {Connect Wallet Button} */}
        <button className="w-full flex justify-center mt-8">
            <div className="bg-[#007aff] text-white px-3 py-0.5 rounded-full flex items-center gap-2">
                <Wallet className="h-5 w-5"/>
                <span>Connect Wallet</span>
            </div>
        </button>

        {/* {Paws Balance} */}
        <div className="flex flex-col items-center mt-8">
            <PawsLogo className="w-28 h-28 mb-4"/>
            <div className="flex items-center gap-1 text-center">
                <div className="text-6xl font-bold mb-1">4,646</div>
                <div className="text-white text-2xl">PAWS</div>
            </div>
            <div className="flex items-center gap-1 text-[#868686] rounded-full px-4 py-1.5 mt-2 cursor-pointer">
                <span>NEWCOMER</span>
                <Image 
                    src={sparkles}
                    alt="sparkles"
                    width={18}
                    height={19}
                />
                <span>RANK</span>
                <ArrowRight className="w-6 h-6"/>
            </div>
        </div>

        {/* {Action Buttons } */}
        <div className="space-y-3 px-4 mt-8 mb-8">
            <button className="shine-effect w-full bg-[#ffffff0d] border-[1px]
                               border-[#2d2d2e] rounded-lg px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-3 font-medium">
                    <Community className="w-8 h-8"/>
                    <span>Join our Community</span>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400"/>
            </button>

            <button className="w-full bg-[#ffffff0d] border-[1px]
                               border-[#2d2d2e] rounded-lg px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-3 font-medium">
                    <Star className="w-8 h-8"/>
                    <span>Check Your Rewards</span>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400"/>
            </button>
        </div>
        </div>
    )
}

export default HomeTab;