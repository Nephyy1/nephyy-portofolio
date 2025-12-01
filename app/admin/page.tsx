"use client"

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'

export default function AdminPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('projects')
  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState<any[]>([])
  
  const [formProject, setFormProject] = useState({
    title: '',
    description: '',
    tags: '',
    link: ''
  })

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
    if (data) setProjects(data)
  }

  const handleDeleteProject = async (id: number) => {
    if(!confirm('Yakin hapus proyek ini?')) return
    
    const { error } = await supabase.from('projects').delete().eq('id', id)
    if (!error) {
      alert('Terhapus')
      fetchProjects()
      router.refresh()
    }
  }

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const tagsArray = formProject.tags.split(',').map(tag => tag.trim())

    const { error } = await supabase.from('projects').insert([{
        title: formProject.title,
        description: formProject.description,
        tags: tagsArray,
        link: formProject.link,
        image_url: '' 
      }])

    if (error) {
      alert('Error: ' + error.message)
    } else {
      alert('Sukses Upload Proyek!')
      setFormProject({ title: '', description: '', tags: '', link: '' })
      fetchProjects()
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="flex gap-4 mb-8 border-b border-border pb-4">
          <button 
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === 'projects' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
          >
            Manage Projects
          </button>
          <button 
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === 'articles' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
          >
            Manage Articles (Coming Soon)
          </button>
        </div>

        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-card p-6 rounded-xl border shadow-sm h-fit">
              <h2 className="text-xl font-semibold mb-4">Tambah Proyek Baru</h2>
              <form onSubmit={handleProjectSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Judul</label>
                  <input 
                    className="w-full mt-1 p-2 rounded border bg-background" 
                    value={formProject.title}
                    onChange={e => setFormProject({...formProject, title: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Deskripsi</label>
                  <textarea 
                    className="w-full mt-1 p-2 rounded border bg-background" 
                    rows={3}
                    value={formProject.description}
                    onChange={e => setFormProject({...formProject, description: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Tags (pisahkan koma)</label>
                  <input 
                    className="w-full mt-1 p-2 rounded border bg-background" 
                    placeholder="React, Nextjs, Supabase"
                    value={formProject.tags}
                    onChange={e => setFormProject({...formProject, tags: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Link URL</label>
                  <input 
                    type="url"
                    className="w-full mt-1 p-2 rounded border bg-background" 
                    value={formProject.link}
                    onChange={e => setFormProject({...formProject, link: e.target.value})}
                  />
                </div>
                <button disabled={loading} className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90">
                  {loading ? 'Menyimpan...' : 'Simpan Proyek'}
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Daftar Proyek ({projects.length})</h2>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {projects.map((project) => (
                  <div key={project.id} className="p-4 rounded-lg border bg-card flex justify-between items-start group hover:border-primary/50 transition-colors">
                    <div>
                      <h3 className="font-bold">{project.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{project.description}</p>
                      <div className="flex gap-1 mt-2">
                        {project.tags.map((t: string, i: number) => (
                          <span key={i} className="text-[10px] px-1.5 py-0.5 bg-secondary rounded">{t}</span>
                        ))}
                      </div>
                    </div>
                    <button 
                      onClick={() => handleDeleteProject(project.id)}
                      className="p-2 text-red-500 hover:bg-red-500/10 rounded transition-colors"
                      title="Hapus"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {activeTab === 'articles' && (
           <div className="text-center py-20 bg-secondary/20 rounded-xl border border-dashed">
              <h3 className="text-lg font-medium">Fitur Artikel</h3>
              <p className="text-muted-foreground">Silakan fokus ke upload proyek dulu. Modul ini akan kita aktifkan nanti.</p>
           </div>
        )}
      </div>
    </div>
  )
  }
                  
