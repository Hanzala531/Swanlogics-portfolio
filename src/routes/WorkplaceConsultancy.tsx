import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer as FooterSimple } from '../components/layout/footer';
import Testimonials from '../components/common/testimonalsSection'
import { Globe, Search, Megaphone, PenTool, ChevronLeft, ChevronRight } from 'lucide-react';
import BannerImage from '../images/PortfolioImages/page03/branding-portfolio-banner.png';
import Member01 from '../images/PortfolioImages/page03/teamIMage1.svg';
import Member02 from '../images/PortfolioImages/page03/teamIMage2.svg';
import Member03 from '../images/PortfolioImages/page03/teamIMage3.svg';
import Member04 from '../images/PortfolioImages/page03/teamImage4.svg';
import slider01 from '../images/PortfolioImages/page03/portfolio-slider-01.png';
import slider02 from '../images/PortfolioImages/page03/portfolio-slider-02.png';
import slider03 from '../images/PortfolioImages/page03/portfolio-slider-03.png';
import Responsiveness01 from '../images/PortfolioImages/page03/portfolio-responsiveness-01.png';
import Responsiveness02 from '../images/PortfolioImages/page03/portfolio-responsiveness-02.png';
import Responsiveness03 from '../images/PortfolioImages/page03/portfolio-responsiveness-03.png';
import project01 from '../images/uiux-project-01.png';
import project02 from '../images/uiux-project-02.png';
import project03 from '../images/uiux-project-03.png';
import project04 from '../images/uiux-project-04.png';


