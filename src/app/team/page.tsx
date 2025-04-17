// Exemple de chemin: /components/sections/OurTeamSection.jsx ou /pages/about-us/team.jsx

import Layout from '@/components/layout/layout'; // Assurez-vous que le chemin est correct
import Image from 'next/image';

// Données des membres de l'équipe
const teamMembers = [
  {
    name: "Thomas",
    role: "Trader Senior & Stratégiste",
    description: "Avec plus de 10 ans d'expérience sur les marchés, Thomas définit nos stratégies macro et identifie les opportunités de trading clés.",
    // Utilisez un placeholder ou le chemin vers une vraie image
    imageUrl: "https://placehold.co/400x400/221C20/FFF?text=T", // Placeholder sombre avec lettre
  },
  {
    name: "Antoine",
    role: "Trader Quantitatif & Exécution",
    description: "Spécialiste de l'analyse technique et de l'exécution, Antoine assure le timing optimal de nos positions et la gestion des risques.",
    imageUrl: "https://placehold.co/400x400/221C20/FFF?text=A",
  },
  {
    name: "Lucas",
    role: "Responsable Communauté & Contenu",
    description: "Lucas gère notre présence en ligne, anime la communauté et s'assure que nos analyses sont claires et accessibles à tous.",
    imageUrl: "https://placehold.co/400x400/221C20/FFF?text=L",
  },
  {
    name: "Maxime",
    role: "Data Scientist & Analyste Quantitatif",
    description: "Maxime développe nos modèles prédictifs et analyse de grandes quantités de données pour déceler des signaux de marché pertinents.",
    imageUrl: "https://placehold.co/400x400/221C20/FFF?text=M",
  },
];

// Le composant de la page ou section
export default function OurTeamPage() {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-background text-foreground">
        <div className="container">
          {/* Titre de la section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Équipe d'Experts
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les professionnels passionnés qui animent MacroLab au quotidien.
            </p>
          </div>

          {/* Grille des membres de l'équipe */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-lg border border-border p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
              >
                {/* Image */}
                <div className="mb-5">
                  <Image
                    src={member.imageUrl}
                    alt={`Portrait de ${member.name}`}
                    width={120} // Taille de l'image
                    height={120}
                    className="rounded-full mx-auto object-cover ring-2 ring-primary/30" // Cercle et petite bordure primaire
                  />
                </div>

                {/* Nom */}
                <h3 className="text-xl font-semibold text-card-foreground mb-1">
                  {member.name}
                </h3>

                {/* Rôle */}
                <p className="text-primary font-medium text-sm mb-3">
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Si c'est une section à inclure dans une autre page (ex: /about-us):
// export function OurTeamSection() { /* ... contenu de la <section> ... */ }