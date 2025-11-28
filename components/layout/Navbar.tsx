"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs"
import { useIsMobile } from "@/hooks/use-mobile"

const mobileMenuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Catalogo",
    href: "/products",
  },
  {
    title: "About",
    href: "/about",
  },
]

export default function Navbar() {
  const isMobile = useIsMobile()

  return (
    
    <nav className="w-full border-b bg-rose-950 fixed top-0 z-50"> 
      <div className="max-w-7xl mx-auto h-16 flex items-center md:justify-between lg:justify-between p-4">
        

        <div className="flex items-center gap-6">
          <Link href="/" className="text-white hover:text-black font-medium md:mr-2">
            <img className="sm:w-40 sm:h-10.8 md:w-58 md:h-15.5 lg:w-auto lg:h-auto" src="/Logo-_1_.svg" alt="Logo" />
          </Link>
        </div>

        <div className="hidden md:flex items-center md:justify-center md:mr-2 md:gap-4 lg:gap-24">
          <Link href="/" className="text-white hover:text-black font-medium">
            Home
          </Link>
          <Link href="/products" className="text-white hover:text-black font-medium">
            Catalogo
          </Link>
          <Link href="/about" className="text-white hover:text-black font-medium">
            About
          </Link>

        </div>

    
        {isMobile && (
          <div className="md:hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white bg-grey-900 hover:bg-transparent hover:text-black">
                    Menu
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      {mobileMenuItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link 
                              href={item.href} 
                              className="block bg-gray-900 text-sm text-amber-50 font-medium hover:text-rose-600 transition-colors"
                            >
                              {item.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}

        <div className="flex items-center justify-between gap-6 md:ml-5">
          <div className="flex items-center md:gap-0 lg:gap-4">
            <SignedOut>
              <SignInButton>
                <button className="text-white  hover:text-black font-medium cursor-pointer md:ml-2">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-grey-900 text-white hover:text-black rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          <div className={isMobile ? "hidden" : "flex items-center gap-4"}>
            <Link href="/favoritos" className="text-white hover:text-black font-medium">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </Link>
            <Link href="/carrito" className="text-white hover:text-black font-medium">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}