import { ArrowRight, Code, Layers, Sparkles, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-cyan-500/30">
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#0f172a] bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-purple-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-b-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tighter text-gradient">
            Nephyy
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <Link href="#" className="hover:text-cyan-400 transition-colors">Home</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Projects</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Blog</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Contact</Link>
          </div>
          <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium">
            Let's Talk
          </button>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6 animate-pulse">
            <Sparkles size={12} />
            <span>Open for Collaboration</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Building Digital <br />
            <span className="text-gradient">Experiences</span> That Matter
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Hi, I'm <span className="text-slate-200 font-semibold">Nephyy</span>. 
            A creative developer focused on crafting intuitive interfaces and robust web applications with modern technologies.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300">
              Explore Portfolio
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 rounded-full glass-panel hover:bg-white/5 transition-all font-medium border border-white/10">
              View Articles
            </button>
          </div>

          <div className="mt-16 flex justify-center gap-6 text-slate-400">
            <Github className="w-6 h-6 hover:text-white cursor-pointer transition-colors hover:scale-110" />
            <Linkedin className="w-6 h-6 hover:text-white cursor-pointer transition-colors hover:scale-110" />
            <Instagram className="w-6 h-6 hover:text-white cursor-pointer transition-colors hover:scale-110" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Concept</h2>
            <Link href="#" className="text-cyan-400 text-sm hover:underline underline-offset-4">View All</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative rounded-2xl glass-panel p-1 overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-48 bg-slate-800/50 rounded-xl mb-4 overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                    <Code size={40} />
                 </div>
              </div>
              <div className="p-4 relative">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">SaaS Dashboard</h3>
                <p className="text-slate-400 text-sm mb-4">A complete analytics platform designed for high scalability and performance.</p>
                <div className="flex gap-2">
                   <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Next.js</span>
                   <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Tailwind</span>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl glass-panel p-1 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-48 bg-slate-800/50 rounded-xl mb-4 overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                    <Layers size={40} />
                 </div>
              </div>
              <div className="p-4 relative">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">E-Commerce API</h3>
                <p className="text-slate-400 text-sm mb-4">Headless commerce solution with integrated payment gateways and inventory.</p>
                 <div className="flex gap-2">
                   <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Node.js</span>
                   <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Supabase</span>
                </div>
              </div>
            </div>

             <div className="group relative rounded-2xl glass-panel p-1 overflow-hidden hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-48 bg-slate-800/50 rounded-xl mb-4 overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                    <Sparkles size={40} />
                 </div>
              </div>
              <div className="p-4 relative">
                <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">AI Content Gen</h3>
                <p className="text-slate-400 text-sm mb-4">Generative AI wrapper application for creating marketing copy automatically.</p>
                 <div className="flex gap-2">
                   <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">OpenAI</span>
                   <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">React</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Nephyy. All rights reserved.</p>
      </footer>
    </main>
  );
      }
