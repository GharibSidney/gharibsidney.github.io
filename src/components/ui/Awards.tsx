"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Separator } from "./Separator";

export const Awards = () => {
    return (
        <Card className="h-full flex flex-col max-h-70">
            <CardHeader>
                <CardTitle>Awards</CardTitle>
                <CardDescription>Research awards</CardDescription>
            </CardHeader>
            <CardContent className="h-half overflow-hidden">
                <div className="h-full overflow-y-auto pr-2 space-y-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-500">
                    <div className="border-l-2 border-primary pl-4 space-y-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <h3>Research Participation and Initiation Unit - Polytechnique Montréal</h3>
                                {/* <Badge variant="secondary">Current</Badge> */}
                            </div>
                            <p className="text-muted-foreground mb-2">Value: $1,500 - 2024-2025 </p>
                        </div>
                        <Separator />
                        <div>
                            <h3>Undergraduate Student Research Awards - CRSNG</h3>
                            <p className="text-muted-foreground mb-2">Value: $6,000 plus host institution contribution - Summer 2024</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};