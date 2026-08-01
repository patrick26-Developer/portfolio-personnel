interface EducationEntry {
  degree: string;
  school: string;
  period: string;
  verifyUrl?: string;
}

const education: EducationEntry[] = [
  {
    degree: "Licence en Développement Informatique",
    school: "Institut International Polytechnique Commerce et Juridique",
    period: "2023 – 2024",
    verifyUrl:
      "https://2i-security.com/verification/verify/e4f25932-6b41-42b4-8e0e-ecb1e87d605b",
  },
  {
    degree: "Baccalauréat Scientifique (série C)",
    school: "École privée ALCAR, Pointe-Noire",
    period: "2019 – 2020",
  },
];

export const site = {
  name: "Patrick de Grâce Makosso Bayonne",
  shortName: "Patrick de Grâce",
  role: "Développeur Full-Stack & Data Scientist",
  tagline:
    "Je conçois et livre des applications web et mobiles en production, et je transforme des données brutes en analyses exploitables.",
  bio: "Jeune professionnel congolais titulaire d'une Licence en Développement Informatique, avec une expertise technique en développement web et mobile, en gestion de bases de données et en analyse de données. Rigoureux, organisé et orienté résultats.",
  location: "Brazzaville, Congo-Brazzaville",
  email: "mb.patrickdegrace@gmail.com",
  emailSecondary: "makossobayonnepatrickdegrace@outlook.com",
  phone: "+242 05 052 91 68",
  phoneHref: "tel:+242050529168",
  phoneSecondary: "+242 06 897 04 25",
  phoneSecondaryHref: "tel:+242068970425",
  cvUrl: "/cv-patrick-de-grace.pdf",
  cvFilename: "CV_Patrick_de_Grace_FullStack_DataScientist.pdf",
  avatar: "/photo-du-portefolio.png",
  logo: "/logo-mark.png",
  socials: {
    github: "https://github.com/patrick26-Developer",
    linkedin:
      "https://www.linkedin.com/in/patrick-de-gr%C3%A2ce-makosso-bayonne-351a1232a/",
  },
  education,
  stats: [
    { label: "Applications en production", value: "4" },
    { label: "Projets Data Science", value: "5" },
    { label: "Certifications Python", value: "3" },
    { label: "Licence Développement Informatique", value: "2024" },
  ],
  navItems: [
    { id: "accueil", label: "Accueil" },
    { id: "projets", label: "Projets" },
    { id: "mobile", label: "Mobile" },
    { id: "data-science", label: "Data Science" },
    { id: "competences", label: "Compétences" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ],
} as const;
