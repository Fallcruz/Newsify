import Image from "next/image";
import Link from "next/link";

export default function Features_2() {
    return (
        <div className="lg:w-[80%] w-full flex lg:flex-col flex-col items-center justify-between lg:px-24 px-8 lg:mt-20 mt-12 mx-auto lg:gap-10 gap-8">
            <div className="w-full flex lg:flex-col flex-col items-center lg:gap-10 gap-8">
                <div className="lg:w-[70%] w-full flex flex-col justify-center lg:gap-3 gap-4">
                    <h1 className="lg:text-[42px] text-2xl font-bold text-center leading-[1.2]">
                        More than a Newsletter
                    </h1>
                    <p className="lg:text-[16px] text-xs text-center lg:leading-7 leading-5">
                        Unlock the automated quality experience for everyone in the team.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-14">
                    <div className="flex flex-col lg:gap-12 gap-8">
                        <Image className="w-full" src="/img/img-features_2-1.png" width={1000} height={1000} alt="image" quality={100}/>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col lg:gap-4 gap-3">
                                <h4 className="lg:text-2xl text-base font-bold leading-[1.2]">Collect the needed information and see the result easily</h4>
                                <p className="lg:text-[14px] text-xs lg:leading-6 leading-5">
                                    Help your members find what matters to them Collect informations and creates graphics for them to understand their values. To have a smooth experience all members need a bit of guidence.
                                </p>
                            </div>
                            <button className='w-fit lg:text-sm text-xs font-medium bg-blue text-white-primary lg:px-8 px-5 lg:py-3 py-2 rounded-full'>Get start for free</button>
                        </div>
                    </div>
                    <div className="flex flex-col lg:gap-12 gap-8">
                        <Image className="w-full" src="/img/img-features_2-2.png" width={1000} height={1000} alt="image" quality={100}/>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col lg:gap-4 gap-3">
                                <h4 className="lg:text-2xl text-base font-bold leading-[1.2]">Use the analyzer AI to track
                                your reports</h4>
                                <p className="lg:text-[14px] text-xs lg:leading-6 leading-5">
                                    A strong community could be lead by a strong guidence only. The guide in this tour may be automized already. Our analyzier Ai will track the parameters and will come real life reports
                                </p>
                            </div>
                            <button className='w-fit lg:text-sm text-xs font-medium bg-blue text-white-primary lg:px-8 px-5 lg:py-3 py-2 rounded-full'>Get start for free</button>
                        </div>
                    </div>
                    <div className="flex flex-col lg:gap-12 gap-8">
                        <Image className="w-full" src="/img/img-features_2-3.png" width={1000} height={1000} alt="image" quality={100}/>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col lg:gap-4 gap-3">
                                <h4 className="lg:text-2xl text-base font-bold leading-[1.2]">Publish in one touch</h4>
                                <p className="lg:text-[14px] text-xs lg:leading-6 leading-5">
                                    Everything is under you control you can schedule your announcement plan your feeds and create posts with one click Being the right thing in the right time.
                                </p>
                            </div>
                            <button className='w-fit lg:text-sm text-xs font-medium bg-blue text-white-primary lg:px-8 px-5 lg:py-3 py-2 rounded-full'>Get start for free</button>
                        </div>
                    </div>
                    <div className="flex flex-col lg:gap-12 gap-8">
                        <Image className="w-full" src="/img/img-features_2-4.png" width={1000} height={1000} alt="image" quality={100}/>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col lg:gap-4 gap-3">
                                <h4 className="lg:text-2xl text-base font-bold leading-[1.2]">Connection is the key</h4>
                                <p className="lg:text-[14px] text-xs lg:leading-6 leading-5">
                                    When a member replied to another, they get the connection flow. This way we improve general efficeny of the team
                                </p>
                            </div>
                            <button className='w-fit lg:text-sm text-xs font-medium bg-blue text-white-primary lg:px-8 px-5 lg:py-3 py-2 rounded-full'>Get start for free</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}