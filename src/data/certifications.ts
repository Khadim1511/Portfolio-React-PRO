export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "EF SET English Certificate 38/100 (A2 Elementary)",
    issuer: "EF SET",
    issueDate: "oct. 2025",
    credentialUrl: "https://cert.efset.org/XiaM6S",
    tags: ["Anglais", "Test de langue"],
    status: "active",
  },
  {
    title: "Hibernate & JPA",
    issuer: "MLIA Edu",
    issueDate: "févr. 2026",
    credentialId: "28-272d74e0-5acb-4025-a14b-e98625190b38-702831",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/28-272d74e0-5acb-4025-a14b-e98625190b38-702831",
    skills: ["Java", "Hibernate", "JPA", "Spring Boot"],
    tags: ["Backend", "Java"],
    status: "active",
  },
  {
    title: "Développement Front-End moderne avec React",
    issuer: "MLIA Edu",
    issueDate: "janv. 2026",
    credentialId: "26-272d74e0-5acb-4025-a14b-e98625190b38-025700",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/26-272d74e0-5acb-4025-a14b-e98625190b38-025700",
    skills: ["React", "JavaScript", "Front-End"],
    tags: ["Front-End", "React"],
    status: "active",
  },
];
