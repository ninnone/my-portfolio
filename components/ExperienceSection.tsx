"use client";

import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarBlank, Buildings, Users, CheckCircle } from "phosphor-react";

const experiences = [
  {
    id: 1,
    company: "KrestHolding",
    role: "Frontend Developer Intern",
    timeframe: "July 2025 - September 3",
    location: "Douala, Cameroon",
    type: "Internship",
    description:
      "Assisted in building and maintaining user interfaces for fintech web applications, collaborating with senior developers to deliver high-quality features.",
    achievements: [
      "Developed reusable React components for dashboard modules",
      "Improved UI responsiveness and accessibility across devices",
      "Contributed to code reviews and bug fixes, reducing issues by 30%",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Axios",
      "Figma",
    ],
  },
  {
    id: 2,
    company: "Freelance",
    role: "Software Developer",
    timeframe: "Jan 2024 - Present",
    location: "Remote",
    type: "Freelance",
    description:
      "Delivering custom web solutions for small businesses, focusing on scalable architecture and modern design practices.",
    achievements: [
      "Built and deployed e-commerce platforms for multiple clients",
      "Automated business workflows using serverless functions",
      "Implemented secure authentication and payment integrations",
      "Provided ongoing maintenance and technical support",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Vercel",
      "Stripe API",
      "SASS",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="py-24 px-6" id="experience">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium">
              Career Journey
            </span>
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            My Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey showcasing growth, leadership, and technical
            excellence across different roles and companies.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Card */}
              <div className="flex-1">
                <Card className="bg-card border-border hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Buildings className="h-4 w-4" />
                          <span className="font-medium">
                            {experience.company}
                          </span>
                          <span>•</span>
                          <span>{experience.location}</span>
                        </div>
                        <CardTitle className="text-2xl text-foreground">
                          {experience.role}
                        </CardTitle>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <CalendarBlank className="h-4 w-4" />
                          <span>{experience.timeframe}</span>
                        </div>
                        <Badge
                          variant={
                            experience.type === "Internship"
                              ? "secondary"
                              : "default"
                          }
                        >
                          {experience.type}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {experience.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {experience.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start gap-3"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-border"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Visual Element */}
              <div className="flex-shrink-0 w-full lg:w-80 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Buildings className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    {experience.company}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {experience.timeframe.split(" - ")[0]}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
