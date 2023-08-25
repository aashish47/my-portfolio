import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar />
                <div className="flex justify-center  min-h-screen">
                    <div className=" px-4 md:px-10 w-full lg:w-3/5 pt-40 pb-10">{children}</div>
                </div>
                <Footer />
            </body>
        </html>
    );
}
