"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { InstagramEmbed } from "@/src/components/ui/instagram";
import {Fabricationboisplus} from  "@/src/components/ui/fabricationboisplus"
export const Projects = () => {
  return (
    <Card className="h-full flex flex-col max-h-136">
      <CardHeader>
        <CardTitle>Featured Projects</CardTitle>
        <CardDescription>Some of my notable personal and professional project</CardDescription>
      </CardHeader>
      <CardContent className="h-full overflow-hidden">
        <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-500">
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vision Models for Residual Waste</CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">PyTorch</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Deep Learning</Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* <p className="text-base text-muted-foreground mb-4">
                  Developed and trained vision models to detect and quantify waste from recycle bin to containers.
                </p> */}
                <InstagramEmbed></InstagramEmbed>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Website for Biodegradable Urns</CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">HTML/CSS</Badge>
                  <a href="https://www.fabricationboisplus.com/">
                    <Badge variant="destructive">Website</Badge>
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                {/* <p className="text-base text-muted-foreground">
                  A comprehensive platform for creating interactive data visualizations with real-time analytics and collaborative features.
                </p> */}
                <Fabricationboisplus></Fabricationboisplus>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">LoanneAI</CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Prompt Engineering</Badge>
                  <Badge variant="outline">LLMs</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="destructive">TBA</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Google Chrome extension to enhance email writing productivity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">My Website</CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <a href="https://github.com/GharibSidney/website-sidney2.0"><Badge variant="destructive">GitHub</Badge></a>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  You like my Website? Feel free to copy it! The repo&#39;s link is available on the red button.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};