export type Experience = {
  title: string;
  company: string;
  location?: string;
  type?: string;
  period: string;
  description: string[];
};

export const experiences: Experience[] = [
  {
    title: "Stagiaire graphiste",
    company: "Cité de l'Innovation, Université Cadi Ayyad",
    location: "Marrakech-Safi, Maroc - Sur site",
    type: "Stage",
    period: "nov. 2025 - aujourd'hui",
    description: [
      "Création de visuels pour l'écosystème innovation de l'université",
      "Travail en environnement professionnel et créatif"
    ]
  },
  {
    title: "Graphiste Freelance — Créateurs de contenu",
    company: "Freelance",
    location: "Remote",
    type: "Freelance",
    period: "déc. 2023 - aujourd'hui",
    description: [
      "Miniatures YouTube pour les plus grandes chaînes sénégalaises",
      "Identités visuelles, branding, affiches..."
    ]
  },
  {
    title: "Développeur Full Stack Freelance",
    company: "Freelance Insider | Self-Employed",
    location: "Remote",
    type: "Freelance",
    period: "oct. 2023 - aujourd'hui",
    description: [
      "Conception et développement de 3 sites web complets",
      "Stack : React, Laravel, Spring Boot, PHP, Java, Python..."
    ]
  }
];
