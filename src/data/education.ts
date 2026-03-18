export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Université Cadi Ayyad",
    degree: "Licence",
    field: "Systemes Inforamtiques Repartis",
    location: "Marrakech, Maroc",
    start: "2023",
    end: "2026",
    courses: ["Développement Web : HTML, CSS, JavaScript, Bootsrap, React, Spring Boot"],
    highlights: ["Formation approfondie en Systèmes Informatiques Répartis"],
  },
  {
    school: "Lycée Mame yelli Badiane",
    degree: "Baccalauréat",
    field: "Sciences Experimentales",
    location: "Sénégal",
    start: "oct. 2020",
    end: "juil. 2023",
  },
];
