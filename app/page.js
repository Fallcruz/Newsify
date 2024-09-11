import Image from "next/image";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

export default function Home() {
    return (
        <main className="">
            <div className="promotion flex bg-green items-center justify-center p-[9px] lg:gap-4 gap-2">
                <button className="bg-blue text-white-primary rounded-full lg:px-6 px-4 py-2">
                    <p className="lg:text-xs text-[10px] font-medium">New</p>
                </button>
                <p className="lg:text-xs text-[10px] font-normal">
                    Using Teamly is a manifesto in itself. It is simply the best choice for your email marketing
                </p>
            </div>
            <Navbar />
            <Jumbotron />
            <div className="w-full h-48"></div>
        </main>
    );
}
