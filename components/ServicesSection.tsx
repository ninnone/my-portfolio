"use client";

import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Code,
  ShoppingCart,
  PaintBrush,
  DeviceMobile,
  Database,
  Gear,
} from "phosphor-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building modern, responsive websites using the latest technologies and best practices for optimal performance.",
    icon: Code,
    featured: false,
  },

  {
    id: 3,
    title: "Website Design",
    description:
      "Designing beautiful, user-friendly interfaces that convert visitors into customers and enhance brand identity.",
    icon: PaintBrush,
    featured: false,
  },
  {
    id: 4,
    title: "Custom Web Applications",
    description:
      "Developing tailored web applications that solve specific business challenges and streamline operations.",
    icon: Database,
    featured: false,
  },
  {
    id: 5,
    title: "Detailed Analysis",
    description:
      "Conducting thorough analysis to understand your business needs and deliver solutions that drive growth.",
    icon: Gear,
    featured: false,
  },
  {
    id: 6,
    title: "Intuitive Interfaces",
    description:
      "Crafting intuitive user interfaces that enhance user engagement and satisfaction across all devices.",
    icon: DeviceMobile,
    featured: true,
  },
];

const stats = [
  { number: "150+", label: "Happy Clients", icon: "😊" },
  { number: "5.5k", label: "Followers", icon: "👥" },
  { number: "15+", label: "Years Experience", icon: "📅" },
  { number: "850+", label: "Total Projects", icon: "🚀" },
];

export function ServicesSection() {
  return (
    <section className="py-24 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium">
              What I Offer
            </span>
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6">Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development services tailored to your business
            needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card
                  className={`h-full transition-all duration-300 hover:shadow-xl group cursor-pointer ${
                    service.featured
                      ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                      : "bg-card hover:bg-card/80 border-border"
                  }`}
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                        service.featured
                          ? "bg-primary-foreground/10"
                          : "bg-primary/10"
                      }`}
                    >
                      <IconComponent
                        size={32}
                        className={
                          service.featured
                            ? "text-primary-foreground"
                            : "text-primary"
                        }
                      />
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription
                      className={`text-sm leading-relaxed ${
                        service.featured
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Stats Section */}
      {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
    </section>
  );
}
