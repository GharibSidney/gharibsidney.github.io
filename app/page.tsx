import Image from "next/image";
import { TabsDemo } from "@/src/components/ui/TabsDemo";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Linkedin, FileText, Github, Mail, MapPin, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 fade-in-bottom">
            <Avatar className="w-48 h-48">
              {/* <AvatarImage src={profileImage} alt="Photo" /> */}
              <AvatarFallback>SG</AvatarFallback>
            </Avatar>
          </div>
         
          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-4 fade-in-bottom">Sidney Gharib - Software Engineer</h1>
            {/* <TypewriterAnimation className="fade-in-bottom"/> */}
            <p className="mb-6 text-muted-foreground fade-in-bottom">
              I just graduated from Polytechnique Montréal with a bachelor in Software Engineering.
              I am a passionate software developer and researcher with expertise in full-stack development,
              machine learning, and Computer Vision. I enjoy building applications
              that solve real-world problems and contributing to the scientific community through
              research and publications.
            </p>
            <div className="flex justify-center md:justify-start gap-4 fade-in-bottom-later">
              <Button variant="outline" size="sm" className="gap-2 bigger-hover">
                <FileText className="w-4 h-4" />
                Resume
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bigger-hover">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bigger-hover">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bigger-hover">
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </div>
          </div>
        </div>
        <TabsDemo />
      </div>
    </div>
  );
}