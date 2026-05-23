"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageOff } from "lucide-react";
import { useLang } from "@/context/LangContext";

interface SpotlightProduct {
    id: string;
    name: string;
    demoUrl: string;
    image: string;
    en: { type: string; tagline: string; features: { title: string; body: string }[] };
    bm: { type: string; tagline: string; features: { title: string; body: string }[] };
}

const products: SpotlightProduct[] = [
    {
        id: 'swifttaska',
        name: 'SwiftTaska',
        demoUrl: 'https://taska.swiftapps.my',
        image: '/products/swifttaska.png',
        en: {
            type: 'Childcare Management',
            tagline: 'Everything a taska owner needs — in one dashboard.',
            features: [
                { title: 'Parent Portal', body: 'Parents check their child\'s attendance, activities and fee status from their phone.' },
                { title: 'Auto Fee Reminders', body: 'WhatsApp reminder sent automatically when monthly fees are overdue.' },
                { title: 'PDF Reports for JKM', body: 'Generate monthly attendance and activity reports formatted for JKM submission.' },
                { title: 'Telegram Check-in Bot', body: 'Parents receive Telegram notification when their child checks in or out.' },
            ],
        },
        bm: {
            type: 'Pengurusan Taska',
            tagline: 'Semua yang pemilik taska perlukan — dalam satu dashboard.',
            features: [
                { title: 'Portal Ibu Bapa', body: 'Ibu bapa semak kehadiran, aktiviti dan status yuran anak dari telefon.' },
                { title: 'Peringatan Yuran Auto', body: 'Reminder WhatsApp dihantar secara automatik bila yuran bulanan tertunggak.' },
                { title: 'Laporan PDF untuk JKM', body: 'Jana laporan kehadiran dan aktiviti bulanan dalam format untuk penghantaran JKM.' },
                { title: 'Bot Telegram Daftar Masuk', body: 'Ibu bapa terima notifikasi Telegram bila anak masuk atau keluar taska.' },
            ],
        },
    },
    {
        id: 'swiftfleet',
        name: 'SwiftFleet',
        demoUrl: '#contact',
        image: '/products/swiftfleet.png',
        en: {
            type: 'Car Rental Management',
            tagline: 'Stop double bookings. Track every deposit. Block bad customers.',
            features: [
                { title: 'Real-time Availability', body: 'See which cars are available, rented or under maintenance at a glance.' },
                { title: 'Deposit & Damage Tracking', body: 'Auto-calculate refund after deducting damage charges from deposit.' },
                { title: 'Customer Blacklist by IC', body: 'Flag bad customers by IC number — system blocks them from new bookings.' },
                { title: 'Road Tax & Insurance Alert', body: 'Get notified before road tax or insurance expires for each vehicle.' },
            ],
        },
        bm: {
            type: 'Pengurusan Kereta Sewa',
            tagline: 'Henti double booking. Jejak setiap deposit. Sekat pelanggan bermasalah.',
            features: [
                { title: 'Availability Real-time', body: 'Lihat kereta yang available, disewa atau dalam penyelenggaraan sekilas pandang.' },
                { title: 'Jejak Deposit & Kerosakan', body: 'Auto-kira bayaran balik selepas tolak caj kerosakan dari deposit.' },
                { title: 'Blacklist Pelanggan by IC', body: 'Tandakan pelanggan bermasalah by IC — sistem sekat dari booking baru.' },
                { title: 'Amaran Cukai Jalan & Insurans', body: 'Terima notifikasi sebelum cukai jalan atau insurans tamat untuk setiap kereta.' },
            ],
        },
    },
    {
        id: 'swiftschool',
        name: 'SwiftSchool',
        demoUrl: 'https://sritialfattah.swiftapps.my',
        image: '/products/swiftschool.png',
        en: {
            type: 'School Management',
            tagline: 'Digital system for religious schools and private institutions.',
            features: [
                { title: 'Student Records & Results', body: 'Manage marks, exam results and report cards for all students and classes.' },
                { title: 'Fee Collection', body: 'Record payments, generate receipts and track outstanding fees per student.' },
                { title: 'Teacher & Admin Access', body: 'Separate login roles — teacher enters marks, admin manages everything.' },
                { title: 'Parent Portal', body: 'Parents view their child\'s results, attendance and fee status online.' },
            ],
        },
        bm: {
            type: 'Sistem Sekolah',
            tagline: 'Sistem digital untuk sekolah agama dan institusi swasta.',
            features: [
                { title: 'Rekod & Keputusan Pelajar', body: 'Urus markah, keputusan peperiksaan dan kad laporan untuk semua pelajar dan kelas.' },
                { title: 'Kutipan Yuran', body: 'Rekod pembayaran, jana resit dan jejak tunggakan yuran per pelajar.' },
                { title: 'Akses Guru & Pentadbir', body: 'Peranan login berasingan — guru masuk markah, pentadbir urus kesemuanya.' },
                { title: 'Portal Ibu Bapa', body: 'Ibu bapa lihat keputusan, kehadiran dan status yuran anak secara online.' },
            ],
        },
    },
    {
        id: 'swiftsalon',
        name: 'SwiftSalon',
        demoUrl: '#contact',
        image: '/products/swiftsalon.png',
        en: {
            type: 'Salon & Spa Management',
            tagline: 'Manage appointments, staff and sales — all in one place.',
            features: [
                { title: 'Online Appointment Booking', body: 'Customers book appointments online. You get instant notification on your phone.' },
                { title: 'POS & Digital Receipt', body: 'Cashier mode for walk-ins. Auto-calculate total, send receipt via WhatsApp.' },
                { title: 'Staff Commission Tracking', body: 'Auto-calculate each staff member\'s commission based on services completed.' },
                { title: 'Customer Loyalty Points', body: 'Reward repeat customers with points they can redeem on future visits.' },
            ],
        },
        bm: {
            type: 'Pengurusan Salon & Spa',
            tagline: 'Urus temujanji, staf dan jualan — semua dalam satu tempat.',
            features: [
                { title: 'Tempahan Temujanji Online', body: 'Pelanggan buat tempahan online. Anda terima notifikasi segera di telefon.' },
                { title: 'POS & Resit Digital', body: 'Mod kaunter untuk walk-in. Auto-kira jumlah, hantar resit melalui WhatsApp.' },
                { title: 'Jejak Komisen Staf', body: 'Auto-kira komisen setiap staf berdasarkan servis yang disiapkan.' },
                { title: 'Mata Kesetiaan Pelanggan', body: 'Beri ganjaran kepada pelanggan tetap dengan mata yang boleh ditebus.' },
            ],
        },
    },
    {
        id: 'swiftmoney',
        name: 'SwiftMoney',
        demoUrl: 'https://money.swiftapps.my',
        image: '/products/swiftmoney.png',
        en: {
            type: 'Accounting & Invoicing',
            tagline: 'Simple accounting for Malaysian SMEs. No accountant needed.',
            features: [
                { title: 'PDF Invoice & Email Receipt', body: 'Create professional invoices in seconds and send them directly to clients via email.' },
                { title: 'Income & Expense Tracking', body: 'Record all transactions, categorise by type and see your monthly cash flow.' },
                { title: 'Monthly P&L Report', body: 'Auto-generated profit & loss report every month — ready to share with your accountant.' },
                { title: 'Multi-company Support', body: 'Manage finances for multiple businesses under one login (Premium plan).' },
            ],
        },
        bm: {
            type: 'Perakaunan & Invois',
            tagline: 'Perakaunan mudah untuk SME Malaysia. Tanpa perlukan akauntan.',
            features: [
                { title: 'Invois PDF & Resit Email', body: 'Buat invois profesional dalam beberapa saat dan hantar terus kepada klien via email.' },
                { title: 'Jejak Pendapatan & Perbelanjaan', body: 'Rekod semua transaksi, kategorikan mengikut jenis dan lihat aliran tunai bulanan.' },
                { title: 'Laporan P&L Bulanan', body: 'Laporan untung rugi dijana secara automatik setiap bulan — sedia untuk dikongsi.' },
                { title: 'Sokongan Multi-syarikat', body: 'Urus kewangan untuk beberapa bisnes di bawah satu login (Pakej Premium).' },
            ],
        },
    },
];

