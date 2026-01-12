'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
    const pathname = usePathname()
    return (
        <nav className="sticky top-0 bg-green-200">
            <ul className="list-none p-0 m-0 flex flex-row flex-wrap lg:justify--between">
                <li className="grow p-0 w-1/2 border border-black border-solid box-border lg:w-32 lg:grow-0">
                    <Link className={` leading-[3] min-h-[45px] no-underline block text-black text-center hover:bg-green-400 ${pathname === '/' ? 'bg-green-200 text-black' : ''}`} href="/">Home</Link>
                </li>
                <li className="grow p-0 w-1/2 border border-black border-solid box-border lg:w-32 lg:grow-0">
                    <Link className={`link leading-[3] min-h-[45px] no-underline block text-black text-center hover:bg-green-400 ${pathname === '/about' ? 'bg-green-200 text-black' : ''}`}  href="/about">About Us</Link>
                </li>
                <li className="grow p-0 w-1/2 border border-black border-solid box-border lg:w-32 lg:grow-0">
                    <Link className={`link leading-[3] min-h-[45px] no-underline block text-black text-center hover:bg-green-400 ${pathname === '/news' ? 'bg-green-200 text-black' : ''}`}  href="/news">News</Link>
                </li>
                <li className="grow p-0 w-1/2 border border-black border-solid box-border lg:w-32 lg:grow-0">
                    <Link className={`link leading-[3] min-h-[45px] no-underline block text-black text-center hover:bg-green-400 ${pathname === '/kids' ? 'bg-green-200 text-black' : ''}`}  href="/kids">Kids</Link>
                </li>
                <li className="grow p-0 w-1/2 border border-black border-solid box-border lg:w-32 lg:grow-0">
                    <Link className={`link leading-[3] min-h-[45px] no-underline block text-black text-center hover:bg-green-400 ${pathname === '/dashboard' ? 'bg-green-200 text-black' : ''}`}  href="/dashboard">Dashboard</Link>
                </li>
        </ul>
        </nav>
        )
}
