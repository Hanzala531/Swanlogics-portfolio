import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer as FooterSimple } from '../components/layout/footer';
import image01 from '../images/PortfolioImages/portfolio-main-01.png'
import image02 from '../images/PortfolioImages/portfolio-main-02.png'
import image03 from '../images/PortfolioImages/portfolio-main-03.png'
import image04 from '../images/PortfolioImages/portfolio-main-04.png'
import image05 from '../images/PortfolioImages/portfolio-main-05.png'
import image06 from '../images/PortfolioImages/portfolio-main-06.jpg'
import { useNavigate } from 'react-router-dom';

export default function PortfolioShowcase() {
  const navigate = useNavigate();

  const portfolioItems = [
    {
      image: image01,
      url : "Branding Portfolio",
      title: "A workplace For Branding Portfolio",
      year: "2025",
      client: "Gary Neville"
    },
    {
      image: image02,
      url : "Furniture Design",
      title: "Furniture Designed To The Greatest Extent",
      year: "2025",
      client: "Gary Neville"
    },
    {
      image: image03,
      url : "Workplace Consultancy",
      title: "A Workplace Consultancy Creating Inspiring Environments",
      year: "2025",
      client: "Gary Neville"
    },
    {
      image: image04,
      url : "Global Talent Group",
      title: "Redefining A leading Global Talent Group",
      year: "2025",
      client: "Gary Neville"
    },
    {
      image: image05,
      url : "Digital Presence",
      title: "Refreshing Gary Neville's digital presence",
      year: "2025",
      client: "Gary Neville"
    },
    {
      image: image06,
      url : "Furniture Design Case Study",
      title: "Furniture Designed The Greatest Extent",
      year: "2025",
      client: "Gary Neville"
    }
  ];

  const handleItemClick = (item) => {
    const slug = item.url.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    navigate(`/portfolio/${slug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pb-12 sm:pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {/* Mobile: Single column layout */}
          <div className="block sm:hidden space-y-16">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden cursor-pointer" onClick={() => handleItemClick(item)}>
                <div className="relative h-[350px] w-full perspective-1000 rounded-3xl overflow-hidden">
                  <img 
                    src={item.image}
                    alt="Portfolio Item"
                    className="h-full w-full object-cover transform rotate-x-6 shadow-xl rounded-3xl group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="mt-6 space-y-2">
                  <p className="text-gray-600 text-sm">
                    {item.year} • {item.client}
                  </p>
                  <h3 className="text-gray-900 text-2xl font-bold tracking-tight leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet: Single column with larger cards */}
          <div className="hidden sm:block lg:hidden space-y-20">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500 ease-in-out cursor-pointer" onClick={() => handleItemClick(item)}>
                <div className="relative h-[450px] w-full perspective-1000 rounded-3xl overflow-hidden">
                  <img 
                    src={item.image}
                    alt="Portfolio Item"
                    className="h-full w-full object-cover transform rotate-x-8 shadow-2xl rounded-3xl group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="mt-8 space-y-3 max-w-2xl">
                  <p className="text-gray-600 text-base">
                    {item.year} • {item.client}
                  </p>
                  <h3 className="text-gray-900 text-4xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Original two-column staggered layout */}
          <div className="hidden lg:block">
            {/* Row 1 */}
            <div className="flex gap-8 mb-20 xl:mb-28">
              <div className="group relative overflow-hidden w-1/2 cursor-pointer" onClick={() => handleItemClick(portfolioItems[0])}>
                <div className="relative h-[400px] xl:h-[500px] w-full perspective-1000 rounded-3xl overflow-hidden">
                  <img 
                    src={portfolioItems[0].image}
                    alt="Portfolio Item"
                    className="h-full w-full object-cover transform rotate-x-12 shadow-2xl rounded-3xl group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="mt-6 xl:mt-8 space-y-3">
                 <div className='flex flex-row items-center gap-2 '>
              <p className="text-lg  text-black font-bold  ">
                {portfolioItems[0].year}
              </p>
              <span className="w-2 h-2 bg-[#9B82F6] rounded-full "></span>
              <p className="text-lg  text-black font-bold ">
                 {portfolioItems[0].client}
              </p>
              </div>
                  <h3 className="text-gray-900 text-3xl xl:text-5xl font-bold tracking-tight">
                    {portfolioItems[0].title}
                  </h3>
                </div>
              </div>

              <div className="group relative overflow-hidden top-32 xl:top-40 w-1/2 cursor-pointer" onClick={() => handleItemClick(portfolioItems[1])}>
                <div className="relative h-[400px] xl:h-[500px] w-full perspective-1000 rounded-3xl overflow-hidden">
                  <img 
                    src={portfolioItems[1].image}
                    alt="Portfolio Item"
                    className="h-full w-full object-cover transform rotate-x-12 shadow-2xl rounded-3xl group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="mt-6 xl:mt-8 space-y-3">
                  <div className='flex flex-row items-center gap-2 '>
              <p className="text-lg  text-black font-bold  ">
                {portfolioItems[1].year}
              </p>
              <span className="w-2 h-2 bg-[#9B82F6] rounded-full "></span>
              <p className="text-lg  text-black font-bold ">
                 {portfolioItems[1].client}
              </p>
              </div>
                  <h3 className="text-gray-900 text-3xl xl:text-5xl font-bold tracking-tight">
                    {portfolioItems[1].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-8 mb-20 xl:mb-28">
              <div className="group relative overflow-hidden w-1/2 cursor-pointer" onClick={() => handleItemClick(portfolioItems[2])}>
                <div className="relative h-[400px] xl:h-[500px] w-full perspective-1000 rounded-3xl overflow-hidden">
                  <img 
                    src={portfolioItems[2].image}
                    alt="Portfolio Item"
                    className="h-full w-full object-cover transform rotate-x-12 shadow-2xl rounded-3xl group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="mt-6 xl:mt-8 space-y-3">
                 <div className='flex flex-row items-center gap-2 '>
              <p className="text-lg  text-black font-bold  ">
                {portfolioItems[2].year}
              </p>
              <span className="w-2 h-2 bg-[#9B82F6] rounded-full "></span>
              <p className="text-lg  text-black font-bold ">
                 {portfolioItems[2].client}
              </p>
              </div>
                  <h3 className="text-gray-900 text-3xl xl:text-5xl font-bold tracking-tight">
                    {portfolioItems[2].title}
                  </h3>
                </div>
              </div>

              <div className="group relative overflow-hidden top-32 xl:top-40 w-1/2 cursor-pointer" onClick={() => handleItemClick(portfolioItems[3])}>
                <div className="relative h-[400px] xl:h-[500px] w-full perspective-1000 rounded-3xl overflow-hidden">
                  <img 
                    src={portfolioItems[3].image}
                    alt="Portfolio Item"
                    className="h-full w-full object-cover transform rotate-x-12 shadow-2xl rounded-3xl group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="mt-6 xl:mt-8 space-y-3">
                 <div className='flex flex-row items-center gap-2 '>
              <p className="text-lg  text-black font-bold  ">
                {portfolioItems[3].year}
              </p>
              <span className="w-2 h-2 bg-[#9B82F6] rounded-full "></span>
              <p className="text-lg  text-black font-bold ">
                 {portfolioItems[3].client}
              </p>
              </div>
                  <h3 className="text-gray-900 text-3xl xl:text-5xl font-bold tracking-tight">
                    {portfolioItems[3].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex gap-8 mb-20 xl:mb-28">
              <div className="group relative overflow-hidden w-1/2 cursor-pointer" onClick={() => handleItemClick(portfolioItems[4])}>
                <div className="relative h-[400px] xl:h-[500px] w-full perspective-1000 rounded-3xl overflow-hidden">
                  <img 
                    src={portfolioItems[4].image}
                    alt="Portfolio Item"
                    className="h-full w-full object-cover transform rotate-x-12 shadow-2xl rounded-3xl group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="mt-6 xl:mt-8 space-y-3">
                  <div className='flex flex-row items-center gap-2 '>
              <p className="text-lg  text-black font-bold  ">
                {portfolioItems[4].year}
              </p>
              <span className="w-2 h-2 bg-[#9B82F6] rounded-full "></span>
              <p className="text-lg  text-black font-bold ">
                 {portfolioItems[4].client}
              </p>
              </div>
                  <h3 className="text-gray-900 text-3xl xl:text-5xl font-bold tracking-tight">
                    {portfolioItems[4].title}
                  </h3>
                </div>
              </div>

              <div className="group relative overflow-hidden top-32 xl:top-40 w-1/2 cursor-pointer" onClick={() => handleItemClick(portfolioItems[5])}>
                <div className="relative h-[400px] xl:h-[500px] w-full perspective-1000 rounded-3xl overflow-hidden">
                  <img 
                    src={portfolioItems[5].image}
                    alt="Portfolio Item"
                    className="h-full w-full object-cover transform rotate-x-12 shadow-2xl rounded-3xl group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="mt-6 xl:mt-8 space-y-3">
                <div className='flex flex-row items-center gap-2 '>
              <p className="text-lg  text-black font-bold  ">
                {portfolioItems[5].year}
              </p>
              <span className="w-2 h-2 bg-[#9B82F6] rounded-full "></span>
              <p className="text-lg  text-black font-bold ">
                 {portfolioItems[5].client}
              </p>
              </div>
                  <h3 className="text-gray-900 text-3xl xl:text-5xl font-bold tracking-tight">
                    {portfolioItems[5].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <FooterSimple />
    </div>
  );
}