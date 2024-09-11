export default function Footer() {
    return (
        <div className="w-full flex lg:flex-row flex-row flex-wrap items-center justify-center bg-blue lg:px-24 px-6 lg:py-8 py-4 mt-12 lg:gap-24 gap-6">
            <h6 className="lg:text-sm text-[10px] text-white-primary font-light">© {new Date().getFullYear()} Newsify. All rights reserved.</h6>
        </div>
    );
}