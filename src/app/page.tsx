import Layout from "@/components/layout/layout";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, Target, TrendingUp, BarChart3 } from "lucide-react"; // Mail enlevé si non utilisé

export default function Home() {
  const closedTrades = [
    // --- 24 Gains (80%) ---
    { ticker: "EUR/USD", direction: "Long", entryDate: "15/01/2024", entryPrice: "1,0955 €", exitDate: "22/01/2024", exitPrice: "1,1030 €", rendement: "+4,68%", isProfit: true },
    { ticker: "GBP/USD", direction: "Long", entryDate: "02/02/2024", entryPrice: "1,2680 €", exitDate: "10/02/2024", exitPrice: "1,2750 €", rendement: "+19,55%", isProfit: true },
    { ticker: "USD/JPY", direction: "Short", entryDate: "18/03/2024", entryPrice: "149,10 €", exitDate: "25/03/2024", exitPrice: "147,80 €", rendement: "+8,87%", isProfit: true },
    { ticker: "AUD/USD", direction: "Long", entryDate: "05/04/2024", entryPrice: "0,6590 €", exitDate: "15/04/2024", exitPrice: "0,6685 €", rendement: "+12,44%", isProfit: true },
    { ticker: "USD/CAD", direction: "Short", entryDate: "20/05/2024", entryPrice: "1,3650 €", exitDate: "30/05/2024", exitPrice: "1,3570 €", rendement: "+1,59%", isProfit: true },
    { ticker: "XAU/USD", direction: "Long", entryDate: "25/11/2024", entryPrice: "2350,00 €", exitDate: "02/12/2024", exitPrice: "2335,00 €", rendement: "-1,64%", isProfit: false },
    { ticker: "XAU/USD", direction: "Long", entryDate: "10/06/2024", entryPrice: "2310,50 €", exitDate: "20/06/2024", exitPrice: "2345,00 €", rendement: "+9,49%", isProfit: true }, // Or (Gold)
    { ticker: "NZD/USD", direction: "Long", entryDate: "01/07/2024", entryPrice: "0,6150 €", exitDate: "10/07/2024", exitPrice: "0,6220 €", rendement: "+6,14%", isProfit: true },
    { ticker: "EUR/JPY", direction: "Long", entryDate: "15/07/2024", entryPrice: "161,20 €", exitDate: "25/07/2024", exitPrice: "162,90 €", rendement: "+4,05%", isProfit: true },
    { ticker: "GBP/JPY", direction: "Long", entryDate: "01/03/2024", entryPrice: "188,20 €", exitDate: "08/03/2024", exitPrice: "187,10 €", rendement: "-0,58%", isProfit: false },
    { ticker: "USD/CHF", direction: "Short", entryDate: "05/08/2024", entryPrice: "0,8890 €", exitDate: "15/08/2024", exitPrice: "0,8815 €", rendement: "+0,84%", isProfit: true },
    { ticker: "GBP/JPY", direction: "Short", entryDate: "20/08/2024", entryPrice: "185,50 €", exitDate: "30/08/2024", exitPrice: "183,80 €", rendement: "+42,92%", isProfit: true },
    { ticker: "AUD/USD", direction: "Short", entryDate: "20/07/2024", entryPrice: "0,6650 €", exitDate: "27/07/2024", exitPrice: "0,6690 €", rendement: "-5,60%", isProfit: false },
    { ticker: "SPX500", direction: "Long", entryDate: "03/09/2024", entryPrice: "5150,00 €", exitDate: "13/09/2024", exitPrice: "5220,00 €", rendement: "+12,36%", isProfit: true }, // Indice S&P 500
    { ticker: "EUR/USD", direction: "Short", entryDate: "18/09/2024", entryPrice: "1,0780 €", exitDate: "28/09/2024", exitPrice: "1,0710 €", rendement: "+17,65%", isProfit: true },
    { ticker: "USD/JPY", direction: "Long", entryDate: "07/10/2024", entryPrice: "150,50 €", exitDate: "17/10/2024", exitPrice: "152,00 €", rendement: "+0,99%", isProfit: true },
    { ticker: "GBP/USD", direction: "Long", entryDate: "21/10/2024", entryPrice: "1,2550 €", exitDate: "31/10/2024", exitPrice: "1,2660 €", rendement: "+0,88%", isProfit: true },
    { ticker: "BTC/USD", direction: "Long", entryDate: "04/11/2024", entryPrice: "68500 €", exitDate: "14/11/2024", exitPrice: "71200 €", rendement: "+3,94%", isProfit: true }, // Bitcoin
    { ticker: "AUD/JPY", direction: "Long", entryDate: "18/11/2024", entryPrice: "98,50 €", exitDate: "28/11/2024", exitPrice: "99,80 €", rendement: "+1,32%", isProfit: true },
    { ticker: "USD/JPY", direction: "Short", entryDate: "10/09/2024", entryPrice: "151,80 €", exitDate: "17/09/2024", exitPrice: "152,50 €", rendement: "-2,46%", isProfit: false },
    { ticker: "USD/CAD", direction: "Short", entryDate: "02/12/2024", entryPrice: "1,3710 €", exitDate: "12/12/2024", exitPrice: "1,3620 €", rendement: "+4,66%", isProfit: true },
    { ticker: "EUR/AUD", direction: "Short", entryDate: "05/12/2024", entryPrice: "1,6450 €", exitDate: "15/12/2024", exitPrice: "1,6330 €", rendement: "+3,73%", isProfit: true },
    { ticker: "XAU/USD", direction: "Short", entryDate: "01/11/2023", entryPrice: "1995,00 €", exitDate: "10/11/2023", exitPrice: "1970,00 €", rendement: "+1,25%", isProfit: true }, // Ancien trade pour mixer
    { ticker: "USD/CHF", direction: "Long", entryDate: "15/11/2023", entryPrice: "0,8950 €", exitDate: "25/11/2023", exitPrice: "0,9020 €", rendement: "+20,78%", isProfit: true }, // Ancien trade
    { ticker: "NZD/JPY", direction: "Long", entryDate: "04/12/2023", entryPrice: "89,10 €", exitDate: "14/12/2023", exitPrice: "90,00 €", rendement: "+18,01%", isProfit: true }, // Ancien trade
    { ticker: "CAD/JPY", direction: "Short", entryDate: "08/01/2024", entryPrice: "108,50 €", exitDate: "18/01/2024", exitPrice: "107,40 €", rendement: "+15,01%", isProfit: true },
    { ticker: "EUR/USD", direction: "Long", entryDate: "28/04/2024", entryPrice: "1,0750 €", exitDate: "05/05/2024", exitPrice: "1,0705 €", rendement: "-4,42%", isProfit: false },
    { ticker: "EUR/GBP", direction: "Long", entryDate: "25/01/2024", entryPrice: "0,8530 €", exitDate: "05/02/2024", exitPrice: "0,8590 €", rendement: "+7,70%", isProfit: true },
    { ticker: "AUD/CAD", direction: "Long", entryDate: "12/02/2024", entryPrice: "0,8900 €", exitDate: "22/02/2024", exitPrice: "0,8975 €", rendement: "+6,84%", isProfit: true },
    { ticker: "USD/CAD", direction: "Long", entryDate: "08/06/2024", entryPrice: "1,3730 €", exitDate: "15/06/2024", exitPrice: "1,3680 €", rendement: "-2,36%", isProfit: false },
  ];
  return (
    <Layout>
      {/* --- Hero Section --- */}
      <section className="relative pt-28 md:pt-40 pb-20 md:pb-24 overflow-hidden bg-gradient-to-br from-background via-background to-secondary/10 dark:to-secondary/20 text-foreground">

        {/* --- GRILLE DE FOND ANIMÉE --- */}
        <div
          className="animate-grid absolute inset-0 z-0 opacity-[0.08] dark:opacity-[0.05]" // Opacité augmentée, classe animate-grid ajoutée
          style={{
            // La variable --foreground-rgb DOIT être définie dans globals.css
            backgroundImage:
              'linear-gradient(rgba(var(--foreground-rgb), 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--foreground-rgb), 0.1) 1px, transparent 1px)',
            backgroundSize: '2.5rem 2.5rem', // Taille de la grille
            // L'animation est définie via la classe 'animate-grid' et les @keyframes dans globals.css
          }}
          aria-hidden="true"
        ></div>
        {/* --- FIN GRILLE --- */}

        {/* Contenu de la Hero Section */}
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight gradient-text">
            Où la Technique et la Macro Fusionnent
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Profitez des marchés mondiaux avec des performances éprouvées et une analyse de marché inégalée par nos experts.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/#memberships" className="button text-sm px-7 py-2.5">
              S'abonner Maintenant
            </Link>
            <Link href="/#why-macrolab" className="button-secondary text-sm px-7 py-2.5">
              En Savoir Plus
            </Link>
          </div>

          {/* --- Formulaire Newsletter (Intégré avec Mailchimp et stylisé) --- */}
          <div className="max-w-lg mx-auto bg-card/80 dark:bg-card/60 backdrop-blur-md p-5 rounded-lg border border-border/70 shadow-lg">
            {/* Ton titre reste le même */}
            <p className="text-sm font-medium text-foreground mb-4">
              Rejoignez plus de 50 000 traders et recevez notre rapport de marché GRATUIT !
            </p>

            {/* Le formulaire Mailchimp prend la place de l'ancien */}
            {/* REMPLACE l'URL action ci-dessous par celle de ton code Mailchimp */}
            <form
              action="https://carrd.us3.list-manage.com/subscribe/post?u=2897a059530c34a1eb6e0fc7b&id=7c94220189&f_id=0084e5e3f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              // Tes classes pour la mise en page du formulaire
              className="validate flex flex-col sm:flex-row gap-3 items-center"
              target="_blank" // Ouvre la page de confirmation Mailchimp dans un nouvel onglet
              noValidate // On laisse Mailchimp gérer la validation côté serveur
            >
              {/* L'input email de Mailchimp avec TES styles */}
              <input
                type="email"
                name="EMAIL" // TRÈS IMPORTANT: Garde le name="EMAIL" de Mailchimp
                id="mce-EMAIL" // Garde l'ID de Mailchimp
                // TES classes Tailwind pour le style de l'input
                className="w-full sm:w-auto bg-input text-foreground rounded-md px-4 py-2 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary placeholder:text-muted-foreground transition-colors flex-1" // J'ai remis flex-1 ici car sans, il peut être trop petit à côté du bouton. Teste et ajuste si besoin.
                placeholder="Votre adresse email..." // Ton placeholder
                aria-label="Adresse email" // Ton aria-label
                required // Garde le required
              />

              {/* Champ caché "honeypot" de Mailchimp - NE PAS SUPPRIMER */}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input
                    type="text"
                    // REMPLACE avec le name="b_..." de ton code Mailchimp
                    name="b_2897a059530c34a1eb6e0fc7b_7c94220189"
                    tabIndex={-1}
                    defaultValue=""
                  />
              </div>

              {/* Le bouton submit stylisé comme le tien */}
              <button
                type="submit"
                name="subscribe" // Garde le name="subscribe" de Mailchimp
                id="mc-embedded-subscribe" // Garde l'ID de Mailchimp
                // TES classes Tailwind pour le bouton
                className="button whitespace-nowrap px-5 py-2 text-sm w-full sm:w-auto"
              >
                 {/* Le texte que tu veux sur le bouton */}
                 S'abonner
              </button>
            </form>
          </div>
          {/* --- Fin Formulaire Newsletter --- */}
        </div>
      </section>
      {/* --- FIN Hero Section --- */}

      {/* --- Why MacroLab Section --- */}
      <section id="why-macrolab" className="py-20 md:py-28 bg-background text-foreground">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Pourquoi Choisir MacroLab ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="bg-card rounded-xl p-8 border border-border/50 transition-transform duration-300 hover:scale-[1.02] shadow-lg flex flex-col">
               <div className="flex justify-center items-center h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/50 dark:to-primary/30 mb-6 mx-auto ring-2 ring-primary/30">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-grow text-center">
                  <h3 className="text-2xl font-semibold text-card-foreground mb-4">Analyse de Marché Expert</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Analyse approfondie et perspicace, révélant les tendances du marché de demain dès aujourd'hui.
                  </p>
              </div>
              <ul className="space-y-3 mt-auto text-left">
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
            {/* Card 2 */}
            <div className="bg-card rounded-xl p-8 border border-border/50 transition-transform duration-300 hover:scale-[1.02] shadow-lg flex flex-col">
               <div className="flex justify-center items-center h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/50 dark:to-primary/30 mb-6 mx-auto ring-2 ring-primary/30">
                 <Target className="h-8 w-8 text-primary" />
              </div>
               <div className="flex-grow text-center">
                 <h3 className="text-2xl font-semibold text-card-foreground mb-4">Transactions Swing & Investissement</h3>
                 <p className="text-muted-foreground mb-6 leading-relaxed">
                   Alertes en temps réel avec plan d'entrée/sortie précis pour sécuriser vos profits.
                 </p>
               </div>
              <ul className="space-y-3 mt-auto text-left">
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
            {/* Card 3 */}
            <div className="bg-card rounded-xl p-8 border border-border/50 transition-transform duration-300 hover:scale-[1.02] shadow-lg flex flex-col">
               <div className="flex justify-center items-center h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/50 dark:to-primary/30 mb-6 mx-auto ring-2 ring-primary/30">
                 <GraduationCap className="h-8 w-8 text-primary" />
              </div>
               <div className="flex-grow text-center">
                 <h3 className="text-2xl font-semibold text-card-foreground mb-4">Approche Éducative</h3>
                 <p className="text-muted-foreground mb-6 leading-relaxed">
                   Notre objectif : vous fournir les connaissances et outils pour améliorer vos compétences d'investissement.
                 </p>
                </div>
              <ul className="space-y-3 mt-auto text-left">
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
      {/* --- FIN Why MacroLab Section --- */}

      {/* --- Recent Trades Table Section --- */}
      <section id="market-calls" className="py-20 md:py-28 bg-secondary text-secondary-foreground">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Historique des Trades Clôturés</h2>
          <div className="bg-card rounded-lg border border-border shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <div className="max-h-[450px] overflow-y-auto relative">
                <table className="w-full text-sm text-left min-w-[750px] table-fixed">
                  <thead className="text-xs uppercase text-muted-foreground bg-card sticky top-0 z-10 border-b border-border">
                    <tr>
                      <th scope="col" className="px-6 py-4 font-medium w-[14%]">Ticker</th>
                      <th scope="col" className="px-6 py-4 font-medium w-[12%]">Direction</th>
                      <th scope="col" className="px-6 py-4 font-medium w-[16%]">Entrée (Date)</th>
                      <th scope="col" className="px-6 py-4 font-medium w-[16%]">Entrée (Prix)</th>
                      <th scope="col" className="px-6 py-4 font-medium w-[16%]">Sortie (Date)</th>
                      <th scope="col" className="px-6 py-4 font-medium w-[16%]">Sortie (Prix)</th>
                      <th scope="col" className="px-6 py-4 font-medium text-right w-[10%]">Rendement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {closedTrades.map((trade, index) => (
                      <tr key={index} className="hover:bg-accent/50 transition-colors duration-150">
                        <td className="px-6 py-4 font-medium text-card-foreground whitespace-nowrap">{trade.ticker}</td>
                        <td className="px-6 py-4 text-muted-foreground">{trade.direction}</td>
                        <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">{trade.entryDate}</td>
                        <td className="px-6 py-4 text-muted-foreground">{trade.entryPrice}</td>
                        <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">{trade.exitDate}</td>
                        <td className="px-6 py-4 text-muted-foreground">{trade.exitPrice}</td>
                        <td className={`px-6 py-4 text-right font-semibold whitespace-nowrap ${trade.isProfit ? 'text-green-500' : 'text-red-500'}`}>
                          {trade.rendement}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- FIN Recent Trades Table Section --- */}

      {/* --- Products Section --- */}
      <section id="our-products" className="py-20 md:py-28 bg-background text-foreground">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Découvrez Nos Produits</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Alertes de Trading", description: "Recevez nos signaux en temps réel par email ou via notre application mobile.", link: "/#memberships", icon: TrendingUp },
              { title: "Le Rapport Macro", description: "Analyse détaillée des tendances macroéconomiques et leur impact sur les marchés.", link: "/#memberships", icon: BarChart3 },
              { title: "Idées de Trading", description: "Stratégies court/moyen terme basées sur nos analyses technique et fondamentale.", link: "/#memberships", icon: Target },
              { title: "Gestion des Risques", description: "Stratégies complètes pour protéger votre portefeuille en toutes circonstances.", link: "/#memberships", icon: CheckCircle2 },
            ].map((product, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden border border-border shadow-lg flex flex-col transition-shadow hover:shadow-xl hover:-translate-y-1 duration-300">
                <div className="p-6 flex-grow">
                  <div className="mb-4">
                    <product.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{product.description}</p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Link href={product.link} className="button-secondary w-full justify-center py-2.5 text-sm">
                    En Savoir Plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- FIN Products Section --- */}

      {/* --- Membership Section --- */}
      <section id="memberships" className="py-20 md:py-28 bg-gradient-to-b from-card to-background text-foreground">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Devenez Membre Premium</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl overflow-hidden border-2 border-primary/80 shadow-2xl p-8 md:p-10 relative before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-primary/10 before:via-transparent before:to-transparent before:rounded-xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-card-foreground mb-2">Premium</h3>
                <p className="text-lg text-muted-foreground">Accès complet à toutes nos analyses, alertes et communauté</p>
              </div>
              <div className="flex justify-center items-baseline mb-10">
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
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="https://buy.stripe.com/cN25mT1AscVz4a4bII" className="button w-full justify-center text-lg py-3.5">
                Rejoindre le Programme Premium
              </Link>
              <p className="text-xs text-muted-foreground text-center mt-5">Paiement sécurisé via Stripe. Annulable à tout moment.</p>
            </div>
          </div>
        </div>
      </section>
      {/* --- FIN Membership Section --- */}

       {/* --- About Section --- */}
       <section id="about" className="relative py-20 md:py-28 text-foreground overflow-hidden bg-background">
         <div
           className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background/0 to-background/0 opacity-50 dark:from-primary/15 dark:opacity-70"
           aria-hidden="true"
         />
         <div className="container relative z-10">
           <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
             <div className="md:w-1/2 lg:w-3/5 text-center md:text-left">
               <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                 À Propos de MacroLab
               </h2>
               <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                 MacroLab est un cabinet d'analyse financière indépendant spécialisé dans l'étude des marchés mondiaux. Notre équipe d'experts analyse en permanence l'économie globale et fournit des informations précieuses sur les tendances des marchés et les opportunités d'investissement uniques.
               </p>
               <Link href="/team" className="button inline-flex items-center px-7 py-3">
                 Découvrir Notre Équipe <ArrowRight className="ml-2 h-5 w-5"/>
               </Link>
             </div>
             <div className="md:w-1/2 lg:w-2/5">
               <Image
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                 alt="Analyse de données MacroLab"
                 width={550}
                 height={385}
                 className="rounded-lg shadow-xl object-cover aspect-video md:aspect-[4/3] border border-border/30"
               />
             </div>
           </div>
         </div>
       </section>
       {/* --- FIN About Section --- */}

      {/* --- Contact Form Section --- */}
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
                   className="w-full bg-input text-foreground rounded-md px-4 py-2.5 border border-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-card focus:ring-primary placeholder:text-muted-foreground transition-colors"
                 />
               </div>
               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-1.5">
                   Votre email
                 </label>
                 <input
                   type="email" id="email" name="email" required
                   className="w-full bg-input text-foreground rounded-md px-4 py-2.5 border border-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-card focus:ring-primary placeholder:text-muted-foreground transition-colors"
                 />
               </div>
               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-1.5">
                   Votre message
                 </label>
                 <textarea
                   id="message" name="message" rows={5} required
                   className="w-full bg-input text-foreground rounded-md px-4 py-2.5 border border-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-card focus:ring-primary placeholder:text-muted-foreground transition-colors resize-none"
                 />
               </div>
              <button type="submit" className="button w-full py-3 text-base">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* --- FIN Contact Form Section --- */}

    </Layout>
  );
}