export default function WorkplaceConsultancy() {
  // Carousel states (for brand repositioning section)
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Projects showcase states (updated to match UiUXWorkflow approach)
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const firstCardRef = React.useRef<HTMLDivElement | null>(null);
  const [stepWidth, setStepWidth] = React.useState(0);

  const slides = [
    {
      id: 1,
      title: "Your Child's Safety Comes First",
      image: slider02
    },
    {
      id: 2,
      title: "Creative Design Solutions",
      image: slider01
    },
    {
      id: 3,
      title: "Premium Typography",
      image: slider03
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Services and Team Members Data
  const services = [
    { name: 'Website', icon: Globe },
    { name: 'SEO', icon: Search },
    { name: 'Brand Repositioning', icon: Megaphone },
    { name: 'Content Writing', icon: PenTool },
    { name: 'AI', icon: Globe }
  ];

  const teamMembers = [
    {
      id: 1,
      image: Member01,
      name: "Team Member 1"
    },
    {
      id: 2,
      image: Member02,
      name: "Team Member 2"
    },
    {
      id: 3,
      image: Member03,
      name: "Team Member 3"
    },
    {
      id: 4,
      image: Member04,
      name: "Team Member 4"
    }
  ];

  // Sample projects data (duplicated for infinite scroll)
  const projects = [
    {
      id: 1,
      title: "Refreshing Gary Neville's Digital Presence",
      subtitle: "Where Art Meets Emotion In Every Shot",
      year: "2025",
      author: "Gary Neville",
      imageUrl: project01
    },
    {
      id: 2,
      title: "Furniture Designed To The Greatest Extent",
      subtitle: "Driving Innovative Growth",
      year: "2025",
      author: "Gary Neville",
      imageUrl: project02
    },
    {
      id: 3,
      title: "A Workplace Consultancy Creating Inspiring Environments",
      subtitle: "Brand, Design & Development Agency",
      year: "2025",
      author: "Gary Neville",
      imageUrl: project03
    },
    {
      id: 4,
      title: "Furniture Designed To The Greatest Extent",
      subtitle: "Driving Innovative Growth",
      year: "2025",
      author: "Gary Neville",
      imageUrl: project04
    },
  ];

  // Projects navigation functions (updated to match UiUXWorkflow)
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

  const nextProject = () => {
    if (!scrollRef.current || stepWidth === 0) return;
    const sc = scrollRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = sc;
    let newLeft = scrollLeft + stepWidth;
    // wrap to start when reaching the end
    if (newLeft > scrollWidth - clientWidth + 5) newLeft = 0;
    sc.scrollTo({ left: newLeft, behavior: "smooth" });
    setCurrentIndex(Math.round(newLeft / stepWidth) % projects.length);
  };

  const prevProject = () => {
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
      <main className='py-28'>
        {/* Main hero section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between mb-12">
            {/* Services List */}
            <div className="flex flex-wrap gap-4 lg:gap-6 mb-8 lg:mb-0 w-full">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-slate-100 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <IconComponent className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-medium text-gray-700">{service.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Heading */}
            <div className="flex-shrink-0">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                A Workplace For Branding <br></br>Portfolio
              </h2>
            </div>
          </div>

          {/* Image Container */}
          <div className="rounded-2xl overflow-hidden relative h-[600px] mb-12">
            <img
              src={BannerImage}
              alt="UI/UX Designer working at desk with multiple monitors"
              className="w-full h-full object-fit transform transition-transform duration-[2000ms] ease-in-out hover:scale-110"
            />
          </div>
        </div>

        {/* Team Members Section */}
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                    <span className="block">Creating Workplaces That Embody Their Client's Values And Aspirations Through Sustainable, Transformative Change</span>
                  </h1>
                </div>

                {/* Team Photos */}
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    {teamMembers.map((member) => (
                      <div key={member.id} className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-12 h-12 rounded-2xl border-3 border-white object-cover shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Description and Stats */}
              <div className="space-y-8">
                <div className="text-gray-600 text-xl leading-relaxed">
                  <p>
                    We have collaborated closely with the client to understand their business needs and create custom solutions that work for them, aligning with their values and aspirations. Through extensive planning, research and collaboration, we have been successful in implementing comprehensive workplace transformation programs that have enhanced collaboration, innovation and engagement, promoting sustainable growth.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center lg:text-left">
                    <div className="text-sm text-gray-500 tracking-wide">Industry</div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">Workplace</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-sm text-gray-500 tracking-wide">Duration</div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">14 Weeks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand repositioning section */}
        <div className=" py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-block rounded-full px-4 py-2 text-sm font-medium text-gray-700 mb-4">
                Brand Repositioning
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                A Visionary Brand<br />Refresh
              </h2>
            </div>

            {/* Infinite Carousel Container */}
            <div className="relative overflow-hidden mb-8">
              <div className="flex justify-center">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 574}px)` }}
                >
                  {[...slides, ...slides, ...slides].map((slide, index) => {
                    return (
                      <div
                        key={`${slide.id}-${index}`}
                        className={`flex-shrink-0 transition-all w-[550px] duration-500 ease-in-out mx-2`}
                      >
                        <div className={` rounded-lg overflow-hidden `}>
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-96 object-cover"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Responsiveness section */}
        <div className="bg-black text-white rounded-t-3xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Responsive Design Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <h2 className="text-4xl text-white sm:text-5xl font-bold leading-tight">
                  Mobile Responsive Design
                </h2>

                <div className="space-y-4 text-white text-base leading-relaxed">
                  <p>
                    In today's digital world, users expect smooth and reliable access to websites
                    from any device. Our responsive web design approach ensures that
                    your site automatically adapts to different screen sizes and orientations.
                  </p>

                  <p>
                    Whether viewed on an iPhone, Android device, or tablet, your
                    website will maintain its visual consistency, fast performance, and easy
                    navigation. With touch-friendly elements, optimized speed for mobile
                    networks, and cross-browser compatibility, your business remains
                    accessible anytime, anywhere. The ensures a seamless user experience that
                    helps you reach more customers and keep them engaged on the go.
                  </p>

                  <p>
                    Fast-loading times, intuitive navigation, and consistent design elements make
                    it easy for users to interact with your website anytime, anywhere. This
                    flexibility enhances engagement and ensures your business stays accessible
                    on the go.
                  </p>
                </div>
              </div>

              {/* Right Column - Mobile Devices */}
              <div className="relative flex justify-center items-center">
                {/* Main Phone */}
                <div className="relative z-10  ">
                  <div className=" rounded-[2rem] overflow-hidden">
                    {/* Phone Screen */}
                    <div className=" rounded-t-2xl p-4 shadow-2xl" >
                      <img
                        src={Responsiveness01}
                        alt="Mobile website interface"
                        className="h-[500px] w-full object-fit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Website Laptop View Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Laptop */}
              <div className="relative flex justify-center items-center order-2 lg:order-1">
                {/* Main Laptop */}
                <div className="relative z-20">
                  <div className="relative">
                    {/* Laptop Screen */}
                    <div className=" rounded-t-2xl p-4 shadow-2xl">
                      <img
                        src={Responsiveness02}
                        alt="Website laptop view"
                        className="w-full h-full object-fit"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Text Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-4xl text-white sm:text-5xl font-bold leading-tight">
                  Website Laptop View
                </h2>

                <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                  <p>
                    While mobile browsing has become increasingly popular, laptops and
                    desktops remain the preferred choice for many users who want a more
                    immersive and comprehensive browsing experience. Our designs take
                    full advantage of the larger screen space, offering a clean and structured
                    layout that highlights your brand identity while making information easy to
                    explore.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 flex" >
              {/* Bottom Description */}
              <div className="mt-16 max-w-2xl relative flex">
                <p className="text-gray-300 text-base leading-relaxed">
                  The design emphasizes clarity, with high-quality images, readable
                  typography, and well-organized sections that allow users to quickly find
                  what they need. Interactive features such as dashboards, filters, search
                  tools, and navigation menus are carefully optimized for desktop use,
                  enabling smooth multitasking and effortless browsing. With this setup,
                  visitors can explore your products, services, or content in greater depth,
                  making their journey more engaging and informative. A strong desktop
                  presence not only showcases your brand's credibility but also creates a sense
                  of professionalism that encourages users to stay longer, engage more, and
                  convert into loyal customers.
                </p>
              </div>
              <div className="relative z-20">
                <div className="relative">
                  {/* Laptop Screen */}
                  <div className=" rounded-t-2xl p-4 shadow-2xl">
                    <img
                      src={Responsiveness03}
                      alt="Website laptop view"
                      className="w-full h-full object-fit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Showcase Section - Updated to match UiUXWorkflow */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header with Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our Favorite Web Design Projects
              </h2>
              
              <div className="flex gap-3">
                <button
                  onClick={prevProject}
                  className="w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
                  aria-label="Previous projects"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextProject}
                  className="w-12 h-12 bg-lime-400 hover:bg-lime-500 text-black rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
                  aria-label="Next projects"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* hide-scrollbar styles */}
            <style>{`
              .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
              .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>

            {/* Projects Container - Horizontal Scroll */}
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
                >
                  {/* Project Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 mb-6">
                    <div className="aspect-[4/3]">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>

                  {/* Project Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="font-medium">{project.year}</span>
                      <span className="w-1 h-1 bg-lime-400 rounded-full"></span>
                      <span>{project.author}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <Testimonials />
      </main>
      <FooterSimple />
    </div>
  );
}