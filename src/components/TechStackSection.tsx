"use client";

import { motion } from "framer-motion";
import { Server, Layout, Database, Cloud } from "lucide-react";

export function TechStackSection() {
    const stackItems = [
        {
            category: "Core Engineering",
            icon: <Server className="w-5 h-5" />,
            title: "Laravel 12 & Next.js 16",
            desc: "Modern Monolith & Decoupled Architecture. Bleeding-edge frameworks.",
        },
        {
            category: "Modern Frontend",
            icon: <Layout className="w-5 h-5" />,
            title: "React 19 & Inertia.js",
            desc: "Server Components and seamless SPA experiences.",
        },
        {
            category: "Data Orchestration",
            icon: <Database className="w-5 h-5" />,
            title: "PostgreSQL & Supabase",
            desc: "Transaction Mode/Pooling for SaaS & Multi-Tenancy.",
        },
        {
            category: "DevOps & Cloud",
            icon: <Cloud className="w-5 h-5" />,
            title: "Hetzner & Coolify (PaaS)",
            desc: "Self-hosted strategies for full infrastructure control.",
        },
    ];

    return (
        <section id="tech-stack" className="py-24 relative z-10">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-6">
                            Solid Software Architecture
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-10 font-light">
                            Sistem anda tidak sekadar berfungsi, ia dibina dengan standard industri paling terkini. Dicipta untuk <span className="text-primary font-medium">zero technical debt</span>.
                        </p>

                        <div className="space-y-8">
                            {stackItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800/50 border border-white/10 flex items-center justify-center text-primary">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                                        <p className="text-slate-400 mt-1 font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Visual Tech Stack Diagram */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] w-full flex items-center justify-center"
                    >
                        {/* Center Glow */}
                        <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full"></div>

                        {/* Diagram Container */}
                        <div className="relative w-full max-w-md aspect-square glass border-white/10 rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite]">
                            {/* Inner Ring */}
                            <div className="absolute inset-12 border border-white/5 rounded-full border-dashed animate-[spin_30s_linear_reverse_infinite]"></div>

                            {/* Center Node */}
                            <div className="w-24 h-24 rounded-full bg-slate-900 border border-primary/40 shadow-[0_0_30px_rgba(56,189,248,0.3)] flex flex-col items-center justify-center animate-[spin_40s_linear_reverse_infinite]">
                                <span className="font-outfit font-bold text-white tracking-wide">CORE</span>
                            </div>

                            {/* Orbiting Tech Nodes */}
                            {[
                                { label: "Laravel", color: "bg-red-500", deg: 0 },
                                { label: "Next.js", color: "bg-white", deg: 72 },
                                { label: "Postgres", color: "bg-blue-400", deg: 144 },
                                { label: "React", color: "bg-sky-400", deg: 216 },
                                { label: "Hetzner", color: "bg-red-600", deg: 288 }
                            ].map((node, i) => (
                                <div
                                    key={i}
                                    className="absolute w-16 h-16 rounded-full glass border-white/20 flex items-center justify-center shadow-lg"
                                    style={{
                                        top: `calc(50% - 32px + Math.sin(${node.deg * Math.PI / 180}) * 45%)`,
                                        left: `calc(50% - 32px + Math.cos(${node.deg * Math.PI / 180}) * 45%)`,
                                        transform: `rotate(${-node.deg}deg)`, // Compensate container spin in real implementation this needs more complex JS, simplifying for CSS trick
                                    }}
                                >
                                    {/* Static fallback positioning due to React inline style limitations with complex circle math */}
                                    <div className={`w-3 h-3 rounded-full ${node.color} mb-1 absolute top-2`}></div>
                                    <span className="text-[10px] font-medium text-white/80 mt-3">{node.label}</span>
                                </div>
                            ))}

                            {/* Fallback Static Positioning for orbiting nodes to bypass inline math complexity */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full glass-card flex flex-col items-center justify-center animate-[spin_40s_linear_reverse_infinite]">
                                <div className="w-4 h-4 rounded-full bg-red-500/80 mb-1 shadow-[0_0_10px_#ef4444]"></div>
                                <span className="text-xs font-medium text-white">Laravel</span>
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full glass-card flex flex-col items-center justify-center animate-[spin_40s_linear_reverse_infinite]">
                                <div className="w-4 h-4 rounded-full bg-blue-500/80 mb-1 shadow-[0_0_10px_#3b82f6]"></div>
                                <span className="text-xs font-medium text-white">Postgres</span>
                            </div>
                            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full glass-card flex flex-col items-center justify-center animate-[spin_40s_linear_reverse_infinite]">
                                <div className="w-4 h-4 rounded-full bg-white/80 mb-1 shadow-[0_0_10px_#ffffff]"></div>
                                <span className="text-xs font-medium text-white text-center leading-tight">Next.js</span>
                            </div>
                            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full glass-card flex flex-col items-center justify-center animate-[spin_40s_linear_reverse_infinite]">
                                <div className="w-4 h-4 rounded-full bg-sky-400/80 mb-1 shadow-[0_0_10px_#38bdf8]"></div>
                                <span className="text-xs font-medium text-white text-center leading-tight">React 19</span>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
