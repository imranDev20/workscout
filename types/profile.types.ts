export type JobStatus = {
  status: "Applied" | "Reviewed" | "Interview";
  count: number;
};

export type ExperienceItem = {
  id: string;
  company: string;
  logo: string;
  position: string;
  location: string;
  period: string;
  bgColor: string;
};

export type EducationItem = {
  id: string;
  institution: string;
  logo: string;
  degree: string;
  grade: string;
  period: string;
  bgColor: string;
};

export type SkillItem = string;
export type LanguageItem = string;

export type CVDocument = {
  id: string;
  name: string;
  size: string;
  date: string;
};
