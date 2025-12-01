import Link from "next/link";
import { ArrowRight, Github, Globe, Layers, ShoppingBag, Smartphone, Bot, Database, Code2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-6">
          <div className="mr-4 flex">
            <Link className="mr-6 flex items-center space-x-2 font-bold text-xl tracking-tight" href="/">
              Nephyy.
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <Link href="#" className="transition-colors hover:text-foreground">Tentang</Link>
              <Link href="#" className="transition-colors hover:text-foreground">Proyek</Link>
              <Link href="#" className="transition-colors hover:text-foreground">Keahlian</Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
             <Link 
                href="https://wa.me/79992461528"
                target="_blank"
                className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
             >
                Hubungi Saya
             </Link>
             <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container px-6 py-24 md:py-32 flex flex-col items-start gap-6 max-w-screen-xl mx-auto">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
            Terbuka untuk Kolaborasi
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Membangun Solusi Digital <br className="hidden md:block"/> yang <span className="text-muted-foreground">Bermakna.</span>
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Halo, saya Nephyy. Pengembang web otodidak yang fokus menciptakan antarmuka intuitif, bot otomatis, dan aplikasi web handal dengan teknologi modern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
             <Link 
                href="#projects"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
             >
                Lihat Karya
             </Link>
             <Link 
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
             >
                Baca Artikel
             </Link>
          </div>
        </section>

        <section className="container px-6 py-12 max-w-screen-xl mx-auto border-t border-border/40">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-xl font-bold mb-4">Perjalanan Saya</h3>
                </div>
                <div className="col-span-1 md:col-span-3 space-y-8">
                    <div className="relative pl-8 border-l border-border">
                        <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></span>
                        <h4 className="font-semibold text-lg">2025 - AI & Database</h4>
                        <p className="text-muted-foreground mt-1">Mengeksplorasi kecerdasan buatan (AI) dan memperdalam manajemen database SQL.</p>
                    </div>
                    <div className="relative pl-8 border-l border-border">
                        <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-muted-foreground"></span>
                        <h4 className="font-semibold text-lg">2023 - Modern Stack</h4>
                        <p className="text-muted-foreground mt-1">Beralih ke ekosistem JavaScript modern (React.js, Next.js) untuk performa lebih tinggi.</p>
                    </div>
                    <div className="relative pl-8 border-l border-border">
                        <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-muted-foreground"></span>
                        <h4 className="font-semibold text-lg">2022 - Backend Development</h4>
                        <p className="text-muted-foreground mt-1">Mendalami Node.js dan PHP, serta membuat Bot WhatsApp & Telegram pertama.</p>
                    </div>
                    <div className="relative pl-8 border-l border-border">
                        <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-muted-foreground"></span>
                        <h4 className="font-semibold text-lg">2020 - Awal Mula</h4>
                        <p className="text-muted-foreground mt-1">Belajar otodidak HTML, CSS, dan JS dasar saat masa pandemi.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" className="container px-6 py-12 md:py-24 max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Proyek Pilihan</h2>
            <p className="text-muted-foreground text-lg">Beberapa karya terbaik yang pernah saya kerjakan.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="group relative rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all overflow-hidden col-span-1 md:col-span-2">
               <div className="p-6 flex flex-col h-full justify-between">
                  <div className="mb-4 p-4 rounded-lg bg-secondary/50 w-fit">
                    <ShoppingBag className="w-8 h-8 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Platform E-Commerce</h3>
                    <p className="text-muted-foreground mb-4">Solusi toko online fungsional untuk transaksi jual beli produk yang aman dan efisien.</p>
                    <div className="flex gap-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground">Web Design</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground">Development</span>
                    </div>
                  </div>
               </div>
            </div>

            <div className="group relative rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all overflow-hidden col-span-1">
               <div className="p-6 flex flex-col h-full justify-between">
                  <div className="mb-4 p-4 rounded-lg bg-secondary/50 w-fit">
                    <Bot className="w-8 h-8 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Bot WhatsApp & Telegram</h3>
                    <p className="text-muted-foreground mb-4">Asisten virtual otomatis berbasis Node.js untuk layanan mandiri.</p>
                    <div className="flex gap-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground">Node.js</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground">API</span>
                    </div>
                  </div>
               </div>
            </div>

            <div className="group relative rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all overflow-hidden col-span-1">
               <div className="p-6 flex flex-col h-full justify-between">
                  <div className="mb-4 p-4 rounded-lg bg-secondary/50 w-fit">
                    <Code2 className="w-8 h-8 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Portofolio Pribadi</h3>
                    <p className="text-muted-foreground mb-4">Platform digital personal branding untuk menampilkan showcase keahlian.</p>
                     <div className="flex gap-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground">Next.js</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground">Tailwind</span>
                    </div>
                  </div>
               </div>
            </div>

             <div className="group relative rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all overflow-hidden col-span-1 md:col-span-2">
               <div className="p-6 flex flex-col h-full justify-between">
                  <div className="mb-4 p-4 rounded-lg bg-secondary/50 w-fit">
                    <Database className="w-8 h-8 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Eksplorasi Database & AI</h3>
                    <p className="text-muted-foreground mb-4">Proyek eksperimental dalam manajemen data SQL dan integrasi kecerdasan buatan sederhana.</p>
                     <div className="flex gap-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground">SQL</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground">Python</span>
                    </div>
                  </div>
               </div>
            </div>

          </div>
          
           <div className="mt-12 flex justify-center">
             <Link href="#" className="group inline-flex items-center text-sm font-medium hover:text-primary transition-colors">
               Lihat Semua Proyek <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
             </Link>
           </div>
        </section>

        <section className="border-t border-border/40 bg-secondary/20">
           <div className="container px-6 py-16 md:py-24 max-w-screen-xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Tertarik bekerja sama?</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Mari berkolaborasi menciptakan sesuatu yang hebat. Saya terbuka untuk proyek freelance dan konsultasi.
              </p>
              <Link 
                href="https://wa.me/79992461528"
                target="_blank"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
             >
                Hubungi via WhatsApp
             </Link>
           </div>
        </section>
      </main>

      <footer className="border-t border-border/40 bg-background py-8">
        <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <p className="text-sm text-muted-foreground">
            © 2025 Nephyy. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors"><Github className="w-5 h-5" /></Link>
            <Link href="https://nephyy.my.id" className="hover:text-foreground transition-colors"><Globe className="w-5 h-5" /></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
