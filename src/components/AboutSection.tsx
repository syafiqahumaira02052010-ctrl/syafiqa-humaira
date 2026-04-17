import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Selesai' },
    { icon: Video, value: '100+', label: 'Video Konten' },
  ];

  const accordionData = [
    {
      title: "Tentang Saya",
      content: "Saya adalah seorang perempuan yang memiliki semangat tinggi dalam menjalani berbagai aktivitas. Saya menyukai kegiatan yang dapat mengembangkan diri, baik dari segi kemampuan maupun pengalaman.",
      content2: "Saya sangat tertarik mencoba hal-hal baru, karena bagi saya sebagai pelajar itu adalah cara untuk belajar dan menemukan hal-hal menarik dalam hidup.",
      content3: "Saya juga terus berusaha untuk berkembang dan menjadi pribadi yang lebih baik dari waktu ke waktu."
    },
    {
      title: "Hobi & Kepribadian",
      content: "Salah satu hobi saya adalah menulis. Di waktu luang, saya senang menulis untuk mengekspresikan ide maupun perasaan.",
      content2: "Selain itu, saya juga menikmati menonton sebagai hiburan. Saya termasuk pribadi yang mudah beradaptasi.",
      content3: "Saya juga senang bekerja sama dengan orang lain dan terbuka terhadap pengalaman baru."
    },
    {
      title: "Minat & Inspirasi",
      content: "Saya memiliki minat dalam kegiatan luar ruangan seperti traveling. Kegiatan ini membuat saya merasa lebih rileks.",
      content2: "Selain itu, traveling juga memberi saya banyak inspirasi baru dalam kehidupan.",
      content3: "Dengan berbagai pengalaman yang saya jalani, saya terus berkembang menjadi pribadi yang lebih baik."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block uppercase tracking-widest text-sm">
            Tentang Saya
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* LEFT - FOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative group perspective">
              
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="aspect-square rounded-3xl overflow-hidden glass shadow-2xl relative z-10"
              >
                <img
                  src="/syafiqa01.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl shadow-card z-20 border border-primary/20 backdrop-blur-md"
              >
                <motion.p 
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="font-display font-bold text-2xl text-primary"
                >
                  Active
                </motion.p>
                <p className="text-sm text-muted-foreground">Learner</p>
              </motion.div>

              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="space-y-8">
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="border border-primary/10 rounded-xl overflow-hidden bg-background/50"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-display font-bold text-lg md:text-xl">
                      {item.title}
                    </span>
                    <motion.div
                      animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {[item.content, item.content2, item.content3].map((text, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-4 pt-0 text-muted-foreground leading-relaxed"
                          >
                            {text}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.08, y: -5 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 glass rounded-xl text-center border border-white/10 shadow-sm hover:shadow-lg"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  </motion.div>
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}