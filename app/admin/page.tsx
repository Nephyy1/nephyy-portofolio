"use client"

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { Trash2, LogOut, Plus, LayoutDashboard, FileText, Briefcase, ExternalLink } from 'lucide-react'

export default function AdminPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'projects' | 'articles'>('projects')
  
  const [projects, setProjects] = useState<any[]>([])
  const [articles, setArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  
  const [formProject, setFormProject] = useState({ title: '', description: '', tags: '', link: '' })
  const [formArticle, setFormArticle] = useState({ title: '', slug: '', excerpt: '', content: '', cover_image: '' })

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login')
      } else {
        fetchData()
        setLoading(false)
      }
    }
    checkSession()
  }, [router])

  const fetchData = async () => {
    const { data: pData } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
    if (pData) setProjects(pData)

    const { data: aData } = await supabase.from('articles').select('*').order('created_at', { ascending: false })
    if (aData) setArticles(aData)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const handleDelete = async (table: 'projects' | 'articles', id: number) => {
    if(!confirm('Hapus item ini secara permanen?')) return
    const { error } = await supabase.from(table).delete().eq('id', id)
    if (!error) fetchData()
  }

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)
    const tagsArray = formProject.tags.split(',').map(tag => tag.trim())

    const { error } = await supabase.from('projects').insert([{
        title: formProject.title,
        description: formProject.description,
        tags: tagsArray,
        link: formProject.link,
    }])

    if (!error) {
      setFormProject({ title: '', description: '', tags: '', link: '' })
      fetchData()
    } else {
      alert(error.message)
    }
    setUploading(false)
  }

  const handleArticleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    const generatedSlug = formArticle.slug || formArticle.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')

    const { error } = await supabase.from('articles').insert([{
        title: formArticle.title,
        slug: generatedSlug,
        excerpt: formArticle.excerpt,
        content: formArticle.content,
        cover_image: formArticle.cover_image
    }])

    if (!error) {
      setFormArticle({ title: '', slug: '', excerpt: '', content: '', cover_image: '' })
      fetchData()
    } else {
      alert(error.message)
    }
    setUploading(false)
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-background">Memuat akses...</div>

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-border bg-card px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2 font-bold text-lg">
          <LayoutDashboard className="w-5 h-5 text-primary" />
          <span>Nephyy Console</span>
        </div>
        <button 
          onClick={handleLogout} 
          className="text-sm font-medium text-destructive hover:text-destructive/80 flex items-center gap-2"
        >
          <LogOut size={16} /> Keluar
        </button>
      </nav>

      <div className="max-w-6xl mx-auto p-6">
        
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${activeTab === 'projects' ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-secondary hover:bg-secondary/80'}`}
          >
            <Briefcase size={18} /> Manajemen Proyek
          </button>
          <button 
            onClick={() => setActiveTab('articles')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${activeTab === 'articles' ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-secondary hover:bg-secondary/80'}`}
          >
            <FileText size={18} /> Manajemen Artikel
          </button>
        </div>

        {activeTab === 'projects' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Plus size={18} /> Upload Proyek
                </h2>
                <form onSubmit={handleProjectSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-medium uppercase text-muted-foreground">Judul</label>
                    <input className="w-full mt-1 px-3 py-2 rounded-md border border-input bg-background" value={formProject.title} onChange={e => setFormProject({...formProject, title: e.target.value})} required />
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase text-muted-foreground">Deskripsi</label>
                    <textarea className="w-full mt-1 px-3 py-2 rounded-md border border-input bg-background" rows={3} value={formProject.description} onChange={e => setFormProject({...formProject, description: e.target.value})} required />
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase text-muted-foreground">Tech Stack (Koma)</label>
                    <input className="w-full mt-1 px-3 py-2 rounded-md border border-input bg-background" placeholder="React, Node" value={formProject.tags} onChange={e => setFormProject({...formProject, tags: e.target.value})} required />
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase text-muted-foreground">Link</label>
                    <input className="w-full mt-1 px-3 py-2 rounded-md border border-input bg-background" value={formProject.link} onChange={e => setFormProject({...formProject, link: e.target.value})} />
                  </div>
                  <button disabled={uploading} className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium hover:bg-primary/90">
                    {uploading ? '...' : 'Simpan Proyek'}
                  </button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="p-5 rounded-xl border border-border bg-card flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 mb-2">{project.description}</p>
                    <div className="flex gap-2">
                        {project.tags.map((t: string, i: number) => <span key={i} className="text-[10px] px-2 py-0.5 bg-secondary rounded-full">{t}</span>)}
                    </div>
                  </div>
                  <button onClick={() => handleDelete('projects', project.id)} className="p-2 text-destructive hover:bg-destructive/10 rounded-md"><Trash2 size={18} /></button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="lg:col-span-1 space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Plus size={18} /> Tulis Artikel
                </h2>
                <form onSubmit={handleArticleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-medium uppercase text-muted-foreground">Judul Artikel</label>
                    <input className="w-full mt-1 px-3 py-2 rounded-md border border-input bg-background" value={formArticle.title} onChange={e => setFormArticle({...formArticle, title: e.target.value})} required />
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase text-muted-foreground">Ringkasan (Excerpt)</label>
                    <textarea className="w-full mt-1 px-3 py-2 rounded-md border border-input bg-background" rows={2} value={formArticle.excerpt} onChange={e => setFormArticle({...formArticle, excerpt: e.target.value})} required />
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase text-muted-foreground">URL Gambar Sampul</label>
                    <input className="w-full mt-1 px-3 py-2 rounded-md border border-input bg-background" placeholder="https://..." value={formArticle.cover_image} onChange={e => setFormArticle({...formArticle, cover_image: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase text-muted-foreground">Isi Konten (Markdown)</label>
                    <textarea className="w-full mt-1 px-3 py-2 rounded-md border border-input bg-background font-mono text-sm" rows={8} value={formArticle.content} onChange={e => setFormArticle({...formArticle, content: e.target.value})} required />
                  </div>
                  <button disabled={uploading} className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium hover:bg-primary/90">
                    {uploading ? '...' : 'Terbitkan Artikel'}
                  </button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {articles.map((article) => (
                <div key={article.id} className="p-5 rounded-xl border border-border bg-card flex justify-between items-start group">
                  <div className="flex gap-4">
                    {article.cover_image && <img src={article.cover_image} className="w-16 h-16 object-cover rounded-md bg-secondary" />}
                    <div>
                        <h3 className="font-bold">{article.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{article.excerpt}</p>
                        <span className="text-xs text-muted-foreground mt-2 block">/{article.slug}</span>
                    </div>
                  </div>
                  <button onClick={() => handleDelete('articles', article.id)} className="p-2 text-destructive hover:bg-destructive/10 rounded-md"><Trash2 size={18} /></button>
                </div>
              ))}
              {articles.length === 0 && <div className="text-center py-10 text-muted-foreground">Belum ada artikel yang diunggah.</div>}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
