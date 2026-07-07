import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
    ShieldCheck,
    Database,
    Cog,
    Share2,
    Lock,
    Clock,
    UserCheck,
    Cookie,
    Baby,
    RefreshCw,
    Mail,
    ArrowLeft,
} from "lucide-react";
import FooterSection from "@/components/FooterSection";

const EFFECTIVE_DATE = "7 July 2026";
const CONTACT_EMAIL = "admin@swiftapps.my";
const CONTACT_PHONE = "+60 13-209 4577";
const WHATSAPP = "https://wa.me/60132094577";
const SITE_URL = "https://swiftapps.my";

export const metadata: Metadata = {
    title: "Privacy Policy | SwiftApps",
    description:
        "How SwiftApps collects, uses, stores and protects your personal data — including data accessed through the Meta Threads API. Compliant with Malaysia's PDPA 2010.",
    alternates: { canonical: "/privacy-policy" },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Privacy Policy | SwiftApps",
        description:
            "How SwiftApps collects, uses, stores and protects your personal data — including data accessed through the Meta Threads API.",
        url: `${SITE_URL}/privacy-policy`,
        siteName: "SwiftApps",
        type: "website",
    },
};

type Section = { id: string; title: string };

const sections: Section[] = [
    { id: "introduction", title: "Introduction" },
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Your Information" },
    { id: "threads-api", title: "Threads & Meta Platform Data" },
    { id: "sharing", title: "How We Share Information" },
    { id: "storage-security", title: "Data Storage & Security" },
    { id: "retention-deletion", title: "Data Retention & Deletion" },
    { id: "your-rights", title: "Your Rights" },
    { id: "cookies", title: "Cookies & Tracking" },
    { id: "children", title: "Children's Privacy" },
    { id: "changes", title: "Changes to This Policy" },
    { id: "contact", title: "Contact Us" },
];

function SectionHeading({
    icon: Icon,
    id,
    children,
}: {
    icon: React.ComponentType<{ className?: string }>;
    id: string;
    children: React.ReactNode;
}) {
    return (
        <h2
            id={id}
            className="scroll-mt-28 flex items-center gap-3 text-xl md:text-2xl font-outfit font-bold text-white mb-4"
        >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                <Icon className="h-5 w-5" />
            </span>
            {children}
        </h2>
    );
}

