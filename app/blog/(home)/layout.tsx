import Pagination from "@/components/Pagination";
import { Name } from "@/constants/constants";
import { Metadata } from "next";

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