function ImagePlaceholder({ name }: { name: string }) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-slate-800/60 rounded-2xl border border-white/8 border-dashed">
            <ImageOff className="w-10 h-10 text-slate-600" />
            <p className="text-slate-500 text-sm text-center px-4">
                {name} screenshot<br />
                <span className="text-xs">Drop image in <code className="text-slate-400">public/products/{name.toLowerCase()}.png</code></span>
            </p>
        </div>
    );
}

export function ProductSpotlight() {
    const { lang } = useLang();
    const [active, setActive] = useState('swifttaska');
    const [imgError, setImgError] = useState<Record<string, boolean>>({});

    const current = products.find(p => p.id === active) ?? products[0];
    const content = current[lang];

    return (
        <section id="spotlight" className="py-24 relative z-10 border-y border-white/5 bg-slate-900/30">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">

                {/* Heading */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-outfit font-bold text-white mb-4"
                    >
                        {lang === 'en' ? 'See It in Action' : 'Tengok Sendiri'}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg max-w-lg mx-auto"
                    >
                        {lang === 'en'
                            ? 'Real screens from each system. No mockups, no stock photos.'
                            : 'Skrin sebenar dari setiap sistem. Tiada mockup, tiada gambar stok.'}
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide justify-center flex-wrap">
                    {products.map(p => (
                        <button
                            key={p.id}
                            onClick={() => setActive(p.id)}
                            className={`relative shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                                active === p.id
                                    ? 'bg-primary/15 text-primary border border-primary/30'
                                    : 'text-slate-400 border border-white/8 hover:text-white hover:border-white/15'
                            }`}
                        >
                            {p.name}
                            {active === p.id && (
                                <motion.div
                                    layoutId="spotlightTab"
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="grid lg:grid-cols-2 gap-10 items-start"
                    >
                        {/* Left — Features */}
                        <div className="flex flex-col gap-6">
                            <div>
                                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                                    {content.type}
                                </span>
                                <h3 className="font-outfit font-bold text-white text-2xl md:text-3xl leading-snug mb-3">
                                    {current.name}
                                </h3>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    {content.tagline}
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                {content.features.map((f, i) => (
                                    <motion.div
                                        key={f.title}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.08 }}
                                        className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/8"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                                            <span className="text-primary font-bold text-sm font-outfit">{i + 1}</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
                                            <div className="text-slate-400 text-sm leading-relaxed">{f.body}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex gap-3 pt-2">
                                <Link
                                    href={current.demoUrl}
                                    target={current.demoUrl.startsWith('http') ? '_blank' : undefined}
                                    rel={current.demoUrl.startsWith('http') ? 'noreferrer' : undefined}
                                    className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all box-glow text-sm"
                                >
                                    {lang === 'en' ? 'View Live Demo' : 'Lihat Demo Live'}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-slate-300 font-semibold rounded-xl hover:border-white/30 hover:text-white transition-all text-sm"
                                >
                                    {lang === 'en' ? 'Get Quote' : 'Dapatkan Quotation'}
                                </Link>
                            </div>
                        </div>

                        {/* Right — Screenshot / Image */}
                        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/8">
                            {imgError[current.id] ? (
                                <ImagePlaceholder name={current.name} />
                            ) : (
                                <Image
                                    src={current.image}
                                    alt={`${current.name} screenshot`}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    onError={() => setImgError(prev => ({ ...prev, [current.id]: true }))}
                                />
                            )}

                            {/* Overlay gradient at bottom */}
                            {!imgError[current.id] && (
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Image drop hint — only shows if ALL images missing */}
                {Object.keys(imgError).length === products.length && (
                    <p className="text-center text-slate-600 text-xs mt-8">
                        {lang === 'en'
                            ? 'Drop product screenshots in public/products/ — supports .png, .jpg, .webp'
                            : 'Letak screenshot produk dalam public/products/ — sokong .png, .jpg, .webp'}
                    </p>
                )}
            </div>
        </section>
    );
}
