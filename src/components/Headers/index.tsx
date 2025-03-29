import { useNavigate } from "@/utils/useNavigate";
import Image from "next/image";
import { useState } from "react";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const navLinks = [
    { href: "/", text: "Home" },
    {
      href: "/about-us",
      text: "About Us",
    },
    {
      href: "/packages",
      text: "Packages",
      subMenu: [
        { href: "/packages/golf", text: "Cavendish Beach Golf" },
        { href: "/packages/romance", text: "PEI Romance Packages" },
        { href: "/packages/weddings", text: "Weddings & Events" },
      ],
    },
    {
      href: "/accommodation",
      text: "Accommodation",
      subMenu: [
        { href: "/accommodation/rooms", text: "Rooms & Suites" },
        { href: "/accommodation/amenities", text: "Groups & Meetings" },
      ],
    },
    {
      href: "/dining-entertainment",
      text: "Dining & Entertainment",
    },
    { href: "/enquiry", text: "Enquiry" },
  ];

  return (
    <header className="top-0 sticky z-[2] h-48 bg-primary flex items-center px-8">
      <div
        className="relative -bottom-6 min-w-[215px]"
        onClick={() => {
          navigate("/");
        }}
      >
        <Image
          src="/logo.webp"
          alt="Inn at the Pier"
          width={215}
          height={111}
          className="!w-[215px] !h-[111px] shrink-0 mt-4 cursor-pointer"
          draggable={false}
        />
      </div>

      {/* Desktop Navigation */}
      <nav
        className={`hidden lg:flex gap-8 text-white w-full justify-evenly text-nowrap`}
      >
        {navLinks.map((link) => (
          <div key={link.href} className="relative group">
            <a
              href={link.href}
              className="hover:text-gray-200 transition-colors"
            >
              {link.text}
            </a>
            {link.subMenu && (
              <div className="absolute hidden group-hover:block top-full left-0 bg-primary min-w-[200px] py-2 shadow-lg">
                {link.subMenu.map((subItem) => (
                  <a
                    key={subItem.href}
                    href={subItem.href}
                    className="block px-4 py-2 text-white hover:bg-primary-dark transition-colors"
                  >
                    {subItem.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Hamburger Menu Button */}
      <button
        className="lg:hidden ml-auto text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {isMobileMenuOpen ? (
            // X icon
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            // Hamburger icon
            <>
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden fixed top-0 left-0 right-0 bg-primary flex flex-col items-center py-4 z-[999] h-screen">
          <button
            className="absolute top-4 right-8 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-white py-2">
              {link.text}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
