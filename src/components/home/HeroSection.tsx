// import "./HeroSection.dpi.css";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="w-full bg-white overflow-x-hidden">
      <div className="relative mx-auto max-w-[90vw] px-4 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-10 md:px-10 md:pt-16 ">
        {/* Heading + Actions */}
        <div className="relative z-10 max-w-full md:w-[400px] lg:w-[700px] xl:w-full xl:max-w-4xl ">
          <img
            src="/Star.png"
            alt="mask group"
            className="w-4 h-4 absolute -top-14 sm:w-8 sm:h-8"
          />

          <h1 className="font-rf-dewi text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold leading-tight">
            A Web Design And Branding
            <br className="hidden xs:block" />
            <span className="block xs:inline">Agency In Manchester</span>
          </h1>
        </div>




        
        {/* Mobile Action Buttons - Show on mobile before video */}1
        <div className="flex flex-col gap-3 mb-16 sm:hidden w-full mt-6 ">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-purple px-6 py-3 font-dewi text-xs uppercase tracking-[0.2em] text-white shadow hover:bg-brand-purple/90 transition-colors w-full"
          >
            View Our Work
          </a>
          <a
            href="#team"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-5 py-3 hover:border-black/20 transition-colors w-full"
          >
            <span className="font-dewi text-xs uppercase tracking-[0.2em] text-brand-ink ">
              Meet The Team
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        {/* Video within rectangle frame */}
        <div className="relative w-full -mt-10 mx-auto">






          {/* Desktop Action Buttons - Floating above video */}
          <div className="hidden sm:flex gap-4 relative [@media(min-width:635px)_and_(max-width:720px)]:left-20
          [@media(min-width:635px)_and_(max-width:720px)]:top-14
           [@media(min-width:635px)_and_(max-width:720px)]:gap-7 
          [@media(min-width:720px)_and_(max-width:768px)]:gap-10
          [@media(min-width:720px)_and_(max-width:768px)]:left-28
          [@media(min-width:720px)_and_(max-width:768px)]:top-14
          [@media(min-width:845px)_and_(max-width:1024px)]:left-32
          [@media(min-width:1024px)_and_(max-width:1158px)]:left-24
          [@media(min-width:1058px)_and_(max-width:1087px)]:left-28          
          [@media(min-width:1087px)_and_(max-width:1120px)]:left-32          
          [@media(min-width:1120px)_and_(max-width:1150px)]:left-36          
          [@media(min-width:1150px)_and_(max-width:1179px)]:left-40          
          [@media(min-width:1179px)_and_(max-width:1269px)]:left-44          
          [@media(min-width:1169px)_and_(max-width:1340px)]:left-44
          [@media(min-width:1340px)_and_(max-width:1390px)]:left-48                    
          [@media(min-width:1390px)_and_(max-width:1570px)]:left-56
          [@media(min-width:1570px)_and_(max-width:1700px)]:left-60
          [@media(min-width:1570px)]:top-[129px]
          [@media(min-width:1700px)_and_(max-width:1920px)]:left-64
          md:gap-12 lg:gap-8 mb-2  top-8 sm:top-12 md:top-[65px]   lg:top-[99px] left-4 sm:left-8 md:left-20  xl:top-[107px] xl:left-44 2xl:top-[110px] 2xl:left-[250px]   ">
           
              <a
  href="#projects"
  className="
    relative z-10
    inline-flex items-center gap-2 rounded-full
    bg-brand-purple px-4 py-2
    font-dewi text-sm text-white
    cursor-pointer
    hover:bg-brand-purple hover:-translate-x-5 hover:pl-3 hover:pr-6  transition-all duration-1000 ease-out  whitespace-nowrap md:text-base
  "
>
  View Our Work
</a>
           
            <div
  className="
    absolute z-10 pointer-events-none
    rounded-full bg-brand-purple p-3
    left-32 top-0
  "
>
  <img
    src="/Arrow white.svg"
    alt="arrow"
    className="w-[12px] h-[12px]"
  />
</div>
        
          
            
            <a
  href="#team"
  className="
    relative z-10
    inline-flex items-center gap-4 rounded-full
    border border-black/20 bg-white px-4 py-2
    cursor-pointer
    hover:bg-purple-200  duration-1000 
    hover:border-transparent
  "
>
  <span className="font-dewi text-sm text-brand-ink">
    Meet The Team
  </span>
  <img src="/Arrow 1-1.svg" className="w-[13px] h-[13px] " />
</a>

          </div>

          {/* Video Container */}
          <div className="relative w-full h-auto mt-10 bg-brand-purple [mask-image:url('/Rectangle.png')] [mask-repeat:no-repeat] [mask-size:cover] [mask-position:center] overflow-hidden ">
            <video
              src="/video/Neostalgia Design & Webflow Development Agency.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[550px]"
              // poster="/Rectangle 31-2.png"
            />
          </div>

          {/* Desktop Wheel decoration - only show on larger screens, hide in custom range */}
          <div className="absolute -top-20 sm:-top-30 md:-top-28 lg:-top-48 xl:-top-32 right-24 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 hidden md:block custom:hidden">
            <img
              src="/wheel.png"
              alt="decorative wheel"
              className="h-full w-full object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
