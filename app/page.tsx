"use client"

import { useEffect, useState } from 'react'
import Link from "next/link"
import { ArrowRight, Github, Globe, Terminal, Cpu, Database, Network, Code, GraduationCap, MapPin } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { supabase } from '@/lib/supabase'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
}

export default function Home() {
  const [dbProjects, setDbProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false })
        if (data) setDbProjects(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const defaultProjects = [
    {
      id: 101,
      title: "E-Commerce Infrastructure",
      description: "Arsitektur jual-beli digital yang scalable dengan manajemen inventaris real-time dan gateway pembayaran terintegrasi.",
      tags: ["Fullstack", "System Design"],
      link: "#"
    },
    {
      id: 102,
      title: "Automated Bot Systems",
      description: "Implementasi asisten virtual cerdas pada WhatsApp & Telegram untuk efisiensi layanan pelanggan berbasis API.",
      tags: ["Node.js", "Automation"],
      link: "#"
    },
    {
      id: 103,
      title: "AI & Data Engineering",
      description: "Eksperimen integrasi Large Language Models (LLM) dengan database SQL untuk analisis data prediktif.",
      tags: ["Python", "SQL", "AI"],
      link: "#"
    }
  ]

  const displayProjects = dbProjects.length > 0 ? dbProjects : defaultProjects

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-10">
            <Link className="font-bold text-xl tracking-tighter flex items-center gap-2" href="/">
              <Terminal className="w-5 h-5 text-primary" />
              Nephyy.
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <Link href="#about" className="hover:text-primary transition-colors">Tentang</Link>
              <Link href="#projects" className="hover:text-primary transition-colors">Portofolio</Link>
              <Link href="#" className="hover:text-primary transition-colors">Jurnal</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
             <ThemeToggle />
             <Link 
                href="https://wa.me/6281533331355"
                target="_blank"
                className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:scale-105"
             >
                Hubungi Bintang
             </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10" />
          
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs font-semibold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open for Collaboration
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Bintang Putra <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                Pratama.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Dikenal secara digital sebagai <span className="text-foreground font-semibold">Nephyy</span>. Siswa SMK yang mendedikasikan diri untuk membangun ekosistem web modern dan teknologi masa depan.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
               <Link href="#projects" className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all hover:pr-10 group">
                  Lihat Karya Saya <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Link>
               <Link href="https://github.com/Nephyy1" target="_blank" className="h-12 px-8 rounded-full border border-border bg-background hover:bg-secondary font-semibold flex items-center gap-2 transition-all">
                  <Github className="w-4 h-4" /> GitHub
               </Link>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 border-t border-border/50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
               <div>
                  <h2 className="text-3xl font-bold mb-6">Profil Profesional</h2>
                  
                  <div className="bg-card border border-border rounded-2xl p-6 mb-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Pendidikan</h3>
                        <p className="text-muted-foreground">SMK Negeri 2 Banyumas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Domisili</h3>
                        <p className="text-muted-foreground">Jawa Tengah, Indonesia</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent pl-2">
                    
                    <div className="relative flex items-center gap-6 group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow shrink-0 z-10">
                        <Cpu className="w-5 h-5 text-primary" />
                      </div>
                      <div className="w-full p-4 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors shadow-sm">
                        <div className="font-bold text-lg">2025: AI Integration</div>
                        <div className="text-muted-foreground text-sm mt-1">Implementasi Deep Learning & SQL Optimization.</div>
                      </div>
                    </div>

                    <div className="relative flex items-center gap-6 group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow shrink-0 z-10">
                        <Network className="w-5 h-5 text-primary" />
                      </div>
                      <div className="w-full p-4 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors shadow-sm">
                        <div className="font-bold text-lg">2023: Fullstack Era</div>
                        <div className="text-muted-foreground text-sm mt-1">Pengembangan sistem kompleks dengan Next.js ecosystem.</div>
                      </div>
                    </div>

                    <div className="relative flex items-center gap-6 group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow shrink-0 z-10">
                        <Code className="w-5 h-5 text-primary" />
                      </div>
                      <div className="w-full p-4 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors shadow-sm">
                        <div className="font-bold text-lg">2020: The Beginning</div>
                        <div className="text-muted-foreground text-sm mt-1">Fondasi Web Development (HTML/CSS/JS).</div>
                      </div>
                    </div>

                  </div>
               </div>

               <div className="bg-secondary/20 p-8 rounded-3xl border border-border/50 sticky top-24">
                  <Terminal className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Tentang Nephyy</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    "Sebagai siswa SMK, saya tidak hanya belajar kode, tapi memanfaatkannya untuk memecahkan masalah nyata. **Nephyy** adalah identitas dimana kreativitas dan logika bertemu."
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'React Native', 'Supabase', 'Node.js', 'TypeScript', 'Tailwind'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 bg-secondary/10">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Showcase Proyek</h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                   Kumpulan solusi digital yang telah saya bangun, menggabungkan performa tinggi dan desain intuitif.
                </p>
              </div>
              <Link href="#" className="text-primary font-semibold hover:underline underline-offset-4 flex items-center gap-2">
                Lihat Semua di GitHub <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayProjects.map((project) => (
                <div key={project.id} className="group flex flex-col h-full bg-background border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-secondary to-background relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                       <Database className="w-16 h-16 text-primary/20" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags?.map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-secondary text-foreground/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    {project.link && (
                      <Link href={project.link} target="_blank" className="inline-flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors mt-auto">
                        Lihat Detail <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-1">Bintang P. Pratama (Nephyy)</h4>
            <p className="text-sm text-muted-foreground">© 2025 Creative Technologist. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
             <Link href="https://github.com/Nephyy1" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="w-5 h-5" /></Link>
             <Link href="https://nephyy.my.id" className="text-muted-foreground hover:text-foreground transition-colors"><Globe className="w-5 h-5" /></Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
