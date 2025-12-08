"use client"

import { useEffect, useState } from 'react'
import Link from "next/link"
import { ArrowRight, Github, Globe, Terminal, User, GraduationCap, MapPin, Phone, Database, Sparkles, Award, CheckCircle2, BookOpen, Calendar } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { supabase } from '@/lib/supabase'
import { motion } from 'framer-motion'

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  }

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-x-hidden relative selection:bg-white/10 selection:text-white">
      
      <style jsx global>{`
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-10">
            <Link className="font-bold text-xl tracking-tighter flex items-center gap-2 hover:opacity-80 transition-opacity" href="/">
              <Terminal className="w-5 h-5 text-cyan-500" />
              Nephyy.
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <Link href="#about" className="hover:text-cyan-500 transition-colors">Tentang</Link>
              <Link href="#achievements" className="hover:text-cyan-500 transition-colors">Sertifikat</Link>
              <Link href="#blog" className="hover:text-cyan-500 transition-colors">Artikel</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link 
                href="https://wa.me/6281533331355"
                target="_blank"
                className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-secondary/50 border border-white/10 text-foreground px-5 text-sm font-medium hover:bg-secondary transition-all active:scale-95"
            >
                Hubungi Saya
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="container mx-auto px-6 max-w-5xl text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-secondary/30 text-xs font-semibold mb-8 backdrop-blur-sm text-foreground/80">
              <Sparkles className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              <span>Terbuka untuk Kolaborasi Proyek</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
              Transformasi Ide <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Menjadi Realitas.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Membangun ekosistem digital yang modern, skalabel, dan berorientasi pada pengalaman pengguna melalui kode yang efisien.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#blog" className="h-12 px-8 rounded-full bg-foreground text-background font-semibold flex items-center gap-2 shadow-xl hover:bg-foreground/90 transition-all active:scale-95 group">
                  Baca Jurnal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="https://github.com/Nephyy1" target="_blank" className="h-12 px-8 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-secondary font-semibold flex items-center gap-2 transition-all active:scale-95">
                  <Github className="w-4 h-4" /> GitHub
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/3 sticky top-24 z-10"
              >
                  <div className="bg-card/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-sm space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                        <User className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Nama Lengkap</div>
                        <div className="font-bold text-lg">Bintang Putra Pratama</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                        <Terminal className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Identitas Digital</div>
                        <div className="font-bold text-lg">Nephyy</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Institusi Pendidikan</div>
                        <div className="font-bold text-lg">SMK Negeri 2 Banyumas</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Domisili</div>
                        <div className="font-bold text-lg">Jawa Tengah, Indonesia</div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4">
                      <Link 
                        href="https://wa.me/6281533331355" 
                        target="_blank"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium transition-all"
                      >
                        <Phone className="w-4 h-4" /> Hubungi via WhatsApp
                      </Link>
                    </div>
                  </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="w-full md:w-2/3"
              >
                  <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-6">Profil Profesional</motion.h2>
                  
                  <motion.div variants={fadeInUp} className="prose prose-neutral dark:prose-invert max-w-none text-lg leading-relaxed text-muted-foreground">
                    <p className="mb-6">
                      Saya adalah seorang <span className="text-foreground font-semibold border-b-2 border-cyan-500/30">Technologist</span> muda yang memiliki dedikasi tinggi terhadap pengembangan perangkat lunak modern. Memulai perjalanan dari rasa ingin tahu, kini saya fokus merancang solusi digital yang tidak hanya berfungsi dengan baik, tetapi juga memberikan nilai tambah bagi penggunanya.
                    </p>
                    <p className="mb-8">
                      Sebagai siswa di SMK Negeri 2 Banyumas, saya menyeimbangkan pembelajaran akademis dengan eksplorasi teknologi praktis. Saya percaya bahwa kode pemrograman adalah jembatan antara logika mesin dan kebutuhan manusia. Portofolio ini adalah dokumentasi dari komitmen saya untuk terus belajar, berinovasi, dan berkarya.
                    </p>
                  </motion.div>

                  <motion.h3 variants={fadeInUp} className="text-2xl font-bold mb-8 mt-12 flex items-center gap-2">
                    <span className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span> Jejak Perjalanan
                  </motion.h3>
                  
                  <div className="space-y-10 pl-2 relative before:absolute before:inset-0 before:ml-2.5 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-purple-500 before:to-transparent">
                    
                    {[
                      { year: '2025', title: 'Integrasi Kecerdasan Buatan', desc: 'Fokus mendalami implementasi AI dan optimalisasi basis data untuk aplikasi yang lebih cerdas dan responsif.' },
                      { year: '2023', title: 'Ekosistem Fullstack', desc: 'Transisi ke teknologi modern berbasis JavaScript (Next.js, TypeScript) untuk membangun sistem yang kompleks dan handal.' },
                      { year: '2020', title: 'Awal Eksplorasi', desc: 'Memulai langkah pertama dalam dunia pemrograman web, mempelajari fondasi logika dan struktur kode.' }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        className="relative pl-8 group cursor-default"
                      >
                        <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 border-background bg-gradient-to-br from-cyan-500 to-purple-500 shadow-sm transition-transform duration-300 group-hover:scale-110"></div>
                        <h4 className="font-bold text-lg text-foreground group-hover:text-cyan-400 transition-colors">{item.title} <span className="text-sm font-normal text-muted-foreground ml-2 border border-white/10 px-2 py-0.5 rounded-full">{item.year}</span></h4>
                        <p className="text-muted-foreground mt-2 text-base">
                          {item.desc}
                        </p>
                      </motion.div>
                    ))}

                  </div>
              </motion.div>

            </div>
          </div>
        </section>

        <section id="achievements" className="py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                    <Award className="w-8 h-8 text-cyan-500" /> Sertifikasi & Pencapaian
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-xl">
                    Bukti kompetensi teknis dan dedikasi pembelajaran dalam berbagai bidang teknologi.
                  </p>
              </motion.div>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {certificates.map((cert) => (
                <motion.div 
                  key={cert.id}
                  variants={fadeInUp}
                  className="group relative rounded-3xl overflow-hidden border border-white/5 bg-card/40 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary relative border-b border-white/5">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-center justify-between mb-3">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider">
                          <CheckCircle2 className="w-3 h-3" />
                          Verified
                        </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground leading-tight mb-2 group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="blog" className="py-24">
          <div className="container mx-auto px-6 max-w-6xl">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                      <BookOpen className="w-8 h-8 text-cyan-500" /> Jurnal Teknologi
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl">
                      Catatan, pemikiran, dan pandangan mendalam seputar perkembangan teknologi modern.
                    </p>
                </motion.div>
              </div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {displayArticles.map((article) => (
                  <Link href={`/blog/${article.slug}`} key={article.id} className="block h-full">
                    <motion.div 
                        variants={fadeInUp}
                        className="group flex flex-col h-full bg-card/40 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:shadow-lg hover:border-cyan-500/30 transition-all duration-300"
                    >
                        <div className="h-56 bg-secondary relative overflow-hidden">
                        <img 
                            src={article.cover_image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full bg-background/60 backdrop-blur-md text-xs font-bold shadow-sm border border-white/10 text-cyan-300">
                                Artikel
                            </span>
                        </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                            {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                            {article.excerpt}
                        </p>
                        <div className="inline-flex items-center text-sm font-semibold text-cyan-500 mt-auto">
                            Baca Selengkapnya <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                        </div>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
          </div>
        </section>

      </main>

      <footer className="bg-background border-t border-white/5 py-12">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-1">Bintang Putra Pratama (Nephyy)</h4>
            <p className="text-sm text-muted-foreground">© 2025 Creative Technologist. Hak Cipta Dilindungi.</p>
          </div>
          <div className="flex gap-6">
            <Link href="https://github.com/Nephyy1" className="text-muted-foreground hover:text-cyan-400 transition-colors hover:scale-110"><Github className="w-5 h-5" /></Link>
            <Link href="https://nephyy.my.id" className="text-muted-foreground hover:text-cyan-400 transition-colors hover:scale-110"><Globe className="w-5 h-5" /></Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
