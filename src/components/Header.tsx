import Link from "next/link";
import { Button } from "./ui/button";


//components
import Nav from "./Nav"
import MobileNav from "./MobileNav";



export default function Header() {


    return (
        <header className="py-8 xl:py-12 text-white ">
            <div className="container mx-auto px-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Rodrigo<span className="text-accent">.</span>
                    </h1>
                </Link>

                {/* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="/contact">
                        <Button >Colaboremos</Button>
                    </Link>
                </div>
                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}
