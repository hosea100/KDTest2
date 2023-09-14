"use client";
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import { Icon } from "@iconify/react";
import MobileNav from './MobileNav';

const NavItems = [
  {
    label: "ABOUT",
    key: "about",
    icon: "",
    link: "#about",
  },
  {
    label: "PRICING",
    key: "pricing",
    icon: "",
    link: "#pricing",
  },
  {
    label: "CONTACT",
    key: "contact",
    icon: "",
    link: "#contact",
  },
]

function Nav() {
  const [navbar, setNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 right-0 z-10 transition-all filter font-montserrat ${navbar ? `bg-dracula-comment`: `bg-transparent`}`}>
      <div className={`justify-between px-4 mx-auto md:items-center md:flex md:px-8 ${isMenuOpen ? `bg-dracula-comment` : ``}`}>
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <Link href="/">
              <div className='grid grid-cols-2 text-center'>
                <Icon
                  icon="oi:globe"
                  className="text-align text-dracula-foreground"
                  style={{ cursor: "pointer", fontSize: "40px" }}
                />
                <h2 className="text-2xl text-dracula-foreground font-bold ">Home</h2>
              </div>
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <Icon
                    icon="ic:round-close"
                    className=""
                    style={{ cursor: "pointer", fontSize: "24px" }}
                  />
                ) : (
                  <Icon
                    icon="ic:round-menu"
                    className=""
                    style={{ cursor: "pointer", fontSize: "24px" }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} ulItems={NavItems} />
      </div>
    </nav>
  )
}

export default Nav