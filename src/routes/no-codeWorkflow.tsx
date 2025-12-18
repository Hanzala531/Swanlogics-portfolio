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

export default function NoCodeWorkflow() {
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
      icon: Monitor,
      title: "Web Design",
      description: "We craft visually stunning and strategically effective websites that capture your brand's unique identity and captivate your audience from the first click.",
      color: "bg-lime-400"
    },
    {
      icon: ShoppingCart,
      title: "ECommerce",
      description: "Transform your online store into a powerful sales engine with intuitive product discovery, seamless checkout flows, and a shopping experience built for conversion.",
      color: "bg-lime-400"
    },
    {
      icon: Heart,
      title: "UX Design",
      description: "Our user-centered approach focuses on creating intuitive, efficient, and enjoyable journeys that keep users engaged and coming back for more.",
      color: "bg-lime-400"
    },
    {
      icon: Smartphone,
      title: "Responsive",
      description: "Your website will provide a flawless experience on any device, from desktops to smartphones, ensuring you reach and engage every customer.",
      color: "bg-lime-400"
    },
    {
      icon: FileText,
      title: "Wireframes",
      description: "We build clear, structural blueprints to strategically map out user journeys and functionality, establishing a solid foundation before visual design begins.",
      color: "bg-lime-400"
    },
    {
      icon: Target,
      title: "Strategy",
      description: "We go beyond aesthetics by defining clear goals, understanding your audience, and aligning your website's design with your overarching business objectives.",
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
                No-Code Development Workflow
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content: Title */}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                    A No-Code Development Agency In Manchester
                  </h1>
                </div>

                {/* Right Content: Short Description */}
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    We empower businesses to build powerful applications without traditional coding. Using cutting-edge no-code platforms, we transform your ideas into functional MVPs, automated workflows, and scalable solutions that drive real business results.
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
                  Our Manchester-based no-code development agency empowers businesses to build powerful digital solutions without the complexity of traditional programming. We leverage cutting-edge no-code platforms like Bubble, Adalo, Glide, and Zapier to transform your ideas into functional applications quickly and cost-effectively. From rapid prototyping and MVP development to complex workflow automation and scalable business applications, our process eliminates technical barriers while maintaining professional quality. Each solution is built with scalability in mind, ensuring your no-code applications can grow with your business needs. By combining strategic thinking with visual development tools, we deliver solutions that are not only fast to build but also reliable, maintainable, and ready for real-world deployment.
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
                    Platform Selection
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Choose The Right No-Code Platform For Your Project
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Selecting the appropriate no-code platform is crucial for project success. We evaluate your requirements against leading platforms like Bubble, Adalo, Glide, and Webflow to determine the best fit for your specific use case, scalability needs, and integration requirements.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Assess project complexity and technical requirements
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Evaluate platform capabilities and limitations
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Consider scalability and integration needs
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Review pricing and deployment options
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
                    Rapid Prototyping
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Build Functional Prototypes In Hours, Not Weeks
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    No-code platforms enable rapid prototyping that brings ideas to life quickly. We leverage visual development tools to create functional prototypes that demonstrate core features, user flows, and business logic. This approach allows for fast iteration and validation of concepts before investing in full development.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Design user interface with drag-and-drop components
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Configure workflows and business logic visually
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Set up data structures and relationships
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Test core functionality and user flows
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
                    Integration & Automation
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Connect Systems & Automate Workflows
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    No-code platforms excel at connecting different systems and automating repetitive tasks. We integrate your applications with popular services like Stripe, Zapier, Google Workspace, and custom APIs to create seamless workflows that eliminate manual processes and improve efficiency.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Develop a hierarchical sitemap outlining all pages and content sections
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Define primary and secondary global navigation menus
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Map user journeys and key task flows for critical user goals
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#9B82F6] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        Establish a clear content strategy and inventory for each page
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
                  <div className="mx-auto w-fit  text-xs text-[#D0FF71] rounded-full px-4 py-1 text-center tracking-wider mb-4 font-medium bg-lime-400/20 border border-lime-400/30">
                    Wireframing
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl font-bold text-white leading-tight mb-4 text-center">
                    Low-Fidelity Screen<br />Layouts
                  </h3>

                  {/* Description */}  <div className="hidden items-center gap-3 md:flex relative ">
        

          
        </div>
                  <p className="text-gray-300 leading-relaxed mb-8 text-sm text-center">
                    Low-fidelity layouts, such as wireframes, are used to establish the basic
                    structure and layout of key screens without visual design details. This
                    allows the team to focus on functionality, user flow, and element
                    placement ensuring a solid foundational experience before investing in
                    visual design and content.
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
                  <div className="mx-auto w-fit  text-sm text-[#D0FF71] rounded-full px-4 py-1 text-center tracking-wider mb-4 font-medium bg-lime-400/20 border border-lime-400/30">
                    User Flow Mapping
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl font-bold text-white leading-tight mb-4 text-center">
                    Define Journeys For<br />Smooth Navigation
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-8 text-sm text-center">
                    Mapping user journeys is essential for creating an intuitive experience.
                    This process involves outlining the step-by-step paths users will take to
                    complete key tasks, identifying potential pain points, and ensuring the
                    navigation is logical and efficient. This helps in creating a seamless flow
                    that guides users effortlessly to their goals.
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
              <div className='flex mt-20 mx-auto items-center justify-center'>
          <Button 
  onClick={() => navigate("/contact")}
  className=" z-10 flex !text-brand-ink items-center gap-2 rounded-full bg-lime-300 px-6 py-5 font-bold"
>
  Get In Touch Today
</Button>
  <img src="/Arrow 1-1.svg" alt="arrow" className="p-4 rounded-full bg-lime-300 text-brand-ink relative right-2 " />
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