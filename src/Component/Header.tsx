'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // hamburger icons

export default function Header() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'E-commerce', href: '/' },
    { name: 'Marketing Services', href: '/' },
    { name: 'Maintenance', href: '/' },
    { name: 'Industries', href: '/' },
    { name: 'Success Stories', href: '/' },
    { name: 'About Us', href: '/' },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LEFT — Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg font-medium text-black">
          {navItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                delay: idx * 0.05,
              }}
            >
              <Link
                href={item.href}
                className=" hover:text-blue-500 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-black">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white text-black w-full shadow-lg absolute top-full left-0"
        >
          <ul className="flex flex-col gap-4 p-6">
            {navItems.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="font-medium text-lg hover:text-[#00A4DC] transition-colors"
              >
                <Link href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
