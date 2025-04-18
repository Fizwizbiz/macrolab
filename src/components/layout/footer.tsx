"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

// Custom TikTok icon since it's not in lucide-react
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  return (
    // La balise footer utilise déjà les bonnes classes de thème ! C'est parfait.
    <footer className="bg-card text-muted-foreground border-t border-border/50 py-8">

      {/* --- Utilisation de "container" standard --- */}
      {/* Si "container-medium" est spécifique et défini, tu peux le remettre */}
      {/* Sinon, "container" est plus standard et défini dans globals.css ou tailwind.config.js */}
      <div className="container">

        {/* Grille principale du footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* --- Colonne 1 & 2: Menus --- */}
          <div className="space-y-6 md:col-span-1">
            {/* Menu Explorer */}
            <div className="space-y-4">
              {/* Utilise text-foreground (ou text-card-foreground) au lieu de text-white */}
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Explorer</h3>
              <nav className="flex flex-col space-y-2">
                {/* Utilise text-muted-foreground et hover:text-primary (ou hover:text-foreground) */}
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Accueil
                </Link>
                <Link href="/#memberships" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Abonnements
                </Link>
                {/* Adapte les liens suivants si besoin */}
                <Link href="/research" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Insights
                </Link>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Blog
                </Link>
              </nav>
            </div>

            {/* Menu Informations */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Informations</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/affiliate" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Devenir Partenaire
                </Link>
                <Link href="/about-us" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  À Propos de Nous
                </Link>
                <Link href="/contact-us" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Service Client
                </Link>
                <Link href="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Politique de Remboursement
                </Link>
              </nav>
            </div>
          </div>
          {/* --- Fin Colonne Menus --- */}

          {/* --- Colonne 3: Newsletter --- */}
          <div className="md:col-span-2">
            {/* Utilise text-foreground (ou text-card-foreground) */}
            <h3 className="text-xl font-semibold text-foreground mb-6">Rejoignez notre newsletter !</h3>

            {/* Formulaire Newsletter */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <input
                type="email"
                placeholder="Votre adresse email..."
                aria-label="Adresse email"
                // On enlève flex-1, on met py-2 au lieu de py-2.5
                // w-full sm:w-auto le garde pleine largeur sur petit écran, largeur auto sur plus grand
                className="w-full sm:w-auto bg-input text-foreground rounded-md px-4 py-2 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary placeholder:text-muted-foreground transition-colors"
              />
              {/* --- Assure-toi que le bouton a le même padding vertical (py-2) --- */}
              <button className="button whitespace-nowrap px-5 py-2 text-sm w-full sm:w-auto">
                S'abonner
              </button>
            </div>
            {/* --- Fin Formulaire --- */}

            {/* Icônes Sociales */}
            <div className="flex items-center space-x-4">
              <p className="text-sm text-foreground mr-2">Suivez-nous:</p>
              {/* Utilise text-muted-foreground et hover:text-primary */}
              <a href="https://www.youtube.com/@MacroLab-Investment" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              {/* Ajoute d'autres icônes sociales ici de la même manière si tu en as */}
              {/* <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a> */}
            </div>
            {/* --- Fin Icônes Sociales --- */}

          </div>
          {/* --- Fin Colonne Newsletter --- */}

        </div> {/* Fin de la grille principale */}

        {/* --- Footer Bottom: Copyright et Liens --- */}
        {/* Utilise border-border */}
        <div className="mt-12 border-t border-border/50 pt-6">
          <div className="container"> {/* Container pour centrer aussi cette partie */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

              {/* Copyright */}
              <div>
                 {/* Utilise text-muted-foreground */}
                <p className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} MacroLab. Tous droits réservés.
                </p>
              </div>

              {/* Liens légaux */}
              <div>
                <nav className="flex flex-wrap gap-x-4 gap-y-2">
                  {/* Utilise text-muted-foreground et hover:text-primary */}
                  <Link href="/disclaimer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    Avertissement
                  </Link>
                  <Link href="/terms-and-conditions" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    Conditions Générales
                  </Link>
                  <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    Politique de Confidentialité
                  </Link>
                </nav>
              </div>

              {/* Lien Créateur (Optionnel) */}
              {/* <div>
                <a href="https://absoluteweb.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Site web créé par @
                </a>
              </div> */}

            </div>
          </div>
        </div>
        {/* --- Fin Footer Bottom --- */}

      </div> {/* Fin div.container principal */}
    </footer>
  );
};

// test

export default Footer;
