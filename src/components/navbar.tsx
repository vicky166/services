"use client"

import { Menu, Search,  } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-[#2F5649] text-white">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden text-white hover:text-white/90">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#2F5649] text-white border-r-0">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HuPrBYoUWzxeUZOuCPoJ0I2NR5aFUp.png"
              alt="Nexus Clinic"
              className="h-10 w-auto"
            />
          </Link>
          <div className="grid gap-2 py-6">
            <Link href="#" className="block py-2 text-lg font-semibold hover:text-white/90">
              Aesthetic Clinic
            </Link>
            <Link href="#" className="block py-2 text-lg font-semibold hover:text-white/90">
              The Face
            </Link>
            <Link href="#" className="block py-2 text-lg font-semibold hover:text-white/90">
              The Body
            </Link>
            <Link href="#" className="block py-2 text-lg font-semibold hover:text-white/90">
              Fat & Weight Loss
            </Link>
            <Link href="#" className="block py-2 text-lg font-semibold hover:text-white/90">
              Hair Loss Treatment
            </Link>
            <Link href="#" className="block py-2 text-lg font-semibold hover:text-white/90">
              Female Only
            </Link>
            <Link href="#" className="block py-2 text-lg font-semibold hover:text-white/90">
              Male Only
            </Link>
            <Link href="#" className="block py-2 text-lg font-semibold hover:text-white/90">
              Medi Spa
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 hidden lg:flex">
        <img
          src="/img/logo.png"
          alt="Nexus Clinic"
          className="h-10 w-auto"
        />
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="gap-1">
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10"
            >
              Aesthetic Clinic
            </Link>
          </NavigationMenuLink>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10">
              The Face
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 bg-[#2F5649] text-white">
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <div className="text-sm font-medium leading-none">Treatment 1</div>
                    <p className="line-clamp-2 text-sm leading-snug text-white/70">Face treatment description</p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10">
              The Body
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 bg-[#2F5649] text-white">
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <div className="text-sm font-medium leading-none">Treatment 1</div>
                    <p className="line-clamp-2 text-sm leading-snug text-white/70">Body treatment description</p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10">
              Fat & Weight Loss
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 bg-[#2F5649] text-white">
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <div className="text-sm font-medium leading-none">Program 1</div>
                    <p className="line-clamp-2 text-sm leading-snug text-white/70">Weight loss program description</p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10">
              Hair Loss Treatment
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 bg-[#2F5649] text-white">
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <div className="text-sm font-medium leading-none">Treatment 1</div>
                    <p className="line-clamp-2 text-sm leading-snug text-white/70">Hair loss treatment description</p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10">
              Female only
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 bg-[#2F5649] text-white">
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <div className="text-sm font-medium leading-none">Treatment 1</div>
                    <p className="line-clamp-2 text-sm leading-snug text-white/70">Body treatment description</p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10">
              Male only
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 bg-[#2F5649] text-white">
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <div className="text-sm font-medium leading-none">Treatment 1</div>
                    <p className="line-clamp-2 text-sm leading-snug text-white/70">Body treatment description</p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10">
              Medi Spa
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 bg-[#2F5649] text-white">
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <div className="text-sm font-medium leading-none">Treatment 1</div>
                    <p className="line-clamp-2 text-sm leading-snug text-white/70">Body treatment description</p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10"
            >
              Cart
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto flex items-center gap-4">
      <button className="text-white hover:text-white/90">
          <Search className="h-6 w-6" />
        </button>
        
        <Button className="bg-[#E5D5CA] text-[#2F5649] hover:bg-[#E5D5CA]/90">Book Now</Button>
        <div className="relative group">
          <button className="text-white hover:text-white/90">
            <Menu className="h-6 w-6" />
          </button>
          <div className="absolute right-0 mt-2 w-40 bg-[#2F5649] text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Link href="/profile" className="block px-4 py-2 hover:bg-white/10">Profile</Link>
            <Link href="/settings" className="block px-4 py-2 hover:bg-white/10">Settings</Link>
            <Link href="/logout" className="block px-4 py-2 hover:bg-white/10">Logout</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

