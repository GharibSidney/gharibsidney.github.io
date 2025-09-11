"use client";
import { Tabs } from "./tabs";
import { Projects } from "./projects"
import { Experience } from "./Experience"
import { Publications } from "./publications";
import { Awards } from "./Awards"
import {Company} from "./company"

export function TabsDemo() {
  const tabs = [
    {
      title: "Publications",
      value: "publications",
      content: (
        <div className="h-full overflow-hidden">
          <Publications />
        </div>
      ),
    },
    {
      title: "Experience",
      value: "experience",
      content: (
        <div className="h-full overflow-hidden">
          <Experience />
        </div>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <div className="h-full overflow-hidden">
          <Projects />
        </div>
      ),
    },
    {
      title: "Awards",
      value: "awards",
      content: (
        <div className="h-full overflow-hidden">
          <Awards />
        </div>
      ),
    },
    {
      title: "Company",
      value: "company",
      content: (
        <div className="h-full overflow-hidden">
          <Company />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[35rem] md:h-[40rem] [perspective:500px]">
      <Tabs tabs={tabs} />
    </div>
  );
}
