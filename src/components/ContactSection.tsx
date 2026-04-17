import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nama harus diisi').max(100),
  email: z.string().trim().email('Email tidak valid').max(255),
  subject: z.string().trim().min(1, 'Subjek harus diisi').max(200),
  message: z.string().trim().min(1, 'Pesan harus diisi').max(2000),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'syafiqahumaira02052010@gmail.com',
    href: 'mailto:syafiqahumaira02052010@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 22 7668 6448',
    href: 'tel:+622276686448',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Banda Aceh, Indonesia',
    href: '#',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: 'Pesan Terkirim! ✨',
        description: 'Terima kasih telah menghubungi saya.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: 'Gagal Mengirim',
        description: 'Coba lagi ya.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Kontak</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Hubungi Saya
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Mari Berkolaborasi!
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Punya ide atau ingin bekerja sama? Saya terbuka untuk diskusi 
                dan pengalaman baru yang bisa berkembang bersama.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl transition group"
                >
                  <motion.div 
                    whileHover={{ rotate: 10 }}
                    className="p-3 rounded-lg bg-primary/10"
                  >
                    <info.icon className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 p-6 glass rounded-2xl shadow-card"
            >
              
              <div className="grid sm:grid-cols-2 gap-4">
                {["name", "email"].map((field, i) => (
                  <motion.div 
                    key={field}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium capitalize">{field}</label>
                    <Input
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={`Masukkan ${field}`}
                      className="focus:scale-[1.02] transition"
                    />
                    {errors[field] && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-destructive">
                        {errors[field]}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subjek</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="focus:scale-[1.02] transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Pesan</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="focus:scale-[1.02] transition"
                />
              </div>

              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </Button>
              </motion.div>

            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}