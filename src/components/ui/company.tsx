"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";

export const Company = () => {
    return (
        <Card className="h-full flex flex-col max-h-90">
            <CardHeader>
                <CardTitle>Walphyre - Software Company</CardTitle>
                <CardDescription>Walphyre is a software company cofounded by me and my brother Jason Gharib</CardDescription>
            </CardHeader>
            <CardContent className="h-full overflow-hidden">
                <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-500">
                    <div className="grid md:grid-cols-2 gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">PharmaGPT</CardTitle>
                                <div className="flex gap-2 flex-wrap">
                                    <Badge variant="outline">React</Badge>
                                    <Badge variant="outline">LLMs</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-base text-muted-foreground">
                                    PharmaGPT is software designed to assist technicians by answering a wide variability of questions related to their daily work at the pharmacy
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg"> New project coming soon</CardTitle>
                                <div className="flex gap-2 flex-wrap">
                                    <Badge variant="outline">React</Badge>
                                    <Badge variant="outline">TypeScript</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-base text-muted-foreground">
                                    New project coming soon
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};