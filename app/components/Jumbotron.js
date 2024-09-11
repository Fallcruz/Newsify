import Image from "next/image";
import Link from "next/link";

export default function Jumbotron() {
    return (
        <div className="w-full flex lg:flex-row flex-col-reverse items-center justify-between lg:px-24 px-8 mt-12 lg:gap-0 gap-8">
            <div className="basis-[52%] flex flex-col justify-center gap-3">
                <h4 className="flex items-center lg:text-base text-sm font-normal">Hey,Everyone<Image className="lg:w-6 w-5 lg:h-6 h-5 ms-1" src="/img/bye-icon.png" width={24} height={24} alt="image" quality={100}/></h4>
                <h1 className="lg:text-[60px] text-4xl font-bold leading-[1.2]">
                    Newsify is the email newsletter that works completely automated
                </h1>
                <p className="lg:text-base text-sm mt-3">
                    Track connections in real time. See who your <br /> community being lead by and find the most active
                </p>
                <div className='flex lg:flex-row flex-row items-center mt-4 gap-2'>
                    <input type="text" placeholder="Your email address" className="lg:text-sm text-sm text-gray-primary placeholder-gray-primary font-normal lg:py-3 py-2 ps-6 pe-3 rounded-full border border-gray-secondary focus:outline-none focus:border-blue" />
                    <button className='lg:text-sm text-sm font-medium bg-blue text-white-primary lg:px-8 px-5 lg:py-3 py-2 rounded-full'>Register</button>
                </div>
            </div>
            <div className="basis-[40%] flex flex-col justify-center">
                <Image src="/img/jumbotron.png" width={500} height={500} alt="image" quality={100}/>
            </div>
        </div>
    );
}