import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import SectionTitle from "../components/ui/SectionTitle";
import ProjectList from "../components/projects/ProjectList";
import { PROJECTS } from "../data/projects";
import { SKILLS } from "../data/skills";
import Button from "../components/ui/Button";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Your Name - Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio showcasing projects and skills"
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <Image
            src="/images/profile.jpg"
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-full shadow-lg object-cover"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Hi, I'm [Your Name]
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Web Developer | Full Stack Engineer | Tech Enthusiast
          </p>
          <p className="text-gray-700 mb-8">
            I create responsive and innovative web solutions, specializing in
            modern web technologies like React, Next.js, and TypeScript.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <Button
              onClick={() => window.open("/documents/resume.pdf", "_blank")}
            >
              Download CV
            </Button>
            <Link href="/contact">
              <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="My Skills"
            subtitle="Technologies and tools I work with"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <div className="mt-2 bg-gray-300 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <SectionTitle
          title="Recent Projects"
          subtitle="A selection of my recent work"
        />

        <ProjectList projects={PROJECTS} />

        <div className="text-center mt-10">
          <Link href="/projects">
            <Button>View All Projects</Button>
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-xl mb-8">
            I'm always open to discussing new projects, opportunities, or
            collaborations.
          </p>

          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
