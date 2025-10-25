import iphone1 from "../assets/iPhone 14 Pro (2).png"
import iphone2 from "../assets/iPhone 14 Pro (3).png"

export default function Footer() {
    return (
        <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 md:py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-[#FF5349] md:h-[350px] pt-8 sm:pt-10 md:pt-12 rounded-t-2xl sm:rounded-t-3xl ">
                    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-white px-4 sm:px-6 md:px-10 lg:px-12 pb-0">
                        <div className="flex-2 space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left mb-8 lg:mb-0">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2">
                                Join the Fun – Download<br className="hidden sm:block" />
                                MyBindle Now!
                            </h2>
                            <p className="text-white/95 text-sm sm:text-base md:text-lg leading-relaxed px-2">
                                Your Social Network, Your Way<br className="hidden sm:block" />
                                Download MyBindle Now and Be a Part<br className="hidden sm:block" />
                                of a Community That's Always Evolving!
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2 px-2">
                                <button className="flex items-center gap-2 sm:gap-3 bg-white rounded-xl sm:rounded-xl px-2 sm:px-5 py-1 sm:py-3 shadow-md hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto max-w-xs">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M16.365 1.43c0 1.14-.45 2.24-1.26 3.05-.81.81-1.92 1.26-3.06 1.23-.03-1.08.45-2.22 1.23-3.03.81-.81 1.92-1.29 3.09-1.25zm2.48 6.59c-.06-.03-2.4-1.11-4.98-1.11-1.95 0-3.57.81-4.77 2.28-1.02 1.23-1.56 2.88-1.53 4.53.03 1.74.57 3.18 1.5 4.26.81.99 1.92 1.56 3.18 1.56 1.26 0 1.83-.45 3.09-.45 1.26 0 1.71.45 3.12.45 1.23 0 2.46-.66 3.45-1.86.96-1.23 1.41-2.4 1.41-2.43-.03-.03-2.64-1.02-2.67-4.08-.03-2.55 2.07-3.75 2.1-3.75-.03 0-1.17-.36-2.9-.9z" />
                                    </svg>
                                    <div className="flex flex-col items-start">
                                        <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase leading-tight">
                                            Download on the
                                        </span>
                                        <span className="text-xs sm:text-sm font-bold text-black">App Store</span>
                                    </div>
                                </button>
                                <button className="flex items-center gap-2 sm:gap-3 bg-white rounded-xl sm:rounded-xl px-2 sm:px-5 py-1 sm:py-3 shadow-md hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto max-w-xs">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M325.3 234.3 104.5 13.5c-4.8-4.8-11.8-6.2-17.9-3.7s-9.8 8.6-9.8 15v474.5c0 6.4 3.8 12.1 9.8 15s13 1.1 17.9-3.7l220.8-220.8c12.5-12.5 12.5-32.8 0-45.2zM372.6 256l90.5-90.5c9.4-9.4 9.4-24.6 0-33.9L421.5 89.9c-9.4-9.4-24.6-9.4-33.9 0l-84.1 84.1 69.1 69.1zM303.5 303.5l84.1 84.1c9.4 9.4 24.6 9.4 33.9 0l41.6-41.6c9.4-9.4 9.4-24.6 0-33.9L372.6 256l-69.1 47.5z" />
                                    </svg>
                                    <div className="flex flex-col items-start">
                                        <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase leading-tight">
                                            Get it on
                                        </span>
                                        <span className="text-xs sm:text-sm font-bold text-black">Google Play</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 lg:w-[300px] lg:flex gap-8 xl:gap-12 pb-0  relative ">
                            <img
                                src={iphone2}
                                alt="App preview"
                                className="absolute top-[122px] w-[10px] h-[200px] xl:w-[180px] xl:h-[180px] drop-shadow-2xl"
                            />
                            <img
                                src={iphone1}
                                alt="App preview main"
                                className="absolute right-[-65px] w-[20px] h-[336px] xl:w-[240px] xl:h-[302px] drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
