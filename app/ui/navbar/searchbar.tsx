"use client"
import Link from 'next/link'
import SearchForm from './search-form'
import { usePathname } from 'next/navigation'


export default function Searchbar() {

    const navlinks = [
        {
            name: 'Log in',
            link: '/log-in'
        },
        {
            name: 'Sign up',
            link: '/sign-up'
        }
    ]

    const pathname = usePathname()

    return (
        <div className='flex  justify-end items-center gap-5 '>
            <SearchForm />
            <div>
                <ul className='flex'>
                {navlinks.map((navlink) => {
                    return (<li key={navlink.name} className='ml-8'><Link href={navlink.link} className={` px-4 py-2 rounded-2xl
                    ${pathname == navlink.link? "bg-black text-white " : ""}`}>{navlink.name}</Link></li>)
                })}
                </ul>
            </div>
        </div>
    )
}
