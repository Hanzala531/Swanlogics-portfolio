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

export default function JavascriptWorkflow() {

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
              Lets work together.
            </div>
          ))}
        </div>
      </motion.div>

    );
  };

  // Services data for the web services section
  const webServices = [
    {
      icon: Monitor,
      title: "Frontend Development",
      description: "We build dynamic, interactive user interfaces using modern JavaScript frameworks like React, Vue, and Angular that deliver exceptional performance and user experience.",
      color: "bg-lime-400"
    },
    {
      icon: ShoppingCart,
      title: "Node.js Backend",
      description: "Create robust server-side applications with Node.js, building scalable APIs, real-time features, and efficient data processing for your web applications.",
      color: "bg-lime-400"
    },
    {
      icon: Heart,
      title: "Full-Stack JS",
      description: "End-to-end JavaScript development using the MEAN/MERN stack, providing seamless integration between frontend and backend for complete web solutions.",
      color: "bg-lime-400"
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps",
      description: "Build fast, reliable PWAs that work offline and provide native app-like experiences across all devices using modern JavaScript technologies.",
      color: "bg-lime-400"
    },
    {
      icon: FileText,
      title: "API Development",
      description: "Design and develop RESTful and GraphQL APIs with proper authentication, documentation, and testing to power your JavaScript applications.",
      color: "bg-lime-400"
    },
    {
      icon: Target,
      title: "Performance Optimization",
      description: "Optimize your JavaScript applications for speed and efficiency through code splitting, lazy loading, and advanced performance monitoring techniques.",
      color: "bg-lime-400"
    }
  ];

   // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Refreshing Gary Neville's Digital Presence",
      subtitle: "Where Art Meets Emotion In Every Shot",
      year: "2025",
      author: "Gary Neville",
      imageUrl: project01  // No curly braces
    },
    {
      id: 2,
      title: "Furniture Designed To The Greatest Extent",
      subtitle: "Driving Innovative Growth",
      year: "2025",
      author: "Gary Neville",
      imageUrl: project02  // No curly braces
    },
    {
      id: 3,
      title: "A Workplace Consultancy Creating Inspiring Environments",
      subtitle: "Brand, Design & Development Agency",
      year: "2025",
      author: "Gary Neville",
      imageUrl: project03  // No curly braces; fixed variable name
    },
     {
      id: 4,
      title: "Furniture Designed To The Greatest Extent",
      subtitle: "Driving Innovative Growth",
      year: "2025",
      author: "Gary Neville",
      imageUrl: project02  // No curly braces
    },
    {
      id: 5,
      title: "A Workplace Consultancy Creating Inspiring Environments",
      subtitle: "Brand, Design & Development Agency",
      year: "2025",
      author: "Gary Neville",
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
                JavaScript Development Workflow
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content: Title */}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                    A JavaScript Development Studio In Manchester
                  </h1>
                </div>

                {/* Right Content: Short Description */}
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    We specialize in crafting powerful web applications using modern JavaScript technologies. From interactive frontends to scalable backends, we leverage the full JavaScript ecosystem to build solutions that are fast, reliable, and perfectly tailored to your business needs.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Description and Hero Image Section */}
            <div className="px-8 pb-8">

              {/* Long Description */}
              <div className="mb-12">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our Manchester-based JavaScript development studio transforms ideas into dynamic web applications that engage users and drive business growth. We begin every project by analyzing your requirements, choosing the right tech stack, and architecting scalable solutions. From React and Vue.js frontends to Node.js backends, our development process emphasizes clean code, performance optimization, and modern best practices. Each application is built with responsive design principles, API integration capabilities, and robust testing frameworks. By combining cutting-edge JavaScript technologies with proven development methodologies, we deliver applications that are not only feature-rich but also maintainable and future-proof.
                </p>
              </div>

              {/* Hero Image & Button Container */}
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <div className='absolute top-0 left-0 w-44 h-16 bg-white z-10 rounded-br-3xl'></div>
                <button className="inline-flex items-center gap-2 bg-lime-300 hover:bg-lime-400 transition-colors px-6 py-3 rounded-full font-medium text-gray-900 group absolute top-0 z-10">
                  Tell Me More
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <img
                  src={uiuxWorkflowBannerImg}
                  alt="JavaScript Developer working with multiple monitors and code"
                  className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-110 block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Analysis Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                    Requirements Analysis
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Define Features & Technical Specifications
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Comprehensive requirements analysis forms the backbone of successful JavaScript development. We work closely with stakeholders to identify core functionalities, performance requirements, and technical constraints. This phase ensures we select the optimal JavaScript frameworks and libraries while establishing clear development milestones and success criteria.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Analyze functional requirements and user stories
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Define technical stack and framework selection
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Document API requirements and data flow
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Establish performance benchmarks and testing criteria
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image section remains the same */}
                <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
                  <div className="aspect-[4/3] relative">
                    <div className="absolute inset-0">
                      <img
                        src={uiuxWorkflow2ndImg}
                        alt="Team analyzing JavaScript requirements and technical specifications"
                        className="w-full h-full object-fit rounded-2xl transition-opacity duration-0 group-hover:opacity-0 group-hover:delay-0 delay-700"
                      />
                    </div>
                    <div className="absolute inset-0 transform -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                      <img
                        src={uiuxWorkflow2ndImg}
                        alt="Team analyzing JavaScript requirements and technical specifications"
                        className="w-full h-full object-fit rounded-2xl"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-[110px] h-[55px] bg-white rounded-tl-xl"></div>
                    <div className="absolute bottom-0 right-0 h-10 w-24 bg-violet-600 rounded-lg py-6 px-10 shadow-lg z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Text Rows */}
        <div className="py-16 bg-white overflow-hidden">
          <Row direction="left" />
          <Row direction="right" />
        </div>

        {/* Technology Stack & Architecture Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden">
                    <img
                      src={uiuxWorkflow3rdImg}
                      alt="JavaScript technology stack and architecture planning"
                      className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />
                    <div className="absolute bottom-0 right-0 w-[105px] h-[60px] bg-white rounded-tl-xl"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 h-12 w-24 bg-lime-400 rounded-lg p-4 shadow-lg z-10"></div>
                </div>
                <div>
                  <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                    Technology Stack & Architecture
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Framework Selection, Database Design, API Planning
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Strategic technology selection and architecture planning are crucial for building scalable JavaScript applications. This phase involves choosing the optimal frontend frameworks (React, Vue, Angular), backend technologies (Node.js, Express), databases (MongoDB, PostgreSQL), and designing robust API architectures that support current needs while accommodating future growth and feature expansions.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Evaluate and select optimal JavaScript frameworks and libraries
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Design scalable database schemas and data models
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Plan RESTful API endpoints and GraphQL schemas
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Establish development environment and CI/CD pipelines
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frontend Development Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                    Frontend Development
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Component Architecture, State Management, UI Implementation
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Frontend development focuses on creating responsive, interactive user interfaces using modern JavaScript frameworks. This phase involves building reusable components, implementing efficient state management solutions, integrating with APIs, and ensuring optimal performance across all devices. We prioritize clean code architecture and user experience optimization.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Build modular, reusable React/Vue/Angular components
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Implement state management with Redux, Vuex, or Context API
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Integrate APIs and handle asynchronous data operations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Optimize performance with code splitting and lazy loading
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden">
                    <img
                      src={uiuxWorkflow4thImg}
                      alt="Frontend JavaScript development with component architecture"
                      className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />
                    <div className="absolute top-0 left-0 w-[105px] h-[60px] bg-white rounded-br-xl"></div>
                  </div>
                  <div className="absolute top-0 left-0 h-12 w-24 bg-violet-600 rounded-lg p-4 shadow-lg z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Development & API Design Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black rounded-t-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                <div className="rounded-2xl p-8 relative overflow-hidden">
                  <div className="mx-auto w-fit text-xs text-[#D0FF71] rounded-full px-4 py-1 text-center tracking-wider mb-4 font-medium bg-lime-400/20 border border-lime-400/30">
                    Backend Development
                  </div>
                  <h3 className="text-5xl font-bold text-white leading-tight mb-4 text-center">
                    Node.js Server<br />Architecture
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-8 text-sm text-center">
                    Backend development with Node.js involves creating robust server-side applications that handle business logic, data processing, and API endpoints. We build scalable architectures using Express.js, implement authentication systems, design efficient database operations, and ensure proper error handling and security measures for reliable application performance.
                  </p>
                  <div className="relative flex justify-center overflow-hidden rounded-xl">
                    <img
                      src={wireframe01}
                      alt="Node.js backend architecture and server development"
                      className="w-full h-auto object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />
                    <div className="absolute bottom-0 left-0 w-[95px] h-[60px] bg-black rounded-tr-xl"></div>
                    <div className="absolute bottom-0 right-0 w-[95px] h-[60px] bg-black rounded-tl-xl"></div>
                    <div className="absolute bottom-0 left-0 h-12 w-20 bg-lime-400 rounded-lg p-4 shadow-lg z-10"></div>
                    <div className="absolute bottom-0 right-0 h-12 w-20 bg-lime-400 rounded-lg p-4 shadow-lg z-10"></div>
                  </div>
                </div>

                <div className="rounded-2xl p-8 container relative overflow-hidden">
                  <div className="mx-auto w-fit text-xs text-[#D0FF71] rounded-full px-4 py-1 text-center tracking-wider mb-4 font-medium bg-lime-400/20 border border-lime-400/30">
                    API Design & Integration
                  </div>
                  <h3 className="text-5xl font-bold text-white leading-tight mb-4 text-center">
                    RESTful & GraphQL<br />APIs
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-8 text-sm text-center">
                    API design and integration are essential for modern JavaScript applications. We create well-documented RESTful endpoints and GraphQL schemas that provide efficient data access, implement proper authentication and authorization, ensure data validation, and design APIs that are scalable, maintainable, and easy to consume by frontend applications.
                  </p>
                  <div className="relative flex justify-center overflow-hidden rounded-xl">
                    <img
                      src={wireframe02}
                      alt="RESTful and GraphQL API design and integration"
                      className="w-full h-auto object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />
                    <div className="absolute bottom-0 left-0 w-[95px] h-[60px] bg-black rounded-tr-xl"></div>
                    <div className="absolute bottom-0 right-0 w-[95px] h-[60px] bg-black rounded-tl-xl"></div>
                    <div className="absolute bottom-0 left-0 h-12 w-20 bg-lime-400 rounded-lg p-4 shadow-lg z-10"></div>
                    <div className="absolute bottom-0 right-0 h-12 w-20 bg-lime-400 rounded-lg p-4 shadow-lg z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testing & Quality Assurance Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-8 pt-8 pb-4">
              <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                Testing & Quality Assurance
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                    Unit Testing, Integration Testing & Code Quality
                  </h1>
                </div>
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    Comprehensive testing ensures your JavaScript applications are reliable, maintainable, and bug-free. We implement automated testing suites using Jest, Cypress, and other modern testing frameworks to validate functionality, performance, and user interactions before deployment.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-8 pb-8">
              <div className="rounded-2xl overflow-hidden relative">
                <div className='absolute top-0 left-0 w-48 h-16 bg-white z-10 rounded-br-3xl'></div>
                <div className="inline-flex items-center gap-2 bg-lime-400 transition-colors px-6 py-3 rounded-2xl font-medium text-gray-900 group absolute top-0 z-10 h-12 w-40"></div>
                <img
                  src={uiuxWorkflow05}
                  alt="JavaScript testing and quality assurance processes"
                  className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-110 block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Database Integration & Data Management Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden">
                    <img
                      src={uiuxWorkflow06}
                      alt="Database integration and data management"
                      className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />
                    <div className="absolute bottom-0 right-0 w-[105px] h-[60px] bg-white rounded-tl-xl"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 h-12 w-24 bg-lime-400 rounded-lg p-4 shadow-lg z-10"></div>
                </div>
                <div>
                  <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                    Database Integration
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    MongoDB, PostgreSQL, Data Models & Optimization
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Database integration and data management form the core of robust JavaScript applications. We design efficient data models, implement secure database connections, optimize queries for performance, and establish proper data validation and migration strategies. Whether using NoSQL databases like MongoDB or relational databases like PostgreSQL, we ensure data integrity and scalability.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Design efficient data schemas and relationships
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Implement secure database connections and queries
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Optimize database performance and indexing strategies
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Set up data migration and backup procedures
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Optimization Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                    Performance Optimization
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Code Splitting, Caching, Bundle Optimization
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Performance optimization is crucial for delivering fast, responsive JavaScript applications. We implement advanced optimization techniques including code splitting, lazy loading, efficient caching strategies, and bundle size reduction. Through performance monitoring and profiling, we ensure your application delivers exceptional user experiences across all devices and network conditions.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Implement code splitting and lazy loading strategies
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Optimize bundle sizes and eliminate unused code
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Configure caching strategies and CDN integration
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Monitor performance metrics and user experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden">
                    <img
                      src={uiuxWorkflow07}
                      alt="JavaScript performance optimization and monitoring"
                      className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />
                    <div className="absolute top-0 left-0 w-[105px] h-[60px] bg-white rounded-br-xl"></div>
                  </div>
                  <div className="absolute top-0 left-0 h-12 w-24 bg-violet-600 rounded-lg p-4 shadow-lg z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Web Services Section */}
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 border border-gray-800 rounded-full"></div>
            <div className="absolute top-40 right-20 w-96 h-96 border border-gray-800 rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-64 h-64 border border-gray-800 rounded-full"></div>
            <div className="absolute bottom-40 right-1/3 w-80 h-80 border border-gray-800 rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-lime-400/20 border border-lime-400/30 rounded-full mb-6">
                <span className="text-lime-400 text-sm font-medium">What We Can Help You With</span>
              </div>
              <h1 className="text-4xl md:text-5xl text-white lg:text-6xl xl:text-7xl font-bold leading-tight max-w-5xl mx-auto">
                A Team Of JavaScript Experts That Can Help You Build Modern Web Applications You're Proud Of
              </h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
              {webServices.map((service, index) => (
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
            <div className="text-center mb-16">
                <div className="hidden items-center justify-center gap-3 md:flex relative ">
          
          <Button 
  onClick={() => navigate("/contact")}
  className="
  !bg-[#D0FF71]
    !text-black
    !font-bold

    !px-6
    !py-4
    !rounded-full

    hover:!bg-lime-300
    hover:!-translate-x-7
    hover:!pl-6 hover:!pr-4

    !transition-all !duration-1000 !ease-out
    flex items-center gap-2 whitespace-nowrap
    text-base"
  
>
  Get In Touch Today
</Button>

            <img src="/Arrow 1-1.svg" alt="arrow" className="p-4 rounded-full bg-lime-300 text-brand-ink relative right-8 " />
        </div>
            </div>
          </div>
        </div>

        {/* Code Review & Optimization Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="ttext-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                    Code Review & Optimization
                  </div>
                  <div className="relative rounded-3xl overflow-hidden">
                    <img
                      src={uiuxWorkflow08}
                      alt="JavaScript code review and optimization process"
                      className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Refactor Code Based On Best Practices
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Code quality and maintainability are achieved through systematic review and optimization processes. We conduct thorough code reviews to identify performance bottlenecks, security vulnerabilities, and adherence to JavaScript best practices. This iterative process ensures your codebase remains clean, efficient, and ready for future enhancements and team collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment & DevOps Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-8 pt-8 pb-4">
              <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold mb-4">
                Deployment & DevOps
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                    CI/CD Pipelines, Cloud Hosting & Production Monitoring
                  </h1>
                </div>
              </div>
            </div>
            <div className="px-8 pb-8">
              <div className="rounded-2xl overflow-hidden relative">
                <div className='absolute top-0 left-0 w-48 h-16 bg-white z-10 rounded-br-3xl'></div>
                <div className="inline-flex items-center gap-2 bg-lime-400 transition-colors px-6 py-3 rounded-2xl font-medium text-gray-900 group absolute top-0 z-10 h-12 w-44"></div>
                <img
                  src={uiuxWorkflow09}
                  alt="JavaScript application deployment and DevOps infrastructure"
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
                Our Favorite JavaScript Development Projects
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
                  className="w-[320px] sm:w-[360px] lg:w-[420px] flex-shrink-0 group"
                  aria-hidden={false}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
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