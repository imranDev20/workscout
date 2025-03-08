import { JobItemType } from "@/types/job.types";

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
