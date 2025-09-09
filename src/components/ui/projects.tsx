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
                <Badge variant="outline">SQL</Badge>
                <Badge variant="outline">PowerBI</Badge>
                <a href="https://www.linkedin.com/posts/palais-des-congres-de-montreal_palaismontraezal-ia-aiproject-activity-7361014861155160064-xJlP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkuZokBAndaRMfyPe_mf1NNwEOkDJGAFNU">
                  <Badge variant="destructive">LinkedIn Post</Badge>
                </a>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Developed and trained vision models to detect and quantify waste from recycle bin to containers
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