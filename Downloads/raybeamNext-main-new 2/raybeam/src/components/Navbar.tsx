'use client';
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hideMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#F5F5F7]">
      <div className="flex items-center justify-between px-4 sm:px-16 py-4 max-w-[1500px] mx-auto">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <p className="font-bold text-lg">Raybeam Digital</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <ul className="flex justify-center gap-8 text-gray-700 font-semibold ">
            <li>
              <Link
                href="/"
                className="menu-hover transition-all duration-500 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className="menu-hover transition-all duration-500 ease-in-out"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/clients"
                className="menu-hover transition-all duration-500 ease-in-out"
              >
                Clients
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="menu-hover transition-all duration-500 ease-in-out"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className="menu-hover transition-all duration-500 ease-in-out"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/faqs"
                className="menu-hover transition-all duration-500 ease-in-out"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                className="menu-hover transition-all duration-500 ease-in-out"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu and close icon */}
        {isOpen ? (
          <IoMdClose
            onClick={toggleMenu}
            className="text-gray-700 cursor-pointer lg:hidden"
            size={30}
          />
        ) : (
          <GiHamburgerMenu
            onClick={toggleMenu}
            className="text-gray-700 cursor-pointer lg:hidden"
            size={30}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-3/5 h-full bg-white shadow-lg z-50 transition-transform duration-500 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center gap-2 p-4">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <p className="font-bold text-lg">Raybeam Digital</p>
          </div>
          <ul className="flex flex-col items-start p-4 pl-6 text-gray-700 font-semibold">
            <li className="py-3">
              <Link href="/" onClick={hideMenu}>
                Home
              </Link>
            </li>
            <li className="py-3">
              <Link href="/aboutus" onClick={hideMenu}>
                About us
              </Link>
            </li>
            <li className="py-3">
              <Link href="/clients" onClick={hideMenu}>
                Clients
              </Link>
            </li>
            <li className="py-3">
              <Link href="/services" onClick={hideMenu}>
                Services
              </Link>
            </li>
            <li className="py-3">
              <Link href="/reviews" onClick={hideMenu}>
                Reviews
              </Link>
            </li>
            <li className="py-3" onClick={hideMenu}>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li className="py-3" onClick={hideMenu}>
              <Link href="/contactus">Contact us</Link>
            </li>
            <li className="flex justify-center w-full mt-8">
              <button className="rounded-full bg-white text-black px-6 py-2 font-bold shadow-custom text-sm sm:text-sm">
                Book us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
