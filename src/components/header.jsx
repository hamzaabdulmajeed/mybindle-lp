import React from 'react'
import logo from "../assets/Group 2.png"
import mobile from "../assets/Group 1.png"

function header() {
    return (
        <div className='bg-[#FF5349] w-full min-h-screen overflow-hidden'>
            <div className="pt-8 md:pt-12 flex justify-center items-center gap-2 md:gap-3">
                <img src={logo} alt="Logo" className="w-10 h-10 md:w-16 md:h-16" />
                <h1 className="text-white text-2xl md:text-4xl font-semibold">Mybindle</h1>
            </div>
            <div className='max-w-6xl mx-auto px-6 md:px-12'>
                <div className='flex flex-col lg:flex-row lg:items-center pt-8 md:pt-16 gap-8 lg:gap-12'>
                    <div className="flex-1 space-y-6 lg:pr-8">
                        <h1 className="text-white leading-tight text-4xl md:text-5xl lg:text-6xl font-bold">
                            Stay Connected<br />
                            Stay Social<br />
                            Stay you!
                        </h1>

                        <p className="text-white text-base md:text-lg font-medium leading-relaxed">
                            A place where friendships grow, communities thrive, and moments turn into
                            unforgettable experiences. Whether you're looking to reconnect with
                            old friends, build new relationships, or share what matters most to you –
                            MyBindle is your home on the internet.
                        </p>

                        <button className='bg-white text-[#FF5349] h-14 md:h-16 w-full sm:w-56 rounded-lg text-lg md:text-xl font-bold hover:scale-105 transition-transform shadow-lg'>
                            Get Started
                        </button>
                    </div>
                    <div className="flex-1 relative flex justify-center items-center h-[500px] md:h-[600px] lg:h-[650px]">
                        <div className="relative">
                            <img
                                src={mobile}
                                alt="Mobile mockup"
                                className="h-[450px] md:h-[550px] lg:h-[600px] w-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                        <div className="absolute top-12 md:top-16 left-0 md:left-4 bg-white px-4 py-2 md:px-5 md:py-2.5 rounded-xl shadow-xl transform -rotate-2">
                            <p className="text-[#FF5349] font-bold text-xs md:text-sm whitespace-nowrap">
                                🔥 Seamless Connections
                            </p>
                        </div>
                        <div className="absolute bottom-24 md:bottom-32 right-0 md:right-4 bg-white px-4 py-2 md:px-5 md:py-2.5 rounded-xl shadow-xl transform rotate-2">
                            <p className="text-[#FF5349] font-bold text-xs md:text-sm whitespace-nowrap">
                                🔍 Discover & Explore
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default header