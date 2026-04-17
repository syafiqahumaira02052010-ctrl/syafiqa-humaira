import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import PetirImg from '../assets/petir.png';
import JoinUsGif from '../assets/joinus.gif';
import WeatherImg from '../assets/weatheer.gif';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const CardCarousel = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = Math.abs(page % images.length);

  const paginate = (dir) => setPage([page + dir, dir]);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 4000);
    return () => clearInterval(timer);
  }, [page]);

  return (
    <div className="relative group flex items-center justify-center w-full h-full overflow-hidden rounded-xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </AnimatePresence>

      <div className="absolute inset-0 flex justify-between items-center px-2 opacity-0 group-hover:opacity-100 transition">
        <button onClick={() => paginate(-1)}><ChevronLeft /></button>
        <button onClick={() => paginate(1)}><ChevronRight /></button>
      </div>
    </div>
  );
};

// 🔥 DATA BARU (lebih sesuai kamu)
const projects = [
  {
    title: 'Karya Tulisan Pribadi',
    description: 'Kumpulan tulisan yang saya buat untuk mengekspresikan ide, perasaan, dan pengalaman hidup.',
    tags: ['Writing', 'Creative', 'Personal'],
    image: [PetirImg, JoinUsGif],
    color: 'from-pink-500/20 to-purple-500/20',
  },
  {
    title: 'Eksplorasi Traveling',
    description: 'Dokumentasi perjalanan ke berbagai tempat yang memberi inspirasi dan pengalaman baru.',
    tags: ['Travel', 'Explore', 'Lifestyle'],
    image: [JoinUsGif, WeatherImg],
    color: 'from-green-500/20 to-blue-500/20',
  },
  {
    title: 'Konten Hiburan & Inspirasi',
    description: 'Kumpulan aktivitas menonton dan belajar dari berbagai sumber untuk menambah wawasan.',
    tags: ['Learning', 'Entertainment'],
    image: [WeatherImg, PetirImg],
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
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-xl transition flex flex-col">
                
                <div className={`aspect-video rounded-xl mb-4 bg-gradient-to-br ${project.color}`}>
                  <CardCarousel images={project.image} />
                </div>

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