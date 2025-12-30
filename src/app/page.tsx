"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Mail, Phone, Target, Zap, Brain } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-royal-blue via-royal-blue-dark to-royal-blue min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-grass-green rounded-full blur-3xl opacity-30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-48 h-48 bg-grass-green-light rounded-full blur-3xl opacity-20"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-grass-green text-white px-4 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
              Fußballschule
            </span>
          </motion.div>
          
          <motion.h1 
            className="font-[family-name:var(--font-oswald)] text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Kabashi-Stöckler
            <span className="block text-grass-green">Performance Bootcamp</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            2 Tage voller <span className="text-grass-green font-semibold">Technik</span>, <span className="text-grass-green font-semibold">Koordination</span>, <span className="text-grass-green font-semibold">Power</span> und jeder Menge Fußball! – für alle die besser werden wollen.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#anmelden" 
              className="inline-block bg-grass-green hover:bg-grass-green-dark text-white font-bold py-4 px-10 rounded-full text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Jetzt Anmelden
            </a>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Key Facts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold text-center text-royal-blue uppercase mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Alle Infos auf einen Blick
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Calendar, title: "Datum", value: "27. - 28. Oktober", subtitle: "Montag - Dienstag" },
              { icon: Clock, title: "Uhrzeit", value: "09:00 – 12:00", subtitle: "Uhr" },
              { icon: MapPin, title: "Ort", value: "ASKÖ Kirchdorf", subtitle: "Ertlstraße 16, 4560 Kirchdorf" },
              { icon: Users, title: "Alter", value: "6 – 16 Jahre", subtitle: "Alle Spielstärken" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-royal-blue to-royal-blue-dark p-8 rounded-2xl text-white text-center hover:scale-105 transition-transform duration-300 shadow-xl"
                variants={fadeInUp}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-grass-green rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-[family-name:var(--font-oswald)] text-lg uppercase tracking-wider mb-2 text-grass-green-light">
                  {item.title}
                </h3>
                <p className="text-2xl font-bold mb-1">{item.value}</p>
                <p className="text-white/70 text-sm">{item.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="inline-block bg-grass-green/10 border-2 border-grass-green rounded-2xl px-8 py-4">
              <span className="text-royal-blue font-bold text-xl">Teilnahmegebühr: </span>
              <span className="text-grass-green font-[family-name:var(--font-oswald)] text-4xl font-bold">50 €</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold text-center text-royal-blue uppercase mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Das erwartet Dich
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Unser Programm ist speziell darauf ausgelegt, Dich in allen wichtigen Bereichen zu fördern
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: Target, 
                title: "Technik", 
                description: "Verbessere Deine Ballkontrolle, Dribblings und Pässe mit gezielten Übungen",
                color: "bg-royal-blue"
              },
              { 
                icon: Brain, 
                title: "Koordination", 
                description: "Steigere Deine Beweglichkeit, Balance und Körperbeherrschung auf dem Platz",
                color: "bg-grass-green"
              },
              { 
                icon: Zap, 
                title: "Power", 
                description: "Entwickle Schnelligkeit, Explosivität und Ausdauer für maximale Performance",
                color: "bg-royal-blue-light"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-grass-green"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${item.color} rounded-2xl mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-royal-blue uppercase mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="anmelden" className="py-20 bg-gradient-to-br from-royal-blue via-royal-blue-dark to-royal-blue relative overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-grass-green rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold text-white uppercase mb-4">
              Jetzt Anmelden
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Sichere Dir jetzt Deinen Platz beim Performance Bootcamp! Melde Dich einfach per E-Mail oder Telefon an.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="mailto:jonas.stoeckler@gmx.at?subject=Anmeldung Performance Bootcamp"
              className="w-full md:w-auto flex items-center justify-center gap-4 bg-grass-green hover:bg-grass-green-dark text-white font-bold py-6 px-10 rounded-2xl text-xl transition-all duration-300 hover:scale-105 shadow-2xl min-h-[80px]"
            >
              <Mail className="w-8 h-8" />
              <div className="text-left">
                <span className="block text-sm opacity-80">E-Mail schreiben</span>
                <span className="block">jonas.stoeckler@gmx.at</span>
              </div>
            </a>
            
            <a 
              href="tel:069911798410"
              className="w-full md:w-auto flex items-center justify-center gap-4 bg-white hover:bg-gray-100 text-royal-blue font-bold py-6 px-10 rounded-2xl text-xl transition-all duration-300 hover:scale-105 shadow-2xl min-h-[80px]"
            >
              <Phone className="w-8 h-8" />
              <div className="text-left">
                <span className="block text-sm opacity-70">Anrufen</span>
                <span className="block">0699 117 98 410</span>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold uppercase mb-2">
                Kabashi-Stöckler
              </h3>
              <p className="text-gray-400">Performance Bootcamp | Fußballschule</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 text-center md:text-right">
              <div>
                <p className="text-gray-400 text-sm mb-1">Standort</p>
                <p>ASKÖ Kirchdorf Fußballplatz</p>
                <p className="text-gray-400 text-sm">Ertlstraße 16, 4560 Kirchdorf an der Krems</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Kabashi-Stöckler Performance Bootcamp. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <a href="#impressum" className="text-gray-400 hover:text-white transition-colors text-sm">
                Impressum
              </a>
              <a href="#datenschutz" className="text-gray-400 hover:text-white transition-colors text-sm">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
