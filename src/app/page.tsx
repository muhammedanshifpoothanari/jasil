"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, ChevronRight, Menu, X, Moon, Sun, Linkedin, Twitter, Instagram, ChevronUp } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Carousel } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const skills = [
  { name: "Fashion Design", level: 95 },
  { name: "Fashion Styling", level: 90 },
  { name: "Leadership", level: 85 },
  { name: "Decision Making", level: 88 },
  { name: "Adobe Photoshop", level: 92 },
  { name: "Stitching", level: 87 },
  { name: "Cutting", level: 89 },
  { name: "Pattern Making", level: 93 }
]

const education = [
  {
    degree: "BACHELORS DEGREE",
    institution: "MES COLLEGE MARAMPALLY, KERALA",
    program: "Bvoc Fashion Design and Management",
    period: "2021 - 2024"
  }
]

const qualification = "NSQF LEVEL - 4"

const workExperience = [
  {
    company: "DHIRZA DESIGNS, Kerala",
    position: "Boutique Manager intern",
    period: "April 2024",
    description: "Managed day-to-day operations of a high-end fashion boutique. Coordinated with designers and customers to ensure satisfaction."
  },
  {
    company: "NORTH REPUBLIC",
    position: "Industrial Training",
    period: "May 2023-June 2023",
    description: "Gained hands-on experience in large-scale garment production. Learned about industrial sewing techniques and quality control processes."
  },
  {
    company: "LIA GEORSON FASHION",
    position: "Fashion Designer Intern",
    period: "May 2023",
    description: "Assisted in creating design concepts for upcoming collections. Developed skills in fashion illustration and fabric selection."
  }
]

const projects = [
  { id: 1, title: "Eco-Chic Collection", image: "/eco.jpeg?height=400&width=600", description: "A sustainable fashion line using recycled materials." },
  { id: 2, title: "Tech-Wear Fusion", image: "/tactical.jpeg?height=400&width=600", description: "Integrating wearable technology into high fashion." },
  { id: 3, title: "Vintage Revival", image: "/vintage.jpeg?height=400&width=600", description: "Modernizing classic designs for contemporary audiences." },
  { id: 4, title: "Adaptive Couture", image: "/adaptive.jpeg?height=400&width=600", description: "High-end fashion designed for people with disabilities." }
]

const testimonials = [
  { id: 1, name: "Emma Thompson", role: "Fashion Editor", text: "Muhammed's designs are a breath of fresh air in the industry. Innovative yet wearable." },
  { id: 2, name: "Alex Chen", role: "Creative Director", text: "Working with Muhammed was a game-changer for our brand. His vision is unparalleled." },
  { id: 3, name: "Sophia Rodriguez", role: "Sustainability Consultant", text: "Muhammed's commitment to eco-friendly fashion is truly inspiring. A designer with a conscience." }
]

const achievements = [
  { label: "Designs Created", value: 150 },
  { label: "Happy Clients", value: 50 },
  { label: "Awards Won", value: 10 },
  { label: "Fashion Shows", value: 25 }
]

const themes = [
  { name: "Default", primary: "#3b82f6" },
  { name: "Emerald", primary: "#10b981" },
  { name: "Rose", primary: "#e11d48" },
  { name: "Amber", primary: "#f59e0b" }
]

