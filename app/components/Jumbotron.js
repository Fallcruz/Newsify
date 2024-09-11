import Image from "next/image";
import Link from "next/link";

export default function Jumbotron() {
    return (
        <div className="w-full flex lg:flex-row flex-col-reverse items-center justify-between lg:px-24 px-8 mt-12 lg:gap-0 gap-12">
            <div className="basis-[52%] flex flex-col justify-center gap-3">
                <h4 className="flex items-center lg:text-base text-sm font-normal">Hey,Everyone<Image className="lg:w-6 w-5 lg:h-6 h-5 ms-1" src="/img/bye-icon.png" width={24} height={24} alt="image" quality={100}/></h4>
                <h1 className="lg:text-[60px] text-4xl font-bold leading-[1.2]">
                    Newsify is the email newsletter that works completely automated
                </h1>
                <p className="lg:text-base text-sm mt-3">
                    Track connections in real time. See who your <br /> community being lead by and find the most active
                </p>
                <div className='flex lg:flex-row flex-row items-center mt-4 gap-2'>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lg:w-4 w-4 lg:h-4 h-4 stroke-gray-primary">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                        </div>
                        <input type="text" placeholder="Search" className="block w-full lg:text-sm text-sm text-gray-primary placeholder-gray-primary font-normal lg:py-3 py-2 ps-9 pe-3 rounded-full border border-gray-secondary focus:outline-none focus:border-blue" />
                    </div>
                    <button className='lg:text-sm text-sm font-medium bg-blue text-white-primary lg:px-8 px-5 lg:py-3 py-2 rounded-full'>
                        <Link href='/'>Register</Link>
                    </button>
                </div>
            </div>
            <div className="basis-[40%] flex flex-col justify-center">
                <Image src="/img/jumbotron.png" width={500} height={500} alt="image" quality={100}/>
            </div>
        </div>
    );
}