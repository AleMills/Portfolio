"use client"
import Nav from "./components/Nav";
import { useRef, useEffect } from "react";

import { Image } from "@nextui-org/image";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


//Importacion de iconos
import { FaJs, FaNodeJs, FaReact, FaGitAlt } from "react-icons/fa6";
import {
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiNextui,
  SiExpress,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Contact from "./components/Contact";

export default function Home() {

  gsap.registerPlugin(useGSAP);
 

  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        x: 0,
        duration: 2,
        rotation: 360,
        ease: "power2.out",
      });
    }
  }, []);


  const skills = [
    { name: "JavaScript", icon: <FaJs className="h-6 w-6 text-yellow-400" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript className="h-6 w-6 text-blue-600" />,
    },
    { name: "React", icon: <FaReact className="h-6 w-6 text-blue-400" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="h-6 w-6 text-black dark:text-white" />,
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="h-6 w-6 text-teal-500" />,
    },
    {
      name: "NextUI",
      icon: <SiNextui className="h-6 w-6  dark:text-white" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="h-6 w-6 text-green-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="h-6 w-6 text-green-600" /> },
    {
      name: "Express",
      icon: <SiExpress className="h-6 w-6  dark:text-white" />,
    },
    { name: "Git", icon: <FaGitAlt className="h-6 w-6 text-orange-600" /> },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Una solución de comercio electrónico completa creada con React, TypeScript y MongoDB.",
      technologies: ["React", "TypeScript", "MongoDB", "Node.js", "Express"],
      link: "#",
    },
    {
      title: "App Lista de compras",
      description:
        "Lista de compras es una herramienta interactiva y fácil de usar. Permite a los usuarios agregar productos, calcular automáticamente las sumas de los precios y mantener un historial de compras para facilitar el seguimiento de lo adquirido en el pasado.",
      technologies: ["React", "Typescript", "Tailwind CSS", "NextUI", "IndexedBD"],
      link: "https://shopping-list-eight-weld.vercel.app/",
    },
    {
      title: "Sistema web de Turnos",
      description:
        "La idea de este sistema es que todos aquellos pequeños negocios que ofrezcan servicios puedan ofrocerles a sus clientes la comodidas de auto agendarse citas, abonar los servicios online, notificaciones por whatsapp o email y mucho mas, aunque este en desarrollo puede previsualizar un proyecto al cual le veo mucho futuro",
      technologies: ["React", "Node JS", "Express", "MongooDB", "Google maps API", "NodeMailer", "JWT", "Google Calendar API", "NextUI", "Tailwind CSS", "Bcrypt"],
      link: "https://appturnos-sable.vercel.app/",
    },
    {
      title: "Panel de control meteorológico",
      description:
        "Panel de control meteorológico en tiempo real que integra múltiples API y visualización de datos",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeatherMap API"],
      link: "#",
    },
  ];



  

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900`}>
      <header className="bg-white dark:bg-gray-800 shadow-md relative top-0 z-10">
        <Nav />
      </header>

      <main className="container mx-auto px-6 py-8">
        <section
          id="about"
          className="mb-12 flex flex-col md:flex-row items-center gap-8 scroll-mt-20"
        >
          <div ref={boxRef} className="mt-6 -z-0">
            <Image
              isBlurred
              width={240}
              src="/asset/profile.jpg"
              alt="NextUI Album Cover"
              className="m-5"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Sobre mi
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Soy un desarrollador web apasionado por crear experiencias de
              usuario excepcionales...
            </p>
          </div>
        </section>

        <section id="skills" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
              
                key={index}
                className="flex items-center space-x-2 bg-white dark:bg-gray-800 hover:scale-105 transition-all p-3 rounded-lg shadow"
              >
                {skill.icon}
                <span className="text-gray-800 dark:text-white">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Projectos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Ver Proyecto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Contact />
      </main>

      <footer className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 shadow-md mt-12">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Alejandro Jofre. Todos los derechos
              reservados.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/AleMills"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/alejofre/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:alejandrojofre949@gmail.com"
                aria-label="Email"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
              >
                <MdMail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
