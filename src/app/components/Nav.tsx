"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Switch } from "@nextui-org/switch";


//Importacion de iconos
import { FaXmark, FaMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();


  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className=" w-screen mx-auto px-6 py-3 absolute z-10 bg-white dark:bg-gray-800 text-gray-700 dark:text-white">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-700 dark:text-white">
          Alejandro Jofre
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Sobre Mi
          </button>
          <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Skills
          </button>
          <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Proyectos
          </button>
          <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Contacto
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Switch
            isSelected={isDarkMode}
            onValueChange={toggleTheme}
            size="lg"
            color="primary"
            startContent={<FaMoon />}
            endContent={<MdOutlineWbSunny />}
          ></Switch>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none transition-all"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <FaXmark className="dark:text-white text-gray-700 h-6 w-6" />
              ) : (
                <IoMenuSharp className="dark:text-white text-gray-700 h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="transition-all duration-500 ease-in-out">
        {isMenuOpen && (
          <div className="md:hidden mt-4 overflow-hidden  max-h-60 opacity-100">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Sobre mi
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Proyecto
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Contacto
            </button>
          </div>
        )}
      </div>
    </nav>


  );
}
