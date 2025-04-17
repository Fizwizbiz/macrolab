import Layout from "@/components/layout/layout";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react"; // Ajout GraduationCap pour l'icône

// ... (Assurez-vous que les variables de couleur et les classes .button sont définies comme dans la discussion CSS précédente)


// ... (Assurez-vous que les variables de thème et classes sont définies)

export default function Home() {
  // --- Données des Trades - Ajout de plus d'exemples ---
  const closedTrades = [
    { ticker: "NVDA", direction: "Long", entryDate: "14/10/2023", entryPrice: "414,33 €", exitDate: "20/12/2023", exitPrice: "480,88 €", rendement: "+16,06%", isProfit: true },
    { ticker: "LRCX", direction: "Long", entryDate: "06/11/2023", entryPrice: "630,44 €", exitDate: "20/12/2023", exitPrice: "750,00 €", rendement: "+18,96%", isProfit: true },
    { ticker: "AMD", direction: "Long", entryDate: "16/10/2023", entryPrice: "107,24 €", exitDate: "20/12/2023", exitPrice: "139,91 €", rendement: "+30,47%", isProfit: true },
    { ticker: "SMCI", direction: "Long", entryDate: "27/10/2023", entryPrice: "264,35 €", exitDate: "20/12/2023", exitPrice: "275,00 €", rendement: "+4,03%", isProfit: true },
    { ticker: "CRSP", direction: "Long", entryDate: "06/11/2023", entryPrice: "64,17 €", exitDate: "20/12/2023", exitPrice: "65,55 €", rendement: "+2,15%", isProfit: true },
    // ----- Nouveaux trades pour le défilement -----
    { ticker: "TSLA", direction: "Short", entryDate: "01/09/2023", entryPrice: "250,50 €", exitDate: "15/11/2023", exitPrice: "230,00 €", rendement: "+8.18%", isProfit: true }, // Short gagnant
    { ticker: "AAPL", direction: "Long", entryDate: "15/08/2023", entryPrice: "175,00 €", exitDate: "10/10/2023", exitPrice: "170,00 €", rendement: "-2.86%", isProfit: false }, // Long perdant
    { ticker: "MSFT", direction: "Long", entryDate: "01/07/2023", entryPrice: "330,00 €", exitDate: "30/09/2023", exitPrice: "355,00 €", rendement: "+7.58%", isProfit: true },
    { ticker: "GOOGL", direction: "Long", entryDate: "10/06/2023", entryPrice: "120,00 €", exitDate: "05/09/2023", exitPrice: "135,00 €", rendement: "+12.50%", isProfit: true },
    { ticker: "AMZN", direction: "Short", entryDate: "01/05/2023", entryPrice: "110,00 €", exitDate: "15/07/2023", exitPrice: "115,00 €", rendement: "-4.55%", isProfit: false }, // Short perdant
    { ticker: "META", direction: "Long", entryDate: "01/04/2023", entryPrice: "200,00 €", exitDate: "30/06/2023", exitPrice: "280,00 €", rendement: "+40.00%", isProfit: true },
  ];

  return (
    <Layout>
      {/* Hero Section - Padding bas réduit */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-gradient-to-b from-card to-background text-foreground"> {/* Utilisation des variables de thème */}
        {/* <div className="absolute inset-0 bg-black/10 z-0"></div> */}
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight gradient-text">
            Où la Technique et la Macro Fusionnent
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Profitez des marchés mondiaux avec des performances éprouvées et une analyse de marché inégalée par nos experts.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/#memberships" className="button text-base px-6 py-3">
              S'abonner Maintenant
            </Link>
            <Link href="/#why-macrolab" className="button-secondary text-base px-6 py-3">
              En Savoir Plus
            </Link>
          </div>

          {/* Email input form - Styles utilisant les variables de thème */}
          <div className="max-w-lg mx-auto bg-background/30 dark:bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border/50">
            <p className="text-base font-medium text-foreground mb-4">Rejoignez plus de 50 000 traders et recevez notre rapport de marché GRATUIT !</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email..."
                aria-label="Adresse email"
                className="flex-1 bg-input text-foreground rounded-md px-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-ring placeholder:text-muted-foreground transition-colors"
              />
              <button type="submit" className="button whitespace-nowrap px-5 py-3">
                Obtenir le Rapport Gratuit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why MacroLab Section - Padding haut réduit */}
      <section id="why-macrolab" className="pt-16 md:pt-20 pb-20 md:pb-28 bg-background text-foreground"> {/* Espace avant réduit, bg = background */}
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Pourquoi Choisir MacroLab ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

             {/* Card Structure (utilisation des variables --card, --border etc.) */}
             {/* Card 1: Expert Market Analysis */}
            <div className="bg-card rounded-xl p-8 border border-border/50 transition-transform duration-300 hover:scale-[1.02] shadow-lg">
               <div className="flex justify-center items-center h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/50 dark:to-primary/30 mb-6 mx-auto ring-2 ring-primary/20 dark:ring-primary/30">
                <Image
                  src="https://ext.same-assets.com/828132198/2348511845.svg"
                  alt="Icône Analyse"
                  width={28} height={28}
                />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground text-center mb-5">Analyse de Marché Expert</h3>
              <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                Analyse approfondie et perspicace, révélant les tendances du marché de demain dès aujourd'hui.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-muted-foreground">Aperçu des tendances globales du marché par nos experts.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-muted-foreground">Repérez et positionnez-vous sur les meilleurs actifs macro.</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Swing Trades & Investment */}
            <div className="bg-card rounded-xl p-8 border border-border/50 transition-transform duration-300 hover:scale-[1.02] shadow-lg">
               <div className="flex justify-center items-center h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/50 dark:to-primary/30 mb-6 mx-auto ring-2 ring-primary/20 dark:ring-primary/30">
                 <img src="/images/logowb.png" alt="Icône Trading" className="h-15 w-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground text-center mb-5">Transactions Swing & Investissement</h3>
              <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                Alertes en temps réel avec plan d'entrée/sortie précis pour sécuriser vos profits.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-muted-foreground">Nous ciblons les quelques transactions qui comptent vraiment.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-muted-foreground">Historique complet des trades disponible via le Portail membre.</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Educational Approach */}
            <div className="bg-card rounded-xl p-8 border border-border/50 transition-transform duration-300 hover:scale-[1.02] shadow-lg">
               <div className="flex justify-center items-center h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/50 dark:to-primary/30 mb-6 mx-auto ring-2 ring-primary/20 dark:ring-primary/30">
                 <GraduationCap className="h-7 w-7 text-primary" /> {/* Utilisation icône Lucide */}
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground text-center mb-5">Approche Éducative</h3>
              <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                Notre objectif : vous fournir les connaissances et outils pour améliorer vos compétences d'investissement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-muted-foreground">Apprenez de +15 ans d'expérience à Wall Street.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-muted-foreground">Stratégie claire combinant macro, technique et analyse institutionnelle.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

       {/* --- Recent Trades Table Section CORRIGÉE --- */}
       <section id="market-calls" className="py-20 md:py-28 bg-secondary text-secondary-foreground">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Historique des Trades Clôturés</h2>

          {/* Cadre extérieur pour border et shadow */}
          <div className="bg-card rounded-lg border border-border shadow-xl overflow-hidden">
            {/* Conteneur pour le défilement horizontal si nécessaire */}
            <div className="overflow-x-auto">
              {/* Conteneur pour le défilement vertical et le contexte sticky */}
              <div className="max-h-[450px] overflow-y-auto relative">
                {/* Utiliser table-fixed si les largeurs des TH sont bien définies */}
                <table className="w-full text-sm text-left min-w-[700px] table-fixed">
                  <thead className="text-xs uppercase text-muted-foreground bg-card sticky top-0 z-10 border-b border-border">
                    <tr>
                      {/* Assurez-vous que la somme des largeurs fait 100% */}
                      <th scope="col" className="px-6 py-4 font-medium w-[15%]">Ticker</th>
                      <th scope="col" className="px-6 py-4 font-medium w-[12%]">Direction</th>
                      <th scope="col" className="px-6 py-4 font-medium w-[17%]">Entrée (Date)</th>
                      <th scope="col" className="px-6 py-4 font-medium w-[17%]">Entrée (Prix)</th>
                      <th scope="col" className="px-6 py-4 font-medium w-[17%]">Sortie (Date)</th>
                      <th scope="col" className="px-6 py-4 font-medium w-[17%]">Sortie (Prix)</th>
                      <th scope="col" className="px-6 py-4 font-medium text-right w-[15%]">Rendement</th>
                    </tr>
                  </thead>
                  {/* tbody standard, pas de 'block' ou 'flex' ici */}
                  <tbody className="divide-y divide-border">
                    {closedTrades.map((trade, index) => (
                      // tr standard
                      <tr key={index} className="hover:bg-accent/50 transition-colors duration-150">
                        {/* td standard, pas de 'w-[...]' ici */}
                        <td className="px-6 py-4 font-medium text-card-foreground whitespace-nowrap">{trade.ticker}</td>
                        <td className="px-6 py-4 text-muted-foreground">{trade.direction}</td>
                        <td className="px-6 py-4 text-muted-foreground">{trade.entryDate}</td>
                        <td className="px-6 py-4 text-muted-foreground">{trade.entryPrice}</td>
                        <td className="px-6 py-4 text-muted-foreground">{trade.exitDate}</td>
                        <td className="px-6 py-4 text-muted-foreground">{trade.exitPrice}</td>
                        <td className={`px-6 py-4 text-right font-semibold whitespace-nowrap ${trade.isProfit ? 'text-green-500' : 'text-red-500'}`}>
                          {trade.rendement}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> {/* Fin du conteneur scrollable vertical */}
            </div> {/* Fin du conteneur scrollable horizontal */}
          </div> {/* Fin du cadre extérieur */}
        </div>
      </section>
      {/* --- Fin Section Trades Corrigée --- */}


      {/* Products Section (Utilisation des variables de thème) */}
      <section id="our-products" className="py-20 md:py-28 bg-background text-foreground">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Découvrez Nos Produits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Alertes de Trading", description: "Recevez nos signaux en temps réel par email ou via notre application mobile.", link: "/#memberships" },
              { title: "Le Rapport Macro", description: "Analyse détaillée des tendances macroéconomiques et leur impact sur les marchés.", link: "/#memberships" },
              { title: "Idées de Trading", description: "Stratégies court/moyen terme basées sur nos analyses technique et fondamentale.", link: "/#memberships" },
              { title: "Gestion des Risques", description: "Stratégies complètes pour protéger votre portefeuille en toutes circonstances.", link: "/#memberships" },
            ].map((product, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden border border-border shadow-lg flex flex-col transition-shadow hover:shadow-xl">
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                </div>
                <div className="p-6 pt-0">
                  <Link href={product.link} className="button w-full justify-center py-2.5">
                    En Savoir Plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section (Utilisation des variables de thème) */}
      <section id="memberships" className="py-20 md:py-28 bg-gradient-to-b from-card to-background text-foreground">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Devenez Membre Premium</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl overflow-hidden border-2 border-primary shadow-2xl p-8 md:p-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-card-foreground mb-2">Premium</h3>
                <p className="text-lg text-muted-foreground">Accès complet à toutes nos analyses, alertes et communauté</p>
              </div>
              <div className="flex justify-center items-baseline mb-8">
                <span className="text-5xl font-extrabold text-card-foreground tracking-tight">69€</span>
                <span className="text-xl text-muted-foreground ml-1.5">/ mois</span>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  "Alertes de Trading en Temps Réel",
                  "Webinar Hebdomadaire Exclusif",
                  "Idées de Trading Court/Moyen Terme",
                  "Accès à la Communauté Discord Privée",
                  "Sessions Q&R Hebdomadaires avec nos Experts",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" />
                    <span className="text-foreground/90">{feature}</span> {/* Texte légèrement moins fort */}
                  </li>
                ))}
              </ul>
              <Link href="https://buy.stripe.com/cN25mT1AscVz4a4bII" className="button w-full justify-center text-lg py-3">
                Rejoindre le Programme Premium
              </Link>
              <p className="text-xs text-muted-foreground text-center mt-4">Paiement sécurisé via Stripe. Annulable à tout moment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- About Section MODIFIÉE --- */}
      <section
        id="about"
        className="relative py-20 md:py-28 text-foreground overflow-hidden bg-background" // Contexte relatif pour la lumière
      >
        {/* La "Lumière Derrière" - un dégradé radial subtil */}
        <div
           className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-70 dark:from-primary/10 dark:opacity-100"
           aria-hidden="true"
         />

        {/* Utilisation de container-medium pour centrer */}
        <div className="container-medium relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16"> {/* Espace ajusté */}
            {/* Text Content */}
            <div className="md:w-1/2 lg:w-3/5 text-center md:text-left"> {/* Texte centré sur mobile */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                À Propos de MacroLab
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                MacroLab est un cabinet d'analyse financière indépendant spécialisé dans l'étude des marchés mondiaux. Notre équipe d'experts analyse en permanence l'économie globale et fournit des informations précieuses sur les tendances des marchés et les opportunités d'investissement uniques.
              </p>
              <Link href="/team" className="button inline-flex px-6 py-3">
                Découvrir Notre Équipe
              </Link>
            </div>
            {/* Image */}
            <div className="md:w-1/2 lg:w-2/5">
              <Image
                src="https://ext.same-assets.com/828132198/1764798017.png"
                alt="Équipe MacroLab analysant les marchés"
                width={550}
                height={385}
                className="rounded-lg shadow-xl object-cover aspect-video md:aspect-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* --- Fin Section About Modifiée --- */}

      {/* Contact Form Section (Utilisation des variables de thème) */}
      <section id="contact" className="py-20 md:py-28 bg-secondary text-secondary-foreground">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Contactez-Nous
          </h2>
          <div className="bg-card p-8 rounded-lg border border-border shadow-xl">
            <p className="text-muted-foreground mb-8 text-center leading-relaxed">
              Une question ? Une suggestion ? N'hésitez pas à nous envoyer un message. Nous répondons généralement sous 24h ouvrées.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-1.5">
                  Votre nom
                </label>
                <input
                  type="text" id="name" name="name" required
                  className="w-full bg-input text-foreground rounded-md px-4 py-2.5 border border-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-card focus:ring-ring transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-1.5">
                  Votre email
                </label>
                <input
                  type="email" id="email" name="email" required
                  className="w-full bg-input text-foreground rounded-md px-4 py-2.5 border border-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-card focus:ring-ring transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-1.5">
                  Votre message
                </label>
                <textarea
                  id="message" name="message" rows={5} required
                  className="w-full bg-input text-foreground rounded-md px-4 py-2.5 border border-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-card focus:ring-ring transition-colors"
                />
              </div>
              <button type="submit" className="button w-full py-3 text-base">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}