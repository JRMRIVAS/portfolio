'use client';

import Link from "next/link";
import { usePathname } from "next/navigation"

const links = [
    {
        name: 'inicio',
        path: '/'
    },
    {
        name: 'perfil',
        path: '/resume'
    },
    // {
    //     name: 'variantes',
    //     path: '/variantes'
    // },
    {
        name: 'proyectos',
        path: '/work'
    },
    {
        name: 'contacto',
        path: '/contact'
    },
]

export default function Nav() {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link href={link.path} key={index} className={`${link.path === pathname &&
                    "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                    {link.name}
                </Link>
            })}
        </nav>
    )
}
