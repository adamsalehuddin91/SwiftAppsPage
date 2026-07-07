import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Trash2, ArrowLeft, Mail } from "lucide-react";
import FooterSection from "@/components/FooterSection";

const LAST_UPDATED = "July 2026";
const CONTACT_EMAIL = "admin@swiftapps.my";

export const metadata: Metadata = {
    title: "Data Deletion Instructions | Tokwi Threads Ops",
    description:
        "How to request deletion of your data from Tokwi Threads Ops. Email us with your Threads username and we will remove stored data within 7 business days.",
    alternates: { canonical: "/data-deletion" },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Data Deletion Instructions | Tokwi Threads Ops",
        description:
            "How to request deletion of your data from Tokwi Threads Ops.",
        url: "https://swiftapps.my/data-deletion",
        siteName: "SwiftApps",
        type: "website",
    },
};

export default function DataDeletionPage() {
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
                            <Trash2 className="h-3.5 w-3.5" />
                            Legal
                        </div>
                        <h1 className="text-3xl md:text-5xl font-outfit font-bold text-white mb-4">
                            Data Deletion Instructions
                        </h1>
                        <p className="text-xs text-slate-500">
                            Last updated: <span className="text-slate-300">{LAST_UPDATED}</span>
                        </p>
                    </div>

                    {/* Body */}
                    <div className="glass-card rounded-2xl p-6 md:p-8 space-y-5 text-slate-300 [&_p]:text-sm md:[&_p]:text-[15px] [&_p]:leading-7">
                        <p>
                            <strong className="text-slate-100">Tokwi Threads Ops</strong> is used by the
                            account owner to manage draft Threads content and replies.
                        </p>
                        <p>
                            To request data deletion, email{" "}
                            <a
                                href={`mailto:${CONTACT_EMAIL}?subject=Data%20Deletion%20Request`}
                                className="text-primary hover:underline"
                            >
                                {CONTACT_EMAIL}
                            </a>{" "}
                            with your Threads username and deletion request. We will remove stored data
                            related to your account within{" "}
                            <strong className="text-slate-100">7 business days</strong>.
                        </p>

                        {/* Steps */}
                        <div className="pt-4 border-t border-white/5 space-y-3">
                            {[
                                "Compose an email to the address below.",
                                "Include your Threads username.",
                                "State that you are requesting data deletion.",
                            ].map((step, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                                        {i + 1}
                                    </span>
                                    <span className="text-sm text-slate-400 leading-6">{step}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                            <Mail className="h-4 w-4 text-primary shrink-0" />
                            <a
                                href={`mailto:${CONTACT_EMAIL}?subject=Data%20Deletion%20Request`}
                                className="text-primary hover:underline text-sm"
                            >
                                {CONTACT_EMAIL}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSection />
        </>
    );
}
