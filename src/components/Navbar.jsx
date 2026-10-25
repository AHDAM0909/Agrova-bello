import{ useState } from 'react'
import { Menu, X, Leaf, ArrowUpRight } from "lucide-react";
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Products", href: "#products" },
  { name: "Our Farm", href: "#farm" },
  { name: "Bulk Orders", href: "#bulk-orders" },
  { name: "Contact", href: "#contact" },
];
const Navbar = () => {
  const[isMenuOpen, setIsMenuOpen] = useState(false);
  return (
     <header className="sticky top-0 z-50 bg-[#F7F5EC]/95 backdrop-blur-md border-b border-green-900/10">
       <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Leaf className="text-[#173F2A]" size={30} />
          <span className="text-2xl font-extrabold tracking-tight text-[#173F2A]">
            Agrova
          </span>
        </a>
          {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#202820] hover:text-[#5B8C51] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
         {/* Desktop CTA */}
        <a
          href="#bulk-orders"
          className="hidden lg:inline-flex items-center gap-2 bg-[#173F2A] text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#5B8C51] transition-colors"
        >
          Request a Quote
          <ArrowUpRight size={17} />
        </a>
        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden text-[#173F2A]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
       </nav>
       {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#F7F5EC] border-t border-green-900/10 px-5 py-5">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[#173F2A] font-medium hover:text-[#5B8C51]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#bulk-orders"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#173F2A] text-white text-center py-3 rounded-full font-semibold"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
     </header>
  )
}

export default Navbar