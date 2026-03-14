"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Scissors, BookOpen, Building2, TrendingUp, Wallet, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "SwiftMoney",
        type: "Family Finance Tracker",
        description: "Family cash flow management app. Monthly bill tracker, debt amortization, and real-time net balance with PWA support.",
        stack: ["Laravel 12", "Inertia.js", "React 18", "SQLite"],
        icon: Wallet,
        color: "text-sky-400",
        bg: "bg-sky-400/10",
        status: "live" as const,
        screenshots: [
            { src: "/screenshots/swiftmoney-1.png", caption: "Dashboard — Monthly financial summary" },
            { src: "/screenshots/swiftmoney-2.png", caption: "Bills — Toggle payment & categories" },
            { src: "/screenshots/swiftmoney-3.png", caption: "Debt Tracker — Payment history" },
        ],
    },
    {
        title: "LorryTech OS",
        type: "Fleet Management",
        description: "Centralized dashboard for SME lorry owners. Manages revenue (Lalamove + side jobs), digital receipt vault (LHDN 7-year compliance), commissions, and P&L analytics.",
        stack: ["Laravel 12", "Inertia.js", "React 18", "PostgreSQL"],
        icon: Truck,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        status: "development" as const,
        screenshots: [
            { src: "/screenshots/lorrytech-1.png", caption: "Dashboard — Revenue & fleet overview" },
            { src: "/screenshots/lorrytech-2.png", caption: "Trip Management — Job tracking" },
        ],
    },
    {
        title: "HMS Salon",
        type: "Full-Stack Management System",
        description: "Paid salon management system. Includes POS, appointments, inventory management, and a public booking portal.",
        stack: ["Next.js 16", "React 19", "Supabase"],
        icon: Scissors,
        color: "text-pink-400",
        bg: "bg-pink-400/10",
        status: "live" as const,
        screenshots: [
            { src: "/screenshots/hms-salon-1.png", caption: "POS — Point of Sale system" },
            { src: "/screenshots/hms-salon-2.png", caption: "Booking Portal — Customer appointments" },
        ],
    },
    {
        title: "TerasEdu",
        type: "Digital Kindergarten",
        description: "Digital kindergarten management solution to automate daily operations for teachers and administrators.",
        stack: ["Laravel", "React", "PostgreSQL"],
        icon: BookOpen,
        color: "text-amber-400",
        bg: "bg-amber-400/10",
        status: "development" as const,
        screenshots: [
            { src: "/screenshots/terasedu-1.png", caption: "Dashboard — Kindergarten management" },
        ],
    },
    {
        title: "BusinessSystem",
        type: "Contractor Management",
        description: "Contractor/construction management system including Invoicing, PO, Inventory, and company Finance.",
        stack: ["Laravel 12", "Inertia.js", "React 18", "Supabase"],
        icon: Building2,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        status: "live" as const,
        screenshots: [
            { src: "/screenshots/businesssystem-1.png", caption: "Invoice — Invoice management" },
            { src: "/screenshots/businesssystem-2.png", caption: "Inventory — Stock & products" },
        ],
    },
    {
        title: "Stock Monitor Bursa",
        type: "PWA Dashboard",
        description: "Bursa Malaysia stock monitoring dashboard with PWA support (Offline-first) and real-time data visualization.",
        stack: ["React 19", "Vite 6", "TailwindCSS", "Chart.js"],
        icon: TrendingUp,
        color: "text-indigo-400",
        bg: "bg-indigo-400/10",
        status: "live" as const,
        screenshots: [
            { src: "/screenshots/stockmonitor-1.png", caption: "Dashboard — Real-time stock monitoring" },
        ],
    }
];

function ScreenshotModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
    const [current, setCurrent] = useState(0);
    const shots = project.screenshots;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button onClick={onClose} className="absolute -top-12 right-0 text-slate-400 hover:text-white transition-colors">
                    <X className="w-8 h-8" />
                </button>

                {/* Title */}
                <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${project.bg} ${project.color}`}>
                        <project.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-white font-bold font-outfit text-lg">{project.title}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                        project.status === 'live'
                            ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20'
                            : 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                    }`}>
                        {project.status === 'live' ? 'Live' : 'Dev'}
                    </span>
                </div>

                {/* Screenshot display */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 aspect-video">
                    <Image
                        src={shots[current].src}
                        alt={shots[current].caption}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 900px"
                    />

                    {/* Navigation arrows */}
                    {shots.length > 1 && (
                        <>
                            <button
                                onClick={() => setCurrent((p) => (p - 1 + shots.length) % shots.length)}
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setCurrent((p) => (p + 1) % shots.length)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </>
                    )}
                </div>

                {/* Caption + dots */}
                <div className="mt-4 text-center">
                    <p className="text-slate-300 text-sm">{shots[current].caption}</p>
                    {shots.length > 1 && (
                        <div className="flex justify-center gap-2 mt-3">
                            {shots.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        i === current ? 'bg-primary' : 'bg-slate-600 hover:bg-slate-400'
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}

export function EcosystemSection() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <>
            <section id="portfolio" className="py-24 relative z-10 bg-slate-900/30 border-y border-white/5">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">

                    <div className="text-center mb-16 px-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-outfit font-bold text-white mb-4"
                        >
                            SwiftApps Ecosystem
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-lg max-w-2xl mx-auto"
                        >
                            Critical systems developed and managed with high production standards. Active Portfolio.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => {
                            const Icon = project.icon;
                            const hasScreenshots = project.screenshots.length > 0;
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
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                                                project.status === 'live'
                                                    ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20'
                                                    : 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                                            }`}>
                                                {project.status === 'live' ? 'Live' : 'Dev'}
                                            </span>
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

                                        {/* Screenshot preview button */}
                                        {hasScreenshots && (
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="flex items-center gap-2 mb-4 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-200 text-slate-400 hover:text-white text-xs font-medium"
                                            >
                                                <Images className="w-4 h-4" />
                                                <span>View Screenshots ({project.screenshots.length})</span>
                                            </button>
                                        )}

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

            {/* Screenshot Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ScreenshotModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
