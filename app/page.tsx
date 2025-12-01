"use client"

import { useEffect, useState } from 'react'
import Link from "next/link"
import { ArrowRight, Github, Globe, Layers, Database, Code2 } from "lucide-react"
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
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
      if (data) setProjects(data)
    }
    fetchProjects()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link className="font-bold text-xl tracking-tight" href="/">
              Nephyy.
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Tentang</Link>
              <Link href="#projects" className="hover:text-foreground transition-colors">Proyek</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Artikel</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
             <ThemeToggle />
             <Link 
                href="https://wa.me/79992461528"
                className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
             >
                Kontak
             </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col items-start gap-6">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-secondary text-secondary-foreground">
                Software Engineer
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                Membangun <span className="text-primary">Masa Depan</span><br/> Lewat Baris Kode.
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
                Halo, saya Nephyy. Saya mengubah ide kompleks menjadi aplikasi web yang cepat, responsif, dan mudah digunakan.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                 <Link href="#projects" className="h-11 px-8 rounded-md bg-primary text-primary-foreground font-medium flex items-center hover:bg-primary/90 transition-colors">
                    Lihat Proyek
                 </Link>
                 <Link href="/admin" className="h-11 px-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium flex items-center transition-colors">
                    Login Admin
                 </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-border/40 bg-secondary/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="col-span-1">
                        <h3 className="text-xl font-bold sticky top-24">Timeline</h3>
                    </div>
                    <div className="col-span-1 md:col-span-3 space-y-10">
                        {[
                          { year: '2025', title: 'AI & Database', desc: 'Eksplorasi Deep Learning dan SQL Optimization.' },
                          { year: '2023', title: 'Fullstack Dev', desc: 'Membangun aplikasi kompleks dengan Next.js dan Supabase.' },
                          { year: '2020', title: 'Hello World', desc: 'Memulai perjalanan coding dari HTML & CSS dasar.' }
                        ].map((item, i) => (
                          <div key={i} className="relative pl-8 border-l-2 border-border/60">
                              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-primary"></span>
                              <h4 className="font-semibold text-lg">{item.year} - {item.title}</h4>
                              <p className="text-muted-foreground mt-2">{item.desc}</p>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-bold tracking-tight">Proyek Terbaru</h2>
                  <p className="text-muted-foreground mt-2">Dikelola langsung melalui Dashboard Admin.</p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.length === 0 ? (
                <div className="col-span-full py-10 text-center text-muted-foreground bg-secondary/30 rounded-xl border border-dashed">
                  Belum ada proyek. Silakan upload via Admin.
                </div>
              ) : (
                projects.map((project) => (
                  <div key={project.id} className="group relative rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col h-full">
                    <div className="h-48 bg-muted w-full relative overflow-hidden">
                       <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                          <Code2 className="w-10 h-10 text-muted-foreground/50" />
                       </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                         {project.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/50">
                              {tag}
                            </span>
                         ))}
                      </div>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                           Lihat Detail <ArrowRight className="ml-1 w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 bg-background py-8 mt-auto">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Nephyy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Globe className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
