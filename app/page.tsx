"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { FaLaptopCode, FaPaintBrush, FaSearch, FaMobileAlt, FaCss3Alt, FaChartLine } 
from 'react-icons/fa';

const Home = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Resume Builder',
      description: 'An interactive, user-friendly resume builder with inline editing, real-time preview, and customizable designs.',
      link: 'https://hackathon-milestone-5-1830wiyu6-waleed0248s-projects.vercel.app'
    },
    {
      id: 2,
      title: 'Countdown Timer App',
      description: 'A sleek, fully functional countdown timer built with Next.js, offering real-time updates and customizable time settings.',
      link: 'https://countdown-timer-aqslz8nv9-waleed0248s-projects.vercel.app'
    },
    {
      id: 3,
      title: 'Weather Widget App',
      description: 'A dynamic weather widget built with Next.js, displaying real-time weather data using API integration.',
      link: 'https://weather-widgit-app-9yhc-jce62ih8z-waleed0248s-projects.vercel.app'
    },
    {
      id: 4,
      title: 'Birthday Wish App',
      description: 'A birthday wish app built with Next.js, featuring candles, balloons, and a lively celebration.',
      link: 'https://birthday-wish-3fp2jq3s5-waleed0248s-projects.vercel.app'
    },
    {
      id: 5,
      title: 'Class Assignment 1',
      description: 'This Assignment organizes and manages Next.js pages.',
      link: 'https://class-assignments-o8ptdgvei-waleed0248s-projects.vercel.app' 
    },
    {
      id: 6,
      title: 'Class Assignment 2',
      description: 'This Assignment class focuses on developing components with proper styling using CSS.',
      link: 'https://class-assignments2-mvkkdudb3-waleed0248s-projects.vercel.app' 
    },
    {
      id: 7,
      title: 'Class Assignment 3',
      description: 'This Assignment organizes various components while utilizing Tailwind CSS for responsive design.',
    },
  ];

  const skillsData = [
    { name: 'HTML', level: 'Expert' },
    { name: 'CSS', level: 'Expert' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Next.js', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Python (AI & Gen AI)', level: 'Beginner' },
    { name: 'Bootstrap', level: 'Beginner' },
  ];

  const servicesData = [
    {
      title: 'Web Development',
      description: 'Building responsive, fast-loading, and interactive websites.',
      icon: <FaLaptopCode />,
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and aesthetically pleasing user interfaces.',
      icon: <FaPaintBrush />,
    },
    {
      title: 'SEO Optimization',
      description: 'Improving website visibility with strategic SEO practices.',
      icon: <FaSearch />,
    },
    {
      title: 'Responsive Web Design',
      description: 'Creating responsive websites that look great on any device ensuring the best user experience.',
      icon: <FaMobileAlt />,
    },
    {
      title: 'Tailwind CSS Integration',
      description: 'Utilizing Tailwind CSS for clean, modern, and responsive designs with minimal code.',
      icon: <FaCss3Alt />,
    },
    {
      title: 'SEO Friendly Websites',
      description: 'Developing websites with SEO best practices to help your site rank higher in search engine results.',
      icon: <FaChartLine />,
    },
  ];
  
  return (
    <div>
      <Header />
      <Hero />

      <main className="bg-gray-100 text-gray-900">

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-800 text-center">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl font-semibold mb-8 text-cyan-400">
              About Me
            </h2>
            <p className="max-w-4xl mx-auto text-lg text-white mb-6 leading-relaxed">
              Hi, I’m <span className="text-2xl font-bold text-cyan-500">
                Waleed Khan
              </span>, a dedicated frontend developer with a strong foundation in 
              modern web technologies. My expertise includes creating visually appealing 
              and highly functional user interfaces, combining technical skills with creativity
              to deliver exceptional digital experiences.
            </p>

            <p className="max-w-4xl mx-auto text-lg text-white mb-6 leading-relaxed">
              I have experience with HTML, CSS, JavaScript, and TypeScript, and I’m proficient in
              frameworks like React and Next.js. My journey into web development has been fueled
              by a passion for learning and adapting to the latest advancements in frontend
              development, allowing me to build websites and applications that are not only
              visually striking but also optimized for performance.
            </p>

            <p className="max-w-4xl mx-auto text-lg text-white leading-relaxed">
              I’m constantly advancing my skills, currently focused on mastering Next.js and 
              deepening my understanding of responsive design principles, accessibility standards, 
              and performance optimization. My goal is to contribute meaningfully to the tech 
              community by building applications that are user-centric and engaging.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-900 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-semibold mb-4 text-cyan-500">
              Skills
            </h2>
            <p className="mb-8 text-white">
              A summary of my technical expertise and proficiency level in each skill.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg shadow-md hover:shadow-lg transition transform
                   hover:scale-105 cursor-pointer bg-gray-800 text-white"
                >
                  <h3 className="text-2xl font-bold text-cyan-500 mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-400">Proficiency: {skill.level}</p>
                  <div className="bg-gray-600 h-2 rounded-full mt-3 overflow-hidden">
                    <div
                      className={`h-full ${
                        skill.level === 'Expert' ? 'bg-green-500 w-full' :
                        skill.level === 'Advanced' ? 'bg-yellow-500 w-3/4' :
                        'bg-red-500 w-1/2'
                      }`}
                      aria-live="polite"
                      aria-label={`${skill.name} proficiency`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-800 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-semibold mb-4 text-cyan-500">
              My Services
            </h2>
            <p className="mb-8 text-white">
              Here are the services I offer:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg shadow-md hover:shadow-lg transition transform
                   hover:scale-105 cursor-pointer bg-cyan-500 text-black"
                >
                  <div className="text-4xl mb-3">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-black">
                    {service.title}
                  </h3>
                  <p className="text-black">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-900 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-semibold mb-4 text-cyan-500">
              My Projects
            </h2>
            <p className="mb-8 text-white">
              Explore some of my recent work below:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="p-6 rounded-lg shadow-md hover:shadow-lg transition transform 
                  hover:scale-105 cursor-pointer bg-gray-800 text-white"
                >
                  <h3 className="text-2xl font-semibold mb-2 text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="mb-3 text-white">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 underline"
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-800 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-semibold mb-4 text-cyan-500">
              Contact Me
            </h2>
            <p className="mb-8 text-white">
              Feel free to reach out to me with any inquiries or project requests.
            </p>

            <form
              className="bg-gray-800 p-6 rounded-lg shadow-md mx-auto max-w-xl"
              method="POST"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-cyan-500 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 text-black rounded-md focus:outline-none focus:ring-2
                   focus:ring-cyan-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-cyan-500 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 text-black rounded-md focus:outline-none focus:ring-2
                   focus:ring-cyan-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-cyan-500 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows= {4}
                  className="w-full p-3 text-black rounded-md focus:outline-none focus:ring-2
                   focus:ring-cyan-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 text-white bg-cyan-500 rounded-md hover:bg-cyan-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;
