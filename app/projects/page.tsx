import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const projects = [
  {
    name: "Alien invasion short film",
    description: "Made a short film showcasing a true alien invasion",
    period: "Spring 2024",
    videoUrl: "https://www.youtube.com/embed/pS3sT_5OK6g" // Replace YOUR_VIDEO_ID with the actual YouTube video ID
  }
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Projects & Portfolio</title>
        <style>{`body { margin: 0; padding: 0; background-color: white; }`}</style>
      </Head>
      <nav className="bg-white p-4 shadow-md flex justify-center space-x-4">
        <Link href="/" className="text-black hover:text-blue-500">Home</Link>
        <Link href="/projects" className="text-black hover:text-blue-500">Projects</Link>
        <Link href="/Items" className="text-black hover:text-blue-500">Items for Sale</Link>
      </nav>
      <div className="text-center mt-0">
        <h1 className="text-4xl font-bold text-black">Projects</h1>
        <p className="text-lg text-black">I love creating new skills through project development. Let me know if you're interested in collaborating.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-8">
        {projects.map((project, index) => (
          <div key={index} className="w-full flex justify-between items-start p-8">
            <div className="w-1/2">
              <h2 className="text-xl font-bold">{project.name}</h2>
              <p>{project.description}</p>
            </div>
            <div className="w-1/2">
              <iframe
                width="100%"
                height="315"
                src={project.videoUrl}
                title={project.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ maxWidth: '500px' }}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
