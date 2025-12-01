import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const revalidate = 0

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data: article } = await supabase.from('articles').select('title, excerpt').eq('slug', params.slug).single()
  
  if (!article) return { title: 'Artikel Tidak Ditemukan' }
  
  return {
    title: `${article.title} | Nephyy Journal`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Artikel Tidak Ditemukan</h1>
        <p className="text-muted-foreground mb-8">Maaf, artikel yang Anda cari tidak tersedia atau telah dihapus.</p>
        <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90">
          Kembali ke Beranda
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-4xl">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Kembali
          </Link>
          <div className="font-bold text-lg tracking-tight">Nephyy Journal</div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <article className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="mb-8">
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(article.created_at).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                Nephyy
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                5 Menit Baca
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-8">
              {article.title}
            </h1>

            {article.cover_image && (
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-secondary mb-10 border border-border">
                <img 
                  src={article.cover_image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none leading-relaxed">
             <div className="whitespace-pre-wrap">{article.content}</div>
          </div>
        </article>

        <div className="mt-16 pt-10 border-t border-border">
          <h3 className="text-xl font-bold mb-6">Baca Artikel Lainnya</h3>
          <Link href="/" className="text-primary hover:underline underline-offset-4">
             Lihat semua artikel di Beranda &rarr;
          </Link>
        </div>
      </main>
    </div>
  )
}
