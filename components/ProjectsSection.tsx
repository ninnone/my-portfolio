"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight, GithubLogo, Globe } from "phosphor-react";

const projects = [
  {
    id: 2,
    title: "Order Summary Component Challenge",
    category: "Frontend Challenge",
    year: "2024",
    image: "/order-summary.png",
    technologies: ["React", "TypeScript", "CSS", "Next.js", "Tailwind CSS"],
    github: "https://github.com/ninnone/order-summary-component-main",
    demo: "https://order-summary-component-main-mocha.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "NFT preview card component",
    category: "Frontend Challenge",
    year: "2024",
    image: "/product-preview.png",
    technologies: ["React", "TypeScript", "CSS", "Next.js", "Tailwind CSS"],
    github: "https://github.com/ninnone/nft-preview-card-component-main",
    demo: "https://nft-preview-card-component-main-nu-seven.vercel.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Product preview card component",
    category: "Frontend Challenge",
    year: "2024",
    image: "/real-product-preview-card.png",
    technologies: ["React", "TypeScript", "CSS", "Next.js", "Tailwind CSS"],
    github: "https://github.com/ninnone/product-preview-card-component-main",
    demo: "https://product-preview-card-component-main-sand-pi.vercel.app/",
    featured: false,
  },
  {
    id: 5,
    title: "Social proof section",
    category: "Frontend Challenge",
    year: "2024",
    image: "/social-proof.png",
    technologies: ["React", "TypeScript", "CSS", "Next.js", "Tailwind CSS"],
    github: "https://github.com/ninnone/social-proof-section-master",
    demo: "https://social-proof-section-master-delta-flame.vercel.app/",
    featured: false,
  },
  {
    id: 6,
    title: "Testimonials grid section",
    category: "Frontend Challenge",
    year: "2024",
    image: "/testimonial-grid.png",
    technologies: ["React", "TypeScript", "CSS", "Next.js", "Tailwind CSS"],
    github: "https://github.com/ninnone/testimonials-grid-section-main",
    demo: "https://testimonials-grid-section-main-blush-gamma.vercel.app/",
    featured: false,
  },
  {
    id: 7,
    title: "Fylo data storage component",
    category: "Frontend Challenge",
    year: "2024",
    image: "/flyo-data.png",
    technologies: ["React", "TypeScript", "CSS", "Next.js", "Tailwind CSS"],
    github: "https://github.com/ninnone/fylo-data-storage-component-master",
    demo: "https://fylo-data-storage-component-master-lemon-eta.vercel.app/",
    featured: false,
  },
  {
    id: 8,
    title: "Intro component with sign up form",
    category: "Frontend Challenge",
    year: "2024",
    image: "/eval-one.png",
    technologies: ["React", "TypeScript", "CSS", "Next.js", "Tailwind CSS"],
    github: "https://github.com/ninnone/eval-one",
    demo: "https://eval-one-qiky.vercel.app/",
    featured: false,
  },
  /*   {
    title: "Order Summary Component Challenge",
    challenge:
      "https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj",
    github: "https://github.com/ninnone/order-summary-component-main",
    demo: "https://vercel.com/robinnes-projects/order-summary-component-main",
    technologies: ["React", "TypeScript", "CSS", "Next.js", "Tailwind CSS"],
  },
  {
    title: "NFT preview card component",
    challenge:
      "https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U",
    github: "https://github.com/ninnone/nft-preview-card-component-main",
    demo: "https://vercel.com/robinnes-projects/nft-preview-card-component-main",
    technologies: ["React", "TypeScript", "CSS", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Product preview card component",
    challenge:
      "https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa",
    github: "https://github.com/ninnone/product-preview-card-component-main",
    demo: "https://vercel.com/robinnes-projects/product-preview-card-component-main",
    technologies: ["React", "TypeScript", "CSS", "Next.js", "Tailwind CSS"],
  },
  {
    title: " Social proof section",
    challenge:
      "https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA",
    repo: "https://github.com/ninnone/social-proof-section-master",
    demo: "https://vercel.com/robinnes-projects/social-proof-section-master",
    technologies: ["React", "TypeScript", "CSS", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Testimonials grid section",
    challenge:
      "https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7",
    github: "https://github.com/ninnone/testimonials-grid-section-main",
    demo: "https://vercel.com/robinnes-projects/testimonials-grid-section-main",
    technologies: ["React", "TypeScript", "CSS", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Fylo data storage component",
    challenge:
      "https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n",
    github: "https://github.com/ninnone/fylo-data-storage-component-master",
    demo: "https://vercel.com/robinnes-projects/fylo-data-storage-component-master",
    technologies: ["React", "TypeScript", "CSS", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Intro component with sign up form",
    challenge: "https://github.com/ninnone/eval-one",
    demo: "https://eval-one-qiky.vercel.app/",
    repo: "https://github.com/ninnone/dojo-helper",
    technologies: ["React", "TypeScript", "CSS", "Next.js", "Tailwind CSS"],
  }, */
];

/* const projects = [
  {
    id: 1,
    title: "Analytics Dashboard Pro",
    category: "Web Development",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTYyNzM3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "TypeScript", "D3.js"],
    github: "https://github.com/jamesadams/analytics-dashboard",
    demo: "https://analytics-dashboard-demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "MobileFit App",
    category: "Mobile Development",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MjM1MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React Native", "Firebase"],
    github: "https://github.com/jamesadams/mobilefit-app",
    demo: "https://mobilefit-demo.com",
    featured: false,
  },
  {
    id: 3,
    title: "EcoShop Platform",
    category: "E-Commerce",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc1NjMwNTQxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    github: "https://github.com/jamesadams/ecoshop-platform",
    demo: "https://ecoshop-demo.com",
    featured: false,
  },
  {
    id: 4,
    title: "Task Manager Pro",
    category: "Web Application",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTYyNzM3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["Vue.js", "Node.js"],
    github: "https://github.com/jamesadams/task-manager",
    demo: "https://taskmanager-demo.com",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "Web Design",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc1NjMwNTQxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/jamesadams/portfolio",
    demo: "https://portfolio-demo.com",
    featured: false,
  },
  {
    id: 6,
    title: "Chat Application",
    category: "Real-time App",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MjM1MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["Socket.io", "Express"],
    github: "https://github.com/jamesadams/chat-app",
    demo: "https://chatapp-demo.com",
    featured: false,
  },
]; */

export function ProjectsSection() {
  return (
    <section className="py-24 px-6 bg-card/30" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary text-sm font-medium">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Our Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A collection of my recent work showcasing various technologies and
              design approaches
            </p>
          </div>
          {/*           <Button
            variant="outline"
            className="hidden md:flex items-center gap-2 rounded-full px-6"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4" />
          </Button> */}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group cursor-pointer ${
                project.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <Card className="h-full overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 p-0">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      project.featured ? "h-80 md:h-96" : "h-48"
                    }`}
                  />
                  <iframe
                    src={project.demo}
                    title={project.title}
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></iframe>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="w-10 h-10 p-0 rounded-full bg-background/80 backdrop-blur-sm hover:text-primary"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <Globe className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="w-10 h-10 p-0 rounded-full bg-background/80 backdrop-blur-sm hover:text-primary"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <GithubLogo className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-background/80 backdrop-blur-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.category}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 2}
                        </Badge>
                      )}
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:hidden"
        >
          <Button variant="outline" className="rounded-full px-8">
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
