"use client"

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { Trash2, LogOut, Plus, LayoutDashboard } from 'lucide-react'

export default function AdminPage() {
  const router = useRouter()
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  
  const [formProject, setFormProject] = useState({
    title: '',
    description: '',
    tags: '',
    link: ''
  })

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login')
      } else {
        fetchProjects()
        setLoading(false)
      }
    }
    checkSession()
  }, [router])

  const fetchProjects = async () => {
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
    if (data) setProjects(data)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const handleDelete = async (id: number) => {
    if(!confirm('Hapus proyek ini secara permanen?')) return
    const { error } = await supabase.from('projects').delete().eq('id', id)
    if (!error) fetchProjects()
  }

  const handleSubmit = async (e: React.FormEvent) => {
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
      fetchProjects()
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
          <LayoutDashboard className="w-5 h-5" />
          <span>Nephyy Console</span>
        </div>
        <button 
          onClick={handleLogout} 
          className="text-sm font-medium text-destructive hover:text-destructive/80 flex items-center gap-2"
        >
          <LogOut size={16} /> Keluar
        </button>
      </nav>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Plus size={18} /> Upload Proyek
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-medium uppercase text-muted-foreground">Nama Proyek</label>
                <input 
                  className="w-full mt-1 px-3 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none" 
                  value={formProject.title}
                  onChange={e => setFormProject({...formProject, title: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium uppercase text-muted-foreground">Deskripsi Singkat</label>
                <textarea 
                  className="w-full mt-1 px-3 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none" 
                  rows={4}
                  value={formProject.description}
                  onChange={e => setFormProject({...formProject, description: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium uppercase text-muted-foreground">Tech Stack (Koma)</label>
                <input 
                  className="w-full mt-1 px-3 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none" 
                  placeholder="Next.js, TypeScript, AI"
                  value={formProject.tags}
                  onChange={e => setFormProject({...formProject, tags: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium uppercase text-muted-foreground">Link Demo / Repo</label>
                <input 
                  type="url"
                  className="w-full mt-1 px-3 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none" 
                  value={formProject.link}
                  onChange={e => setFormProject({...formProject, link: e.target.value})}
                />
              </div>
              <button disabled={uploading} className="w-full bg-primary text-primary-foreground py-2.5 rounded-md font-medium hover:bg-primary/90 transition-all">
                {uploading ? 'Menyimpan...' : 'Terbitkan Proyek'}
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-6">Arsip Portofolio ({projects.length})</h2>
          <div className="grid gap-4">
            {projects.map((project) => (
              <div key={project.id} className="p-5 rounded-xl border border-border bg-card flex justify-between items-start hover:border-primary/40 transition-colors">
                <div>
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-3 max-w-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t: string, i: number) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-secondary rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => handleDelete(project.id)}
                  className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-all"
                  title="Hapus Proyek"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
    }                                                 
