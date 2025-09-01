"use client";

import { LucideMail } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary text-sm font-medium">
                {"Hello, I'm Robine"}
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-6xl lg:text-7xl font-bold leading-none">
                Donfack <span className="gradient-text">Robine</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                {"I'm a FrontEnd Web Developer"}
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            Passionate about creating exceptional digital experiences through
            innovative web solutions. With expertise in Next.js, Tailwind CSS,
            and core web technologies like JavaScript, TypeScript, HTML, and
            CSS, I develop scalable applications that fuel business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link href={"#contact"}>
              {" "}
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 px-8 py-3 rounded-full"
              >
                Get In Touch
              </Button>
            </Link>
            {/* <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full border-border hover:bg-card"
            >
              Download CV
            </Button> */}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-4 pt-4"
          >
            {[
              { icon: GithubLogo, href: "https://github.com/ninnone" },
              {
                icon: LinkedinLogo,
                href: "https://www.linkedin.com/in/robine-ninnone-donfack-ateufack-40247332a/",
              },
              /* { icon: FaXTwitter, href: "https://twitter.com/jamesadams" }, */
              {
                icon: InstagramLogo,
                href: "https://www.instagram.com/robineninnone?igsh=dWsyMjdrdDc0azgx",
              },
              {
                icon: LucideMail,
                href: "mailto:donfackninnone8@gmail.com",
              },
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={20} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-96 h-96 lg:w-[480px] lg:h-[480px]">
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1731951039706-0e793240bb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMG1hbGV8ZW58MXx8fHwxNzU2MjMzMzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="James Adams - Software Developer"
                className="w-full h-full object-cover rounded-3xl"
              />
 */}
              <img
                src="robine.jpg"
                alt="me"
                className="w-full h-full object-cover rounded-3xl"
              />

              {/* Decorative frame */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/20"></div>

              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl -z-10 blur-xl"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
