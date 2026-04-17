import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 🔥 DATA (pakai emoji, bukan gambar)
const projects = [
  {
    title: 'Karya Tulisan Pribadi',
    description: 'Kumpulan tulisan untuk mengekspresikan ide, perasaan, dan pengalaman hidup.',
    tags: ['Writing', 'Creative', 'Personal'],
    emoji: '✍️',
    color: 'from-pink-500/20 to-purple-500/20',
  },
  {
    title: 'Eksplorasi Traveling',
    description: 'Perjalanan ke berbagai tempat yang memberi inspirasi dan pengalaman baru.',
    tags: ['Travel', 'Explore'],
    emoji: '🌍',
    color: 'from-green-500/20 to-blue-500/20',
  },
  {
    title: 'Hiburan & Inspirasi',
    description: 'Menonton dan belajar dari berbagai sumber untuk menambah wawasan.',
    tags: ['Learning', 'Fun'],
    emoji: '🎬',
    color: 'from-orange-500/20 to-red-500/20',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Karya & Aktivitas
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-xl transition flex flex-col">

                {/* EMOJI (GANTI GAMBAR) */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`aspect-video flex items-center justify-center rounded-xl mb-4 bg-gradient-to-br ${project.color}`}
                >
                  <span className="text-6xl drop-shadow-lg">
                    {project.emoji}
                  </span>
                </motion.div>

                <h3 className="font-bold text-lg group-hover:text-primary transition">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-secondary rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4">
                  <Button size="sm" className="w-full rounded-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Lihat
                  </Button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}