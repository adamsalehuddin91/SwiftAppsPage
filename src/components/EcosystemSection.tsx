"use client";

import { motion } from "framer-motion";
import { Truck, Scissors, BookOpen, Building2, TrendingUp, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "LorryTech OS",
        type: "Fleet Management",
        description: "Centralized dashboard untuk pemilik lori SME. Menguruskan revenue (Lalamove + side jobs), digital receipt vault (LHDN 7-year compliance), komisyen, dan analitik P&L.",
        stack: ["Laravel 12", "Inertia.js", "React 18", "PostgreSQL"],
        icon: Truck,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
    },
    {
        title: "HMS Salon",
        type: "Full-Stack Management System",
        description: "Sistem pengurusan salon berbayar. Merangkumi POS, temu janji, pengurusan inventori, dan portal tempahan awam.",
        stack: ["Next.js 16", "React 19", "Supabase"],
        icon: Scissors,
        color: "text-pink-400",
        bg: "bg-pink-400/10",
    },
    {
        title: "TerasEdu",
        type: "Digital Kindergarten",
        description: "Solusi pengurusan tadika digital untuk automasi operasi harian guru dan pentadbir.",
        stack: ["Laravel", "React", "PostgreSQL"],
        icon: BookOpen,
        color: "text-amber-400",
        bg: "bg-amber-400/10",
    },
    {
        title: "BusinessSystem",
        type: "Contractor Management",
        description: "Sistem pengurusan kontraktor/pembinaan merangkumi Invoicing, PO, Inventory, dan Finance syarikat.",
        stack: ["Laravel 12", "Inertia.js", "React 18", "Supabase"],
        icon: Building2,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
    },
    {
        title: "Stock Monitor Bursa",
        type: "PWA Dashboard",
        description: "Dashboard pemantauan saham Bursa Malaysia dengan sokongan PWA (Offline-first) dan visualisasi data real-time.",
        stack: ["React 19", "Vite 6", "TailwindCSS", "Chart.js"],
        icon: TrendingUp,
        color: "text-indigo-400",
        bg: "bg-indigo-400/10",
    }
];;

export function EcosystemSection() {
    return (
        <section id="portfolio" className="py-24 relative z-10 bg-slate-900/30 border-y border-white/5">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">

                <div className="text-center mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-outfit font-bold text-white mb-4"
                    >
                        Ekosistem SwiftApps
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Sistem kritikal yang dibangunkan dan diuruskan dengan standard produksi tinggi. Active Portfolio.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative h-full"
                            >
                                {/* Hover glow */}
                                <div className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm ${project.bg.replace('/10', '/30')}`}></div>

                                <div className="relative h-full flex flex-col p-6 glass-card rounded-2xl overflow-hidden border-white/5 bg-slate-900/40">

                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${project.bg} ${project.color}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <button className="text-slate-500 hover:text-white transition-colors duration-200">
                                            <ExternalLink className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="mb-2">
                                        <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-1 block">
                                            {project.type}
                                        </span>
                                        <h3 className="text-xl font-bold text-white font-outfit">{project.title}</h3>
                                    </div>

                                    <p className="text-sm text-slate-300 font-light leading-relaxed mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                                        {project.stack.map(tech => (
                                            <span key={tech} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs text-slate-300 font-medium whitespace-nowrap">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
