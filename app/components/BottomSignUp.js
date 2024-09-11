import Image from "next/image";
import Link from "next/link";

export default function BottomSignUp() {
    return (
        <div className="lg:w-[80%] w-full flex lg:flex-col flex-col items-center justify-between lg:px-24 px-8 lg:mt-20 mt-12 mx-auto lg:gap-10 gap-8">
            <div className="w-full flex lg:flex-col flex-col items-center bg-green rounded-xl lg:p-24 p-8 lg:gap-3 gap-4">
                <h1 className="lg:text-[38px] text-xl font-bold text-center leading-[1.2]">
                    Let`s Start Something Great
                </h1>
                <p className="lg:w-[65%] lg:text-[16px] text-xs text-center lg:leading-7 leading-5">
                    Sign up with your email adress to be informed about discounts and new recruits from all campaigns!
                </p>
                <div className='flex lg:flex-row flex-row items-center lg:mt-4 mt-1 gap-2'>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lg:w-4 w-3 lg:h-4 h-3 stroke-gray-primary">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                        </div>
                        <input type="text" placeholder="Enter your email" className="block w-full lg:text-sm text-xs text-gray-primary placeholder-gray-primary font-normal lg:py-4 py-3 ps-10 pe-32 rounded-full border border-gray-secondary focus:outline-none focus:border-blue" />
                        <div class="absolute inset-y-0 end-0 flex items-center m-[5px]">
                            <button className='lg:text-sm text-xs font-medium bg-blue text-white-primary lg:px-7 px-5 lg:py-3 py-2 rounded-full'>Free Trial</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}