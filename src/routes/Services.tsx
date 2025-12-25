import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer as FooterSimple } from "../components/layout/footer";
import {
  Code2,
  Terminal,
  Smartphone,
  ShoppingBag,
  Zap,
  Music,
  Play,
  FastForward,
  User,
  FileText,
} from "lucide-react";
import uiuxWorkflowImg from "../images/UiUx-workflow.png";
import javascriptWorkflowImg from "../images/javascript-workflow.png.png";
import pythonWorkflowImg from "../images/python-workflow.png";
import mobileAppWorkflowImg from "../images/mobile-app-workflow.png";
import ecommerceWorkflowImg from "../images/ecomerce-workflow.png";
import noCodeWorkflowImg from "../images/node-code-workflow.png";
import UXIcon from "@/assets/figma-icon-services.png";
import CrossCodeIcon from "@/assets/cross-code.png";
import AxLogoIcon from "@/assets/ax-logo.png";

/**
 * Landing page composition.
 */
export default function Services() {
  const navigate = useNavigate();

  const handleSectionClick = (sectionName) => {
    // Use React Router's navigate for smooth page transitions
    const slug = sectionName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/services/${slug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Services section */}
        <div id="services" className="pt-10">
          {/* Header */}
          <section className="pt-10 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <p className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                  Our Services
                </p>
                <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    We're A Digital Marketing Agency With Expertise
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We help businesses grow online by crafting tailored
                    strategies that boost visibility, increase engagement, and
                    drive real results. From SEO and social media marketing to
                    content creation and paid campaigns, our team ensures your
                    brand stands out in the digital space.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* UI/UX Design Workflow Section */}
          <section
            className="pb-4 px-6 cursor-pointer transition-all duration-300 "
            onClick={() => handleSectionClick("UiUx-workflow")}
          >
            <div className="max-w-7xl mx-auto">
              {/* Content Grid */}
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
                {/* Left Content */}
                <div>
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#D0FF71] rounded-xl flex items-center justify-center mb-8 shadow-lg">
                    <img src={UXIcon} alt="UI/UX" className="w-8 h-8" />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    UI/UX Design
                    <br />
                    Workflow
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base">
                    The UI/UX design workflow is a structured process that
                    ensures every digital product is both visually appealing and
                    user-friendly. It begins with research and discovery, where
                    user needs, business goals, and market insights are analyzed
                    to build a strong foundation. From there, information
                    architecture is developed to organize content and define
                    clear navigation paths. Wireframes and prototypes are then
                    created to map out layouts and simulate user journeys,
                    allowing early testing and feedback. Once the structure is
                    validated, the visual design phase focuses on applying
                    colors, typography, and branding elements to create a modern
                    and consistent look.
                  </p>
                </div>

                {/* Right Illustration */}
                <div className="relative">
                  <div className="block md:hidden w-full max-w-[704px] mx-auto rounded-2xl overflow-hidden">
                   {/* mobile image */}
                   
                    <img
                      src={uiuxWorkflowImg}
                      alt="Mobile"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className=" hidden md:block relative w-[704px] aspect-[704/691] overflow-hidden ">
                    {/* desktop version */}
                    {/* Main Background Image */}
                    <div
                      className="absolute inset-0 bg-white"
                      style={{
                        clipPath: `path("M35,0H669A35,35 0,0,1 704,35V571A30,30 0,0,1 674,601H574A30,30 0,0,0 544,631V661A30,30 0,0,1 514,691H35A35,35 0,0,1 0,656V35A35,35 0,0,1 35,0Z")`,
                      }}
                    >
                      <img
                        src={uiuxWorkflowImg}
                        alt="UI/UX Design Workflow"
                        className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                      />
                    </div>
                  </div>
                  {/* Corner box - now properly clipped with the container */}
                  <div className="absolute bottom-0 right-0 h-10 w-16 sm:h-[75px] sm:w-[140px] bg-violet-600 rounded-2xl p-4 shadow-lg z-10"></div>
                </div>
              </div>
            </div>
          </section>

          {/* JavaScript Workflow Section */}
          <section
            className="py-10 px-6 cursor-pointer transition-all duration-300 "
            onClick={() => handleSectionClick("JavaScript Workflow")}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
                {/* Left Illustration */}
               <div className="relative">

                {/* mobile View */}
                  <div className="block md:hidden w-full max-w-[704px] mx-auto rounded-2xl overflow-hidden">
                    <img
                      src={javascriptWorkflowImg}
                      alt="Mobile"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className=" hidden md:block relative w-[704px] aspect-[704/691] overflow-hidden ">
                    {/* desktop version */}
                    {/* Main Background Image */}
                    <div
                      className="absolute inset-0 bg-white"
                      style={{
                        clipPath: `path("M35,0H669A35,35 0,0,1 704,35V571A30,30 0,0,1 674,601H574A30,30 0,0,0 544,631V661A30,30 0,0,1 514,691H35A35,35 0,0,1 0,656V35A35,35 0,0,1 35,0Z")`,
                      }}
                    >
                      <img
                        src={javascriptWorkflowImg}
                        alt="UI/UX Design Workflow"
                        className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                      />
                    </div>
                  </div>
                  {/* Corner box - now properly clipped with the container */}
                  <div className="absolute bottom-0 right-0 h-10 w-16 sm:h-[75px] sm:w-[140px] bg-[#D0FF71] rounded-2xl p-4 shadow-lg z-10
                  "></div>
                </div>
                {/* Right Content */}
                <div>
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#D0FF71] rounded-xl flex items-center justify-center mb-8 shadow-lg">
                    <img
                      src={CrossCodeIcon}
                      alt="JavaScript"
                      className="w-8 h-8"
                    />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    JavaScript Workflow
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base">
                    The JavaScript workflow is designed to streamline the
                    process of building dynamic, interactive, and scalable web
                    applications. It begins with setting up a development
                    environment using modern tools and frameworks such as
                    Node.js, React, or Vue.js. Developers structure the codebase
                    into reusable modules to maintain clarity and efficiency.
                    Package managers like npm or Yarn are used to handle
                    dependencies, while build tools such as Webpack, Babel, or
                    Vite optimize the code for performance and compatibility
                    across different browsers. During development, version
                    control with Git ensures smooth collaboration among teams,
                    and automated testing frameworks help identify issues early.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Python Workflow Section */}
          <section
            className="py-8 px-6 cursor-pointer transition-all duration-300 "
            onClick={() => handleSectionClick("Python Workflow")}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
                {/* Left Content */}
                <div>
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#D0FF71] rounded-xl flex items-center justify-center mb-8 shadow-lg">
                    <Code2 className="w-8 h-8 text-black" />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Python Workflow
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base">
                    A Python workflow is a systematic approach to developing
                    robust, scalable, and efficient applications using the
                    Python programming language. It begins with project setup,
                    where virtual environments are established to manage
                    dependencies and ensure project isolation. Developers then
                    structure the codebase into modular and reusable functions
                    to enhance modularity and maintainability. Popular libraries
                    such as NumPy, Pandas, and Flask are often integrated
                    depending on the project's needs, whether it's web
                    development, data analysis, or machine learning. Version
                    control with Git is essential for tracking changes and
                    collaboration, while automated testing frameworks like
                    PyTest or unittest help validate functionality at every
                    stage. Debugging and performance tuning are essential to
                    optimize execution speed and resource usage.
                  </p>
                </div>

                {/* Right Illustration */}
                <div className="relative">
                  {/* <div className="relative rounded-3xl overflow-hidden "> */}
                  {/* Main Background Image */}
                 {/* mobile View */}
                  <div className="block md:hidden w-full max-w-[704px] mx-auto rounded-2xl overflow-hidden">
                    <img
                      src={javascriptWorkflowImg}
                      alt="Mobile"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className=" hidden md:block relative w-[704px] aspect-[704/691] overflow-hidden ">
                    {/* desktop version */}
                    {/* Main Background Image */}
                    <div
                      className="absolute inset-0 bg-white"
                      style={{
                        clipPath: `path("M30,0H660A30,30 0,0,1 690,30V640A30,30 0,0,1 660,670H30A30,30 0,0,1 0,640V125A25,25 0,0,1 25,100H115A25,25 0,0,0 140,75V25A25,25 0,0,1 165,0")`,
                      }}
                    >
                      <img
                        src={pythonWorkflowImg}
                        alt="UI/UX Design Workflow"
                        className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                      />
                    </div>
                  </div>
                  {/* Corner box - now properly clipped with the container */}
                
                  <div className="
                 absolute top-2 left-0 h-10 w-16 sm:h-[70px] sm:w-[125px] bg-brand-purple rounded-2xl p-4 shadow-lg z-10"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Mobile App Section */}
          <section
            className="py-8 px-6 cursor-pointer transition-all duration-300 "
            onClick={() => handleSectionClick("Mobile App")}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
                {/* Left Illustration */}
                <div className="relative">

                {/* mobile View */}
                  <div className="block md:hidden w-full max-w-[704px] mx-auto rounded-2xl overflow-hidden">
                    <img
                      src={mobileAppWorkflowImg}
                      alt="Mobile"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className=" hidden md:block relative w-[704px] aspect-[704/691] overflow-hidden ">
                    {/* desktop version */}
                    {/* Main Background Image */}
                    <div
                      className="absolute inset-0 bg-white"
                      style={{
                        clipPath: `path("M35,0H669A35,35 0,0,1 704,35V571A30,30 0,0,1 674,601H574A30,30 0,0,0 544,631V661A30,30 0,0,1 514,691H35A35,35 0,0,1 0,656V35A35,35 0,0,1 35,0Z")`,
                      }}
                    >
                      <img
                        src={mobileAppWorkflowImg}
                        alt="UI/UX Design Workflow"
                        className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                      />
                    </div>
                  </div>
                  {/* Corner box - now properly clipped with the container */}
                  <div className="absolute bottom-0 right-0 h-10 w-16 sm:h-[75px] sm:w-[140px] bg-[#D0FF71] rounded-2xl p-4 shadow-lg z-10"></div>
                </div>
                {/* Right Content */}
                <div className="order-1 lg:order-2">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#D0FF71] rounded-xl flex items-center justify-center mb-8 shadow-lg">
                    <img
                      src={AxLogoIcon}
                      alt="Mobile App"
                      className="w-8 h-8"
                    />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Mobile App
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base">
                    The mobile app development workflow is a structured process
                    that ensures applications are optimized for performance
                    across various different devices and platforms. It begins
                    with research and planning, where user needs, market
                    analysis, and technical requirements are identified. The
                    design phase focuses on creating intuitive UI/UX wireframes,
                    prototypes, and visual elements tailored to map out app
                    functionality, features, and navigation flows. The
                    development stage involves coding using frameworks like
                    React Native, Flutter, or native languages for
                    platform-specific applications. Once the design is
                    finalized, developers build the app using frameworks to work
                    on React Native, Flutter, or native technologies for iOS and
                    Android.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Ecommerce Section */}
          <section
            className="py-8 px-6 cursor-pointer transition-all duration-300 "
            onClick={() => handleSectionClick("Ecommerce")}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
                {/* Left Content */}
                <div>
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#D0FF71] rounded-xl flex items-center justify-center mb-8 shadow-lg">
                    <img src={AxLogoIcon} alt="Ecommerce" className="w-8 h-8" />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Ecommerce
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base">
                    The eCommerce development workflow is designed to create
                    secure, scalable, and user-friendly online shopping
                    platforms that deliver a seamless buying experience. It
                    begins with research and planning, where business goals,
                    target audiences, and competitor strategies are analyzed to
                    shape the platform's structure. The process continues with
                    wireframing and UI/UX design to define intuitive navigation,
                    product catalogs, and checkout flows. Developers then build
                    the platform using technologies such as Shopify,
                    WooCommerce, Magento, or custom frameworks, integrating
                    secure payment gateways, product management systems, and
                    inventory tracking. APIs and third-party services are added
                    to enable features like shipping, analytics, and customer
                    relationship management.
                  </p>
                </div>

                {/* Right Illustration */}
                  <div className="relative">

                {/* mobile View */}
                  <div className="block md:hidden w-full max-w-[704px] mx-auto rounded-2xl overflow-hidden">
                    <img
                      src={mobileAppWorkflowImg}
                      alt="Mobile"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className=" hidden md:block relative w-[704px] aspect-[704/691] overflow-hidden ">
                    {/* desktop version */}
                    {/* Main Background Image */}
                    <div
                      className="absolute inset-0 bg-white"
                      style={{
                        clipPath: `path("M35,0H669A35,35 0,0,1 704,35V571A30,30 0,0,1 674,601H574A30,30 0,0,0 544,631V661A30,30 0,0,1 514,691H35A35,35 0,0,1 0,656V35A35,35 0,0,1 35,0Z")`,
                      }}
                    >
                      <img
                        src={mobileAppWorkflowImg}
                        alt="UI/UX Design Workflow"
                        className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                      />
                    </div>
                  </div>
                  {/* Corner box - now properly clipped with the container */}
                  <div className="absolute bottom-0 right-0 h-10 w-16 sm:h-[75px] sm:w-[140px] bg-[#D0FF71] rounded-2xl p-4 shadow-lg z-10"></div>
                </div>
              </div>
            </div>
          </section>

          {/* No-Code Workflow Section */}
          <section
            className="py-8 px-6 cursor-pointer transition-all duration-300 "
            onClick={() => handleSectionClick("No-Code Workflow")}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
                {/* Left Illustration */}
                  <div className="relative">

                {/* mobile View */}
                  <div className="block md:hidden w-full max-w-[704px] mx-auto rounded-2xl overflow-hidden">
                    <img
                      src={noCodeWorkflowImg}
                      alt="Mobile"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className=" hidden md:block relative w-[704px] aspect-[704/691] overflow-hidden ">
                    {/* desktop version */}
                    {/* Main Background Image */}
                    <div
                      className="absolute inset-0 bg-white"
                      style={{
                        clipPath: `path("M35,0H669A35,35 0,0,1 704,35V571A30,30 0,0,1 674,601H574A30,30 0,0,0 544,631V661A30,30 0,0,1 514,691H35A35,35 0,0,1 0,656V35A35,35 0,0,1 35,0Z")`,
                      }}
                    >
                      <img
                        src={noCodeWorkflowImg}
                        alt="UI/UX Design Workflow"
                        className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                      />
                    </div>
                  </div>
                  {/* Corner box - now properly clipped with the container */}
                  <div className="absolute bottom-0 right-0 h-10 w-16 sm:h-[75px] sm:w-[140px] bg-[#D0FF71] rounded-2xl p-4 shadow-lg z-10"></div>
                </div>

                {/* Right Content */}
                <div className="order-1 lg:order-2">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#D0FF71] rounded-xl flex items-center justify-center mb-8 shadow-lg">
                    <img src={UXIcon} alt="UI/UX" className="w-8 h-8" />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    No-Code Workflow
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base">
                    The no-code workflow is designed to empower businesses and
                    individuals to build digital solutions without the need for
                    traditional programming. It begins with defining project
                    goals and mapping out processes that need to be automated or
                    digitized. Using intuitive drag-and-drop platforms such as
                    Webflow, Bubble, Airtable, or Zapier, users can design
                    applications, websites, and workflows visually. The workflow
                    continues with creating user interfaces, connecting
                    databases, and integrating APIs through pre-built
                    connectors, making it possible to launch functional products
                    in a fraction of the time compared to conventional
                    development. Testing and iterations are performed to ensure
                    usability, efficiency, and accuracy of automated processes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <FooterSimple />
    </div>
  );
}
