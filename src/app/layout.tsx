import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "SwiftApps | Infrastruktur Perisian Gred Junior",
    description: "Membina sistem yang scalable, modular, dan SaaS-ready menggunakan tech stack moden. Kami bina arsitektur yang solid.",
    keywords: ["Software Architect", "Full-Stack Developer", "Next.js", "Laravel", "Malaysia", "SaaS", "Software Development"],
    authors: [{ name: "Sahdan", url: "https://swiftapps.my" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ms" className="dark scroll-smooth">
            <body className={`${inter.variable} ${outfit.variable} font-sans min-h-screen antialiased bg-[#020617] text-slate-200 selection:bg-primary/30 selection:text-primary-foreground`}>
                {/* Background Ambient Glows */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob"></div>
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>

                    {/* subtle grid background */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
                </div>

                <main className="relative flex min-h-screen flex-col">
                    {children}
                </main>
            </body>
        </html>
    );
}
