import React from 'react'
import logo from "../assets/Group 2.png"
import mobile from "../assets/Group 1.png"
function header() {
    return (
        <div className="header-container bg-[#FF5349] w-[1920px] h-[1163px]">
            <div className="pt-[61.21px] flex justify-center items-center space-x-3 w-[337.79] h-[76.51] ">
                <div>
                    <img src={logo} alt="Logo" width={78} height={77} />
                </div>
                <div>
                    <h1 className="text-white text-2xl text-[40px] font-[600] w-[229] h-[38]">Mybindle</h1>
                </div>
            </div>
            <div className='flex pt-[96px]'>
                <div className="pl-[131px] space-y-10 flex-1">
                    <div className='w-[851px] h-[354px]'>
                        <h1 className="text-white leading-tight text-[100px] font-[600]">Stay Connected <br /> Stay Social <br /> Stay you!</h1>
                    </div>
                    <div className='w-[817px] h-[144px]'>
                        <h1 className="text-white text-[23px] font-[600]">A place where friendships grow, communities thrive, and moments turn into <br /> unforgettable experiences. Whether you're looking to reconnect with <br /> old friends, build new relationships, or share what matters most to you – <br /> MyBindle is your home on the internet.</h1>

                    </div>
                    <div className='w-[243px] h-[74px]'>
                        <button className='bg-[#F2F2F2] text-[#FF5349] h-[74px] w-[243px] rounded-lg w-[243px] h-[74px] text-[23px] font-[600]'>Get Started</button>
                    </div>
                </div>
                {/* <div className="flex justify-center h-[1001px] w-[508.39px] ml-[700px]">
                    <div className='bg-[#FFFFFF] w-[332px] h-[41px]'> 
                        <h1>🔥 Seamless Connections</h1>
                    </div>
                    <div className='bg-[#FFFFFF] w-[332px] h-[41px]'> 

                        <h1>discover & explore</h1>
                    </div>
                    <img
                        src={mobile}
                        alt="Mobile mockup"
                        className="h-[1100px] w-[452px]"
                    />
                </div> */}
                <div className="relative flex-1  h-[1001px] ">
                    {/* Mobile Image */}
                    <img
                        src={mobile}
                        alt="Mobile mockup"
                        className="h-[1100px] w-[500px] "
                    />

                    {/* 🔥 Top Label */}
                    <div className="absolute top-[200px] transform -translate-x-1/2 bg-white w-[200px] h-[45px] flex items-center justify-center rounded-xl shadow-lg">
                        <h1 className="text-[#FF5349] font-semibold text-sm">🔥 Seamless Connections</h1>
                    </div>

                    {/* 🔍 Bottom Label */}
                    <div className="absolute bottom-[230px] left-[300px] bg-white w-[200px] h-[45px] flex items-center justify-center rounded-xl shadow-lg">
                        <h1 className="text-[#FF5349] font-semibold text-sm">🔍 Discover & Explore</h1>
                    </div>
                </div>


            </div>
        </div>
    )
}
<style jsx>{`
               @media (max-width: 1024px) {
                    .header-container {
                        width: 100%;
                        height: auto;
                        min-height: 100vh;
                    }

                    .main-content {
                        flex-direction: column;
                        padding-top: 50px;
                    }

                    .left-content {
                        padding-left: 40px;
                        padding-right: 40px;
                    }

                    .heading-container {
                        width: 100%;
                        height: auto;
                    }

                    .main-heading {
                        font-size: 60px;
                    }

                    .description-container {
                        width: 100%;
                        height: auto;
                    }

                    .description-text {
                        font-size: 18px;
                    }

                    .mobile-section {
                        height: 700px;
                        display: flex;
                        justify-content: center;
                        margin-top: 50px;
                    }

                    .mobile-img {
                        height: 700px;
                        width: auto;
                    }

                    .top-label {
                        top: 100px;
                        left: 50px;
                    }

                    .bottom-label {
                        bottom: 150px;
                        left: auto;
                        right: 50px;
                    }
                }

                /* Mobile Responsive - Phones */
                @media (max-width: 768px) {
                    .header-container {
                        width: 100%;
                        height: auto;
                        min-height: 100vh;
                        padding-bottom: 40px;
                    }

                    .logo-section {
                        padding-top: 30px;
                        width: 100%;
                        height: auto;
                        padding-left: 20px;
                        padding-right: 20px;
                    }

                    .logo-img {
                        width: 50px;
                        height: 50px;
                    }

                    .logo-text {
                        font-size: 28px;
                        width: auto;
                        height: auto;
                    }

                    .main-content {
                        flex-direction: column;
                        padding-top: 30px;
                    }

                    .left-content {
                        padding-left: 20px;
                        padding-right: 20px;
                        gap: 24px;
                    }

                    .heading-container {
                        width: 100%;
                        height: auto;
                    }

                    .main-heading {
                        font-size: 40px;
                        line-height: 1.2;
                    }

                    .description-container {
                        width: 100%;
                        height: auto;
                    }

                    .description-text {
                        font-size: 16px;
                        line-height: 1.6;
                    }

                    .description-text br {
                        display: none;
                    }

                    .button-container {
                        width: 100%;
                        height: auto;
                    }

                    .cta-button {
                        width: 100%;
                        height: 60px;
                        font-size: 20px;
                    }

                    .mobile-section {
                        height: 600px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 40px;
                    }

                    .mobile-img {
                        height: 500px;
                        width: auto;
                    }

                    .top-label {
                        top: 80px;
                        left: 20px;
                        width: 180px;
                        height: 40px;
                        transform: none;
                    }

                    .bottom-label {
                        bottom: 100px;
                        left: auto;
                        right: 20px;
                        width: 180px;
                        height: 40px;
                    }

                    .label-text {
                        font-size: 12px;
                    }
                }

                /* Extra Small Phones */
                @media (max-width: 480px) {
                    .main-heading {
                        font-size: 32px;
                    }

                    .description-text {
                        font-size: 14px;
                    }

                    .mobile-img {
                        height: 400px;
                    }

                    .mobile-section {
                        height: 500px;
                    }

                    .top-label {
                        top: 60px;
                        left: 10px;
                        width: 160px;
                    }

                    .bottom-label {
                        bottom: 80px;
                        right: 10px;
                        width: 160px;
                    }
                }
            `}</style>

export default header
