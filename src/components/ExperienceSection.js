import React, { useState, useEffect } from "react";
import Link from "next/link";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [currentPerson, setCurrentPerson] = useState(0); 
  const [fade, setFade] = useState(true);

  const persons = [
    {
      name: "Sahil Doe",
      experience:
        "Sahil has extensive experience in software development, having worked on various projects across multiple industries.",
      education:
        "Sahil holds a degree in Computer Science and has completed various certifications in software development and project management.",
      achievements: [
        "Developed a highly scalable e-commerce platform.",
        "Implemented an enterprise-level security solution.",
        "Led a team to achieve 99.99% system uptime.",
      ],
      milestones: [
        "Achieved a significant milestone in the cybersecurity field.",
        "Received recognition for innovative software solutions.",
        "Implemented industry-leading practices in security.",
      ],
      image: "https://images.pexels.com/photos/676547/pexels-photo-676547.jpeg", 
    },
    {
      name: "Sameer Smith",
      experience:
        "Sameer has a strong background in cybersecurity, specializing in threat analysis and incident response.",
      education:
        "Sameer has a degree in Information Security and has earned multiple certifications in cybersecurity.",
      achievements: [
        "Successfully mitigated a major cyber attack.",
        "Developed advanced threat detection systems.",
        "Authored influential research papers on cybersecurity.",
      ],
      milestones: [
        "Achieved a major breakthrough in threat analysis.",
        "Received accolades for innovative security solutions.",
        "Contributed to critical cybersecurity standards and frameworks.",
      ],
      image: "https://images.pexels.com/photos/764075/pexels-photo-764075.jpeg", 
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentPerson((prevPerson) => (prevPerson === 0 ? 1 : 0));
        setFade(true);
      }, 300);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Image Side */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-end">
          <div
            className={`transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={persons[currentPerson].image}
              alt={persons[currentPerson].name}
              className="w-full h-auto object-cover rounded-lg shadow-xl"
              style={{
                maxWidth: "100%",
                maxHeight: "500px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2 lg:pl-8">
          {/* Tabs */}
          <div className="flex border-b border-gray-700 mb-6">
            <button
              onClick={() => handleTabChange("achievements")}
              className={`flex-1 py-2 text-center font-semibold ${
                activeTab === "achievements"
                  ? "bg-ten text-white"
                  : "bg-sixty text-gray-300"
              } rounded-t-md`}
            >
              Achievements
            </button>
            <button
              onClick={() => handleTabChange("milestones")}
              className={`flex-1 py-2 text-center font-semibold ${
                activeTab === "milestones"
                  ? "bg-ten text-white"
                  : "bg-sixty text-gray-300"
              } rounded-t-md`}
            >
              Milestones
            </button>
          </div>

          {/* Tab Content */}
          <div
            className={`bg-sixty p-6 rounded-lg shadow-lg transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-white">
              {persons[currentPerson].name}
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              {activeTab === "experience"
                ? persons[currentPerson].experience
                : activeTab === "education"
                ? persons[currentPerson].education
                : activeTab === "achievements"
                ? persons[currentPerson].achievements.map((item, index) => (
                    <div key={index} className={`relative pl-8 mb-4`}>
                      <div className="absolute left-0 top-0 w-2 h-2 bg-ten rounded-full"></div>
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))
                : activeTab === "milestones"
                ? persons[currentPerson].milestones.map((item, index) => (
                    <div key={index} className={`relative pl-8 mb-4`}>
                      <div className="absolute left-0 top-0 w-2 h-2 bg-ten rounded-full"></div>
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))
                : ""}
            </p>
            <Link href="/more-details" passHref>
              <span className="mt-4 inline-block bg-ten text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-500 cursor-pointer">
                Learn More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
