"use client";

import { motion } from "motion/react";
import {
  ArrowUp,
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "phosphor-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ninnone",
    icon: GithubLogo,
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/robine-ninnone-donfack-ateufack-40247332a/",
    icon: LinkedinLogo,
    color: "hover:text-blue-600",
  },
  {
    name: "Gmail",
    url: "mailto:donfackninnone8@gmail.com",
    icon: EnvelopeSimple,
    color: "hover:text-red-600",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/robineninnone?igsh=dWsyMjdrdDc0azgx",
    icon: InstagramLogo,
    color: "hover:text-pink-600",
  },
];

const quickLinks = [
  { name: "About", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Frontend Development",
  /*  "Backend Development",
  "Mobile App Development",
  "Technical Consulting",
  "Code Review & Optimization",
  "Team Leadership" */
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Donfack Robine
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Passionate about creating exceptional digital experiences
                through innovative web solutions. Specializing in frontend
                development that drive business growth.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <EnvelopeSimple className="h-4 w-4" />
                <span className="text-sm">donfackninnone8@gmail.com</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">Service</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-muted-foreground text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h4 className="font-semibold text-foreground mb-6 text-center">
              Connect With Me
            </h4>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground transition-colors p-3 rounded-lg hover:bg-accent ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="h-6 w-6" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Donfack Robine. All rights reserved.
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-4 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="ml-4"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
