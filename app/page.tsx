"use client"

import { useEffect, useState } from 'react'
import Link from "next/link"
import { ArrowRight, Github, Globe, Terminal, User, GraduationCap, MapPin, Phone, Database, Sparkles, Award, CheckCircle2, BookOpen, Calendar, ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { supabase } from '@/lib/supabase'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
}

interface Article {
  id: number
  title: string
  excerpt: string
  slug: string
  cover_image: string
  created_at: string
}

export default function Home() {
  const [dbProjects, setDbProjects] = useState<Project[]>([])
  const [dbArticles, setDbArticles] = useState<Article[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: projects } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
        if (projects) setDbProjects(projects)

        const { data: articles } = await supabase.from('articles').select('*').order('created_at', { ascending: false })
        if (articles) setDbArticles(articles)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const defaultProjects = [
    {
      id: 101,
      title: "E-Commerce Infrastructure",
      description: "Arsitektur jual-beli digital yang skalabel dengan manajemen inventaris waktu nyata dan gerbang pembayaran terintegrasi.",
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
      description: "Eksperimen integrasi Model Bahasa Besar (LLM) dengan basis data SQL untuk analisis data prediktif.",
      tags: ["Python", "SQL", "AI"],
      link: "#"
    }
  ]

  const defaultArticles = [
    {
      id: 201,
      title: "Masa Depan AI dalam Pengembangan Web",
      excerpt: "Menganalisis bagaimana Generative AI mengubah cara kita menulis kode, mendesain UI, dan dampaknya bagi karir developer.",
      slug: "ai-web-dev",
      cover_image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      created_at: new Date().toISOString()
    },
    {
      id: 202,
      title: "Optimasi Performa Next.js",
      excerpt: "Panduan teknis mendalam tentang Server Components, Image Optimization, dan strategi caching untuk skor Lighthouse 100.",
      slug: "nextjs-performance",
      cover_image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      created_at: new Date().toISOString()
    },
    {
      id: 203,
      title: "TypeScript di Tahun 2025",
      excerpt: "Menjelaskan mengapa Type Safety bukan hanya soal mencegah bug, tapi tentang skalabilitas tim jangka panjang.",
      slug: "typescript-2025",
      cover_image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
      created_at: new Date().toISOString()
    }
  ]

  const certificates = [
    {
      id: 1,
      title: "Web Development Mastery",
      issuer: "Fullstack Certification",
      image: "/certificate1.png"
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      issuer: "Artificial Intelligence Bootcamp",
      image: "/certificate2.png"
    },
    {
      id: 3,
      title: "SQL Database Specialist",
      issuer: "Data Management Professional",
      image: "/certificate3.png"
    }
  ]

  const displayProjects = dbProjects.length > 0 ? dbProjects : defaultProjects
  const displayArticles = dbArticles.length > 0 ? dbArticles : defaultArticles

  return (
    <>
      <style jsx global>{`
        @keyframes move-grid {
            from { background-position: 0 0; }
            to { background-position: 50px 50px; }
        }

        #preloader {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            display: flex; justify-content: center; align-items: center;
            z-index: 9999;
            background-color: #111111;
            background-image: 
                repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.07) 0, rgba(255, 255, 255, 0.07) 1px, transparent 1px, transparent 50px),
                repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.07) 0, rgba(255, 255, 255, 0.07) 1px, transparent 1px, transparent 50px);
            animation: 
                preloader-fade-out 0.5s ease-in forwards 3.3s,
                move-grid 10s linear infinite;
        }

        .logo-svg { width: 25vmin; max-width: 180px; overflow: visible; }
        #blueprint-guides { opacity: 0; animation: guides-fade-in-out 2.3s ease-out forwards 0.2s; }
        #logo-path { stroke-dasharray: 205; stroke-dashoffset: 205; animation: draw-logo 2s cubic-bezier(0.65, 0, 0.35, 1) forwards 0.5s; }
        #logo-dot { opacity: 0; transform-origin: center; animation: pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards 2.8s; }

        @keyframes guides-fade-in-out { 0% { opacity: 0; } 20% { opacity: 0.3; } 80% { opacity: 0.3; } 100% { opacity: 0; } }
        @keyframes draw-logo { to { stroke-dashoffset: 0; } }
        @keyframes pop-in { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes preloader-fade-out { from { opacity: 1; } to { opacity: 0; visibility: hidden; } }
        
        .page-wrapper {
            opacity: 0;
            animation: content-fade-in 0.8s ease-out forwards 3.5s;
        }

        @keyframes content-fade-in { 
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); } 
        }
      `}</style>

      <div id="preloader">
        <svg className="logo-svg" viewBox="0 0 110 100" xmlns="http://www.w3.org/2000/svg">
            <g id="blueprint-guides" stroke="#FFFFFF" strokeWidth="1"><line x1="0" y1="50" x2="110" y2="50" /><line x1="50" y1="0" x2="50" y2="100" /></g>
            <path id="logo-path" d="M20 80 L20 20 L80 80 L80 20" fill="none" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
            <circle id="logo-dot" cx="94" cy="20" r="5" fill="#FFFFFF"/>
        </svg>
      </div>

      <div className="page-wrapper">
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
          
          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
              <div className="flex items-center gap-10">
                <Link className="font-bold text-xl tracking-tighter flex items-center gap-2 hover:opacity-80 transition-opacity" href="/">
                  <Terminal className="w-5 h-5 text-primary" />
                  Nephyy.
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                  <Link href="#about" className="hover:text-primary transition-colors hover:underline underline-offset-4">Tentang</Link>
                  <Link href="#achievements" className="hover:text-primary transition-colors hover:underline underline-offset-4">Sertifikat</Link>
                  <Link href="#blog" className="hover:text-primary transition-colors hover:underline underline-offset-4">Artikel</Link>
                </nav>
              </div>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <Link 
                    href="https://wa.me/6281533331355"
                    target="_blank"
                    className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                >
                    Hubungi Saya
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-1">
            
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse duration-[5000ms]" />
              
              <div className="container mx-auto px-6 max-w-5xl text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs font-semibold mb-8 shadow-sm backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span>Terbuka untuk Kolaborasi Proyek</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
                  Transformasi Ide <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-purple-500">
                    Menjadi Realitas.
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                  Membangun ekosistem digital yang modern, skalabel, dan berorientasi pada pengalaman pengguna melalui kode yang efisien.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="#blog" className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold flex items-center gap-2 shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:pr-10 hover:scale-105 active:scale-95 group">
                      Baca Jurnal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="https://github.com/Nephyy1" target="_blank" className="h-12 px-8 rounded-full border border-border bg-background hover:bg-secondary font-semibold flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                      <Github className="w-4 h-4" /> GitHub
                  </Link>
                </div>
              </div>
            </section>

            <section id="about" className="py-24 border-t border-border/50 bg-secondary/5">
              <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  
                  <div className="w-full md:w-1/3 sticky top-24 z-10">
                      <div className="bg-card/50 backdrop-blur-sm border border-border/60 rounded-2xl p-6 shadow-sm space-y-5 hover:border-primary/30 transition-colors duration-300">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 ring-1 ring-primary/20">
                            <User className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Nama Lengkap</div>
                            <div className="font-medium">Bintang Putra Pratama</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 ring-1 ring-primary/20">
                            <Terminal className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Identitas Digital</div>
                            <div className="font-medium">Nephyy</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 ring-1 ring-primary/20">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Institusi Pendidikan</div>
                            <div className="font-medium">SMK Negeri 2 Banyumas</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 ring-1 ring-primary/20">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Domisili</div>
                            <div className="font-medium">Jawa Tengah, Indonesia</div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-border mt-4">
                          <Link 
                            href="https://wa.me/6281533331355" 
                            target="_blank"
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium transition-all shadow-md shadow-primary/20 hover:scale-[1.02]"
                          >
                            <Phone className="w-4 h-4" /> Hubungi via WhatsApp
                          </Link>
                        </div>
                      </div>
                  </div>

                  <div className="w-full md:w-2/3">
                      <h2 className="text-3xl font-bold mb-6">Profil Profesional</h2>
                      
                      <div className="prose prose-neutral dark:prose-invert max-w-none text-lg leading-relaxed text-muted-foreground">
                        <p className="mb-6">
                          Saya adalah seorang <span className="text-foreground font-semibold border-b-2 border-primary/30">Technologist</span> muda yang memiliki dedikasi tinggi terhadap pengembangan perangkat lunak modern. Memulai perjalanan dari rasa ingin tahu, kini saya fokus merancang solusi digital yang tidak hanya berfungsi dengan baik, tetapi juga memberikan nilai tambah bagi penggunanya.
                        </p>
                        <p className="mb-8">
                          Sebagai siswa di SMK Negeri 2 Banyumas, saya menyeimbangkan pembelajaran akademis dengan eksplorasi teknologi praktis. Saya percaya bahwa kode pemrograman adalah jembatan antara logika mesin dan kebutuhan manusia. Portofolio ini adalah dokumentasi dari komitmen saya untuk terus belajar, berinovasi, dan berkarya.
                        </p>
                      </div>

                      <h3 className="text-2xl font-bold mb-8 mt-12 flex items-center gap-2">
                        <span className="w-8 h-1 bg-primary rounded-full"></span> Jejak Perjalanan
                      </h3>
                      
                      <div className="space-y-10 pl-2 relative before:absolute before:inset-0 before:ml-2.5 before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/20 before:to-transparent">
                        
                        {[
                          { year: '2025', title: 'Integrasi Kecerdasan Buatan', desc: 'Fokus mendalami implementasi AI dan optimalisasi basis data untuk aplikasi yang lebih cerdas dan responsif.' },
                          { year: '2023', title: 'Ekosistem Fullstack', desc: 'Transisi ke teknologi modern berbasis JavaScript (Next.js, TypeScript) untuk membangun sistem yang kompleks dan handal.' },
                          { year: '2020', title: 'Awal Eksplorasi', desc: 'Memulai langkah pertama dalam dunia pemrograman web, mempelajari fondasi logika dan struktur kode.' }
                        ].map((item, index) => (
                          <div key={index} className="relative pl-8 group cursor-default">
                            <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 border-background bg-primary shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
                            <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{item.title} <span className="text-sm font-normal text-muted-foreground ml-2 border border-border px-2 py-0.5 rounded-full">{item.year}</span></h4>
                            <p className="text-muted-foreground mt-2 text-base">
                              {item.desc}
                            </p>
                          </div>
                        ))}

                      </div>
                  </div>

                </div>
              </div>
            </section>

            <section id="achievements" className="py-24 bg-background border-t border-border/50">
              <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                  <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                        <Award className="w-8 h-8 text-primary" /> Sertifikasi & Pencapaian
                      </h2>
                      <p className="text-muted-foreground text-lg max-w-xl">
                        Bukti kompetensi teknis dan dedikasi pembelajaran dalam berbagai bidang teknologi.
                      </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 flex flex-col">
                      <div className="aspect-[4/3] overflow-hidden bg-secondary relative border-b border-border/50">
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 bg-card flex-1">
                        <div className="flex items-center justify-between mb-3">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider">
                              <CheckCircle2 className="w-3 h-3" />
                              Verified
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="blog" className="py-24 bg-background border-t border-border/50">
              <div className="container mx-auto px-6 max-w-6xl">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                          <BookOpen className="w-8 h-8 text-primary" /> Jurnal Teknologi
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                          Catatan, pemikiran, dan pandangan mendalam seputar perkembangan teknologi modern.
                        </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayArticles.map((article) => (
                      <Link href={`/blog/${article.slug}`} key={article.id} className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                        <div className="h-56 bg-secondary relative overflow-hidden">
                          <img 
                              src={article.cover_image} 
                              alt={article.title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60"></div>
                          <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-bold shadow-sm border border-border">
                                Artikel
                              </span>
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                              {article.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                              {article.excerpt}
                          </p>
                          <div className="inline-flex items-center text-sm font-semibold text-primary mt-auto">
                              Baca Selengkapnya <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
              </div>
            </section>

          </main>

          <footer className="bg-background border-t border-border py-12">
            <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h4 className="font-bold text-lg mb-1">Bintang Putra Pratama (Nephyy)</h4>
                <p className="text-sm text-muted-foreground">© 2025 Creative Technologist. Hak Cipta Dilindungi.</p>
              </div>
              <div className="flex gap-6">
                <Link href="https://github.com/Nephyy1" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"><Github className="w-5 h-5" /></Link>
                <Link href="https://nephyy.my.id" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"><Globe className="w-5 h-5" /></Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
