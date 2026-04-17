import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'Pelatihan Menulis Kreatif',
    issuer: 'Workshop Sekolah',
    date: '2024',
    credentialId: 'WR-2024-01',
    image: '✍️',
    color: 'from-pink-500/20 to-purple-500/20',
    link: '#',
  },
  {
    title: 'Seminar Pengembangan Diri',
    issuer: 'Komunitas Pelajar',
    date: '2024',
    credentialId: 'SD-2024-02',
    image: '🌱',
    color: 'from-green-500/20 to-emerald-500/20',
    link: '#',
  },
  {
    title: 'Pelatihan Public Speaking',
    issuer: 'Sekolah',
    date: '2023',
    credentialId: 'PS-2023-03',
    image: '🎤',
    color: 'from-blue-500/20 to-cyan-500/20',
    link: '#',
  },
  {
    title: 'Kegiatan Outdoor & Leadership',
    issuer: 'Organisasi Sekolah',
    date: '2023',
    credentialId: 'LD-2023-04',
    image: '🏕️',
    color: 'from-orange-500/20 to-yellow-500/20',
    link: '#',
  },
  {
    title: 'Workshop Kreativitas',
    issuer: 'Event Pelajar',
    date: '2022',
    credentialId: 'CR-2022-05',
    image: '🎨',
    color: 'from-indigo-500/20 to-purple-500/20',
    link: '#',
  },
  {
    title: 'Seminar Motivasi',
    issuer: 'Komunitas',
    date: '2022',
    credentialId: 'MT-2022-06',
    image: '✨',
    color: 'from-teal-500/20 to-cyan-500/20',
    link: '#',
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 md:py-32">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Kredensial</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Sertifikat & Pengalaman
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-xl transition">

                {/* ICON */}
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${cert.color}`}
                >
                  <span className="text-3xl">{cert.image}</span>
                </motion.div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary mt-0.5" />
                    <h3 className="font-bold group-hover:text-primary transition">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                  
                  <p className="text-xs text-muted-foreground/70 font-mono">
                    ID: {cert.credentialId}
                  </p>
                  
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="sm" className="rounded-full mt-2" asChild>
                      <a href={cert.link}>
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Lihat
                      </a>
                    </Button>
                  </motion.div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}