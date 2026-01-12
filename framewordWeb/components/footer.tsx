'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Footer(){
    const pathname = usePathname()
    return(
        <footer className = "bg-green-200">
            <ul className="list-none p-0 m-0 flex flex-row flex-wrap">
                <li className="grow p-0 w-1/2 border border-black border-solid box-border lg:w-32 lg:grow-0">
                    <Link className={`link leading-[3] min-h-[45px] no-underline block text-black text-center hover:bg-green-400 ${pathname === '/' ? 'bg-green-200 text-black' : ''}`} href="/">Home</Link>
                </li>
                 <li className="grow p-0 w-1/2 border border-black border-solid box-border lg:w-32 lg:grow-0">
                    <Link className={`link leading-[3] min-h-[45px] no-underline block text-black text-center hover:bg-green-400 ${pathname === '/' ? 'bg-green-200 text-black' : ''}`} href="/animals">View our animals</Link>
                </li>
                 <li className="grow p-0 w-1/2 border border-black border-solid box-border lg:w-32 lg:grow-0">
                    <Link className={`link leading-[3] min-h-[45px] no-underline block text-black text-center hover:bg-green-400 ${pathname === '/' ? 'bg-green-200 text-black' : ''}`} href="/news">Recent News</Link>
                </li>
            </ul>
        </footer>
    )
}