export default function EnhancedPortfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(themes[0])
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const scale = useTransform(scrollY, [0, 200], [1, 0.8])
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [showScrollTop, setShowScrollTop] = useState(false)

  const onSubmit = (data:any) => {
    console.log(data)
    // Here you would typically send the form data to a server
  }

  useEffect(() => {
    const body = document.body
    if (darkMode) {
      body.classList.add('dark')
    } else {
      body.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
<div
  className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
  style={{ '--color-primary': currentTheme.primary } as React.CSSProperties}
>
      <div className="custom-cursor"></div>
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-primary"
            >
              MJ Designs
            </motion.h1>
            <div className="hidden md:flex space-x-4">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.button>
              <Dialog>
                <DialogTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                    aria-label="Change theme"
                  >
                    <span className="w-5 h-5 rounded-full" style={{ backgroundColor: currentTheme.primary }}></span>
                  </motion.button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Choose a theme</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4">
                    {themes.map((theme) => (
                      <button
                        key={theme.name}
                        className="p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary"
                        onClick={() => setCurrentTheme(theme)}
                      >
                        <div className="w-full h-20 rounded-md mb-2" style={{ backgroundColor: theme.primary }}></div>
                        <p>{theme.name}</p>
                      </button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.button>
            </div>
          </div>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white dark:bg-gray-800"
            >
              <div className="container mx-auto px-6 py-3">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-20">
        <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4 pointer-events-none">
            {Array.from({ length: 156 }).map((_, i) => (
              <div key={i} className="border-t border-l border-gray-200 dark:border-gray-700"></div>
            ))}
          </div>
          <motion.div 
            style={{ opacity, scale }} 
            className="container mx-auto px-6 py-12 relative z-10"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/Screenshot.png?height=400&width=300"
                  alt="Muhammed Jasil"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold mb-4 text-primary"
                >
                  MUHAMMED JASIL
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6 space-y-2"
                >
                  <p className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-primary" />
                    <span>9567258718</span>
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-primary" />
                    <span>muhammedjasilvp@gmail.com</span>
                  </p>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg mb-8"
                >
                  Innovative fashion designer with a passion for sustainable and tech-integrated clothing. 
                  Blending traditional craftsmanship with cutting-edge design techniques to create unique, 
                  forward-thinking fashion pieces.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex space-x-4"
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Download CV
                  </Button>
                  <Button size="lg" variant="outline">
                    Contact Me
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">SKILLS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ 
                    opacity: 0,
                    y: 20,
                    width: 0
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    width: "100%",
                    transition: {
                      duration: 1,
                      delay: index * 0.1
                    }
                  }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <Progress value={skill.level} className="h-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Dialog key={project.id}>
                  <DialogTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription>{project.description}</DialogDescription>
                    </DialogHeader>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="mt-4">
                      Detailed project description goes here. This would include information about the design process,
                      materials used, challenges faced, and the final outcome.
                    </p>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">WORK EXPERIENCE</h2>
            <div className="relative">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`mb-8 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md max-w-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary">{exp.company}</h3>
                    <p className="text-lg mb-1">{exp.position}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.period}</p>
                    <p>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
<div className="absolute h-full w-1 bg-primary left-1/2 transform -translate-x-1/2 top-0 hidden md:block"></div>
</div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">ACHIEVEMENTS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                    className="text-4xl font-bold text-primary mb-2"
                  >
                    {achievement.value}+
                  </motion.div>
                  <p className="text-lg">{achievement.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">TESTIMONIALS</h2>
            <Carousel className="max-w-4xl mx-auto">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                  <p className="text-lg mb-4">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">GET IN TOUCH</h2>
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="relative">
                  <Input
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full p-4 border rounded-md pl-10"
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    👤
                  </span>
                  {errors.name && (
  <p className="text-red-500 text-sm mt-1">
    {typeof errors.name.message === 'string' ? errors.name.message : 'Invalid error message'}
  </p>
)}
                </div>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Your Email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full p-4 border rounded-md pl-10"
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    ✉️
                  </span>
                  {errors.email && (
  <p className="text-red-500 text-sm mt-1">
    {typeof errors.email.message === 'string' ? errors.email.message : 'Invalid error message'}
  </p>
)}
                </div>
                <div className="relative">
                  <Textarea
                    placeholder="Your Message"
                    {...register("message", { required: "Message is required" })}
                    className="w-full p-4 border rounded-md pl-10"
                    rows={5}
                  />
                  <span className="absolute left-3 top-6 text-gray-400">
                    💬
                  </span>
                  {errors.message && (
  <p className="text-red-500 text-sm mt-1">
    {typeof errors.message.message === 'string' ? errors.message.message : 'Invalid error message'}
  </p>
)}
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Muhammed Jasil. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="text-gray-600 dark:text-gray-400 hover:text-primary">
              <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="text-gray-600 dark:text-gray-400 hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="text-gray-600 dark:text-gray-400 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="text-gray-600 dark:text-gray-400 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-cursor {
          width: 20px;
          height: 20px;
          border: 2px solid var(--color-primary);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transition: all 0.1s ease-out;
          transform: translate(-50%, -50%);
        }
        
        body {
          cursor: none;
        }
        
        a, button {
          cursor: none;
        }
        
        a:hover ~ .custom-cursor,
        button:hover ~ .custom-cursor {
          transform: translate(-50%, -50%) scale(1.5);
          background-color: var(--color-primary);
          opacity: 0.5;
        }
      `}</style>
    </div>
  )
}