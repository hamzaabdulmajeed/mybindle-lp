import iphone1 from "../assets/iPhone 14 Pro (2).png"
import iphone2 from "../assets/iPhone 14 Pro (3).png"

export default function Footer() {
    return (
        <section className="w-full min-h-[300px] bg-[#F2F2F2] py-20 md:px-60 mx-auto">
            <div className="bg-[#FF5349] md:pt-10 rounded-t-[20px]">

                <div className="min-h-[200px] mx-auto flex justify-center text-white">

                    {/* LEFT: Text (takes 2 columns) */}
                    <div className="flex-3 space-y-6">
                        <h2 className="text-[76px] font-bold leading-tight">
                            Join the Fun – Download <br /> MyBindle Now!
                        </h2>
                        <p className="text-[#FFFFFF] text-[22px] leading-tight ">
                            your Social Network, Your Way <br />
                            Download MyBindle Now and Be a Part <br /> of a Community That’s Always Evolving!
                        </p>
                        <div className="flex items-center gap-4 rounded-xl">
                            {/* App Store Button */}
                            <button className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-md hover:shadow-lg transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-black"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M16.365 1.43c0 1.14-.45 2.24-1.26 3.05-.81.81-1.92 1.26-3.06 1.23-.03-1.08.45-2.22 1.23-3.03.81-.81 1.92-1.29 3.09-1.25zm2.48 6.59c-.06-.03-2.4-1.11-4.98-1.11-1.95 0-3.57.81-4.77 2.28-1.02 1.23-1.56 2.88-1.53 4.53.03 1.74.57 3.18 1.5 4.26.81.99 1.92 1.56 3.18 1.56 1.26 0 1.83-.45 3.09-.45 1.26 0 1.71.45 3.12.45 1.23 0 2.46-.66 3.45-1.86.96-1.23 1.41-2.4 1.41-2.43-.03-.03-2.64-1.02-2.67-4.08-.03-2.55 2.07-3.75 2.1-3.75-.03 0-1.17-.36-2.9-.9z" />
                                </svg>
                                <div className="flex flex-col leading-tight text-left">
                                    <span className="text-[10px] text-gray-500 uppercase">
                                        Download on the
                                    </span>
                                    <span className="text-sm font-semibold text-black">App Store</span>
                                </div>
                            </button>

                            {/* Google Play Button */}
                            <button className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-md hover:shadow-lg transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M325.3 234.3 104.5 13.5c-4.8-4.8-11.8-6.2-17.9-3.7s-9.8 8.6-9.8 15v474.5c0 6.4 3.8 12.1 9.8 15s13 1.1 17.9-3.7l220.8-220.8c12.5-12.5 12.5-32.8 0-45.2zM372.6 256l90.5-90.5c9.4-9.4 9.4-24.6 0-33.9L421.5 89.9c-9.4-9.4-24.6-9.4-33.9 0l-84.1 84.1 69.1 69.1zM303.5 303.5l84.1 84.1c9.4 9.4 24.6 9.4 33.9 0l41.6-41.6c9.4-9.4 9.4-24.6 0-33.9L372.6 256l-69.1 47.5z" />
                                </svg>
                                <div className="flex flex-col leading-tight text-left">
                                    <span className="text-[10px] text-gray-500 uppercase">
                                        Get it on
                                    </span>
                                    <span className="text-sm font-semibold text-black">Google Play</span>
                                </div>
                            </button>
                        </div>


                    </div>


                    <div className="flex-2 flex justify-between gap-[90px] ">
                        <div className="min-h-[200px] top-[900px] flex flex-col-reverse">
                            <img
                                src={iphone2}
                                alt="Donation app preview left"
                                className="w-200 h-[200px] drop-shadow-lg"
                            />
                        </div>
                        <div className="top-[20px]">
                            <img
                                src={iphone1}
                                alt="Donation app preview right"
                                className="w-[400px] h-[480px] drop-shadow-xl ml-[-60px]" // move slightly left for overlap look
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
