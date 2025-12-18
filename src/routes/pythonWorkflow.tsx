import React from 'react';
import {
  ArrowUpRight,
  Check,
  Monitor,
  ShoppingCart,
  Heart,
  Smartphone,
  FileText,
  Target,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer as FooterSimple } from '../components/layout/footer';
import FAQAccordionSection from '../components/common/faqSection'
import Testimonials from '../components/common/testimonalsSection'
// Assuming this path is correct for your image
import uiuxWorkflowBannerImg from '../images/UiUx-banner.png';
import uiuxWorkflow2ndImg from '../images/ui-2nd.png';
import uiuxWorkflow3rdImg from '../images/uiux-03.png';
import uiuxWorkflow4thImg from '../images/uiux-04.png';
import wireframe01 from '../images/uiux-05.png';
import wireframe02 from '../images/uiux-06.png';
import uiuxWorkflow05 from '../images/uiux-07.png';
import uiuxWorkflow06 from '../images/uiux-08.png';
import uiuxWorkflow07 from '../images/uiux-09.png';
import uiuxWorkflow08 from '../images/uiux-10.png';
import uiuxWorkflow09 from '../images/uiux-11.png';
import project01 from '../images/uiux-project-01.png';
import project02 from '../images/uiux-project-02.png';
import project03 from '../images/uiux-project-03.png';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';


import { motion } from "framer-motion";

