"use client";
import { useState, useEffect } from "react";
import { List, X, MoonStars, Sun } from "phosphor-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CompanyLogos } from "@/components/CompanyLogos";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Default to dark mode based on the design
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  const navigation = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-bold text-2xl text-foreground"
            >
              <span className="gradient-text">Robine</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-10 h-10 p-0 rounded-full"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <MoonStars className="h-4 w-4" />
                )}
              </Button>
              <Button className="rounded-full px-6 bg-primary hover:bg-primary/90">
                Contact Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-10 h-10 p-0 rounded-full"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <MoonStars className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 p-0 rounded-full"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <List className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-6 border-t border-border"
            >
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="mt-4 rounded-full bg-primary hover:bg-primary/90">
                  Contact Me
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">
        <section id="hero">
          <HeroSection />
        </section>

        <ServicesSection />
        <ProjectsSection />
        {/* <CompanyLogos /> */}
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Toast Notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--card)",
            color: "var(--card-foreground)",
            border: "1px solid var(--border)",
          },
        }}
      />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-20 left-0 right-0 h-1 bg-primary origin-left z-40"
        style={{ scaleX: 0 }}
        animate={{
          scaleX:
            typeof window !== "undefined"
              ? window.scrollY /
                (document.documentElement.scrollHeight - window.innerHeight)
              : 0,
        }}
        transition={{ ease: "easeOut" }}
      />
    </div>
  );
}
