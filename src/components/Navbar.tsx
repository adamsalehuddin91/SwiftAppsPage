"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Terminal, X } from "lucide-react";

const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#portfolio", label: "Ecosystem" },
    { href: "#tech-stack", label: "Tech Stack" },
    { href: "#contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 glass border-b-0 border-white/5"
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 group-hover:bg-primary/20 transition-all duration-300">
                            <Terminal className="text-primary w-5 h-5" />
                        </div>
                        <span className="font-outfit font-bold text-xl tracking-wide text-white">
                            Swift<span className="text-primary">Apps</span>
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                        {navLinks.map(link => (
                            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden w-8 h-8 rounded-md bg-white/5 flex flex-col justify-center items-center gap-1.5"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="w-4 h-4 text-white/80" />
                        ) : (
                            <>
                                <span className="w-4 h-0.5 bg-white/80 rounded-full block"></span>
                                <span className="w-4 h-0.5 bg-white/80 rounded-full block"></span>
                            </>
                        )}
                    </button>
                </div>
            </motion.header>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[72px] left-0 right-0 z-40 glass border-b border-white/5 md:hidden"
                    >
                        <nav className="flex flex-col px-6 py-4 gap-1">
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-300 hover:text-primary hover:bg-white/5 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
