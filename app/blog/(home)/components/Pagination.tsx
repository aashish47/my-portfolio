"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { TotalPages } from "../constants/constants";

const Pagination = () => {
    const slug = useParams().slug || "1";
    return (
        <div className="flex gap-2 flex-wrap">
            {Array.from({ length: TotalPages }, (_, i) => {
                const pageNumber = i + 1;
                const isCurrentPage = slug === pageNumber.toString();
                return (
                    <Link
                        key={pageNumber}
                        href={`/blog/page/${i + 1}`}
                    >
                        <div className={`${isCurrentPage ? "bg-zinc-600" : "bg-zinc-900"}  p-2 flex justify-center items-center  w-8 h-8 `}>{i + 1}</div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Pagination;
