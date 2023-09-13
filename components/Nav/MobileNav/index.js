import React from 'react'
import Link from "next/link";

function MobileNav({ isMenuOpen, toggleMenu, ulItems }) {
  return (
    <div>
      <div
        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isMenuOpen ? 'p-12 md:p-0 block' : 'hidden'
          }`}
      >
        <ul className="h-screen md:h-auto items-center justify-center md:flex text-skin-base-light">
          {ulItems.map((items, i) => (
            <Link href={items.link} onClick={toggleMenu}>
              <li className="pb-6 text-xl font-bold py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-dracula-cyan border-purple-900 md:hover:text-dracula-cyan md:hover:bg-transparent">
                {items.label}
              </li>
            </Link>
          ))}
          <Link href="/login" onClick={toggleMenu}>
            <li className="my-2 mx-6 px-16 py-2 text-center leading-none border rounded border-dracula-cyan hover:bg-dracula-cyan text-dracula-cyan hover:text-dracula-currentLine md:mt-0 mt-20">
              Login
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav