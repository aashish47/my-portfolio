"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavBar = () => {
    const pathName = usePathname();
    const navItems = [
        { name: "home", link: "/" },
        { name: "projects", link: "/projects" },
        { name: "blog", link: "/blog" },
        { name: "uses", link: "/uses" },
    ];
    const [selected, setSelected] = useState("/");

    useEffect(() => {
        const segment = pathName.match(/\/[^/]*/)?.[0];
        if (segment) {
            setSelected(segment);
        }
    }, [pathName]);

    return (
        <nav className=" py-6 pl-4 md:pl-10 flex flex-wrap fixed bg-zinc-950 w-screen ">
            {navItems.map(({ name, link }) => (
                <Link
                    key={name}
                    className={`
                    ${link === selected ? " text-white underline underline-offset-4" : "hover:text-white active:text-zinc-600 text-zinc-400"} 
                    mr-4 capitalize transition`}
                    href={link}
                >
                    {name}
                </Link>
            ))}
        </nav>
    );
};

export default NavBar;
