import "./globals.scss";

export const metadata = {
    title: "Newsify",
    description: "Newsify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="max-w-[1600px] mx-auto bg-grey-08">
                {children}
            </body>
        </html>
    );
}
