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
    <footer className="bg-bravos-dark pt-16 pb-6">
      <div className="container-medium">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 & 2: Footer Menus */}
          <div className="space-y-6 md:col-span-1">
            <div className="space-y-4">
              <h3 className="text-white font-medium">Explorer</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
                <Link href="/#memberships" className="text-gray-300 hover:text-white transition-colors">
                  Abonnements
                </Link>
                <Link href="/research" className="text-gray-300 hover:text-white transition-colors">
                  Insights
                </Link>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-medium">Informations</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/affiliate" className="text-gray-300 hover:text-white transition-colors">
                  Devenir Partenaire
                </Link>
                <Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">
                  À Propos de Nous
                </Link>
                <Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors">
                  Service Client
                </Link>
                <Link href="/refund-policy" className="text-gray-300 hover:text-white transition-colors">
                  Politique de Remboursement
                </Link>
              </nav>
            </div>
          </div>

          {/* Column 3: Newsletter Signup */}
          <div className="md:col-span-2">
            <h3 className="text-2xl text-white font-semibold mb-6">Rejoignez plus de 50 000 investisseurs pour un bulletin de marché GRATUIT</h3>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <input
                type="email"
                placeholder="Votre adresse email..."
                className="flex-1 bg-bravos-darker text-gray-300 rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-bravos-red"
              />
              <button className="button whitespace-nowrap">
                S'abonner
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://www.youtube.com/@MacroLab-Investment" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom: Copyright and Links */}
      <div className="footer-bottom mt-12 border-t border-gray-800 pt-6">
        <div className="container-medium">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-gray-400 text-sm">© 2025 MacroLab. Tous droits réservés.</p>
            </div>

            <div>
              <nav className="flex flex-wrap gap-x-4 gap-y-2">
                <Link href="/disclaimer" className="text-gray-400 hover:text-gray-300 text-sm">
                  Avertissement
                </Link>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-gray-300 text-sm">
                  Conditions Générales
                </Link>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-gray-300 text-sm">
                  Politique de Confidentialité
                </Link>
              </nav>
            </div>

            <div>
              <a href="https://absoluteweb.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 text-sm">
                Site web créé par @
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// test

export default Footer;
