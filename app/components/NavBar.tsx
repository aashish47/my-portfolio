"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
    const navItems = ["home", "projects", "blogs", "uses"];
    const [selected, setSelected] = useState(0);

    return (
        <nav className=" py-6 pl-4 md:pl-10 flex flex-wrap fixed bg-neutral-900 w-screen ">
            {navItems.map((item, index) => (
                <Link
                    onClick={() => setSelected(index)}
                    key={item}
                    className={`
                    ${index === selected ? " text-white underline underline-offset-4" : "hover:text-white active:text-neutral-600 text-neutral-400"} 
                    mr-4 capitalize transition`}
                    href={`/${item === "home" ? "" : item}`}
                >
                    {item}
                </Link>
            ))}
        </nav>
    );
};

export default NavBar;
