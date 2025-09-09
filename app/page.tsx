import { TabsDemo } from "@/src/components/ui/TabsDemo";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { LinkPreview } from "@/src/components/ui/link-preview";
import { FloatingDockDemo } from "@/src/components/ui/FloatingDockDemo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground dark background-container">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-2 fade-in-bottom">
          {/* Profile Image */}
          <div className="flex-shrink-0 fade-in-bottom">
            <Avatar className="w-48 h-48 mb-2">
              <AvatarImage src={"/moi.jpg"} alt="Photo" />
              <AvatarFallback>SG</AvatarFallback>
            </Avatar>
            <FloatingDockDemo></FloatingDockDemo>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            {/* <SpotlightPreview></SpotlightPreview> */}
            <h1 className="mb-4 md:text-3xl text-gray-200 mb-5 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center font-bold">Sidney Gharib - Software Engineer</h1>
            <span className="mb-6 text-muted-foreground">
              I just graduated from <LinkPreview url="https://www.polymtl.ca/" className="font-bold">
              Polytechnique Montréal</LinkPreview>  with a bachelor in Software Engineering.
              I am a passionate software developer and researcher with expertise in full-stack development,
              machine learning, and computer vision. I enjoy building applications
              that solve real-world problems and contributing to the scientific community through
              research and publications.
            </span>
          </div>
        </div>
        <TabsDemo />
      </div>
    </div>
  );
}