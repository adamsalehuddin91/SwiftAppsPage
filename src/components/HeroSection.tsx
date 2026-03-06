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
                            Modern Software <br className="hidden md:block" /> Infrastructure.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-light">
                            Building scalable, modular, and SaaS-ready systems using modern tech stacks. We don&apos;t write &quot;just make it work&quot; code, we build robust architectures.
                        </p>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <Link
                                href="#contact"
                                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-primary rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 box-glow"
                            >
                                {/* Button active shiny effect */}
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                <span className="relative z-10 flex items-center gap-2">
                                    Discuss Project <span className="opacity-80 text-sm font-normal">(Direct-to-Developer)</span>
                                </span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Abstract Tech Art (Senior Architect Level) */}
                    <div className="relative h-[450px] w-full mt-12 lg:mt-0 flex justify-center items-center">

                        {/* Core Server Node */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute z-30 w-32 h-32 rounded-3xl glass-card flex flex-col items-center justify-center border-primary/40 shadow-[0_0_50px_rgba(56,189,248,0.2)]"
                        >
                            <div className="absolute inset-0 bg-primary/10 rounded-3xl animate-pulse"></div>
                            <Terminal className="w-10 h-10 text-primary mb-2 relative z-10" />
                            <span className="text-[10px] font-mono text-white/80 tracking-widest relative z-10">CORE_API</span>
                            <div className="absolute -bottom-2 w-16 h-1 bg-primary/50 blur-sm rounded-full"></div>
                        </motion.div>

                        {/* Floating Microservices */}
                        {/* DB Service */}
                        <motion.div
                            initial={{ opacity: 0, x: -60, y: -60 }}
                            animate={{ opacity: 1, x: -80, y: -90, rotate: -5 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="absolute z-20 w-48 h-20 glass rounded-xl border-white/10 p-3 flex items-center gap-3 backdrop-blur-xl"
                        >
                            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                <Database className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-400 font-mono">cluster-db-primary</div>
                                <div className="text-xs text-white font-medium flex items-center gap-1.5 mt-0.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-[pulse_2s_ease-in-out_infinite]"></span>
                                    Healthy & Synced
                                </div>
                            </div>
                        </motion.div>

                        {/* Background Worker */}
                        <motion.div
                            initial={{ opacity: 0, x: 60, y: 60 }}
                            animate={{ opacity: 1, x: 80, y: 100, rotate: 3 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute z-20 w-40 h-20 glass rounded-xl border-white/10 p-3 flex items-center gap-3 backdrop-blur-xl"
                        >
                            <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                                <Code2 className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-400 font-mono">worker-pool-1</div>
                                <div className="space-y-1.5 mt-2 opacity-70">
                                    <div className="h-1 bg-indigo-500/40 rounded w-full"></div>
                                    <div className="h-1 bg-slate-600 rounded w-2/3"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* UI Frontend Service */}
                        <motion.div
                            initial={{ opacity: 0, x: 60, y: -40 }}
                            animate={{ opacity: 1, x: 90, y: -60 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="absolute z-20 w-48 h-24 glass rounded-xl border-white/10 p-3 backdrop-blur-xl"
                        >
                            <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                                </div>
                                <div className="text-[9px] font-mono text-primary/70">app-router-v16</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <LayoutTemplate className="w-5 h-5 text-sky-400" />
                                <div className="text-xs text-slate-300 font-medium">SSR Rendered</div>
                            </div>
                        </motion.div>

                        {/* Connection Lines (Abstract SVG) */}
                        <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(56,189,248,0.2))' }}>
                            <motion.path
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.3 }}
                                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                                d="M 50% 50% L 30% 25%"
                                stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" fill="none"
                            />
                            <motion.path
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.3 }}
                                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                                d="M 50% 50% L 75% 75%"
                                stroke="#6366f1" strokeWidth="1" strokeDasharray="4 4" fill="none"
                            />
                            <motion.path
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.3 }}
                                transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
                                d="M 50% 50% L 75% 30%"
                                stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" fill="none"
                            />
                        </svg>

                        {/* Orbiting Particles */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute z-40 w-[280px] h-[280px] rounded-full border border-white/5 border-dashed"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_#38bdf8]"></div>
                            <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_#818cf8]"></div>
                            <div className="absolute top-1/2 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]"></div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