export default function PrivacyPolicyPage() {
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
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase mb-5">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            Legal
                        </div>
                        <h1 className="text-3xl md:text-5xl font-outfit font-bold text-white mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
                            This Privacy Policy explains how <strong className="text-slate-200">SwiftApps</strong>{" "}
                            (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, stores,
                            and protects your information when you use our websites, applications, and
                            services, including any features that connect to the Meta Threads API.
                        </p>
                        <p className="mt-4 text-xs text-slate-500">
                            Effective date: <span className="text-slate-300">{EFFECTIVE_DATE}</span>
                            <span className="mx-2">·</span>
                            Last updated: <span className="text-slate-300">{EFFECTIVE_DATE}</span>
                        </p>
                    </div>

                    {/* Table of contents */}
                    <nav className="glass-card rounded-2xl p-6 mb-12">
                        <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">
                            Contents
                        </p>
                        <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                            {sections.map((s, i) => (
                                <li key={s.id}>
                                    <a
                                        href={`#${s.id}`}
                                        className="flex items-baseline gap-2 text-slate-400 hover:text-primary transition-colors"
                                    >
                                        <span className="text-primary/60 font-mono text-xs w-5 shrink-0">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        {s.title}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>

                    {/* Body */}
                    <div className="space-y-14 text-slate-300 leading-relaxed [&_p]:text-sm md:[&_p]:text-[15px] [&_p]:leading-7 [&_li]:text-sm md:[&_li]:text-[15px] [&_li]:leading-7">
                        {/* 1. Introduction */}
                        <section>
                            <SectionHeading icon={ShieldCheck} id="introduction">
                                1. Introduction
                            </SectionHeading>
                            <p>
                                SwiftApps builds custom digital systems for Malaysian SMEs and provides
                                related tools and integrations. We respect your privacy and are committed to
                                protecting your personal data in accordance with the{" "}
                                <strong className="text-slate-200">
                                    Personal Data Protection Act 2010 (PDPA) of Malaysia
                                </strong>{" "}
                                and applicable platform requirements, including the Meta Platform Terms and
                                Developer Policies.
                            </p>
                            <p className="mt-3">
                                By using our services you agree to the practices described in this policy. If
                                you do not agree, please discontinue use of our services.
                            </p>
                        </section>

                        {/* 2. Information we collect */}
                        <section>
                            <SectionHeading icon={Database} id="information-we-collect">
                                2. Information We Collect
                            </SectionHeading>
                            <p>We collect only the information needed to operate and improve our services:</p>
                            <ul className="mt-4 space-y-3 list-none">
                                <li className="pl-4 border-l-2 border-primary/30">
                                    <strong className="text-slate-100">Information you provide.</strong> Name,
                                    email address, phone number, business details, and any content you submit
                                    when you contact us, request a demo, or use our applications.
                                </li>
                                <li className="pl-4 border-l-2 border-primary/30">
                                    <strong className="text-slate-100">Account &amp; authentication data.</strong>{" "}
                                    When you connect a third-party account (such as Threads), we receive
                                    access tokens and the profile details you authorise us to access.
                                </li>
                                <li className="pl-4 border-l-2 border-primary/30">
                                    <strong className="text-slate-100">Threads / Meta Platform data.</strong>{" "}
                                    Where you connect your Threads account, we access data through the Threads
                                    API — see Section 4 for the specifics.
                                </li>
                                <li className="pl-4 border-l-2 border-primary/30">
                                    <strong className="text-slate-100">Usage &amp; technical data.</strong>{" "}
                                    IP address, browser type, device information, pages visited, and
                                    interactions, collected automatically to keep the service secure and
                                    reliable.
                                </li>
                            </ul>
                        </section>

                        {/* 3. How we use */}
                        <section>
                            <SectionHeading icon={Cog} id="how-we-use">
                                3. How We Use Your Information
                            </SectionHeading>
                            <p>We use the information we collect to:</p>
                            <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-primary">
                                <li>Provide, operate, and maintain our services and features you request.</li>
                                <li>Authenticate you and connect your linked accounts (e.g. Threads).</li>
                                <li>
                                    Publish, schedule, retrieve, or manage content on your behalf when you
                                    explicitly instruct us to.
                                </li>
                                <li>Respond to your enquiries and provide customer support.</li>
                                <li>Improve, troubleshoot, and secure our services.</li>
                                <li>Comply with legal obligations and platform requirements.</li>
                            </ul>
                            <p className="mt-4">
                                We do <strong className="text-slate-100">not</strong> sell your personal data,
                                and we do not use it for purposes unrelated to those described in this policy.
                            </p>
                        </section>

                        {/* 4. Threads API */}
                        <section>
                            <SectionHeading icon={Share2} id="threads-api">
                                4. Threads &amp; Meta Platform Data
                            </SectionHeading>
                            <p>
                                Some features let you connect your{" "}
                                <strong className="text-slate-200">Threads account (by Meta)</strong> so you can
                                publish and manage content directly from SwiftApps. When you authorise this
                                connection through Meta&rsquo;s official login flow, we may access:
                            </p>
                            <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-primary">
                                <li>Your Threads profile information (such as your user ID and username).</li>
                                <li>
                                    Content and media you choose to publish, and posts you ask us to retrieve
                                    or manage.
                                </li>
                                <li>Basic insights and metrics relating to your own content, where available.</li>
                            </ul>
                            <p className="mt-4">
                                This data is used <strong className="text-slate-100">only</strong> to provide
                                the feature you requested. Specifically, we commit that we:
                            </p>
                            <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-primary">
                                <li>Access Threads data only with your explicit authorisation.</li>
                                <li>Do not sell, rent, or trade Threads or Meta Platform data.</li>
                                <li>
                                    Do not share it with third parties except as strictly required to operate
                                    the service (see Section 5) or as required by law.
                                </li>
                                <li>Store access tokens securely and let you revoke them at any time.</li>
                                <li>
                                    Comply with the{" "}
                                    <span className="text-slate-200">Meta Platform Terms</span> and{" "}
                                    <span className="text-slate-200">Developer Policies</span>.
                                </li>
                            </ul>
                            <p className="mt-4">
                                You can disconnect SwiftApps from your Threads account at any time from your
                                Meta account settings, or by contacting us. Revoking access stops all further
                                data access and triggers deletion of the associated tokens (see Section 7).
                            </p>
                        </section>

                        {/* 5. Sharing */}
                        <section>
                            <SectionHeading icon={Share2} id="sharing">
                                5. How We Share Information
                            </SectionHeading>
                            <p>
                                We do not sell your personal data. We share it only in these limited
                                circumstances:
                            </p>
                            <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-primary">
                                <li>
                                    <strong className="text-slate-100">Service providers.</strong> Trusted
                                    infrastructure partners (e.g. hosting, database, and cloud providers such
                                    as Supabase and Vercel) who process data on our behalf under
                                    confidentiality obligations.
                                </li>
                                <li>
                                    <strong className="text-slate-100">Platform APIs.</strong> Meta / Threads,
                                    when you use features that publish or retrieve content from those
                                    platforms.
                                </li>
                                <li>
                                    <strong className="text-slate-100">Legal compliance.</strong> When required
                                    by law, regulation, legal process, or to protect the rights, safety, and
                                    property of SwiftApps and its users.
                                </li>
                            </ul>
                        </section>

                        {/* 6. Storage & security */}
                        <section>
                            <SectionHeading icon={Lock} id="storage-security">
                                6. Data Storage &amp; Security
                            </SectionHeading>
                            <p>
                                We use industry-standard measures to protect your data, including encryption
                                in transit (HTTPS/TLS), restricted access controls, and secure storage of
                                credentials and tokens. Data may be stored on cloud infrastructure that
                                complies with recognised security standards.
                            </p>
                            <p className="mt-3">
                                No method of transmission or storage is completely secure. While we work hard
                                to protect your information, we cannot guarantee absolute security, and you
                                share information with us at your own risk.
                            </p>
                        </section>

                        {/* 7. Retention & deletion */}
                        <section>
                            <SectionHeading icon={Clock} id="retention-deletion">
                                7. Data Retention &amp; Deletion
                            </SectionHeading>
                            <p>
                                We retain personal data only for as long as necessary to provide our services
                                and to meet legal, accounting, or reporting requirements. When data is no
                                longer needed, we delete or anonymise it.
                            </p>
                            <p className="mt-3">
                                <strong className="text-slate-100">
                                    You can request deletion of your data at any time.
                                </strong>{" "}
                                To request deletion of your account information or any Threads / Meta Platform
                                data we hold, email{" "}
                                <a
                                    href={`mailto:${CONTACT_EMAIL}?subject=Data%20Deletion%20Request`}
                                    className="text-primary hover:underline"
                                >
                                    {CONTACT_EMAIL}
                                </a>{" "}
                                with the subject &ldquo;Data Deletion Request&rdquo;. We will verify your
                                identity and process the request within 30 days. Disconnecting SwiftApps from
                                your Threads account also removes the associated access tokens from our
                                systems.
                            </p>
                        </section>

                        {/* 8. Your rights */}
                        <section>
                            <SectionHeading icon={UserCheck} id="your-rights">
                                8. Your Rights
                            </SectionHeading>
                            <p>
                                Under the PDPA and applicable laws, you have the right to access, correct, or
                                request deletion of your personal data, to withdraw consent, and to limit how
                                your data is processed. To exercise any of these rights, contact us using the
                                details in Section 12. We will respond within a reasonable timeframe.
                            </p>
                        </section>

                        {/* 9. Cookies */}
                        <section>
                            <SectionHeading icon={Cookie} id="cookies">
                                9. Cookies &amp; Tracking
                            </SectionHeading>
                            <p>
                                Our website may use cookies and similar technologies to keep you signed in,
                                remember preferences, and understand how the site is used. You can control
                                cookies through your browser settings; disabling them may affect some
                                functionality.
                            </p>
                        </section>

                        {/* 10. Children */}
                        <section>
                            <SectionHeading icon={Baby} id="children">
                                10. Children&rsquo;s Privacy
                            </SectionHeading>
                            <p>
                                Our services are intended for businesses and adults. We do not knowingly
                                collect personal data from children under 13. If you believe a child has
                                provided us with personal data, please contact us and we will delete it.
                            </p>
                        </section>

                        {/* 11. Changes */}
                        <section>
                            <SectionHeading icon={RefreshCw} id="changes">
                                11. Changes to This Policy
                            </SectionHeading>
                            <p>
                                We may update this Privacy Policy from time to time. When we do, we will revise
                                the &ldquo;Last updated&rdquo; date above. Significant changes will be
                                communicated through our website or, where appropriate, directly to you.
                                Continued use of our services after changes take effect constitutes acceptance
                                of the updated policy.
                            </p>
                        </section>

                        {/* 12. Contact */}
                        <section>
                            <SectionHeading icon={Mail} id="contact">
                                12. Contact Us
                            </SectionHeading>
                            <p>
                                If you have any questions about this Privacy Policy or how we handle your data,
                                please reach out:
                            </p>
                            <div className="glass-card rounded-2xl p-6 mt-5 space-y-3 text-sm">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-4 w-4 text-primary shrink-0" />
                                    <a
                                        href={`mailto:${CONTACT_EMAIL}`}
                                        className="text-slate-300 hover:text-primary transition-colors"
                                    >
                                        {CONTACT_EMAIL}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-primary text-base leading-none">📞</span>
                                    <span className="text-slate-300">{CONTACT_PHONE}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-primary text-base leading-none">💬</span>
                                    <a
                                        href={WHATSAPP}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-slate-300 hover:text-primary transition-colors"
                                    >
                                        WhatsApp
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-primary text-base leading-none">🌐</span>
                                    <a
                                        href={SITE_URL}
                                        className="text-slate-300 hover:text-primary transition-colors"
                                    >
                                        swiftapps.my
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <FooterSection />
        </>
    );
}
