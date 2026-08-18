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
      "Maths": "A*",
      "Physics": "A*",
      "Computer Science": "A*",
      "Further Maths": "A",
      "AEA Maths": "Distinction",
    },
  },

  {
    id: "secondary school",
    institution: "Norlington School and 6th Form",
    qualification: "GCSE",
    startDate: "2015-09",
    endDate: "2020-06",
    grades: {
      "Maths": "A*",
      "English Language": "9",
      "English Literature": "9",
      "Biology": "9",
      "Chemistry": "9",
      "Physics": "9",
      "Computer Science": "9",
      "History": "8",
      "Religious Studies": "9",
      "French": "9",
    },
  },
];
