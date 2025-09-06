"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Separator } from "./Separator";

export const Experience = () => {
    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>Work Experience</CardTitle>
                <CardDescription>My professional journey</CardDescription>
            </CardHeader>
            <CardContent className="h-half overflow-hidden">
                <div className="h-full overflow-y-auto pr-2 space-y-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-500">
                    <div className="border-l-2 border-primary pl-4 space-y-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <h3>Software Developer Intern</h3>
                                {/* <Badge variant="secondary">Current</Badge> */}
                            </div>
                            <p className="text-muted-foreground mb-2">Teledyne DALSA • Summer 2025 </p>
                            <p className="text-sm">Designed deep learning models for computer vision applications that improved the accuracy and efficiency of optical character recognition (OCR) algorithms.</p>
                            <div className="flex gap-2 flex-wrap mt-2">
                                <Badge variant="outline" className="text-xs">Pytorch</Badge>
                                <Badge variant="outline" className="text-xs">C++</Badge>
                                <Badge variant="outline" className="text-xs">Literature review</Badge>
                            </div>
                        </div>
                        <Separator />
                        
                        <div>
                            <h3>Research Intern</h3>
                            <p className="text-muted-foreground mb-2">Polytechnique Montréal LITIV LAB • September 2024 – May 2025</p>
                            <p className="text-sm">Evaluated LLM by testing its generalization abilities on novel image datasets that differ from the training data.</p>
                            <div className="flex gap-2 flex-wrap mt-2">
                                <Badge variant="outline" className="text-xs">Python</Badge>
                                <Badge variant="outline" className="text-xs">Vision LLM</Badge>
                            </div>
                        </div>
                        <Separator />
                        
                        <div>
                            <h3>Research Intern</h3>
                            <p className="text-muted-foreground mb-2">Polytechnique Montréal VISIONIC LAB • April 2024 – August 2024</p>
                            <p className="text-sm">Developed a 3D reconstruction system using stereo camera and Intel RealSense technologies, and programmed finger index direction detection algorithms using Mediapipe and OpenCV</p>
                            <div className="flex gap-2 flex-wrap mt-2">
                                <Badge variant="outline" className="text-xs">OpenCV</Badge>
                                <Badge variant="outline" className="text-xs">Python</Badge>
                            </div>
                        </div>
                        <Separator />
                        
                        <div>
                            <h3>Software Quality Assurance Intern</h3>
                            <p className="text-muted-foreground mb-2">COVEO • May 2023 – August 2023</p>
                            <p className="text-sm">Developed over 20 End-to-End tests in TypeScript to increase test coverage by 40%.</p>
                            <div className="flex gap-2 flex-wrap mt-2">
                                <Badge variant="outline" className="text-xs">TypeScript</Badge>
                                <Badge variant="outline" className="text-xs">JavaScript</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};