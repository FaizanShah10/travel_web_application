import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between lg:px-44 md:px-32 px-8 max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flex hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="bg-gray-800"
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={25}
        height={25}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar