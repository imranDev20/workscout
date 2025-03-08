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
