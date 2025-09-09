"use client";
import { Tabs } from "./tabs";
import { Projects } from "./projects"
import { Experience } from "./Experience"
import { Publications } from "./publications";
import { Awards } from "./Awards"

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
          <Experience/>
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
  ];

  return (
    <div className="h-[35rem] md:h-[40rem] [perspective:500px]">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <img
      src="/linear.webp"
      alt="dummy image"
      width="500"
      height="500"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};