export default function PythonWorkflow() {
  const navigate = useNavigate();
  // Reusable row component
  const Row = ({ direction = "left" }) => {
    return (
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }} // ⚡ faster (was 15s, now 12s)
      >
        
        <div className="flex items-center gap-14">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900" // 📈 larger than before
            >
              Let's Build Something Amazing.
            </div>
          ))}
        </div>
      </motion.div>

    );
  };

  // Services data for the python services section
  const pythonServices = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Build robust web applications using Python frameworks like Django and Flask. We create scalable backends, RESTful APIs, and full-stack solutions that power modern digital experiences.",
      color: "bg-lime-400"
    },
    {
      icon: ShoppingCart,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights with Python's powerful libraries like Pandas, NumPy, and Matplotlib. We help you analyze trends, visualize data, and make data-driven decisions.",
      color: "bg-lime-400"
    },
    {
      icon: Heart,
      title: "Machine Learning",
      description: "Leverage Python's ML ecosystem including scikit-learn, TensorFlow, and PyTorch to build intelligent applications. From predictive models to recommendation systems, we bring AI to your projects.",
      color: "bg-lime-400"
    },
    {
      icon: Smartphone,
      title: "Automation",
      description: "Streamline workflows with Python scripting and automation. We create custom tools, web scrapers, and automated processes that save time and reduce manual effort across your operations.",
      color: "bg-lime-400"
    },
    {
      icon: FileText,
      title: "API Development",
      description: "Design and implement powerful APIs using Python. We build secure, well-documented endpoints that integrate seamlessly with frontend applications and third-party services.",
      color: "bg-lime-400"
    },
    {
      icon: Target,
      title: "DevOps & Deployment",
      description: "Ensure smooth deployment and maintenance of Python applications. We handle containerization, CI/CD pipelines, cloud deployment, and monitoring to keep your applications running reliably.",
      color: "bg-lime-400"
    }
  ];

   // Sample projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Analytics Dashboard",
      subtitle: "Data-Driven Insights for Online Retail Success",
      year: "2025",
      author: "TechCorp Solutions",
      imageUrl: project01  // No curly braces
    },
    {
      id: 2,
      title: "AI-Powered Recommendation Engine",
      subtitle: "Personalized User Experiences at Scale",
      year: "2025",
      author: "InnovateAI Labs",
      imageUrl: project02  // No curly braces
    },
    {
      id: 3,
      title: "Automated Financial Reporting System",
      subtitle: "Streamlining Compliance and Analysis",
      year: "2025",
      author: "FinanceFlow Inc",
      imageUrl: project03  // No curly braces; fixed variable name
    },
     {
      id: 4,
      title: "Smart Inventory Management",
      subtitle: "IoT-Enabled Warehouse Optimization",
      year: "2025",
      author: "LogiTech Systems",
      imageUrl: project02  // No curly braces
    },
    {
      id: 5,
      title: "Healthcare Data Pipeline",
      subtitle: "Secure Patient Data Processing Platform",
      year: "2025",
      author: "MediData Solutions",
      imageUrl: project01  // No curly braces; fixed variable name
    },
    // Add more projects as needed
  ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

  // new: refs + measured step width for scroll snapping behaviour
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const firstCardRef = React.useRef<HTMLDivElement | null>(null);
  const [stepWidth, setStepWidth] = React.useState(0);

  React.useEffect(() => {
    const measure = () => {
      const card = firstCardRef.current;
      if (!card || !scrollRef.current) return;
      const style = window.getComputedStyle(card);
      const marginRight = parseFloat(style.marginRight || "0");
      setStepWidth(Math.round(card.offsetWidth + marginRight));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // replace previous prevSlide/nextSlide implementations with scroll logic
  const nextSlide = () => {
    if (!scrollRef.current || stepWidth === 0) return;
    const sc = scrollRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = sc;
    let newLeft = scrollLeft + stepWidth;
    // wrap to start when reaching the end
    if (newLeft > scrollWidth - clientWidth + 5) newLeft = 0;
    sc.scrollTo({ left: newLeft, behavior: "smooth" });
    setCurrentIndex(Math.round(newLeft / stepWidth) % projects.length);
  };

  const prevSlide = () => {
    if (!scrollRef.current || stepWidth === 0) return;
    const sc = scrollRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = sc;
    let newLeft = scrollLeft - stepWidth;
    // wrap to end when going before start
    if (newLeft < 0) newLeft = Math.max(0, scrollWidth - clientWidth);
    sc.scrollTo({ left: newLeft, behavior: "smooth" });
    setCurrentIndex(Math.round(newLeft / stepWidth) % projects.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Main Content Container */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* 1. Header Section */}
            <div className="px-8 pt-8 pb-4">
              <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                Python Development Workflow
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content: Title */}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                    A Python Development Studio In Manchester
                  </h1>
                </div>

                {/* Right Content: Short Description */}
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    We believe great software goes beyond code—it's about creating efficient, scalable solutions. By combining Python's versatility with strategic thinking, we ensure every project not only functions flawlessly but also delivers measurable business value.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Description and Hero Image Section */}
            <div className="px-8 pb-8">

              {/* Long Description */}
              <div className="mb-12">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {/* Increased text size for better reading flow */}
                  Our Manchester-based Python development studio is committed to transforming ideas into powerful software solutions. We begin every project by understanding your technical requirements, business objectives, and scalability needs. From planning and architecture to coding, testing, and deployment, our process is designed to create robust, maintainable applications. Each solution is carefully built to provide optimal performance, security, and reliability across all environments. By blending Python's ecosystem with best practices, we deliver solutions that are not only functional but also future-proof and results-driven.
                </p>
              </div>

              {/* Hero Image & Button Container FIX */}
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">

                <div className='absolute top-0 left-0 w-44 h-16 bg-white z-10  rounded-br-3xl'>

                </div>

                {/* Button placed on top of the image (Adjusted positioning) */}
                <button
                  className="inline-flex items-center gap-2 bg-lime-300 hover:bg-lime-400 transition-colors px-6 py-3 rounded-full font-medium text-gray-900 group absolute top-0  z-10"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>


                {/* Image */}
                <img
                  src={uiuxWorkflowBannerImg}
                  alt="Python Developer working at desk with multiple monitors"
                  // Added 'block' to the image to ensure it behaves correctly
                  className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-110 block"
                // Reduced hover scale for a more controlled effect (from 125 to 110)
                />
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder for future sections like workflow steps, etc. */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>
                  <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                    Requirement Analysis
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Understand Project Goals & Technical Requirements
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Effective requirement analysis is the foundation of any successful Python project. It involves in-depth discussions with stakeholders to identify technical specifications, performance needs, and integration requirements. This phase ensures that the final solution aligns with your vision and delivers tangible value to your users.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Conduct stakeholder interviews to identify key objectives
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Define technical specifications and performance requirements
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Document functional and non-functional requirements
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Establish measurable success criteria and project KPIs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Image with Animation */}
                <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
                  <div className="aspect-[4/3] relative">
                    {/* First (default) image */}
                    <div className="absolute inset-0">
                      <img
                        src={uiuxWorkflow2ndImg}
                        alt="Team meeting discussing project goals"
                        className="w-full h-full object-fit rounded-2xl transition-opacity duration-0 group-hover:opacity-0 group-hover:delay-0 delay-700"
                      />
                    </div>

                    {/* Second (hover) image */}
                    <div className="absolute inset-0 transform -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                      <img
                        src={uiuxWorkflow2ndImg}
                        alt="Team meeting discussing project goals"
                        className="w-full h-full object-fit rounded-2xl"
                      />
                    </div>
                    {/* Corner box - now properly clipped with the container */}
                    <div className="absolute bottom-0 right-0 w-[110px] h-[55px] bg-white rounded-tl-xl">
                    </div>
                    <div className="absolute bottom-0 right-0 h-10 w-24 bg-violet-600 rounded-lg py-6 px-10 shadow-lg z-10">
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        {/* Scrolling Text Rows */}
        <div className="py-16 bg-white overflow-hidden">
          {/* First row (left scroll) */}
          <Row direction="left" />

          {/* Second row (right scroll) */}
          <Row direction="right" />
        </div>


        {/* Research & Planning Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Illustration */}
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden ">
                    {/* Main Background Image */}
                    <img
                      src={uiuxWorkflow3rdImg}
                      alt="Research and Planning Illustration"
                      className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />
                    <div className="absolute bottom-0 right-0 w-[105px] h-[60px] bg-white rounded-tl-xl">
                    </div>

                  </div>
                  {/* Corner box - now properly clipped with the container */}
                  <div className="absolute bottom-0 right-0 h-12 w-24 bg-lime-400 rounded-lg p-4 shadow-lg z-10">
                  </div>
                </div>

                {/* Right Content */}
                <div>
                  <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                    Research & Planning
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Technology Stack, Architecture, And Best Practices
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Through research and planning are critical for making informed technical decisions. This phase involves a deep dive into the technology landscape to understand framework capabilities, architectural patterns, and industry best practices. This ensures the final product is both technically sound and aligned with modern development standards.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Conduct a technology assessment of available Python frameworks
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Design scalable architecture and database schemas
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Audit and document relevant Python libraries and tools
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Synthesize findings into actionable technical specifications
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Architecture & Design Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>
                  <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                    Architecture & Design
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    System Design, Database Schema, And API Structure
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    This phase focuses on creating a solid technical foundation for your Python application. It involves designing the overall system architecture, defining database schemas, and structuring APIs for seamless data flow. This ensures users can interact with your application efficiently and data is managed effectively throughout the system.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Develop a hierarchical system architecture diagram
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Define database schemas and relationships
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Map data flows and API endpoints for key functionalities
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Establish a clear data strategy and security measures
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Illustration */}
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden ">
                    {/* Main Background Image */}
                    <img
                      src={uiuxWorkflow4thImg}
                      alt="Architecture & Design Illustration"
                      className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />
                    <div className="absolute top-0 left-0 w-[105px] h-[60px] bg-white rounded-br-xl">
                    </div>

                  </div>
                  {/* Corner box - now properly clipped with the container */}
                  <div className="absolute top-0 left-0 h-12 w-24 bg-violet-600 rounded-lg p-4 shadow-lg z-10">
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Development & Implementation Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black rounded-t-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-8 items-stretch">

                {/* Left Content - Development */}
                <div className=" rounded-2xl p-8 relative overflow-hidden">
                  {/* Small label */}
                  <div className="mx-auto w-fit text-xs text-[#D0FF71] rounded-full px-4 py-1 text-center tracking-wider mb-4 font-medium bg-lime-400/20 border border-lime-400/30">
                    Development
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl font-bold text-white leading-tight mb-4 text-center">
                    Clean Code<br />Implementation
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-8 text-sm text-center">
                    Clean code implementation focuses on writing maintainable, efficient Python code that follows best practices. This involves using appropriate design patterns, writing comprehensive unit tests, and ensuring code readability and scalability. This allows the team to focus on functionality while maintaining high code quality standards.
                  </p>

                  {/* Code Image */}
                  <div className="relative flex justify-center overflow-hidden rounded-xl">
                    <img
                      src={wireframe01}
                      alt="Clean code implementation"
                      className="w-full h-auto object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />

                    {/* Parents for coner divs */}
                    <div className="absolute bottom-0 left-0 w-[95px] h-[60px] bg-black rounded-tr-xl">
                    </div>
                    <div className="absolute bottom-0 right-0 w-[95px] h-[60px] bg-black rounded-tl-xl">
                    </div>

                    {/* Corner boxes */}
                    <div className="absolute bottom-0 left-0 h-12 w-20 bg-lime-400 rounded-lg p-4 shadow-lg z-10"></div>
                    <div className="absolute bottom-0 right-0 h-12 w-20 bg-lime-400 rounded-lg p-4 shadow-lg z-10"></div>
                  </div>
                </div>

                {/* Right Content - Testing */}
                <div className="rounded-2xl p-8 container relative overflow-hidden">
                  {/* Small label */}
                  <div className="mx-auto w-fit text-xs text-[#D0FF71] rounded-full px-4 py-1 text-center tracking-wider mb-4 font-medium bg-lime-400/20 border border-lime-400/30">
                    Testing & Quality Assurance
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl font-bold text-white leading-tight mb-4 text-center">
                    Ensure Robust<br />Functionality
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-8 text-sm text-center">
                    Comprehensive testing is essential for delivering reliable Python applications. This process involves writing and executing various types of tests to identify bugs, performance issues, and security vulnerabilities. This helps in creating a robust application that performs well under different conditions and scenarios.
                  </p>

                  {/* Testing Image */}
                  <div className="relative flex justify-center overflow-hidden rounded-xl">
                    <img
                      src={wireframe02}
                      alt="Testing and quality assurance"
                      className="w-full h-auto object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />

                    {/* Parents for coner divs */}
                    <div className="absolute bottom-0 left-0 w-[95px] h-[60px] bg-black rounded-tr-xl">
                    </div>
                    <div className="absolute bottom-0 right-0 w-[95px] h-[60px] bg-black rounded-tl-xl">
                    </div>

                    {/* Corner boxes */}
                    <div className="absolute bottom-0 left-0 h-12 w-20 bg-lime-400 rounded-lg p-4 shadow-lg z-10"></div>
                    <div className="absolute bottom-0 right-0 h-12 w-20 bg-lime-400 rounded-lg p-4 shadow-lg z-10"></div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

        {/* Prototyping & MVP Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* 1. Header Section */}
            <div className="px-8 pt-8 pb-4">
              <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                Prototyping & MVP
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content: Title */}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                    Functional prototypes and minimum viable products
                  </h1>
                </div>

                {/* Right Content: Short Description */}
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    Functional prototypes and MVPs transform abstract ideas into tangible, working software. They are essential for validating technical feasibility, gathering early user feedback, and demonstrating core functionality before investing in full-scale development.                  </p>
                </div>
              </div>
            </div>

            {/* 2. Description and Hero Image Section */}
            <div className="px-8 pb-8">
              {/* Hero Image & Button Container FIX */}
              <div className="rounded-2xl overflow-hidden relative">

                <div className='absolute top-0 left-0 w-48 h-16 bg-white z-10  rounded-br-3xl'>

                </div>

                {/* Button placed on top of the image (Adjusted positioning) */}
                <div
                  className="inline-flex items-center gap-2 bg-lime-400 transition-colors px-6 py-3 rounded-2xl font-medium text-gray-900 group absolute top-0  z-10 h-12 w-40"
                >
                </div>


                {/* Image */}
                <img
                  src={uiuxWorkflow05}
                  alt="Python Developer working on prototype"
                  className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-110 block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Deployment & Optimization Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Illustration */}
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden ">
                    {/* Main Background Image */}
                    <img
                      src={uiuxWorkflow06}
                      alt="Deployment & Optimization Illustration"
                      className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />
                    <div className="absolute bottom-0 right-0 w-[105px] h-[60px] bg-white rounded-tl-xl">
                    </div>

                  </div>
                  {/* Corner box - now properly clipped with the container */}
                  <div className="absolute bottom-0 right-0 h-12 w-24 bg-lime-400 rounded-lg p-4 shadow-lg z-10">
                  </div>
                </div>

                {/* Right Content */}
                <div>
                  <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                    Deployment & Optimization
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Production deployment, monitoring, performance tuning
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Our deployment process ensures your Python application launches successfully and performs optimally in production. We handle containerization, cloud deployment, performance monitoring, and continuous optimization to maintain high availability and user satisfaction.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Containerization with Docker and orchestration
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Cloud deployment on AWS, GCP, or Azure
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Performance monitoring and optimization
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        CI/CD pipeline setup and maintenance
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>
                  <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                    Quality Assurance
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Comprehensive testing, security audits, performance validation
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Quality assurance is a crucial step that places your Python application through rigorous testing to identify vulnerabilities, performance bottlenecks, and functionality issues. We facilitate structured testing phases where we validate code quality, security measures, and system performance before production deployment.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Unit testing, integration testing, and end-to-end validation
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Security audits and vulnerability assessments
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Load testing and performance benchmarking
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Code reviews and quality assurance checks
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Illustration */}
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden ">
                    {/* Main Background Image */}
                    <img
                      src={uiuxWorkflow07}
                      alt="Quality Assurance Illustration"
                      className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />
                    <div className="absolute top-0 left-0 w-[105px] h-[60px] bg-white rounded-br-xl">
                    </div>

                  </div>
                  {/* Corner box - now properly clipped with the container */}
                  <div className="absolute top-0 left-0 h-12 w-24 bg-violet-600 rounded-lg p-4 shadow-lg z-10">
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Python Services Section - Integrated */}
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 border border-gray-800 rounded-full"></div>
            <div className="absolute top-40 right-20 w-96 h-96 border border-gray-800 rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-64 h-64 border border-gray-800 rounded-full"></div>
            <div className="absolute bottom-40 right-1/3 w-80 h-80 border border-gray-800 rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
            {/* Header */}
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-lime-400/20 border border-lime-400/30 rounded-full mb-6">
                <span className="text-lime-400 text-sm font-medium">What We Can Help You With</span>
              </div>
              <h1 className="text-4xl md:text-5xl text-white lg:text-6xl xl:text-7xl font-bold leading-tight max-w-5xl mx-auto">
                A Team Of Python Experts That Can Help You Build And Deploy Software You're Proud Of
              </h1>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
              {pythonServices.map((service, index) => (
                <div
                  key={index}
                  className="group cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-lime-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed ml-16 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mb-16 flex justify-center">
                <div className="hidden items-center gap-3 md:flex relative ">
          <Button 
  onClick={() => navigate("/contact")}
  className="flex !text-brand-ink items-center gap-2 rounded-full bg-lime-300 px-6 py-5 font-bold"
>
  Get In Touch Today
</Button>

            <img src="/Arrow 1-1.svg" alt="arrow" className="p-4 rounded-full bg-lime-300 text-brand-ink absolute left-40 " />
        </div>
            </div>
          </div>
        </div>

        {/* Iteration and Maintenance Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Illustration */}
                <div className="relative">
                  <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                    Iteration & Maintenance
                  </div>
                  <div className="relative rounded-3xl overflow-hidden ">
                    {/* Main Background Image */}
                    <img
                      src={uiuxWorkflow08}
                      alt="Iteration and Maintenance Illustration"
                      className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />
                  </div>
                </div>

                {/* Right Content */}
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Continuous Improvement Based On Usage Data
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    True software excellence is achieved through a cycle of deployment, monitoring, and refinement. We systematically analyze usage patterns, performance metrics, and user feedback to identify key areas for enhancement. This iterative process ensures the final product is not only functional but also highly optimized and perfectly aligned with both user needs and business goals.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Documentation & Handoff Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* 1. Header Section */}
            <div className="px-8 pt-8 pb-4">
              <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                Documentation & Handoff
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content: Title */}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                    Complete documentation, deployment guides & maintenance support
                  </h1>
                </div>
              </div>
            </div>

            {/* 2. Description and Hero Image Section */}
            <div className="px-8 pb-8">
              {/* Hero Image & Button Container FIX */}
              <div className="rounded-2xl overflow-hidden relative">

                <div className='absolute top-0 left-0 w-48 h-16 bg-white z-10  rounded-br-3xl'>

                </div>

                {/* Button placed on top of the image (Adjusted positioning) */}
                <div
                  className="inline-flex items-center gap-2 bg-lime-400 transition-colors px-6 py-3 rounded-2xl font-medium text-gray-900 group absolute top-0  z-10 h-12 w-44"
                >
                </div>


                {/* Image */}
                <img
                  src={uiuxWorkflow09}
                  alt="Python Developer documenting code"
                  className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-110 block"
                />
              </div>
            </div>
          </div>
        </div>


          {/* Projects Showcase Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our Favorite Python Development Projects
              </h2>
              <div className="flex gap-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-lime-400 text-black flex items-center justify-center hover:bg-lime-500 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* hide-scrollbar styles scoped here */}
            <style>{`
              .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
              .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>

            {/* HORIZONTAL SCROLL CARDS - shows ~3.5 cards, buttons control scroll */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto px-2 py-4 scroll-smooth hide-scrollbar"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {projects.map((project, idx) => (
                <article
                  key={project.id}
                  ref={idx === 0 ? firstCardRef : null}
                  // fixed widths ensure consistent card sizing and predictable scroll steps
                  className="w-[320px] sm:w-[360px] lg:w-[420px] flex-shrink-0 group"
                  aria-hidden={false}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      // image fills the fixed card width and uses object-cover to avoid stretching
                      className="w-full h-56 sm:h-64 lg:h-72 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                      <div className='flex flex-row items-center gap-2 '>
              <p className="text-sm  text-black font-bold  ">
                {project.year}
              </p>
              <span className="w-2 h-2 bg-[#9B82F6] rounded-full "></span>
              <p className="text-sm  text-black font-bold ">
                 {project.author}
              </p>
              </div>
                    </div>

                    <h3 className="text-lg lg:text-2xl font-bold text-gray-900 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mt-2 text-sm">
                      {project.subtitle}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>



      {/* Testimonials Section */}
      <Testimonials/>

      {/* Faq section */}
      <FAQAccordionSection />
      
      {/* End of Faq section */}
      </main>
      <FooterSimple />
    </div>
  );
}