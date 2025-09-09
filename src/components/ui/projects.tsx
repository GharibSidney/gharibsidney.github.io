"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";

export const Projects = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Featured Projects</CardTitle>
        <CardDescription>Some of my notable personal and professional project</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vision Models for Residual Waste</CardTitle>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">Computer Vision</Badge>
                <Badge variant="outline">Deep Learning</Badge>
                <a href="https://www.linkedin.com/posts/palais-des-congres-de-montreal_palaismontraezal-ia-aiproject-activity-7361014861155160064-xJlP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkuZokBAndaRMfyPe_mf1NNwEOkDJGAFNU">
                  <Badge variant="destructive">LinkedIn Post</Badge>
                </a>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Developed and trained vision models to detect and quantify waste from recycle bin to containers.
              </p>
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
              <p className="text-sm text-muted-foreground">
                A comprehensive platform for creating interactive data visualizations with real-time analytics and collaborative features.
              </p>
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
              <p className="text-sm text-muted-foreground">
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
                <a href="#"><Badge variant="destructive">GitHub</Badge></a>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You like my Website? Feel free to copy it! The repo's link is available on the red button.
              </p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};