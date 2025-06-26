"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/report", label: "Report" },
  ];

  return (
    <section className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-5 right-5 z-50"
      >
        <Image
          src={isOpen ? "/icons/close.png" : "/icons/menu.png"}
          alt="Toggle Menu"
          width={20}
          height={20}
        />
      </button>

      <aside
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-[var(--color-darkgray)] text-[var(--color-lightbg)] min-h-screen p-4 transition-all duration-300 ease-in-out`}
      >
        <h1
          className={`text-2xl font-bold text-[var(--color-bright)] mb-6 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          Kudwa
        </h1>

        <nav className="space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium hover:bg-[var(--color-softblue)] transition-colors ${
                pathname === link.href
                  ? "bg-[var(--color-softblue)]"
                  : "text-[var(--color-lightbg)]"
              }`}
            >
              <span className={`${isOpen ? "block" : "hidden"}`}>
                {link.label}
              </span>
              {!isOpen && (
                <div className="w-2 h-2 rounded-full bg-[var(--color-bright)]"></div>
              )}
            </Link>
          ))}
        </nav>
      </aside>
    </section>
  );
}
