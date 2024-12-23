"use client";

import { useNavbarColorChange } from "@/hooks/useNavbarColorChange";
import Container from "./ui/Container";
import Link from "next/link";
import Image from "next/image";
import NavbarLogo from "@/assets/navbar-logo.png"

export default function Navbar() {


  const { isNavbarTransparent } = useNavbarColorChange()
  return (
    <nav className={`sticky top-0 z-[200]  w-full left-0 ${isNavbarTransparent ? "shadow-none" : "shadow-md"} bg-white`}>
      <Container className={`py-4 transition duration-300 rounded-md  items-center flex justify-between items-center `}>

        <Link href={"/"} >
          <Image
            src={NavbarLogo}
            alt="alem travel logo"
            width={100}
            height={40}
            objectFit="contain"
          />
        </Link>
        <ul className="flex gap-x-8 lg:gap-x-14 justify-end mr-3">
          <Link href={`/about`} className="navlink">About</Link>
          <Link href={`/contact`} className="navlink">Contact</Link>
        </ul>
      </Container>
    </nav >
  )
}