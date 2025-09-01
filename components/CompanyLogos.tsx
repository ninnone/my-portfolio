"use client";

import { motion } from "motion/react";

const companies = [
  { name: "ALDER", logo: "ALDER" },
  { name: "GEOMETRIA", logo: "GEOMETRIA" },
  { name: "FREEMAN", logo: "FREEMAN" },
  { name: "CIPLEX", logo: "CIPLEX" },
  { name: "AVANTEC", logo: "AVANTEC" },
  { name: "DanArt", logo: "DanArt" },
  { name: "EMOTION", logo: "EMOTION" },
  { name: "BIT STREAM", logo: "BIT\nSTREAM" },
];

export function CompanyLogos() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-lg">
            Trusted by leading companies worldwide
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center h-16 group cursor-pointer"
            >
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
                <div className="font-bold text-lg tracking-wider whitespace-pre-line">
                  {company.logo}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
