import Image from "next/image";
import Link from "next/link";

export default function Features_1() {
    return (
        <div className="lg:w-[80%] w-full flex lg:flex-col flex-col items-center justify-between lg:px-24 px-8 lg:mt-20 mt-12 mx-auto lg:gap-10 gap-8">
            <div className="lg:w-[70%] w-full flex flex-col justify-center gap-3">
                <h1 className="lg:text-[42px] text-2xl font-bold text-center leading-[1.2]">
                    Let Your Newsletter Do the talk
                </h1>
                <p className="lg:text-[16px] text-xs text-center lg:leading-7 leading-5 mt-3">
                    Let`s clam it , today we don`t the time to talk or time to scroll over groups or other plateforms . So it is better for your automated newsletter to do the tlk. What cloud be done better? Stay connected to your community.
                </p>
            </div>
            <div className="w-[100%] flex flex-col justify-center">
                <Image className="w-full" src="/img/img-features_1.png" width={1000} height={1000} alt="image" quality={100}/>
            </div>
        </div>
    );
}