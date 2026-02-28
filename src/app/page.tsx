import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <EcosystemSection />
            <TechStackSection />
            <ContactSection />

            <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 bg-slate-900/80">
                <p>© {new Date().getFullYear()} SwiftApps. All rights reserved.</p>
                <p className="mt-1">Built with Next.js 15, Tailwind & Framer Motion.</p>
            </footer>
        </>
    );
}
