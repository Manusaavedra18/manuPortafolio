import Link from "next/link"

const Navbar = () => {
    const navItems = [
        { name: "Home", link: "/" },
        { name: "Experience", link: "#" },
        { name: "Projects", link: "#" },
        { name: "Contact", link: "#" },
    ]

    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <div className="px-4 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-foreground">Portfolio</div>
                <div className="flex gap-3">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.link} className="content-center text-center w-20 h-10 hover:bg-accent hover:text-accent-foreground hover:rounded transition duration-500 ease-in-out">{item.name}</Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar