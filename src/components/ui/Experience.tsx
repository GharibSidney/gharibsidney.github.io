"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Separator } from "./Separator";
export const Experience = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Work Experience</CardTitle>
                <CardDescription>My professional journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="border-l-2 border-primary pl-4 space-y-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <h3>Senior Software Engineer</h3>
                            <Badge variant="secondary">Current</Badge>
                        </div>
                        <p className="text-muted-foreground mb-2">TechCorp Inc. • 2022 - Present</p>
                        <p className="text-sm">Leading development of cloud-native applications using React, Node.js, and AWS. Mentoring junior developers and architecting scalable solutions.</p>
                        <div className="flex gap-2 flex-wrap mt-2">
                            <Badge variant="outline" className="text-xs">React</Badge>
                            <Badge variant="outline" className="text-xs">Node.js</Badge>
                            <Badge variant="outline" className="text-xs">AWS</Badge>
                            <Badge variant="outline" className="text-xs">Team Leadership</Badge>
                        </div>
                    </div>

                    <Separator />

                    <div>
                        <h3>Full Stack Developer</h3>
                        <p className="text-muted-foreground mb-2">StartupXYZ • 2020 - 2022</p>
                        <p className="text-sm">Built and maintained web applications from concept to deployment. Worked with modern JavaScript frameworks and microservices architecture.</p>
                        <div className="flex gap-2 flex-wrap mt-2">
                            <Badge variant="outline" className="text-xs">JavaScript</Badge>
                            <Badge variant="outline" className="text-xs">Vue.js</Badge>
                            <Badge variant="outline" className="text-xs">Microservices</Badge>
                            <Badge variant="outline" className="text-xs">Docker</Badge>
                        </div>
                    </div>

                    <Separator />

                    <div>
                        <h3>Software Developer</h3>
                        <p className="text-muted-foreground mb-2">CodeWorks • 2018 - 2020</p>
                        <p className="text-sm">Developed responsive web applications and RESTful APIs. Collaborated with design teams to implement pixel-perfect user interfaces.</p>
                        <div className="flex gap-2 flex-wrap mt-2">
                            <Badge variant="outline" className="text-xs">HTML/CSS</Badge>
                            <Badge variant="outline" className="text-xs">JavaScript</Badge>
                            <Badge variant="outline" className="text-xs">Python</Badge>
                            <Badge variant="outline" className="text-xs">REST APIs</Badge>
                        </div>
                    </div>

                    <Separator />

                    <div>
                        <h3>Junior Developer</h3>
                        <p className="text-muted-foreground mb-2">WebTech Solutions • 2017 - 2018</p>
                        <p className="text-sm">Entry-level position focused on front-end development and learning industry best practices. Contributed to various client projects and internal tools.</p>
                        <div className="flex gap-2 flex-wrap mt-2">
                            <Badge variant="outline" className="text-xs">HTML/CSS</Badge>
                            <Badge variant="outline" className="text-xs">jQuery</Badge>
                            <Badge variant="outline" className="text-xs">Bootstrap</Badge>
                            <Badge variant="outline" className="text-xs">Git</Badge>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};