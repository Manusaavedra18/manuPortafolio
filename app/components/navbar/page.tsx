"use client"

import { useState } from "react"
import Link from "next/link"
import { faBars,faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: "Home", link: "/" },
        { name: "Experience", link: "/components/experience" },
        { name: "Projects", link: "/components/projects" },
        { name: "Contact", link: "/components/contact" },
    ]

    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <div className="px-4 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-foreground">Portfolio</div>
                <button
                    className="lg:hidden text-foreground focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <FontAwesomeIcon icon={faX} size="2xl" />
                    ) : (
                        <FontAwesomeIcon icon={faBars} size="2xl" />
                    )}
                </button>
                <div className="hidden lg:flex gap-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className="content-center text-center w-20 h-10 hover:bg-accent hover:text-accent-foreground hover:rounded transition duration-500 ease-in-out"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden flex flex-col gap-3 px-4 py-4 bg-background border-t border-border absolute top-full left-0 w-full z-50">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className="block text-center py-2 hover:bg-accent hover:text-accent-foreground hover:rounded transition duration-500 ease-in-out"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar