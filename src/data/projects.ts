export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "TP08-REACT",
    period: "2024",
    tags: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    summary: "Projet React 08 - Application avec React. Exercices pratiques de développement web.",
    repo: "https://github.com/Khadim1511/TP08-REACT",
  },
  {
    title: "TP-8-Spring-Boot",
    period: "2024",
    tags: ["Java", "Spring Boot", "REST API", "Backend"],
    summary: "Projet de développement backend utilisant Spring Boot et Java, centré sur la création d'API REST robuste.",
    repo: "https://github.com/Khadim1511/TP-8-Spring-Boot",
  },
  {
    title: "TP07-REACT",
    period: "2024",
    tags: ["React", "JavaScript", "Frontend"],
    summary: "Projet d'apprentissage React 07, incluant la gestion d'état et le routage avec les bibliothèques React modernes.",
    repo: "https://github.com/Khadim1511/tp07-react",
  },
  {
    title: "TP06-REACT",
    period: "2024",
    tags: ["React", "Hooks", "JavaScript"],
    summary: "Introduction et utilisation avancée des React Hooks dans ce projet pratique.",
    repo: "https://github.com/Khadim1511/tp06-react",
  },
  {
    title: "TP05-REACT",
    period: "2024",
    tags: ["React", "Composants", "UI"],
    summary: "Développement d'interfaces utilisateur interactives avec composants React.",
    repo: "https://github.com/Khadim1511/tp05-react",
  },
];
