import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: 'Menulis', level: 95 },
    { name: 'Berpikir Kreatif', level: 90 },
    { name: 'Belajar Hal Baru', level: 98 },
    { name: 'Komunikasi', level: 88 },
    { name: 'Kerja Sama Tim', level: 92 },
  ],
  backend: [
    { name: 'Manajemen Waktu', level: 90 },
    { name: 'Disiplin', level: 88 },
    { name: 'Pemecahan Masalah', level: 85 },
    { name: 'Adaptasi Lingkungan', level: 92 },
    { name: 'Konsistensi', level: 87 },
  ],
  DevOps: [
    { name: 'Traveling', level: 85 },
    { name: 'Eksplorasi', level: 90 },
    { name: 'Menonton (Observasi)', level: 80 },
    { name: 'Mencari Inspirasi', level: 88 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>

      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Keahlian</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Skills Saya
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Kategori 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.6 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-display text-xl font-bold">Personal Skills</h3>
            </div>

            <div className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Kategori 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-display text-xl font-bold">Soft Skills</h3>
            </div>

            <div className="space-y-4">
              {skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Kategori 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-display text-xl font-bold">Hobi & Minat</h3>
            </div>

            <div className="space-y-4">
              {skills.DevOps.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}