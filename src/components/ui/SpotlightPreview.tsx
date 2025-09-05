import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";
import { LinkPreview } from "@/src/components/ui/link-preview";
export function SpotlightPreview() {
  return (
    <div className="relative flex h-[15rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-60 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="md:text-3xl mb-5 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center font-bold text-transparent ">
           Sidney Gharib {/*Software Engineer  */}
        </h1>
        <span className="mb-6 text-muted-foreground fade-in-bottom">
                      I just graduated from <LinkPreview url="https://www.polymtl.ca/" className="font-bold">
                      Polytechnique Montréal</LinkPreview>  with a bachelor in Software Engineering.
                      I am a passionate software developer and researcher with expertise in full-stack development,
                      machine learning, and computer vision. I enjoy building applications
                      that solve real-world problems and contributing to the scientific community through
                      research and publications.
                    </span>
      </div>
    </div>
  );
}
