import {
  CVDocument,
  EducationItem,
  ExperienceItem,
  JobDetailType,
  JobItemType,
  JobStatus,
  LanguageItem,
  SkillItem,
} from "@/types";

export const jobData: JobItemType[] = [
  {
    id: "1",
    company: "Invision",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    position: "UI designer",
    location: "Jakarta, Indonesia - Onsite",
    tags: ["Remote", "Contract", "Junior"],
    timePosted: "3 days ago",
  },
  {
    id: "2",
    company: "Telegram",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/335_Telegram_logo-512.png",
    position: "Digital Marketer",
    location: "Jakarta, Indonesia",
    tags: ["Remote"],
    timePosted: "3 days ago",
  },
  // Added a few more items to demonstrate scrolling behavior
  {
    id: "3",
    company: "Adobe",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    position: "Graphic Designer",
    location: "Remote",
    tags: ["Remote", "Full-time"],
    timePosted: "1 day ago",
  },
  {
    id: "4",
    company: "Microsoft",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/335_Telegram_logo-512.png",
    position: "UX Researcher",
    location: "Redmond, USA",
    tags: ["Contract"],
    timePosted: "2 weeks ago",
  },
];

export const similarJobs: JobItemType[] = [
  {
    id: "2",
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",
    position: "Accounting",
    location: "Jakarta, Indonesia - Onsite",
    tags: ["Remote", "Contract", "Junior"],
    timePosted: "5 days ago",
  },
  {
    id: "3",
    company: "Telegram",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/335_Telegram_logo-512.png",
    position: "UI designer",
    location: "Jakarta, Indonesia",
    tags: ["Remote", "Contract", "Junior"],
    timePosted: "5 days ago",
  },
  {
    id: "4",
    company: "Autodesk",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Autodesk_%28logo%29.png",
    position: "Human Resources",
    location: "Jakarta, Indonesia - Onsite",
    tags: ["Remote", "Contract", "Junior"],
    timePosted: "5 days ago",
  },
  {
    id: "5",
    company: "Autodesk",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Autodesk_%28logo%29.png",
    position: "Human Resources",
    location: "Jakarta, Indonesia - Onsite",
    tags: ["Remote", "Contract", "Junior"],
    timePosted: "5 days ago",
  },
  {
    id: "6",
    company: "Promate",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    position: "Social Media Specialist",
    location: "Jakarta, Indonesia - Remote",
    tags: ["Remote", "Contract", "Junior"],
    timePosted: "5 days ago",
  },
];

export const jobDetailsData: JobDetailType = {
  id: "1",
  company: "Netflix",
  position: "UI designer",
  location: "Jakarta, Indonesia - Onsite",
  salary: "12,000",
  experience: "2 - 6 Years",
  jobType: "Fulltime",
  level: "Entry level",
  updatedDays: 23,
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",
  recruiter: {
    name: "Nabila Nanda",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    lastOnline: "2 days ago",
  },
  skills: [
    "UI Design",
    "Teamwork",
    "UX Design",
    "Adaptability",
    "Critical Thinking",
    "Analytical Skills",
    "Creative Design",
    "Communication Skills",
  ],
  description:
    "Netflix is seeking a talented UI Designer to join our design team. In this role, you will be responsible for crafting innovative and engaging user interfaces for our streaming platform. You will work closely with UX designers, product managers, and engineers to create a seamless and personalized user experience.",
  responsibilities: [
    "Design user interfaces that are visually appealing and easy to use",
    "Collaborate with cross-functional teams to define and implement innovative solutions for the product direction, visuals, and experience",
    "Create wireframes, storyboards, user flows, process flows, and site maps to communicate interaction and design ideas",
    "Conduct user research and evaluate user feedback to improve and iterate on design solutions",
    "Ensure designs are consistent with the Netflix brand and design system",
    "Stay up to date with the latest UI trends, techniques, and technologies",
  ],
  requirements: [
    "Proven UI design experience with a strong portfolio",
    "Proficiency in design and prototyping tools such as Figma, Sketch, Adobe XD, or similar",
    "Excellent visual design skills with a keen eye for detail",
    "Solid experience in creating wireframes, storyboards, user flows, and process flows",
    "Strong problem-solving skills and attention to detail",
    "Strong communication skills and the ability to articulate design decisions",
    "Bachelor's degree in Design, Human-Computer Interaction (HCI), or related field is preferred",
  ],
  benefits: [
    "Competitive salary and benefits package",
    "Health, dental, and vision insurance",
    "Unlimited paid time off",
    "Remote work flexibility",
    "Access to Netflix streaming service and content",
    "Professional development opportunities",
  ],
  companyInfo: {
    id: "1",
    name: "Netflix",
    industry: "Streaming, Online",
    employees: "120+ employees",
    address: "Los Gatos, California, United States",
  },
};

// Available job categories
export const categories: string[] = [
  "Design",
  "Bussines",
  "Marketing",
  "Technology",
];

// Specialization categories with icons
export const specializations = [
  { name: "Finance", icon: "stats-chart" },
  { name: "Technology", icon: "code-slash" },
  { name: "Marketing", icon: "megaphone" },
  { name: "Business", icon: "briefcase" },
  { name: "HR", icon: "people" },
];

export const user = {
  name: "Nabilla",
  location: "Indonesia",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
};

export const jobStats: JobStatus[] = [
  { status: "Applied", count: 12 },
  { status: "Reviewed", count: 8 },
  { status: "Interview", count: 3 },
];

export const experiences: ExperienceItem[] = [
  {
    id: "1",
    company: "Netflix",
    logo: "N",
    position: "UI/UX Designer",
    location: "California, US",
    period: "Dec 23 - Feb 24",
    bgColor: "#DC2626", // Hex for red-600
  },
  {
    id: "2",
    company: "Qiwi",
    logo: "Q",
    position: "Junior UX Designer",
    location: "California, US",
    period: "Aug 22 - Dec 23",
    bgColor: "#F97316", // Hex for orange-500
  },
];

export const education: EducationItem[] = [
  {
    id: "1",
    institution: "Indonesia University",
    logo: "IU",
    degree: "Computer Science",
    grade: "Bachelor (4.0)",
    period: "2016 - 2020",
    bgColor: "#FACC15", // Hex for yellow-400
  },
];

export const skills: SkillItem[] = [
  "Figma",
  "Photoshop",
  "User Interviews",
  "User Research",
  "Usability Testing",
  "Interaction Design",
];

export const languages: LanguageItem[] = ["English", "Mandarin", "Indonesia"];

export const documents: CVDocument[] = [
  {
    id: "1",
    name: "CV UI Designer Eng.pdf",
    size: "1.45 MB",
    date: "23 Apr 2024 at 11:20 am",
  },
  {
    id: "2",
    name: "Portfolio 2024.pdf",
    size: "3.2 MB",
    date: "15 Feb 2024 at 09:45 am",
  },
  {
    id: "3",
    name: "Recommendation Letter.pdf",
    size: "720 KB",
    date: "5 Mar 2024 at 2:30 pm",
  },
  {
    id: "4",
    name: "UX Case Study.pdf",
    size: "4.8 MB",
    date: "12 Jan 2024 at 5:15 pm",
  },
  {
    id: "5",
    name: "Design Certificate.pdf",
    size: "890 KB",
    date: "28 Mar 2024 at 10:10 am",
  },
];
