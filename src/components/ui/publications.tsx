"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Separator } from "./Separator";
import { StickyScrollRevealDemo } from "./StickyScrollRevealDemo"
export const Publications = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Scientific Publications</CardTitle>
        <CardDescription>My contributions to research and academia</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4 ">
          <div className="border-l-2 border-primary pl-4">
            <h3 ><a href="https://www.sciencedirect.com/science/article/pii/S0736584525000110">  MuViH: Multi-View Hand gesture dataset and recognition pipeline for human–robot interaction in a collaborative robotic finishing platform </a></h3>
            <p className="text-muted-foreground mb-2">
              Robotics and Computer-Integrated Manufacturing • 2024
            </p>
            <div className="flex gap-2">
              <Badge variant="outline">Computer Vision</Badge>
              <Badge variant="outline">Deep Learning </Badge>
              <a href="https://www.sciencedirect.com/science/article/pii/S0736584525000110"><Badge variant="destructive">Paper</Badge></a>
            </div>
            <StickyScrollRevealDemo />
          </div>
          <Separator />
        </div>
      </CardContent>
    </Card>
  );
};