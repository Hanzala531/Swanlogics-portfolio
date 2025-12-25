import React, { useState } from "react";
import {
  ArrowUpRight,
  Code,
  Smartphone,
  ShoppingCart,
  Zap,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import FigmaIcon from "@/assets/Figma.png";
import Ring from "../common/Ring";
import OrbitIcon from "../common/Spinreuseable";
import { CurvedText } from "../common/OrbitText";

export function ServicesSection() {
  const services = [
    {
      id: "uiux",
      label: "UI/UX",
      icon: FigmaIcon,
      description:
        "We craft intuitive and engaging user experiences through meticulous research, wireframing, and prototyping. Our process is designed to understand user behavior deeply, ensuring the final product is not only visually appealing but also easy to navigate and highly effective at achieving your business objectives, leading to increased user satisfaction and conversion.",
      highlights: [],
    },
    {
      id: "javascript",
      label: "JavaScript",
      icon: Code,
      description:
        "JavaScript is a versatile programming language primarily used for web development. It enables interactive features on websites, from dynamic content updates to complex animations. Originally designed for browsers, JavaScript now powers server-side applications through Node.js, making it essential for modern full-stack development.",
      highlights: [
        "React & Next.js",
        "Node.js APIs",
        "Performance Optimization",
        "Testing",
      ],
    },
    {
      id: "python",
      label: "Python",
      icon: Code,
      description:
        "Python is a high-level, interpreted programming language celebrated for its clean, readable syntax that emphasizes code clarity. It's incredibly versatile, powering everything from web applications and automation scripts to data science, artificial intelligence, and machine learning projects. Python's extensive standard library and rich ecosystem of third-party packages make development.",
      highlights: [
        "Django/FastAPI",
        "Database Design",
        "API Development",
        "DevOps",
      ],
    },
    {
      id: "mobile",
      label: "Mobile App",
      icon: Smartphone,
      description:
        "Mobile app development involves creating software applications for smartphones and tablets. Developers use platforms like iOS (Swift/Objective-C) and Android (Kotlin/Java), or cross-platform frameworks like React Native and Flutter for efficiency. Modern mobile apps leverage device features like cameras, GPS, and sensors while focusing on intuitive user interfaces, performance optimization.",
      highlights: [
        "React Native",
        "iOS/Android",
        "App Store Optimization",
        "Push Notifications",
      ],
    },
    {
      id: "ecommerce",
      label: "Ecommerce",
      icon: ShoppingCart,
      description:
        "E-commerce enables businesses to sell products and services online through digital platforms. It encompasses online stores, payment processing, inventory management, and customer relationship tools. Modern e-commerce platforms like Shopify, WooCommerce, and Magento offer seamless shopping experiences with features like secure checkout, personalized recommendations, mobile optimization, and integration .",
      highlights: [
        "Shopify/WooCommerce",
        "Payment Integration",
        "Inventory Management",
        "Analytics",
      ],
    },
    {
      id: "nocode",
      label: "No-Code",
      icon: Zap,
      description:
        "No-code platforms enable anyone to build applications, websites, and workflows without programming knowledge. Using visual interfaces with drag-and-drop components, users can create functional software solutions quickly. Popular tools like Webflow, Bubble, and Airtable democratize development, empowering entrepreneurs and businesses to launch products faster while reducing costs and technical barriers.",
      highlights: [
        "Webflow",
        "Airtable",
        "Zapier Automation",
        "MVP Development",
      ],
    },
  ];

  const [selected, setSelected] = useState(services[0].id);
  const active = services.find((s) => s.id === selected)!;
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 min-h-[500px] lg:h-[696px] rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-12 lg:mb-16 gap-4 lg:px-16">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
              Our Services
            </h2>
            <p className="text-xs sm:text-sm text-white sm:hidden">
              We design and develop digital experiences that drive growth.
            </p>
          </div>
          <p className="hidden sm:block text-sm text-white max-w-md">
            We design and develop digital experiences that drive growth.
          </p>
          <div className="hidden lg:flex items-center gap-3 relative">
            <Button
              onClick={() => navigate("/services")}
              variant="ghost"
              size={undefined}
              className="
    !bg-[#D0FF71]
    !text-black
    !font-bold

    !px-6
    !py-4
    !rounded-full

    hover:!bg-lime-300
    hover:!-translate-x-5
    hover:!pl-6 hover:!pr-6

    !transition-all !duration-1000 !ease-out
    flex items-center gap-2 whitespace-nowrap
    text-base
  "
            >
              View All Services
            </Button>
            <img
              src="/Arrow 1-1.svg"
              alt="arrow"
              className="p-[14px] rounded-full bg-lime-300 text-brand-ink absolute  left-[142px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Service Menu Buttons */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {/* Mobile & Tablet: Horizontal scrollable buttons */}
            <div className="flex lg:hidden overflow-x-auto space-x-3 pb-4 scrollbar-hide justify-center md:justify-center">
              <div className="flex space-x-3 mx-auto">
                {services.map((service) => {
                  const isActive = selected === service.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setSelected(service.id)}
                      className={`flex-shrink-0 py-2 px-3 md:px-4 font-black rounded-lg transition-all text-sm md:text-base ${
                        isActive
                          ? "bg-lime-400 text-black font-black"
                          : "bg-white text-black hover:bg-gray-100 font-black"
                      }`}
                    >
                      {service.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop: Vertical buttons */}
            <div className="hidden lg:flex lg:flex-col space-y-5">
              {services.map((service) => {
                const isActive = selected === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelected(service.id)}
                    className={`w-[50%] relative left-[5vw] text-center py-[12px] px-1 rounded-xl 
transition-all duration-1000
hover:bg-lime-300
hover:shadow-[0_0_25px_#D0FF71] ${
                      isActive
                        ? "bg-lime-400 text-white font-black"
                        : "bg-white text-black hover:bg-gray-100 font-black"
                    }`}
                  >
                    {service.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Service Detail Card */}
          <div className="lg:col-span-5 order-1 lg:order-2 bg-black border border-[#D0FF71]/50 shadow-[0_0_15px_#D0FF71] rounded-2xl p-4 sm:p-6 lg:p-8 w-full lg:w-[85%] lg:relative lg:right-[6vw] lg:h-[100%] mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lime-400 p-2 rounded-full flex-shrink-0">
                {typeof active.icon === "string" ? (
                  <img
                    src={active.icon}
                    alt={active.label}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                ) : (
                  <active.icon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                )}
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold">
                {active.label}
              </h3>
            </div>

            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              {active.description}
            </p>

            {/* Mobile CTA Button */}
            <div className="flex lg:hidden items-center justify-center w-full">
              <Button
                onClick={() => navigate("/services")}
                className="flex !text-brand-ink items-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-bold text-sm w-full sm:w-auto justify-center max-w-xs mx-auto"
              >
                View All Services
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 relative">
              <Button
                onClick={() => navigate("/services")}
                variant="ghost"
                size={undefined}
                className="
    !bg-[#D0FF71]
    !text-black
    !font-bold

    !px-6
    !py-4
    !ml-5
    !rounded-full

    hover:!bg-lime-300
    hover:!-translate-x-5
    hover:!pl-6 hover:!pr-6

    !transition-all !duration-1000 !ease-out
    flex items-center gap-2 whitespace-nowrap
    text-base
  "
              >
                View All Services
              </Button>
              <img
                src="/Arrow 1-1.svg"
                alt="arrow"
                className="p-[14px] rounded-full bg-lime-300 text-brand-ink absolute  left-[165px]"
              />
            </div>
          </div>

          {/* Service Wheel */}
          <div className="lg:col-span-4 order-3 flex justify-center items-center lg:relative lg:right-20 ">
            <div className="relative w-full max-w-[500px] aspect-square mx-auto ">
              <div className="absolute inset-0 flex items-center justify-center z-20">
    <div className="w-28 h-28 rounded-full bg-purple-500 flex items-center justify-center">
      <span className="text-white font-semibold">Center</span>
    </div>
  </div>

              {/* Outer Ring  */}
              <Ring size={380} borderWidth={0.1} duration={24}>
                <OrbitIcon
                  angle={0}
                  radius={160}
                  icon={
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#D0FF71] shadow-[0_0_10px_rgba(208,255,113,0.9)]">
                      <ShoppingCart className="w-7 h-7 text-black" />
                    </div>
                  }
                />
                <OrbitIcon
                  angle={150}
                  radius={190}
                  icon={
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#D0FF71] shadow-[0_0_10px_rgba(208,255,113,0.9)]">
                      <Zap className="w-7 h-7 text-black" />
                    </div>
                  }
                />
                <OrbitIcon
                  angle={260}
                  radius={210}
                  icon={
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(208,255,113,0.9)]">
                      <Code className="w-7 h-7 text-black" />
                    </div>
                  }
                />

                <CurvedText
                  size={410}
                  duration={10}
                  texts={["JavaScript ", "E-commerce", "No-code"]}
                />
              </Ring>

              {/* middle Ring */}


               <Ring size={270} borderWidth={0.1} duration={14}>
                <OrbitIcon
                  angle={0}
                  radius={100}
                  icon={
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(208,255,113,0.9)]">
                      <Smartphone className="w-7 h-7 text-white" />
                    </div>
                  }
                />
                <OrbitIcon
                  angle={140}
                  radius={135}
                  icon={
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#D0FF71] shadow-[0_0_10px_rgba(208,255,113,0.9)]">
                     <img src={FigmaIcon}  className="h-7 w-7 "/>
                    </div>
                  }
                />
                <OrbitIcon
                  angle={240}
                  radius={160}
                  icon={
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(208,255,113,0.9)]">
                      <Palette className="w-7 h-7 text-white" />
                    </div>
                  }
                />

                <CurvedText
                  size={220}
                  duration={10}
                  texts={["Python ", "App Dev", "UI/UX"]}
                />
              </Ring>

              {/* inner Ring */}
              <Ring size={150} borderWidth={0.1} duration={40} >
                 <CurvedText
                  size={100}
                  duration={10}
                  texts={["", " ", ""]}
                />
              </Ring>

           



            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
