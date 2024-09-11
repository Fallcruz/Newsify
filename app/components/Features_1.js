import Image from "next/image";
import Link from "next/link";

export default function Features_1() {
    return (
        <div className="lg:w-[80%] w-full flex lg:flex-col flex-col items-center justify-between lg:px-24 px-8 lg:mt-20 mt-12 mx-auto lg:gap-10 gap-8">
            <div className="w-full flex lg:flex-col flex-col items-center lg:gap-10 gap-8">
                <div className="lg:w-[70%] w-full flex flex-col justify-center lg:gap-3 gap-4">
                    <h1 className="lg:text-[42px] text-2xl font-bold text-center leading-[1.2]">
                        Let Your Newsletter Do the talk
                    </h1>
                    <p className="lg:text-[16px] text-xs text-center lg:leading-7 leading-5">
                        Let`s clam it , today we don`t the time to talk or time to scroll over groups or other plateforms . So it is better for your automated newsletter to do the tlk. What cloud be done better? Stay connected to your community.
                    </p>
                </div>
                <div className="w-[100%] flex flex-col justify-center">
                    <Image className="w-full" src="/img/img-features_1.png" width={1000} height={1000} alt="image" quality={100}/>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col min-h-max gap-4">
                <div className="w-[100%] h-full flex flex-col">
                    <div className="w-full flex flex-col bg-white-secondary p-6 pt-12 pb-8 lg:gap-4 gap-3">
                        <h4 className="lg:text-base text-sm font-bold">Direct Connections</h4>
                        <p className="lg:text-[14px] text-[12px] lg:leading-6 leading-5">
                            No logins or anything is needed. Directly connect with everyone with only one permission. Let us control your business world for you. Easy, customizable and quick way of connecting with others
                        </p>
                    </div>
                </div>
                <div className="w-[100%] h-full flex flex-col">
                    <div className="w-full flex flex-col bg-blue text-white-primary p-6 pt-12 pb-8 lg:gap-4 gap-3">
                        <h4 className="lg:text-base text-sm font-bold">Don`t let the team stagenate</h4>
                        <p className="lg:text-[14px] text-[12px] lg:leading-6 leading-5">
                            Don`t let the team get board by unnecessary messages. Let your team stay connected in the way they should- only important things. Rest could stay in other apps, we take the important part.
                        </p>
                    </div>
                </div>
                <div className="w-[100%] h-[100%] flex flex-col">
                    <div className="w-full flex flex-col bg-white-secondary p-6 pt-12 pb-8 lg:gap-4 gap-3">
                        <h4 className="lg:text-base text-sm font-bold">Complete Automated</h4>
                        <p className="lg:text-[14px] text-[12px] lg:leading-6 leading-5">
                            Your members need to stay active? You can craete polls, feedback papers and a lot more stuff our widgets to keep them connected and everything with one click
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}