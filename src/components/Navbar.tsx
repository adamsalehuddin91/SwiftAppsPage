"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 glass border-b-0 border-white/5"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 group-hover:bg-primary/20 transition-all duration-300">
                        {/* Neon S Logo Representation (using lucide icon as placeholder or custom SVG) */}
                        <Terminal className="text-primary w-5 h-5" />
                    </div>
                    <span className="font-outfit font-bold text-xl tracking-wide text-white">
                        Swift<span className="text-primary">Apps</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <Link href="#about" className="hover:text-primary transition-colors">About Me</Link>
                    <Link href="#portfolio" className="hover:text-primary transition-colors">Ecosystem</Link>
                    <Link href="#tech-stack" className="hover:text-primary transition-colors">Tech Stack</Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                </nav>

                {/* Mobile menu could go here, omitting for brevity of the main flow for now */}
                <div className="md:hidden">
                    <div className="w-8 h-8 rounded-md bg-white/5 flex flex-col justify-center items-center gap-1.5 cursor-pointer">
                        <span className="w-4 h-0.5 bg-white/80 rounded-full block"></span>
                        <span className="w-4 h-0.5 bg-white/80 rounded-full block"></span>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
