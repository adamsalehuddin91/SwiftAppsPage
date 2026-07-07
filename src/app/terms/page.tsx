import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, ArrowLeft, Mail } from "lucide-react";
import FooterSection from "@/components/FooterSection";

const LAST_UPDATED = "July 2026";
const CONTACT_EMAIL = "admin@swiftapps.my";

export const metadata: Metadata = {
    title: "Terms of Service | Tokwi Threads Ops",
    description:
        "Terms of Service for Tokwi Threads Ops — a private productivity and social content workflow tool for drafting, reviewing, and managing Threads content.",
    alternates: { canonical: "/terms" },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Terms of Service | Tokwi Threads Ops",
        description:
            "Terms of Service for Tokwi Threads Ops — a private productivity and social content workflow tool.",
        url: "https://swiftapps.my/terms",
        siteName: "SwiftApps",
        type: "website",
    },
};

export default function TermsPage() {
    return (
        <>
            {/* Minimal header */}
            <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/logo.png"
                            alt="SwiftApps"
                            width={36}
                            height={36}
                            className="rounded-full group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="font-outfit font-bold text-xl tracking-wide text-white">
                            Swift<span className="text-primary">Apps</span>
                        </span>
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span className="hidden sm:inline">Back to Home</span>
                    </Link>
                </div>
            </header>

            <div className="relative pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    {/* Title */}
                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase mb-5">
                            <FileText className="h-3.5 w-3.5" />
                            Legal
                        </div>
                        <h1 className="text-3xl md:text-5xl font-outfit font-bold text-white mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-xs text-slate-500">
                            Last updated: <span className="text-slate-300">{LAST_UPDATED}</span>
                        </p>
                    </div>

                    {/* Body */}
                    <div className="glass-card rounded-2xl p-6 md:p-8 space-y-5 text-slate-300 [&_p]:text-sm md:[&_p]:text-[15px] [&_p]:leading-7">
                        <p>
                            <strong className="text-slate-100">Tokwi Threads Ops</strong> is a private
                            productivity and social content workflow tool used to draft, review, and manage
                            Threads content.
                        </p>
                        <p>
                            The app does not guarantee reach, engagement, income, trading results, or business
                            results. All generated content must be reviewed and approved by the account owner
                            before posting.
                        </p>
                        <p>
                            Users agree to use this app responsibly and follow Meta/Threads platform rules.
                        </p>
                        <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                            <Mail className="h-4 w-4 text-primary shrink-0" />
                            <span className="text-sm text-slate-400">
                                Contact:{" "}
                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="text-primary hover:underline"
                                >
                                    {CONTACT_EMAIL}
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSection />
        </>
    );
}
