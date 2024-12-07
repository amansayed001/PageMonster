"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export function Navbar() {
    const pathname = usePathname();

    return (
        <div className="border-b py-4 container mx-auto">
            <h2 className="text-center scroll-m-20 pb-2 text-3xl font-bold">
                Page
                <span className="text-[#0652DD]">
                    Monster
                </span>
            </h2>

            <nav>
                <ul className="flex flex-row justify-evenly items-center">
                    <li className={`text-lg font-semibold ${(pathname === '/') ? 'text-[#0652DD]' : 'hover:text-[#0652DD]'}`}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`text-lg font-semibold ${(pathname === '/my-pages') ? 'text-[#0652DD]' : 'hover:text-[#0652DD]'}`}>
                        <Link href="/my-pages">My Pages</Link>
                    </li>
                    <li className={`text-lg font-semibold ${(pathname === '/about') ? 'text-[#0652DD]' : 'hover:text-[#0652DD]'}`}>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
