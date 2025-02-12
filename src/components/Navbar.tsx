import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import Hamburger from "./Hamburger";
import Link from "next/link";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

function Navbar() {
  const navLinks = (
    <div
      className={`flex text-sm gap-1 md:text-md lg:text-lg flex-col md:flex-row md:gap-4 ${dmSerif.className} text-lg text-black`}
    >
      <Link className="hover:text-primary" href="/#home">
        HOME
      </Link>
      <Link className="hover:text-primary" href="/#about">
        ABOUT US
      </Link>
      <Link className="hover:text-primary" href="/#achievements">
        ACHIEVEMENTS
      </Link>
      <Link className="hover:text-primary" href="/#services">
        WHAT WE DO
      </Link>
      <Link className="hover:text-primary" href="/#initiatives">
        OUR INITIATIVES
      </Link>
      <Link className="hover:text-primary" href="/#team">
        TEAM
      </Link>
      <Link className="hover:text-primary" href="/#contact">
        CONTACT US
      </Link>

      <Link className="hover:text-primary" href={"/agahi"}>
        AGAHI
      </Link>
    </div>
  );

  return (
    <nav className="flex justify-between items-center px-2 lg:px-24 md:px-12 bg-secondary fixed w-full z-50 shadow-lg">
      {/* Logo */}
      <Image
        src="/logo.png"
        width={80}
        height={80}
        alt="The Women Story Logo"
      />

      {/* Hamburger navigation (Visible on Small Screens) */}
      <Hamburger navLinks={navLinks} />

      {/* Navigation Links */}
      <div className="hidden md:flex text-black gap-6">{navLinks}</div>
    </nav>
  );
}

export default Navbar;
