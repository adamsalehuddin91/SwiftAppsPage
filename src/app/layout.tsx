import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "SwiftApps | Modern Software Infrastructure",
    description: "Building scalable, modular, and SaaS-ready systems using modern tech stacks. Full-Stack Developer & Software Architect based in Malaysia.",
    keywords: ["Software Architect", "Full-Stack Developer", "Next.js", "Laravel", "Malaysia", "SaaS", "Software Development", "SwiftApps"],
    authors: [{ name: "Sahdan", url: "https://swiftapps.my" }],
    metadataBase: new URL("https://swiftapps.my"),
    openGraph: {
        title: "SwiftApps | Modern Software Infrastructure",
        description: "Building scalable, modular, and SaaS-ready systems. Full-Stack Developer & Software Architect.",
        url: "https://swiftapps.my",
        siteName: "SwiftApps",
        locale: "en_MY",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SwiftApps | Modern Software Infrastructure",
        description: "Building scalable, modular, and SaaS-ready systems. Full-Stack Developer & Software Architect.",
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${inter.variable} ${outfit.variable} font-sans min-h-screen antialiased bg-[#020617] text-slate-200 selection:bg-primary/30 selection:text-primary-foreground`}>
                {/* Background Ambient Glows */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob"></div>
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob" style={{ animationDelay: "2s" }}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob" style={{ animationDelay: "4s" }}></div>

                    {/* subtle grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-100"></div>
                </div>

                <main className="relative flex min-h-screen flex-col">
                    {children}
                </main>
            </body>
        </html>
    );
}
