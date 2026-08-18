import type { Education } from "./types";

export const education: Education[] = [
  {
    id: "imperial-computing",
    institution: "Imperial College London",
    qualification: "MEng Computing",
    startDate: "2023-10",
    details: [],
  },

  {
    id: "sixth form",
    institution: "Norlington School and 6th Form",
    qualification: "A Level",
    startDate: "2020-09",
    endDate: "2022-06",
    grades: {
      Maths: "A*",
      Physics: "A*",
      "Computer Science": "A*",
      "Further Maths": "A",
      "AEA Maths": "Distinction",
    },
    details: [
      "Maths A*",
      "Physics A*",
      "Computer Science A*",
      "Further Maths A",
      "Advanced Extension Award for Maths Distinction",
    ],
  },

  {
    id: "secondary school",
    institution: "Norlington School and 6th Form",
    qualification: "A Level",
    startDate: "2020-09",
    endDate: "2022-06",
    details: [
      "Maths A*",
      "Physics A*",
      "Computer Science A*",
      "Further Maths A",
      "Advanced Extension Award for Maths Distinction",
    ],
  },
];
