import React from 'react';
import {
  ArrowUpRight,
  Check,
  CheckCircle,
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

export default function MobileAppWorkflow() {


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
              Let’s Work Together.
            </div>
          ))}
        </div>
      </motion.div>

    );
  };

  // Services data for the web services section
  const webServices = [
    {
      icon: Smartphone,
      title: "iOS Development",
      description: "Native iOS apps built with Swift and SwiftUI, optimized for performance and user experience on all Apple devices.",
      color: "bg-lime-400"
    },
    {
      icon: Monitor,
      title: "Android Development",
      description: "Native Android applications using Kotlin and modern Android development practices for seamless user experiences.",
      color: "bg-lime-400"
    },
    {
      icon: Target,
      title: "Cross-Platform",
      description: "React Native and Flutter solutions that work perfectly on both iOS and Android, reducing development time and costs.",
      color: "bg-lime-400"
    },
    {
      icon: Heart,
      title: "UI/UX Design",
      description: "Intuitive mobile interfaces designed specifically for touch interactions and mobile user behaviors.",
      color: "bg-lime-400"
    },
    {
      icon: FileText,
      title: "App Store Optimization",
      description: "Strategic optimization to improve app visibility and downloads on both Apple App Store and Google Play Store.",
      color: "bg-lime-400"
    },
    {
      icon: ShoppingCart,
      title: "Backend Integration",
      description: "Seamless integration with APIs, databases, and third-party services to power your mobile app functionality.",
      color: "bg-lime-400"
    }
  ];

   // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Fitness Tracker Mobile App",
      subtitle: "Health & Wellness App with Real-time Tracking",
      year: "2024",
      author: "SwanLogics",
      imageUrl: project01  // No curly braces
    },
    {
      id: 2,
      title: "E-Commerce Shopping App",
      subtitle: "Seamless Shopping Experience with AR Try-on",
      year: "2024",
      author: "SwanLogics",
      imageUrl: project02  // No curly braces
    },
    {
      id: 3,
      title: "Food Delivery Platform",
      subtitle: "Fast & Reliable Food Ordering App",
      year: "2024",
      author: "SwanLogics",
      imageUrl: project03  // No curly braces; fixed variable name
    },
     {
      id: 4,
      title: "Social Media Networking App",
      subtitle: "Connect & Share with Enhanced Privacy",
      year: "2024",
      author: "SwanLogics",
      imageUrl: project02  // No curly braces
    },
    {
      id: 5,
      title: "Banking & Finance App",
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
                Mobile App Development Workflow
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content: Title */}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                    A Mobile App Development Agency In Manchester
                  </h1>
                </div>

                {/* Right Content: Short Description */}
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    We specialize in creating native and cross-platform mobile applications that deliver exceptional user experiences. From iOS and Android development to React Native solutions, our Manchester-based team builds apps that users love and businesses rely on.
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
                    Our Manchester-based mobile app development agency is committed to transforming ideas into powerful mobile experiences that users can't put down. We begin every project by understanding your business goals, target audience, and technical requirements to ensure the foundation is strong. From native iOS and Android development to cross-platform solutions, our process is designed to create intuitive, performant applications that drive user engagement and business growth. Each app is carefully built with attention to platform-specific design guidelines, optimized performance, and seamless user experiences across all devices.
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
                  Tell Me More
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>


                {/* Image */}
                <img
                  src={uiuxWorkflowBannerImg}
                  alt="UI/UX Designer working at desk with multiple monitors"
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
                    App Concept
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Define App Vision & Technical Feasibility
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Every great mobile app starts with a clear vision. We work closely with you to define the app's purpose, target audience, key features, and success metrics. This strategic planning phase ensures your app concept is viable, marketable, and aligned with both user needs and business objectives.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Define app purpose, target audience, and key features
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Analyze market competition and user research
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Determine platform strategy (iOS, Android, or cross-platform)
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Create initial wireframes and user flow diagrams
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
                        alt="Team meeting discussing client goals"
                        className="w-full h-full object-fit rounded-2xl transition-opacity duration-0 group-hover:opacity-0 group-hover:delay-0 delay-700"
                      />
                    </div>

                    {/* Second (hover) image */}
                    <div className="absolute inset-0 transform -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                      <img
                        src={uiuxWorkflow2ndImg}
                        alt="Team meeting discussing client goals"
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


        {/* Research & Analysis Section */}
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
                      alt="Research and Analysis Illustration"
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
                    UI/UX Design
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Mobile-First Design & User Experience
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Mobile app design requires a deep understanding of mobile user behavior and platform conventions. We create intuitive, thumb-friendly interfaces that follow iOS and Android design guidelines, ensuring your app feels native and provides exceptional user experiences across all devices and screen sizes.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Create user personas and journey maps for mobile users
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Design mobile-first wireframes and mockups
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Follow platform-specific design guidelines (Material Design, Human Interface)
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Optimize for touch interactions and gesture-based navigation
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Information Architecture Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>
                  <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                    Development
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Native & Cross-Platform Development
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Our development process leverages the latest technologies and best practices for mobile app development. Whether building native iOS/Android apps or cross-platform solutions with React Native or Flutter, we ensure optimal performance, security, and maintainability while integrating with necessary APIs and third-party services.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Set up development environment and CI/CD pipelines
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Implement core features with clean, maintainable code
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Integrate APIs, databases, and third-party services
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Implement push notifications and offline functionality
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
                      alt="Information Architecture Illustration"
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

        {/* Wireframing & User Flow Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black rounded-t-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-8 items-stretch">

                {/* Left Content - Wireframing */}
                <div className=" rounded-2xl p-8 relative overflow-hidden">
                  {/* Small label */}
                  <div className="mx-auto w-fit text-sm text-[#D0FF71] rounded-full px-4 py-1 text-center tracking-wider mb-4 font-medium bg-lime-400/20 border border-lime-400/30">
                    Testing
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl font-bold text-white leading-tight mb-4 text-center">
                    Quality Assurance &<br />Performance Testing
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-8 text-sm text-center">
                    Comprehensive testing ensures your mobile app performs flawlessly across all devices and scenarios. We conduct rigorous testing for functionality, performance, security, and user experience, including device compatibility testing, load testing, and beta testing with real users to guarantee a polished final product.
                  </p>

                  {/* User Flow Image */}
                  <div className="relative flex justify-center overflow-hidden rounded-xl">
                    <img
                      src={wireframe01}
                      alt="Low-fidelity wireframe layouts"
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

                  {/* Checklist */}
                  <div className="space-y-3 mt-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Functional Testing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Performance Testing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Security Testing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Device Compatibility Testing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">User Acceptance Testing</span>
                    </div>
                  </div>
                </div>

                {/* Right Content - Deployment & Launch */}
                <div className="rounded-2xl p-8 container relative overflow-hidden">
                  {/* Small label */}
                  <div className="mx-auto w-fit text-sm text-[#D0FF71] rounded-full px-4 py-1 text-center tracking-wider mb-4 font-medium bg-lime-400/20 border border-lime-400/30">
                    Deployment
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl font-bold text-white leading-tight mb-4 text-center">
                    App Store Launch &<br />Post-Launch Support
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-8 text-sm text-center">
                    Successfully launching your mobile app requires careful preparation and execution. We handle the entire submission process for both iOS App Store and Google Play Store, ensuring compliance with all guidelines and requirements. Our post-launch support includes monitoring app performance, gathering user feedback, and implementing updates to keep your app competitive and user-friendly.
                  </p>

                  {/* User Flow Image */}
                  <div className="relative flex justify-center overflow-hidden rounded-xl">
                    <img
                      src={wireframe02}
                      alt="App store submission and deployment process"
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

                  {/* Checklist */}
                  <div className="space-y-3 mt-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">App Store Optimization (ASO)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Store Submission & Review</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Post-Launch Monitoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">User Feedback Integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Regular Updates & Maintenance</span>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

        {/* Prototyping*/}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* 1. Header Section */}
            <div className="px-8 pt-8 pb-4">
              <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                Prototyping
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content: Title */}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                    Clickable mid/high-fidelity prototypes
                  </h1>
                </div>

                {/* Right Content: Short Description */}
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    Clickable mid and high-fidelity prototypes transform static designs into dynamic, interactive models that closely mimic the final product. They are essential for validating complex user flows, conducting effective usability testing to gather actionable feedback, and clearly communicating the intended functionality and experience to stakeholders and developers before committing to costly development.                  </p>
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
                  alt="UI/UX Designer working at desk with multiple monitors"
                  className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-110 block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Visual Design */}
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
                      alt="Research and Analysis Illustration"
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
                    Visual Design
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Branding, colors, typography, components
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Our visual design process translates your brand's essence into a compelling and intuitive user interface. We craft pixel-perfect experiences by meticulously defining the core elements that users see and interact with. This includes establishing a cohesive color palette that reflects your brand identity and guides user behavior, selecting typography that ensures readability and personality, and building a robust library of reusable UI components.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Brand Identity & Logo Integration.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Color Palette & Accessibility Compliance.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Typography Hierarchy & Web Fonts.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        UI Component & Design System Creation.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Usability testing */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>
                  <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                    Usability Testing
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Validate design with users, collect feedback
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Usability testing is a crucial step that places your design directly in front of real users to identify pain points, uncover opportunities, and validate design decisions before launch. We facilitate structured tests where participants complete specific tasks while we observe their behavior, gather their feedback, and measure key metrics like success rates and task time.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Recruit target users & develop test scenarios.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Conduct moderated or unmoderated testing sessions.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Analyze user behavior, feedback, and performance metrics.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Synthesize findings into actionable insights for iteration.
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
                      alt="Information Architecture Illustration"
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

        {/* Web Services Section - Integrated */}
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
                A Team Of Web Design Experts That Can Help You Design And Build A Website You're Proud Of
              </h1>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
              {webServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-lime-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed ml-16 group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

             {/* CTA Button */}
            <div className="text-center mb-16 flex justify-center">
                <div className="hidden items-center gap-3 md:flex relative ">
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
    text-base
  "
>
  Get In Touch Today
</Button>

            <img src="/Arrow 1-1.svg" alt="arrow" className="p-4 rounded-full bg-lime-300 text-brand-ink absolute left-36 " />
        </div>
            </div>
          </div>
        </div>

        {/* Iteration and refinement */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Illustration */}
                <div className="relative">
                  <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                    Research & Analysis
                  </div>
                  <div className="relative rounded-3xl overflow-hidden ">
                    {/* Main Background Image */}
                    <img
                      src={uiuxWorkflow08}
                      alt="Iteration and Refinement Illustration"
                      className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />
                  </div>
                </div>

                {/* Right Content */}
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Improve Design Based On Feedback
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    True design excellence is achieved through a cycle of creation, feedback, and refinement. We systematically gather and analyze input from users and stakeholders to identify key areas for enhancement. This iterative process ensures the final product is not only beautiful but also highly functional, intuitive, and perfectly aligned with both user needs and business goals.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Design Handoff*/}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* 1. Header Section */}
            <div className="px-8 pt-8 pb-4">
              <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                Design Handoff
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content: Title */}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                    Final assets, style guide & prototypes to devs
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
                  alt="UI/UX Designer working at desk with multiple monitors"
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
                Our Favorite Web Design Projects
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