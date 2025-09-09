"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";


const content = [
    {
        title: "RGB-D Cameras",
        description:
            "In my research, I had the opportunity to work with Intel RealSense RGB-D cameras, which allowed me to explore 3D depth perception capabilities. These cameras feature dual sensors that enable distance measurement for each pixel, effectively adding depth information to create three-dimensional images.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                <img
                    src="/publications_images/MuViH/rgb_d_view.png" width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="rgbd-view image"
                />
            </div>
        ),
    },
    {
        title: "Calibration",
        description:
            "Following the limitations discovered with RGB-D depth sensing, I transitioned to a stereo camera approach as recommended by my supervisor. This method doesn't rely on the built-in depth sensor of the RealSense RGB-D cameras but instead uses a combination of two cameras to create the 3D effect through stereoscopic vision. I calibrated the stereo system using two RGB-D cameras (though without utilizing their depth sensing capabilities) by determining the rotation and translation matrices needed to transform coordinates from the primary camera to the secondary camera",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/publications_images/MuViH/big_calibration.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="calibration image"
                />
            </div>
        ),
    },
    {
        title: "Finger detection",
        description:
            "Once the cameras were properly calibrated, I utilized Google's MediaPipe library to detect my index finger within the video stream. MediaPipe provides robust hand landmark detection, identifying 21 key points on each detected hand, including three specific points on the index finger that were crucial for my application. The system works by identifying these key points on both camera feeds simultaneously. ",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
                <img
                    src="/publications_images/MuViH/pointing_1.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Finger direction in 3D space",
        description:
            "After detecting the index finger keypoints in both camera feeds, I implemented a program to reconstruct 2D points into 3D space using stereo calibration data. This process was applied to all three index finger points detected by MediaPipe.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                <img
                    src="/publications_images/MuViH/graph_pointing_1.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />            </div>
        ),
    },
    {
        title: "Real life application",
        description:
        "The complete system was ultimately tested in a collaborative robotics (cobotics) room designed to facilitate construction tasks for operators. The project represents a significant step toward improving factory productivity through AI-powered gesture recognition",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                <img
                    src="/publications_images/MuViH/rgb_d_camera.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />            </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
        <div className="w-full py-4">
            <StickyScroll content={content} />
        </div>
    );
}
