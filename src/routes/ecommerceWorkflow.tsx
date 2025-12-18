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

export default function EcommerceWorkflow() {
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

  // Services data for the e-commerce services section
  const webServices = [
    {
      icon: Monitor,
      title: "Custom Store Development",
      description: "We build bespoke e-commerce stores using Shopify, WooCommerce, or custom platforms, creating unique shopping experiences tailored to your brand and business needs.",
      color: "bg-lime-400"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Migration",
      description: "Seamlessly migrate your existing store to a new platform with zero downtime, preserving all data, customer information, and order history in the process.",
      color: "bg-lime-400"
    },
    {
      icon: Heart,
      title: "Payment Integration",
      description: "Integrate multiple payment gateways including Stripe, PayPal, and local options, ensuring secure and smooth checkout experiences for your customers.",
      color: "bg-lime-400"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Create mobile-first e-commerce experiences that work perfectly on all devices, with touch-friendly interfaces and accelerated mobile pages.",
      color: "bg-lime-400"
    },
    {
      icon: FileText,
      title: "Inventory Management",
      description: "Implement advanced inventory systems with real-time tracking, automated reorder alerts, and integration with your existing warehouse management.",
      color: "bg-lime-400"
    },
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "Optimize your store for maximum conversions with A/B testing, user experience improvements, and data-driven design decisions.",
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
                E-commerce Development Workflow
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content: Title */}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                    An E-commerce Development Agency In Manchester
                  </h1>
                </div>

                {/* Right Content: Short Description */}
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    We specialize in creating high-converting online stores that drive sales and provide exceptional shopping experiences. From platform selection to launch and optimization, our Manchester-based team builds e-commerce solutions that turn visitors into loyal customers.
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
                  Our Manchester-based e-commerce development agency is committed to transforming business ideas into thriving online stores. We begin every project by understanding your products, target market, and sales goals to ensure the foundation is strong. From platform selection and store design to payment integration and launch, our process is designed to create conversion-optimized stores that drive revenue. Each e-commerce solution is carefully built with user experience in mind, featuring intuitive navigation, seamless checkout flows, and mobile-responsive designs. By combining technical expertise with e-commerce best practices, we deliver solutions that are not only visually appealing but also highly functional and profitable.
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
                    Business Analysis
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Product Strategy & Market Analysis
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Successful e-commerce ventures start with comprehensive business analysis. We conduct thorough market research, analyze competitor strategies, and develop product positioning that resonates with your target audience. This strategic foundation ensures your online store is built to capture market share and drive sustainable growth.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Analyze target market and customer demographics
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Research competitor e-commerce strategies and pricing
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Define product catalog and inventory management needs
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Establish revenue goals and conversion targets
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
                    Platform Selection
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    E-commerce Platform & Technology Stack
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Choosing the right e-commerce platform and technology stack is crucial for long-term success. We evaluate Shopify, WooCommerce, Magento, and custom solutions based on your business needs, scalability requirements, and budget. This ensures you have a robust foundation that can grow with your business.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Evaluate Shopify, WooCommerce, Magento, and custom platforms
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Assess payment gateway and shipping integration options
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Plan for scalability, security, and performance requirements
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Create technical architecture and integration roadmap
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
                    Store Design
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    User Experience & Conversion Optimization
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    The success of an e-commerce store depends on its ability to convert visitors into customers. We design intuitive user journeys, optimize product pages for conversions, and create seamless checkout experiences that minimize cart abandonment and maximize sales.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Design intuitive navigation and category structures
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Create conversion-optimized product page layouts
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Map customer journey from discovery to purchase
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Implement trust signals and social proof elements
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
                    Store Development
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl font-bold text-white leading-tight mb-4 text-center">
                    Custom Features &<br />Third-Party Integrations
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-8 text-sm text-center">
                    Building a successful e-commerce store requires custom features and seamless integrations. This includes payment processing, inventory management, shipping calculators, and marketing tools that work together to create a comprehensive shopping platform tailored to your business needs.
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
                </div>

                {/* Right Content - User Flow Mapping */}
                <div className="rounded-2xl p-8 container relative overflow-hidden">
                  {/* Small label */}
                  <div className="mx-auto w-fit text-sm text-[#D0FF71] rounded-full px-4 py-1 text-center tracking-wider mb-4 font-medium bg-lime-400/20 border border-lime-400/30">
                    Payment Integration
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl font-bold text-white leading-tight mb-4 text-center">
                    Secure Checkout &<br />Payment Processing
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-8 text-sm text-center">
                    Trust and security are paramount in e-commerce. We implement robust payment gateways, SSL certificates, and security measures to protect customer data and ensure smooth, secure transactions that build confidence and reduce cart abandonment.
                  </p>

                  {/* User Flow Image */}
                  <div className="relative flex justify-center overflow-hidden rounded-xl">
                    <img
                      src={wireframe02}
                      alt="User flow mapping and journey definition"
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

        {/* Prototyping*/}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* 1. Header Section */}
            <div className="px-8 pt-8 pb-4">
              <div className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                Store Launch
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content: Title */}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                    Pre-Launch Testing & Go-Live Preparation
                  </h1>
                </div>

                {/* Right Content: Short Description */}
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    Launching an e-commerce store requires meticulous preparation and testing. We conduct comprehensive quality assurance, load testing, and user acceptance testing to ensure everything works perfectly before going live, minimizing risks and ensuring a smooth launch experience.
                  </p>
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
                    Marketing Setup
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    SEO, Analytics & Conversion Tracking
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    A beautiful store needs customers to find it. We implement comprehensive SEO strategies, set up analytics tracking, and configure conversion funnels to drive traffic and measure performance. This ensures your e-commerce store not only looks great but also performs exceptionally in search results and marketing campaigns.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Implement on-page SEO and meta tag optimization
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Set up Google Analytics and e-commerce tracking
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Configure conversion tracking and goal setup
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Integrate email marketing and CRM systems
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
                    Performance Optimization
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Speed Optimization & A/B Testing
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Post-launch success depends on continuous optimization. We monitor site performance, conduct A/B testing on key pages, and implement data-driven improvements to increase conversions, reduce bounce rates, and maximize your return on investment.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Optimize page load speeds and Core Web Vitals
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Conduct A/B testing on product pages and checkout flow
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Analyze user behavior and conversion funnel data
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Implement data-driven improvements and feature updates
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
                A Team Of E-commerce Experts That Can Help You Build And Launch Online Stores You're Proud Of
              </h1>
            </div>

            {/* Services Grid */}
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
                Our Favorite E-commerce Projects
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