"use client"; // Important si tu utilises useState

import Link from "next/link";
import Image from "next/image"; // Si tu utilises un logo image
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icônes pour le menu mobile

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center"> {/* Hauteur standard h-14 */}
        <div className="mr-4 hidden md:flex"> {/* Logo et Nav principale pour Desktop */}
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* Remplace par ton logo si nécessaire */}
            {/* <Image src="/logo.png" width={30} height={30} alt="MacroLab Logo" /> */}
            <span className="hidden font-bold sm:inline-block">
              MacroLab
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/#why-macrolab"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Pourquoi nous ?
            </Link>
            <Link
              href="/#market-calls"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Trades
            </Link>
            <Link
              href="/#our-products"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Produits
            </Link>
            <Link
              href="/#about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              À Propos
            </Link>
          </nav>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground/60 hover:text-foreground/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Ouvrir le menu principal</span>
          {isMobileMenuOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {/* Bouton S'abonner (visible sur tous les écrans, à droite) */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center">
            {/* --- BOUTON CORRIGÉ --- */}
            <Link
              href="/#memberships" // Ou la page/URL d'abonnement
              // text-sm (plus grand), px-5 py-2 (plus de padding)
              className="button text-sm px-5 py-2"
            >
              S'abonner
            </Link>
            {/* --- FIN BOUTON CORRIGÉ --- */}
          </nav>
        </div>
      </div>

      {/* Menu déroulant Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border/40 shadow-lg">
          <div className="space-y-1 px-2 pb-3 pt-2">
             {/* Répète tes liens de navigation ici pour le mobile */}
            <Link href="/#why-macrolab" className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground" onClick={() => setIsMobileMenuOpen(false)}>
               Pourquoi nous ?
            </Link>
             <Link href="/#market-calls" className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground" onClick={() => setIsMobileMenuOpen(false)}>
               Trades
             </Link>
             <Link href="/#our-products" className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground" onClick={() => setIsMobileMenuOpen(false)}>
               Produits
             </Link>
             <Link href="/#about" className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground" onClick={() => setIsMobileMenuOpen(false)}>
               À Propos
             </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;