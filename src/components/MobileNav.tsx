'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"
import { useState } from "react"
import { DialogTitle } from "@radix-ui/react-dialog"

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

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar el Sheet
    const rutita = usePathname();

    const handleLinkClick = () => {
        setIsOpen(false); // Cierra el Sheet al hacer clic en un enlace
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-3xl text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
            <DialogTitle className="sr-only">Menú de navegación</DialogTitle>
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/" onClick={handleLinkClick}>
                        <h1 className="text-4xl font-semibold">
                            Rodrigo<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                onClick={handleLinkClick} // Cierra el Sheet al hacer clic
                                className={`${link.path === rutita &&
                                    "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}
