"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";

export const Projects = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Featured Projects</CardTitle>
        <CardDescription>Some of my notable personal and professional work</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">AI Task Manager</CardTitle>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">OpenAI API</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                An intelligent task management application that uses AI to categorize, prioritize, and suggest optimal scheduling for tasks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Data Visualization Platform</CardTitle>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">Vue.js</Badge>
                <Badge variant="outline">D3.js</Badge>
                <Badge variant="outline">Python</Badge>
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
              <CardTitle className="text-lg">Mobile E-commerce App</CardTitle>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">Redux</Badge>
                <Badge variant="outline">Stripe</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cross-platform mobile application with secure payment processing, inventory management, and push notifications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">IoT Monitoring System</CardTitle>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">MQTT</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Real-time monitoring system for IoT devices with automated alerts, data logging, and predictive maintenance features.
              </p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};