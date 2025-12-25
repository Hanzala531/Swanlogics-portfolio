import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Project01 from "../../images/uiux-project-01.png";
import Project02 from "../../images/uiux-project-02.png";
import Project03 from "../../images/uiux-project-03.png";
import Project04 from "../../images/uiux-project-04.png";

export function PortfolioShowcase() {
  const navigate = useNavigate();

  const portfolioItems = [
    {
      image: Project01,
      title: "Refreshing Gary Neville's Digital Presence",
      year: "2025",
      client: "Gary Neville",
      slug: "gary-neville-digital-presence",
    },
    {
      image: Project02,
      title: "Furniture Designed To The Greatest Extent",
      year: "2025",
      client: "Gary Neville",
      slug: "driving-innovative-growth",
    },
    {
      image: Project03,
      title: "A Workplace Consultancy Creating Inspiring Environments",
      year: "2025",
      client: "Gary Neville",
      slug: "workplace-consultancy",
    },
    {
      image: Project04,
      title: "Redefining A Leading Global Talent Group",
      year: "2025",
      client: "Gary Neville",
      slug: "digital-marketing-solutions",
    },
  ];

  const handleItemClick = (item) => {
    navigate(`/portfolio/${item.slug}`);
  };

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto relative">
      {/* Responsive heading - fixed positioning */}

      {/* Mobile: Single column layout */}
      <div className="block sm:hidden space-y-16">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <div className="relative h-[350px] w-full perspective-1000 rounded-3xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transform shadow-xl rounded-3xl group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="mt-6 space-y-2">
              <p className="text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
                {item.year} <span className="text-purple-600">•</span>{" "}
                {item.client}
              </p>
              <h3 className="text-gray-900 text-2xl font-bold tracking-tight leading-tight line-clamp-2">
                {item.title}
              </h3>
            </div>
          </div>
        ))}

        {/* Mobile CTA */}
        <div className="pt-8 flex justify-center">
          <Button
            onClick={() => navigate("/portfolio")}
            className="flex !text-brand-ink text-base items-center gap-2 rounded-full bg-lime-300 px-8 py-3 font-bold"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Tablet: Single column with larger cards */}
      <div className="hidden sm:block lg:hidden space-y-20">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500 ease-in-out cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <div className="relative h-[450px] w-full perspective-1000 rounded-3xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transform shadow-2xl rounded-3xl group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="mt-8 space-y-3 max-w-2xl">
              <div className="flex flex-row items-center gap-2 ">
                <p className="text-sm  text-black font-bold  ">
                  {portfolioItems[0].year}
                </p>
                <span className="w-2 h-2 bg-[#9B82F6] rounded-full "></span>
                <p className="text-sm  text-black font-bold ">
                  {portfolioItems[0].client}
                </p>
              </div>
              <h3 className="text-gray-900 text-4xl font-bold tracking-tight line-clamp-2">
                {item.title}
              </h3>
            </div>
          </div>
        ))}

        {/* Tablet CTA */}
        <div className="pt-12 flex justify-start">
          <Button
            onClick={() => navigate("/portfolio")}
            className="flex !text-brand-ink text-lg items-center gap-3 rounded-full bg-lime-300 px-10 py-4 font-bold"
          >
            View All Projects
            <ArrowUpRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Desktop: Two-column staggered layout */}
      <div className="hidden lg:block">
        {/* Row 1 */}
        <div className="flex gap-8 mb-20 xl:mb-0 ">
          <div
            className="group relative overflow-hidden w-1/2 cursor-pointer"
            onClick={() => handleItemClick(portfolioItems[0])}
          >
            <div className="relative w-full group">
              {/* ===== ACTIVE / DEFAULT BLOCK ===== */}
              <div
                className="relative h-[400px] xl:h-[500px] w-full rounded-3xl overflow-hidden
               transition-opacity duration-1000
               group-hover:opacity-0 ease-in-out"
              >
                <img
                  src={portfolioItems[0].image}
                  alt={portfolioItems[0].title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* ===== HOVER BLOCK ===== */}
              <div
                className="absolute inset-0 opacity-0
               transition-opacity duration-1000 delay-200
               group-hover:opacity-100"
              >
                <div className="relative w-[600px] aspect-[585/500] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-white"
                    style={{
                      clipPath: `path("M30,0H210A30,30 0,0,1 240,30V30A30,30 0,0,0 270,60H570A30,30 0,0,1 600,90V470A30,30 0,0,1 570,500H30A30,30 0,0,1 0,470V30A30,30 0,0,1 30,0Z")`,
                    }}
                  >
                    <img
                      src={portfolioItems[0].image}
                      alt="Hover image"
                      className="w-full h-full object-cover "
                    />
                  </div>

                  {/* Branding stays visible */}
                  <div className="flex justify-end space-x-2 pr-16 pt-2 text-center items-center ">
                    <h3 className="text-[17px] font-bold bg-purple-100 px-4 py-1.5 rounded-full">
                      Branding
                    </h3>
                    <h3 className="text-[17px] font-bold bg-purple-100 px-4 py-1.5 rounded-full">
                      Website
                    </h3>
                    <h3 className="text-[17px] font-bold bg-purple-100 px-4 py-1.5 rounded-full">
                      SEO
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 xl:mt-8 space-y-3">
              <div className="flex flex-row items-center gap-2 ">
                <p className="text-sm  text-black font-bold  ">
                  {portfolioItems[0].year}
                </p>
                <span className="w-2 h-2 bg-[#9B82F6] rounded-full "></span>
                <p className="text-sm  text-black font-bold ">
                  {portfolioItems[0].client}
                </p>
              </div>
              <h3 className="text-gray-900 text-3xl xl:text-4xl font-bold tracking-tight line-clamp-2">
                {portfolioItems[0].title}
              </h3>
            </div>
          </div>

          <div
            className=" h-full w-1/2 cursor-pointer"
            onClick={() => handleItemClick(portfolioItems[1])}
          >
            <div className="  h-[400px] xl:h-[700px] w-full perspective-1000 rounded-3xl overflow-hidden">
              <div className="  mb-16 sm:mb-20 lg:mt-2 text-left lg:text-right">
                <h2 className="text-start text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-rf-dewi">
                  Take A Look At Our Projects
                </h2>
              </div>
             <div className="relative w-full group">
              {/* ===== ACTIVE / DEFAULT BLOCK ===== */}
              <div
                className="relative h-[400px] xl:h-[500px] w-full rounded-3xl overflow-hidden
               transition-opacity duration-1000
               group-hover:opacity-0 ease-in-out"
              >
                <img
                  src={portfolioItems[1].image}
                  alt={portfolioItems[1].title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* ===== HOVER BLOCK ===== */}
              <div
                className="absolute inset-0 opacity-0
               transition-opacity duration-1000 delay-200
               group-hover:opacity-100"
              >
                <div className="relative w-[600px] aspect-[585/500] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-white"
                    style={{
                      clipPath: `path("M30,0H210A30,30 0,0,1 240,30V30A30,30 0,0,0 270,60H570A30,30 0,0,1 600,90V470A30,30 0,0,1 570,500H30A30,30 0,0,1 0,470V30A30,30 0,0,1 30,0Z")`,
                    }}
                  >
                    <img
                      src={portfolioItems[1].image}
                      alt="Hover image"
                      className="w-full h-full object-cover "
                    />
                  </div>

                  {/* Branding stays visible */}
                  <div className="flex justify-end space-x-2 pr-16 pt-2 text-center items-center ">
                    <h3 className="text-[17px] font-bold bg-purple-100 px-4 py-1.5 rounded-full">
                      Branding
                    </h3>
                    <h3 className="text-[17px] font-bold bg-purple-100 px-4 py-1.5 rounded-full">
                      Website
                    </h3>
                    <h3 className="text-[17px] font-bold bg-purple-100 px-4 py-1.5 rounded-full">
                      SEO
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="mt-6 xl:mt-0 space-y-3">
              <div className="flex flex-row items-center gap-2 ">
                <p className="text-sm  text-black font-bold  ">
                  {portfolioItems[0].year}
                </p>
                <span className="w-2 h-2 bg-[#9B82F6] rounded-full "></span>
                <p className="text-sm  text-black font-bold ">
                  {portfolioItems[0].client}
                </p>
              </div>
              <h3 className="text-gray-900 text-3xl xl:text-4xl font-bold tracking-tight line-clamp-2">
                {portfolioItems[1].title}
              </h3>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex gap-8 mb-20 xl:mb-5 relative ">
          <div
            className="group relative bottom-28 overflow-hidden w-1/2 cursor-pointer "
            onClick={() => handleItemClick(portfolioItems[2])}
          >
            <div className="relative h-[400px] xl:h-[500px] w-full perspective-1000 rounded-3xl overflow-hidden">
             <div className="relative w-full group">
              {/* ===== ACTIVE / DEFAULT BLOCK ===== */}
              <div
                className="relative h-[400px] xl:h-[500px] w-full rounded-3xl overflow-hidden
               transition-opacity duration-1000
               group-hover:opacity-0 ease-in-out"
              >
                <img
                  src={portfolioItems[2].image}
                  alt={portfolioItems[2].title}
                  className="h-full w-full object-center"
                />
              </div>

              {/* ===== HOVER BLOCK ===== */}
              <div
                className="absolute inset-0 opacity-0
               transition-opacity duration-1000 delay-200
               group-hover:opacity-100"
              >
                <div className="relative w-[600px] aspect-[585/500] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-white"
                    style={{
                      clipPath: `path("M30,0H210A30,30 0,0,1 240,30V30A30,30 0,0,0 270,60H570A30,30 0,0,1 600,90V470A30,30 0,0,1 570,500H30A30,30 0,0,1 0,470V30A30,30 0,0,1 30,0Z")`,
                    }}
                  >
                    <img
                      src={portfolioItems[2].image}
                      alt="Hover image"
                      className="w-full h-full object-center "
                    />
                  </div>

                  {/* Branding stays visible */}
                  <div className="flex justify-end space-x-2 pr-16 pt-2 text-center items-center ">
                    <h3 className="text-[17px] font-bold bg-purple-100 px-4 py-1.5 rounded-full">
                      Branding
                    </h3>
                    <h3 className="text-[17px] font-bold bg-purple-100 px-4 py-1.5 rounded-full">
                      Website
                    </h3>
                    <h3 className="text-[17px] font-bold bg-purple-100 px-4 py-1.5 rounded-full">
                      SEO
                    </h3>
                  </div>
                </div>
              </div>
            </div>




            </div>
            <div className="mt-6 xl:mt-8 space-y-3">
              <div className="flex flex-row items-center gap-2 ">
                <p className="text-sm  text-black font-bold   ">
                  {portfolioItems[0].year}
                </p>
                <span className="w-2 h-2 bg-[#9B82F6] rounded-full "></span>
                <p className="text-sm  text-black font-bold   ">
                  {portfolioItems[0].client}
                </p>
              </div>
              <h3 className="text-gray-900 text-3xl xl:text-4xl font-bold tracking-tight line-clamp-2">
                {portfolioItems[2].title}
              </h3>
            </div>
          </div>

          <div
            className="group relative overflow-hidden top-32 xl:top-10 w-1/2 cursor-pointer"
            onClick={() => handleItemClick(portfolioItems[3])}
          >
            <div className="relative h-[400px] xl:h-[500px] w-full perspective-1000 rounded-3xl overflow-hidden">
              <div className="relative w-full group">
              {/* ===== ACTIVE / DEFAULT BLOCK ===== */}
              <div
                className="relative h-[400px] xl:h-[500px] w-full rounded-3xl overflow-hidden
               transition-opacity duration-1000
               group-hover:opacity-0 ease-in-out"
              >
                <img
                  src={portfolioItems[3].image}
                  alt={portfolioItems[3].title}
                  className="h-full w-full object-center"
                />
              </div>

              {/* ===== HOVER BLOCK ===== */}
              <div
                className="absolute inset-0 opacity-0
               transition-opacity duration-1000 delay-200
               group-hover:opacity-100"
              >
                <div className="relative w-[600px] aspect-[585/500] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-white"
                    style={{
                      clipPath: `path("M30,0H210A30,30 0,0,1 240,30V30A30,30 0,0,0 270,60H570A30,30 0,0,1 600,90V470A30,30 0,0,1 570,500H30A30,30 0,0,1 0,470V30A30,30 0,0,1 30,0Z")`,
                    }}
                  >
                    <img
                      src={portfolioItems[3].image}
                      alt="Hover image"
                      className="w-full h-full object-center "
                    />
                  </div>

                  {/* Branding stays visible */}
                  <div className="flex justify-end space-x-2 pr-16 pt-2 text-center items-center ">
                    <h3 className="text-[17px] font-bold bg-purple-100 px-4 py-1.5 rounded-full">
                      Branding
                    </h3>
                    <h3 className="text-[17px] font-bold bg-purple-100 px-4 py-1.5 rounded-full">
                      Website
                    </h3>
                    <h3 className="text-[17px] font-bold bg-purple-100 px-4 py-1.5 rounded-full">
                      SEO
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="mt-6 xl:mt-8 space-y-3">
              <div className="flex flex-row items-center gap-2 ">
                <p className="text-sm  text-black font-bold   ">
                  {portfolioItems[0].year}
                </p>
                <span className="w-2 h-2 bg-[#9B82F6] rounded-full"></span>
                <p className="text-sm  text-black font-bold  ">
                  {portfolioItems[0].client}
                </p>
              </div>
              <h3 className="text-gray-900 text-3xl xl:text-4xl font-bold tracking-tight line-clamp-2">
                {portfolioItems[3].title}
              </h3>
            </div>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 absolute left-10 bottom-10 transform -translate-y-1/2">
          <Button
            onClick={() => navigate("/portfolio")}
            variant="ghost"
            size={undefined}
            className="
    !bg-[#D0FF71]
    !text-black
    !font-bold

    !px-4
    !py-4
    !rounded-full

    hover:!bg-lime-300
    hover:!-translate-x-7
    hover:!pl-6 hover:!pr-4

    !transition-all !duration-1000 !ease-out
    flex items-center gap-2 whitespace-nowrap
    text-base"
          >
            View All Projects
          </Button>
          <img
            src="/Arrow 1-1.svg"
            alt="arrow"
            className="p-[14px] rounded-full bg-lime-300 text-brand-ink absolute  left-[123px]"
          />
        </div>
      </div>
    </section>
  );
}
