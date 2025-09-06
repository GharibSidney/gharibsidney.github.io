"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Separator } from "./Separator";
export const Publications = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Scientific Publications</CardTitle>
                <CardDescription>My contributions to research and academia</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="border-l-2 border-primary pl-4">
                        <h3 ><a href="https://www.sciencedirect.com/science/article/pii/S0736584525000110">  MuViH: Multi-View Hand gesture dataset and recognition pipeline for human–robot interaction in a collaborative robotic finishing platform </a></h3>
                        <p className="text-muted-foreground mb-2">
                            Robotics and Computer-Integrated Manufacturing • 2024
                        </p>
                        <p className="text-sm mb-2">
                            Contributed to the integration of detection and classification models, focusing on 3D hand reconstruction and finger orientation tracking in 3D environments.
                        </p>
                        <div className="flex gap-2">
                            <Badge variant="secondary">Computer Vision</Badge>
                            <Badge variant="secondary">Deep Learning </Badge>
                            {/* <Badge variant="secondary">Real-time Processing</Badge> */}
                        </div>
                    </div>
                    <Separator />

                    {/* <div className="border-l-2 border-primary pl-4">
                    <h3>Scalable Web Architecture Patterns for Modern Applications</h3>
                    <p className="text-muted-foreground mb-2">
                      IEEE Software Engineering Conference • 2023
                    </p>
                    <p className="text-sm mb-2">
                      Analysis of architectural patterns and their impact on scalability in modern web applications.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Software Architecture</Badge>
                      <Badge variant="secondary">Scalability</Badge>
                      <Badge variant="secondary">Web Development</Badge>
                    </div>
                  </div>

                  <Separator />

                  <div className="border-l-2 border-primary pl-4">
                    <h3>Security Considerations in Microservices Architecture</h3>
                    <p className="text-muted-foreground mb-2">
                      International Conference on Software Security • 2023
                    </p>
                    <p className="text-sm mb-2">
                      Comprehensive study on security challenges and solutions in microservices-based applications.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Cybersecurity</Badge>
                      <Badge variant="secondary">Microservices</Badge>
                      <Badge variant="secondary">Software Security</Badge>
                    </div>
                  </div>

                  <Separator />

                  <div className="border-l-2 border-primary pl-4">
                    <h3>Performance Optimization in Single Page Applications</h3>
                    <p className="text-muted-foreground mb-2">
                      Web Performance Workshop • 2022
                    </p>
                    <p className="text-sm mb-2">
                      Research on optimization techniques for improving performance in modern single page applications.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Web Performance</Badge>
                      <Badge variant="secondary">SPA</Badge>
                      <Badge variant="secondary">Optimization</Badge>
                    </div>
                  </div>*/}
                </div>
            </CardContent>
        </Card>
    );
};