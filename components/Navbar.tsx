import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Navbar = () => {
      const [scrolled, setScrolled] = useState(false);
    
     useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
        <nav
        className={`fixed w-full top-0 z-50 px-5 py-4 text-xl font-bold transition-all backdrop-blur-md bg-[#0e0e0e]/60 ${
          scrolled ? "shadow-lg shadow-black/30 border-b border-white/10" : ""
        }`}
      >
        <Link href="/" >
        A d m<br /> i n<span className="text-purple-500">.</span>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar