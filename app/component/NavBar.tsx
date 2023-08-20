"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
    const navItems = ["home", "projects", "blogs", "contact"];
    const [selected, setSelected] = useState(0);

    return (
        <nav className="bg-gray-800 p-6 text-white">
            {navItems.map((item, index) => (
                <Link
                    onClick={() => setSelected(index)}
                    key={item}
                    className={`${index === selected ? " text-fuchsia-400 " : "hover:text-yellow-200"} ml-4 capitalize hover:cursor-pointer transition`}
                    href={`/${item === "home" ? "" : item}`}
                >
                    {item}
                </Link>
            ))}
        </nav>
    );
};

export default NavBar;
