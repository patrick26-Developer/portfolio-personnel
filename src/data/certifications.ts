export interface Certification {
  name: string;
  org: string;
  date: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    name: "Data Analysis with Python V7",
    org: "freeCodeCamp",
    date: "2024",
    url: "https://www.freecodecamp.org/certification/fccd2ead9c3-9411-4503-861e-c4920b34172c/data-analysis-with-python-v7",
  },
  {
    name: "Data Visualization",
    org: "freeCodeCamp",
    date: "2024",
    url: "https://www.freecodecamp.org/certification/fccd2ead9c3-9411-4503-861e-c4920b34172c/data-visualization",
  },
  {
    name: "Python Development & Data Scientist",
    org: "Akieni Académie (via Pluralsight & freeCodeCamp)",
    date: "2023 – 2024",
  },
];
