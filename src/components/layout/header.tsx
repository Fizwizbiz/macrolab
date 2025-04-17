"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, Moon, Sun } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleSubmenu = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const navigation = [
    {
      name: "Services",
      href: "#",
      hasSubmenu: true,
      submenu: [
        { name: "Pourquoi MacroLab", href: "/#why-macrolab" },
        { name: "Abonnements", href: "/#memberships" },
      ],
    },
    {
      name: "À Propos",
      href: "#",
      hasSubmenu: true,
      submenu: [
        { name: "À Propos de MacroLab", href: "/#why-macrolab" },
        { name: "Notre Équipe",href: "/team" },
        { name: "Youtube", href: "https://www.youtube.com/@MacroLab-Investment" },
      ],
    },
    {
      name: "Recherche",
      href: "#",
      hasSubmenu: true,
      submenu: [
        { name: "Le Rapport Macro", href: "/#memberships" },
        { name: "YouTube", href: "https://www.youtube.com/@MacroLab-Investment" },
      ],
    },
  ];

  return (
    <header id="masthead" className="py-4 border-b border-border/30 sticky top-0 z-50 backdrop-blur bg-background/90">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="header-logo">
            <Link href="/" className="flex items-center">
            <img src="/images/logowb.png" alt="Logo MacroLab" className="h-12 w-auto" />
              <div className="text-xl font-bold text-white mr-2">MacroLab</div>
            </Link>
          </div>
  
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center space-x-6">
            {navigation.map((item) => (
  <li key={item.name} className="relative group pb-4"> {/* <-- MODIFICATION ICI: ajout de pb-4 */}
    {item.hasSubmenu ? (
      <span className="flex items-center text-foreground/90 hover:text-foreground cursor-pointer pt-3">
        {item.name}
        <ChevronDown className="ml-1 h-4 w-4" />
      </span>
    ) : (
      <Link
        href={item.href}
        className="text-foreground/90 hover:text-foreground"
      >
        {item.name}
      </Link>
    )}

    {item.hasSubmenu && (
      <div className="absolute left-0 mt-2 w-56 rounded-md bg-card shadow-lg ring-1 ring-black/5 hidden group-hover:block z-50">
        <div className="py-1">
          {item.submenu?.map((subItem) => (
            <Link
              key={subItem.name}
              href={subItem.href}
              className="block px-4 py-2 text-sm text-foreground hover:bg-accent/50"
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      </div>
    )}
  </li>
              ))}
            </ul>
          </nav>
  
          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/#memberships" className="hidden sm:block button">
              S'abonner
            </Link>
  
            <button
              className="h-8 w-8 flex items-center justify-center rounded-md"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 text-foreground" />
              ) : (
                <Moon className="h-4 w-4 text-foreground" />
              )}
            </button>
  
           
  
            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden rounded-md p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
  
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasSubmenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className="flex justify-between w-full text-lg font-medium text-foreground"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-5 w-5 transform transition-transform ${
                            activeSubmenu === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
  
                      {activeSubmenu === item.name && (
                        <div className="mt-2 ml-4 space-y-2 border-l border-border/50 pl-4">
                          {item.submenu?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-1.5 text-foreground/80 hover:text-foreground"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-lg font-medium text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
  
              
  
              <Link
                href="/#memberships"
                className="button w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                S'abonner
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};  

export default Header;
