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
    tags: ["Anglais", "Test de langue"],
    status: "active",
  },
  {
    title: "Hibernate & JPA",
    issuer: "MLIA Edu",
    issueDate: "févr. 2026",
    credentialId: "28-272d74e0-5acb-4025-a14b-e98625190b38-702831",
    skills: ["Java", "Hibernate", "JPA", "Spring Boot"],
    tags: ["Backend", "Java"],
    status: "active",
  },
];
