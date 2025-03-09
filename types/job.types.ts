export type JobTag = "Remote" | "Contract" | "Junior" | "Senior" | "Full-time";

export interface JobItemType {
  id: string;
  company: string;
  logo: string;
  position: string;
  location: string;
  tags: JobTag[];
  timePosted: string;
}

export type JobDetailType = {
  id: string;
  company: string;
  position: string;
  location: string;
  salary: string;
  experience: string;
  jobType: string;
  level: string;
  updatedDays: number;
  logo: string;
  recruiter: {
    name: string;
    avatar: string;
    lastOnline: string;
  };
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  companyInfo: {
    name: string;
    industry: string;
    employees: string;
    address: string;
  };
};
