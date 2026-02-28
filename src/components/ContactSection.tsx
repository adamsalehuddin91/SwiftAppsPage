"use client";

import { motion } from "framer-motion";
import { Mail, Send, ArrowRight } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: "", email: "", message: "" });
            alert("Pesan dihantar. Kami akan menghubungi anda secepat mungkin.");
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative z-10 border-t border-white/5 bg-slate-900/40">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-6">
                            Hubungi <span className="text-slate-500 font-light">(Contact)</span>
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-10 font-light max-w-md">
                            Ada projek atau sistem yang perlu dibangunkan? Bincang terus bersama saya untuk solusi teknikal yang tepat.
                        </p>

                        <div className="flex flex-col gap-6">
                            <a href="mailto:admin@swiftapps.my" className="group flex items-center gap-4 p-4 rounded-xl glass-card w-fit hover:border-primary/50 transition-all">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400 mb-1">Email terus ke</div>
                                    <div className="text-white font-medium text-lg">admin@swiftapps.my</div>
                                </div>
                            </a>
                        </div>

                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                            {/* Form background glow */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Nama</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                                        placeholder="Nama anda"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                                        placeholder="email@syarikat.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Mesej / Projek Brief</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                                        placeholder="Terangkan secara ringkas keperluan sistem anda..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 rounded-lg overflow-hidden transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">Menghantar <span className="animate-spin text-primary">⟳</span></span>
                                    ) : (
                                        <span className="flex items-center justify-between w-full">
                                            Hantar Mesej
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:text-primary transition-transform" />
                                        </span>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
