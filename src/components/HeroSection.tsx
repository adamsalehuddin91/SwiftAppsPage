"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Database, LayoutTemplate } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
            {/* Container */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6"
                    >
                        <h1 className="font-outfit text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-md">
                            <span className="block mb-2 text-primary text-glow">SwiftApps:</span>
                            Infrastruktur Perisian <br className="hidden md:block" /> Gred Junior.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-light">
                            Membina sistem yang scalable, modular, dan SaaS-ready menggunakan tech stack moden. Kami tak buat kod &quot;asal jalan&quot;, kami bina arsitektur yang solid.
                        </p>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <Link
                                href="#contact"
                                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-primary rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 box-glow"
                            >
                                {/* Button active shiny effect */}
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                <span className="relative z-10 flex items-center gap-2">
                                    Bincang Projek <span className="opacity-80 text-sm font-normal">(Direct-to-Developer)</span>
                                </span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Abstract Tech Art (Replacing image with CSS/Framer Motion art to fit aesthetic) */}
                    <div className="relative h-[400px] w-full mt-12 lg:mt-0 flex justify-center items-center">
                        {/* Floating Code window 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, rotate: -5 }}
                            animate={{ opacity: 1, y: 0, rotate: -2 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute right-10 top-0 w-64 h-48 glass rounded-xl border border-white/10 p-4 shadow-2xl backdrop-blur-xl z-20"
                        >
                            <div className="flex gap-1.5 mb-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="space-y-2 opacity-70">
                                <div className="h-2 bg-primary/40 rounded w-3/4"></div>
                                <div className="h-2 bg-slate-600 rounded w-1/2"></div>
                                <div className="h-2 bg-slate-600 rounded w-5/6"></div>
                                <div className="h-2 bg-slate-600 rounded w-2/3"></div>
                            </div>
                            <Code2 className="absolute bottom-4 right-4 text-primary/30 w-12 h-12" />
                        </motion.div>

                        {/* Floating Database window 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0, rotate: 3 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="absolute left-4 bottom-10 w-72 h-40 bg-slate-900/80 border border-primary/20 rounded-xl p-5 shadow-2xl backdrop-blur-md z-30 flex items-center gap-4"
                        >
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Database className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-sm text-slate-400 font-mono mb-1">Status: OK</div>
                                <div className="text-white font-medium tracking-wide">PostgreSQL Cluster</div>
                                <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Replicating
                                </div>
                            </div>
                        </motion.div>

                        {/* Center Abstract connection lines / UI blocks */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="absolute right-32 top-1/4 w-80 h-80 rounded-full border border-white/5 border-dashed animate-[spin_60s_linear_infinite] z-10"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#38bdf8]"></div>
                            <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"></div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
