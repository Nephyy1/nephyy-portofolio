import Link from "next/link";
import { ArrowRight, Github, Globe, Layers, LayoutTemplate, Smartphone } from "lucide-react";
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
              <Link href="#" className="transition-colors hover:text-foreground">About</Link>
              <Link href="#" className="transition-colors hover:text-foreground">Projects</Link>
              <Link href="#" className="transition-colors hover:text-foreground">Blog</Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
             <Link 
                href="#"
                className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
             >
                Contact Me
             </Link>
             <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container px-6 py-24 md:py-32 flex flex-col items-start gap-6 max-w-screen-xl mx-auto">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
            Available for hire
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Designing digital <br className="hidden md:block"/> experiences that <span className="text-muted-foreground">scale.</span>
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            I'm Nephyy, a full-stack developer passionate about building accessible, pixel-perfect user interfaces that blend art and functionality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
             <Link 
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
             >
                View Projects
             </Link>
             <Link 
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
             >
                Read Blog
             </Link>
          </div>
        </section>

        <section className="container px-6 py-12 md:py-24 max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
            <p className="text-muted-foreground text-lg">A selection of projects I've worked on recently.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="group relative rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all overflow-hidden col-span-1 md:col-span-2">
               <div className="p-6 flex flex-col h-full justify-between">
                  <div className="mb-4 p-4 rounded-lg bg-secondary/50 w-fit">
                    <LayoutTemplate className="w-8 h-8 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">E-Commerce Dashboard</h3>
                    <p className="text-muted-foreground mb-4">A comprehensive dashboard for managing products, orders, and analytics with real-time data visualization.</p>
                    <div className="flex gap-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground">Next.js</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground">Supabase</span>
                    </div>
                  </div>
               </div>
            </div>

            <div className="group relative rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all overflow-hidden col-span-1">
               <div className="p-6 flex flex-col h-full justify-between">
                  <div className="mb-4 p-4 rounded-lg bg-secondary/50 w-fit">
                    <Smartphone className="w-8 h-8 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Mobile Banking App</h3>
                    <p className="text-muted-foreground mb-4">Responsive fintech interface design focusing on accessibility.</p>
                    <div className="flex gap-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground">React Native</span>
                    </div>
                  </div>
               </div>
            </div>

            <div className="group relative rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all overflow-hidden col-span-1">
               <div className="p-6 flex flex-col h-full justify-between">
                  <div className="mb-4 p-4 rounded-lg bg-secondary/50 w-fit">
                    <Layers className="w-8 h-8 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Design System</h3>
                    <p className="text-muted-foreground mb-4">A unified UI library for consistent branding across products.</p>
                     <div className="flex gap-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground">Storybook</span>
                    </div>
                  </div>
               </div>
            </div>

             <div className="group relative rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all overflow-hidden col-span-1 md:col-span-2">
               <div className="p-6 flex flex-col h-full justify-between">
                  <div className="mb-4 p-4 rounded-lg bg-secondary/50 w-fit">
                    <Globe className="w-8 h-8 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Travel Blog Platform</h3>
                    <p className="text-muted-foreground mb-4">Content management system with rich text editing and image optimization for travel enthusiasts.</p>
                     <div className="flex gap-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground">T3 Stack</span>
                    </div>
                  </div>
               </div>
            </div>

          </div>
          
           <div className="mt-12 flex justify-center">
             <Link href="#" className="group inline-flex items-center text-sm font-medium hover:text-primary transition-colors">
               View All Projects <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
             </Link>
           </div>
        </section>

        <section className="border-t border-border/40 bg-secondary/20">
           <div className="container px-6 py-16 md:py-24 max-w-screen-xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to start a project?</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Let's collaborate to build something impactful. I'm currently available for freelance work and consulting.
              </p>
              <Link 
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
             >
                Get in Touch
             </Link>
           </div>
        </section>
      </main>

      <footer className="border-t border-border/40 bg-background py-8">
        <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <p className="text-sm text-muted-foreground">
            © 2024 Nephyy. Built with Next.js & Tailwind.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors"><Github className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-foreground transition-colors"><Globe className="w-5 h-5" /></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
