import { Metadata } from "next";
import { Name } from "../../data/Name";
import Pagination from "./components/Pagination";

export const metadata: Metadata = {
    title: `Blog | ${Name}`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-between h-full">
            {children}
            <Pagination />
        </div>
    );
}
