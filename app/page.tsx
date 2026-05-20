import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/Hero";
import {About} from "@/components/sections/About";
import {Portfolio} from "@/components/sections/Portfolio";
import {Resume} from "@/components/sections/Resume";
import {Skills} from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";


export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--page-background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(129,76,236,0.28),_transparent_58%)]" />
      <SiteHeader />
       <main className="bg-[var(--hero-section-background)] pt-20 sm:pt-28 lg:pt-18">

        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Resume />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
