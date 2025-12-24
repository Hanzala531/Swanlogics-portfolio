import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "@/components/icons";
// import { Facebook, Instagram, X, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CiMobile1 } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import CurvedBackground from '../../assets/CurvedBackground.png'

import SwanlogicsLogo from '../../assets/SwanlogicsLogo.png'
import HandTap from '../../assets/footersvgs/HandTap.svg'
import Facebook from '../../assets/footersvgs/Facebook.svg';
import Instagram from '../../assets/footersvgs/Instagram.svg';
import Linkedin from '../../assets/footersvgs/Linkedin.svg';
import Twitter from  '../../assets/footersvgs/Twitter.svg';
import Iphone from '../../assets/footersvgs/Iphone.svg';
import Share from '../../assets/footersvgs/Share.svg';
import Location from '../../assets/footersvgs/Location.svg';
import ArrowUp  from '../../assets/footersvgs/ArrowUp.svg';

export function Footer() {
  const navigate = useNavigate();
    const socials = [
    { href: "#", icon: <img src={Facebook} className='h-6 w-6 sm:h-6 sm:w-4 md:h-4 md:w-4' alt="Facebook" /> },
    { href: "#", icon: <img src={Instagram} className='h-6 w-6 sm:h-4 sm:w-4 md:h-4 md:w-4' alt="Instagram" /> },
    { href: "#", icon: <img src={Twitter} className='h-6 w-6 sm:h-4 sm:w-4 md:h-4 md:w-4' alt="Twitter" /> },
    { href: "#", icon: <img src={Linkedin} className='h-6 w-5 sm:h-4 sm:w-4 md:h-4 md:w-4' alt="LinkedIn" /> },
  ];
  return (
<div>
  

    {/* ==========================================
      MOBILE VERSION (Interactive & Modern)
      ========================================== */}

 <div className="md:hidden relative z-10 bg-black  rounded-t-[10vw]">
    <div className="px-6 pt-10 pb-8">
      {/* Attractive Mobile Heading */}
      <h2 className="text-4xl font-extrabold text-white leading-tight mb-10">
        Where Quotes <br/> Meet Purpose.
      </h2>

      {/* Glassmorphism Info Card */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-tl-[2rem] rounded-br-[2rem] p-6 mb-8">
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3 border-l-2 border-[#D0FF71] px-2">Explore</h3>
            <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors">Home</a></li>
                  <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors">About Us</a></li>
                    <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors">Our Services </a></li>
                      <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors">Our Team</a></li>
                        <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors">Portfolio</a></li>
             
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3 border-l-2 border-[#D0FF71] px-2">Links</h3>
            <ul className="space-y-2 text-sm ">
              <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors">Privacy Policy </a></li>
                <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors">FAQ’s</a></li>
            <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <h3 className="text-white font-bold text-lg mb-4 border-l-2  border-[#D0FF71] px-2">Get In Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <img src={Iphone} className='w-3' alt="P" /> 012 1234567 890
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <img src={Share} className='w-3' alt="E" /> hello@example.com
            </div>
             <div className="flex items-center gap-3 text-sm text-gray-300">
              <img src={Location} className='w-3 mb-4' alt="E" /> 1 Gibfield Park Avenue Atherton Manchester M46 0SU
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Glassmorphic Social & Quote Bar */}
      <div className="flex justify-between items-center bg-white/10 backdrop-blur-3xl border border-white/20 p-2 rounded-full mb-12">
        <div className="flex gap-2 ml-1">
          {socials.map((item, index) => (
            <a key={index} href={item.href} className="bg-[#9B82F6] p-2 rounded-full text-white">
              {item.icon}
            </a>
          ))}
        </div>
        <button className="flex flex-row gap-3 items-center  bg-[#D0FF71] text-black font-bold px-4 py-2.5 rounded-full text-xs tracking-tighter">
           QUOTE
          <img 
              src={ArrowUp} 
              className='h-2 w-2 object-contain'
              alt="Arrow"
            />
        </button>
      </div>

      {/* Mobile-Specific Backup Button */}
      <button 
        className="w-full flex flex-row items-center text-center justify-center gap-2 p-2  text-[9px] font-extrabold uppercase tracking-[0.2em] text-black  bg-white rounded-full "
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        
           Sh*T I've Gone Too Far, Send Me Back Up
        <img src={HandTap} className='w-5 h-5 opacity-40 animate-pulse' alt="" />
      </button>
    </div>

    {/* Mobile-Only Bottom Bar */}
    <div className="border-t border-white/10 py-6 ">
       <img src={SwanlogicsLogo} alt="Logo" className="h-7 mx-auto mb-3" />
       <div className="flex flex-row gap-1 px-2  py-3 items-center justify-center">
       <div className="text-[9px] px-2 text-white border-r border-[#D0FF71]">© SWANLOGICS LTD 2025</div>
      
        <div className="text-[9px] text-white px-2 border-r border-[#D0FF71]"> Web Design Manchester</div>
        
         <div className="text-[9px] text-white px-2">All Rights Reserved</div>
         </div>
    </div>
  </div>

 {/* ==========================================
      DESKTOP & TABLET (Untouched Original Code)
      ========================================== */}


     <footer className="relative text-white overflow-hidden m-2">
      {/* Curved Background Shape - VISIBLE ON ALL SCREENS */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={CurvedBackground}
          className='h-full w-full object-cover md:object-fill lg:w-full lg:h-full'
          alt="Background"
        />
      </div>
     

 


      {/* Main Footer Content */}

      <div className="hidden md:block relative z-10">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:pt-14 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
          {/* Explore Section */}
          <div className='pl-0 sm:pl-30 md:pl-14 lg:pl-20 '>
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-4 text-white">Explore</h3>
            <ul className="space-y-3 md:space-y-2">
              <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors text-sm md:text-base">Home</a></li>
              <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors text-sm md:text-base">About Us</a></li>
              <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors text-sm md:text-base">Our Services</a></li>
              <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors text-sm md:text-base">Our Team</a></li>
              <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors text-sm md:text-base">Portfolio</a></li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className='md:pl-0'>
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-4 text-white">Useful Links</h3>
            <ul className="space-y-3 md:space-y-2">
              <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors text-sm md:text-base">Privacy Policy</a></li>
              <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors text-sm md:text-base">Term And Conditions</a></li>
              <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors text-sm md:text-base">FAQ's</a></li>
              <li><a href="#" className="text-[#696969] hover:text-[#D0FF71] transition-colors text-sm md:text-base">Contact Us</a></li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div className='pt-10 md:pt-15 sm:pt-30'>
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-4 text-white">Get In Touch</h3>
            <ul className="space-y-4 md:space-y-3">
              <li className="flex items-center gap-3">
                <img src={Iphone} className='h-[22px] w-4' alt="Phone" />
                <span className="text-[#696969] text-sm md:text-base">012 1234567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={Share} className='h-[22px] w-4' alt="Email" />
                <span className="text-[#696969] text-sm md:text-base">hello@example.com</span>
              </li>
              <li className="flex items-start gap-3">
                <img src={Location} className='h-[22px] w-4' alt="Location" />
                <span className="text-[#696969] text-sm md:text-base">1 Gibfield Park Avenue Atherton<br />Manchester M46 0SU</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-4 sm:px-10 md:px-8 lg:px-10 py-10 md:py-8">
      <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-center sm:text-left text-[#D0FF71] sm:text-white">

          Where Quotes Meet Purpose.
        </h2>
        <div className='flex items-center'>
          <button className="bg-[#D0FF71] text-black font-bold px-8 md:px-10 lg:px-12 py-3 md:py-3.5 lg:py-4 rounded-full 
            hover:bg-lime-300 hover:-translate-x-5 hover:pl-6 hover:pr-12 transition-all duration-1000 ease-out flex items-center gap-2 whitespace-nowrap text-sm md:text-base">
            Get A Quote
          </button>
          <div className="bg-[#D0FF71] p-3 md:p-3.5 lg:p-4 rounded-full">
            <img 
              src={ArrowUp} 
              className='h-4 w-3 object-center'
              alt="Arrow"
            />
          </div>
        </div>
      </div>

      {/* Social media icons for small and medium screens */}
     <div className="relative z-10 md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex justify-center items-center gap-4">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="bg-[#9B82F6] hover:bg-purple-600 p-2 rounded-full transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 xl:px-4 py-6 md:py-4">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-4">
  
  {/* Logo */}
  <div className="flex justify-center md:justify-start w-full md:w-auto  ">
    <img
      src={SwanlogicsLogo}
      alt="Swan Logo"
      className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
    />
  </div>

  {/* Footer text */}
  <div className="flex flex-col sm:flex-row items-center text-center sm:text-left text-xs sm:text-sm md:text-base text-white gap-2 sm:gap-0">
    
    <div className="px-2 sm:px-3 sm:border-r border-[#D0FF71]">
      © SwanLogics Ltd 2025
    </div>

    <div className="px-2 sm:px-3 sm:border-r border-[#D0FF71]">
      Web Design Manchester
    </div>

    <div className="px-2 sm:px-3">
      All Rights Reserved
    </div>

  </div>
</div>

        </div>
      </div>

      {/* Social Media Sidebar - Desktop only - FIXED POSITION ON CURVED BACKGROUND */}
    <div className="absolute lg:left-8 md:left-2 top-2 md:top-2  z-50 hidden md:flex flex-col gap-1.5 md:gap-2 lg:gap-2   justify-center items-center
    [@media(min-width:1024px)_and_(max-width:1189px)]:left-2
     [@media(min-width:880px)_and_(max-width:1021px)]:top-[0]
    
    ">
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="bg-[#9B82F6] hover:bg-purple-600 lg:p-2 md:p-2 rounded-full transition-colors"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Scroll to Top Button - FIXED POSITION ON CURVED BACKGROUND */}
      <button 
        className=" absolute right-2 top-4 xl:right-3 lg:right-12 lg:top-0 md:top-1   text-black px-2 sm:px-3 lg:px-4 py-2  hover:bg-gray-100 transition-colors hover:rounded-full text-[10px] lg:text-sm font-bold flex tracking-tight lg:tracking-widest items-center gap-1 sm:gap-2 z-50
        [@media(min-width:1023px)_and_(max-width:1269px)]:-right-2
        [@media(min-width:1023px)_and_(max-width:1269px)]:tracking-tight
        
        "
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="hidden sm:inline">Sh*T I've Gone Too Far, Send Me Back Up</span>
        <span className="sm:hidden text-white">Back Up</span>
        <img 
          src={HandTap}
          className='h-4 w-4 sm:h-5 sm:w-5'
          alt="Hand"
        />
      </button>

      </div>
    </footer>




</div>











    // <>
    //   {/* Desktop Footer */}
    //   <footer
    //     className="hidden md:block mx-2 sm:mx-4 lg:mx-10 mb-2 sm:mb-4 rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl text-white relative  h-[35vw] lg:h-[41vw] xl:h-[42vw] 2xl:h-[40vw] md:h-[40vw] "
    //     style={{
    //       backgroundImage: "url(/footer-box.png)",
    //       backgroundSize: "contain",
    //       backgroundPosition: "center",
    //       backgroundRepeat: "no-repeat",
    //     }}
    //   >
    //     {/* Footer right design - Hidden on mobile and tablets */}
    //     {/* <div className="absolute flex items-center justify-center bg-transparent z-10 -top-1 sm:-top-4 lg:-top-3 lg:-right-24 sm:-right-1 px-4 sm:px-6 lg:pr-8 w-20 sm:w-80 lg:w-[25rem] xl:w-[30rem] h-10 sm:h-12 lg:h-16 font-black text-brand-ink xl:top-[-1vw] xl:right-[-5vw] 2xl:top-[0vw] 2xl:right-[3vw] md:right-[-8vw]">
    //       <span className="text-xl sm:text-sm lg:text-[12px] inline-block whitespace-nowrap xl:text-[16px] 2xl:text-[23px] md:text-[8px]">
    //         Sh*T I’ve Gone Too Far, Send Me Back Up
    //       </span>
    //       <img
    //         src="/footer-hand.png"
    //         alt="footer-hand"
    //         className="w-auto h-4 sm:w-auto sm:h-8 ml-20 lg:relative lg:right-16 lg:h-6 cursor-pointer hover:scale-110 transition-transform xl:right-16 md:h-4 md:relative md:right-[9vw]"
    //         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    //       />
    //     </div> */}

    //     {/* Social links - Fully responsive positioning */}
    //     <div className=" absolute bg-transparent  -top-1 sm:-top-2 lg:-top-6 lg:-left-0 sm:-left-2 rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-3xl p-1 sm:p-2 xl:left-[1.5vw] xl:top-[-1vw] 2xl:top-[-1vw] 2xl:left-[6vw] md:right-[82vw] md:top-[-2vw] ">
    //       <div className="flex lg:flex-col md:flex-col items-center lg:items-start gap-1 sm:gap-2 lg:gap-2 xl:gap-4 p-1 sm:p-2 xl:h-[20vw] 2xl:h-[22vw] md:h-[18vw]">
    //         <button
    //           onClick={() =>
    //             window.open("https://facebook.com/swanlogics", "_blank")
    //           }
    //           aria-label="Facebook"
    //           className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-8 lg:w-8 xl:h-10 xl:w-10 md:w-5 md:h-5  place-items-center rounded-full bg-brand-purple hover:bg-brand-purple transition-colors 2xl:h-[75px] 2xl:w-[75px]"
    //         >
    //           <Facebook className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-4 xl:w-4 md:h-3 md:w-3 text-white 2xl:h-8 2xl:w-8" />
    //         </button>
    //         <button
    //           onClick={() =>
    //             window.open("https://instagram.com/swanlogics", "_blank")
    //           }
    //           aria-label="Instagram"
    //           className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-8 lg:w-8 xl:h-10 xl:w-10 md:w-5 md:h-5  place-items-center rounded-full bg-brand-purple hover:bg-brand-purple transition-colors 2xl:h-[75px] 2xl:w-[75px]"
    //         >
    //           <Instagram className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-4 xl:w-4 md:h-3 md:w-3 text-white 2xl:h-8 2xl:w-8" />
    //         </button>
    //         <button
    //           onClick={() =>
    //             window.open("https://twitter.com/swanlogics", "_blank")
    //           }
    //           aria-label="Twitter/X"
    //           className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-8 lg:w-8 xl:h-10 xl:w-10 md:w-5 md:h-5  place-items-center rounded-full bg-brand-purple hover:bg-brand-purple transition-colors 2xl:h-[75px] 2xl:w-[75px]"
    //         >
    //           <X className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-4 xl:w-4 md:h-3 md:w-3 text-white 2xl:h-8 2xl:w-8" />
    //         </button>
    //         <button
    //           onClick={() =>
    //             window.open("https://linkedin.com/company/swanlogics", "_blank")
    //           }
    //           aria-label="LinkedIn"
    //           className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-8 lg:w-8 xl:h-10 xl:w-10 md:w-5 md:h-5  place-items-center rounded-full bg-brand-purple hover:bg-brand-purple transition-colors 2xl:h-[75px] 2xl:w-[75px]"
    //         >
    //           <Linkedin className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-4 xl:w-4 md:h-3 md:w-3 text-white 2xl:h-8 2xl:w-8" />
    //         </button>
    //       </div>
    //     </div>

    //     <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:pl-40 py-6 sm:py-20 md:py-10 lg:py-14 xl:pb-0 2xl:-mt-5">
    //       {/* Main content section */}
    //       <div className="mb-6 sm:mb-8 sm:mt-20 md:mb-10 lg:mb-12 xl:pt-10 md:mt-[0vw]">
    //         {/* Links Container */}
    //         <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-2 sm:gap-2 md:gap-6 lg:gap-6 xl:gap-5 2xl:gap-10 lg:ml-10 md:ml-[20vw]">
    //           {/* Explore Links */}
    //           <div className="space-y-3 sm:space-y-4 mt-2 md:mt-[0vw]  ">
    //             <h3 className="text-lg sm:text-xl md:text-sm lg:text-2xl xl:text-4xl 2xl:text-5xl text-white font-bold mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
    //               Explore
    //             </h3>
    //             <ul
    //               className="space-y-2 sm:space-y-3 lg:space-y-3 xl:space-y-5 md:space-y-0"
    //               style={{ color: "#696969" }}
    //             >
    //               <li>
    //                 <button
    //                   onClick={() => navigate("/")}
    //                   className="hover:text-white transition-colors text-xs sm:text-sm md:text-xs block py-1 text-left xl:text-base "
    //                 >
    //                   Home
    //                 </button>
    //               </li>
    //               <li>
    //                 <button
    //                   onClick={() => navigate("/")}
    //                   className="hover:text-white transition-colors text-xs sm:text-sm md:text-xs block py-1 text-left xl:text-base "
    //                 >
    //                   About Us
    //                 </button>
    //               </li>
    //               <li>
    //                 <button
    //                   onClick={() => navigate("/services")}
    //                   className="hover:text-white transition-colors text-xs sm:text-sm md:text-xs block py-1 text-left xl:text-base "
    //                 >
    //                   Our Services
    //                 </button>
    //               </li>
    //               <li>
    //                 <button
    //                   onClick={() => navigate("/")}
    //                   className="hover:text-white transition-colors text-xs sm:text-sm md:text-xs block py-1 text-left xl:text-base "
    //                 >
    //                   Our Team
    //                 </button>
    //               </li>
    //               <li>
    //                 <button
    //                   onClick={() => navigate("/portfolio")}
    //                   className="hover:text-white transition-colors text-xs sm:text-sm md:text-xs block py-1 text-left xl:text-base "
    //                 >
    //                   Portfolio
    //                 </button>
    //               </li>
    //             </ul>
    //           </div>

    //           {/* Useful Links */}
    //           <div className="space-y-3 sm:space-y-4  md:mt-[0vw] md:space-y-1 ">
    //             <h3 className="text-lg sm:text-xl md:text-sm lg:text-2xl xl:text-4xl 2xl:text-5xl text-white font-bold mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
    //               Useful Links
    //             </h3>
    //             <ul
    //               className="space-y-2 sm:space-y-3 lg:space-y-3 xl:space-y-4  md:space-y-1"
    //               style={{ color: "#696969" }}
    //             >
    //               <li>
    //                 <button
    //                   onClick={() => alert("Privacy Policy page coming soon!")}
    //                   className="hover:text-white transition-colors text-xs sm:text-sm md:text-xs block py-1 text-left xl:text-base "
    //                 >
    //                   Privacy Policy
    //                 </button>
    //               </li>
    //               <li>
    //                 <button
    //                   onClick={() =>
    //                     alert("Terms & Conditions page coming soon!")
    //                   }
    //                   className="hover:text-white transition-colors text-xs sm:text-sm md:text-xs block py-1 text-left xl:text-base "
    //                 >
    //                   Terms And Conditions
    //                 </button>
    //               </li>
    //               <li>
    //                 <button
    //                   onClick={() => alert("FAQ page coming soon!")}
    //                   className="hover:text-white transition-colors text-xs sm:text-sm md:text-xs block py-1 text-left xl:text-base "
    //                 >
    //                   FAQ's
    //                 </button>
    //               </li>
    //               <li>
    //                 <button
    //                   onClick={() => navigate("/contact")}
    //                   className="hover:text-white transition-colors text-xs sm:text-sm md:text-xs block py-1 text-left xl:text-base "
    //                 >
    //                   Contact Us
    //                 </button>
    //               </li>
    //             </ul>
    //           </div>

    //           {/* Get In Touch */}
    //           <div className="sm:col-span-2 md:col-span-1 lg:col-span-1 space-y-3 sm:space-y-4  md:mt-[2vw] ">
    //             <h3 className="text-lg sm:text-xl md:text-sm lg:text-2xl xl:text-4xl 2xl:text-5xl text-white font-bold mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
    //               Get In Touch
    //             </h3>
    //             <div
    //               className="space-y-3 sm:space-y-4 lg:space-y-4 xl:space-y-5  md:space-y-1"
    //               style={{ color: "#696969" }}
    //             >
    //               <div className="flex items-center gap-2 sm:gap-3">
    //                 <CiMobile1 className="w-6 h-6 font-bold text-lime-400" />
    //                 <span className="text-xs sm:text-sm md:text-xs hover:text-white transition-colors xl:text-base ">
    //                   012 1234567 890
    //                 </span>
    //               </div>
    //               <div className="flex items-center gap-2 sm:gap-3">
    //                 <Mail className="w-6 h-6 text-lime-400" />
    //                 <span className="text-xs sm:text-sm md:text-xs hover:text-white transition-colors xl:text-base ">
    //                   hello@example.com
    //                 </span>
    //               </div>
    //               <div className="flex items-start gap-2 sm:gap-3">
    //                 <MapPin className="w-6 h-6 text-lime-400 mt-1" />
    //                 <span className='text-xs sm:text-sm md:text-xs hover:text-white transition-colors xl:text-base '>
    //                   1 Gibfield Park Avenue Atherton Manchester M46 0SU
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/* Bottom Section */}
    //       <div className="w-full absolute bottom-0 left-0 pt-4 sm:pt-6 md:pt-10 xl:bottom-[-1vw] 2xl:bottom-[-2vw]">
    //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center lg:px-14 gap-4 sm:gap-6 mb-4 md:mb-2 sm:mb-6 border-white/40 border-b pb-10 px-20 xl:px-16 xl:pb-5 md:pb-2">
    //           <div className="w-full md:w-auto  ">
    //             <h2 className="text-sm sm:text-xl md:text-lg lg:text-4xl xl:text-[46px] 2xl:text-6xl text-white font-bold font-rf-dewi">
    //               Where Quotes Meet Purpose.
    //             </h2>
    //           </div>
    //           <div className="hidden md:flex items-center relative md:right-10 lg:right-40 md:top-2 lg:top-3 lg:left-0 xl:left-0 transform md:-translate-y-[12%] lg:-translate-y-[35%] 2xl:right-40 xl:right-[5vw]">
    //             {/* <img src="/Vector.svg" alt="" className="h-5 w-5 opacity-80" /> */}
    //             <Button
    //               onClick={() => navigate("/quote")}
    //               className="flex !text-brand-ink items-center gap-2 rounded-full bg-lime-300 px-9 py-4 font-bold"
    //             >
    //               Get A Quote
    //             </Button>
    //             <img
    //               src="/Arrow 1-1.svg"
    //               alt="arrow"
    //               className="p-[14px] rounded-full bg-lime-300 text-brand-ink absolute  left-[142px]"
    //             />
    //           </div>
    //         </div>

    //         {/* Copyright section */}
    //         <div className="flex w-full sm:flex-row lg:flex-row justify-between gap-2 lg:px-14 xl:px-16 items-start sm:items-center pb-6  md:pb-4 xl:pb-10 md:px-16 text-xs sm:text-sm md:pt-0 text-white sm:gap-4">
    //           <div className="flex">
    //             <span className="w-38 md:w-[100px] lg:w-32 xl:w-36 2xl:w-40">
    //               <img src="/Swanlogics logo purple.png" alt="logo" />
    //             </span>
    //           </div>
    //           <div className="flex flex-col sm:flex-row gap-2 text-center sm:text-left xl:p-0">
    //             <span className="whitespace-nowrap text-base sm:text-base sm:pr-5 lg:pr-10 xl:pr-2 md:text-xs">
    //               © SwanLogics Ltd 2025
    //             </span>
    //             <span className="whitespace-nowrap text-base sm:text-base border-l border-[#d0ff7194] sm:px-5 lg:px-10 xl:px-4  md:text-xs">
    //               Web Design Manchester
    //             </span>
    //             <span className="whitespace-nowrap text-base sm:text-base mt-2 sm:mt-0 border-l border-[#d0ff7194] sm:pl-5 lg:pl-10 xl:px-4  md:text-xs">
    //               All Rights Reserved
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>

    //   {/* ---------------- MOBILE VIEW FOOTER ---------------- */}
    //   <footer className="md:hidden bg-black text-white px-6 pb-10 rounded-3xl  space-y-10 mx-2 mb-2 border-transparent relative z-10 w-full">
    //     {/* Scroll to top section - Mobile version */}
    //     <div className="flex items-center justify-center bg-white rounded-b-xl relative top-[-5vw] w-full h-[22vw] px-4 py-3 mr-4 font-black text-brand-ink">
    //       <span className="text-xl whitespace-nowrap">
    //         Sh*T I've Gone Too Far, Send Me Back Up
    //       </span>
    //       <img
    //         src="/footer-hand.png"
    //         alt="footer-hand"
    //         className="w-6 h-6 ml-2 cursor-pointer hover:scale-110 transition-transform"
    //         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    //       />
    //     </div>

    //     {/* Logo and tagline */}
    //     <div className="flex flex-col items-center text-center space-y-4">
    //       <img
    //         src="/Swanlogics logo purple.png"
    //         alt="SwanLogics logo"
    //         className="w-24 h-auto"
    //       />
    //       <h2 className="text-2xl font-bold text-lime-300">
    //         Where Quotes Meet Purpose.
    //       </h2>
    //     </div>

    //     {/* Explore and Useful Links */}
    //     <div className="grid grid-cols-2 gap-8 text-sm text-gray-400">
    //       <div>
    //         <h3 className="text-white font-bold text-lg mb-3">Explore</h3>
    //         <ul className="space-y-2">
    //           <li>
    //             <button
    //               onClick={() => navigate("/")}
    //               className="hover:text-white text-left"
    //             >
    //               Home
    //             </button>
    //           </li>
    //           <li>
    //             <button
    //               onClick={() => navigate("/")}
    //               className="hover:text-white text-left"
    //             >
    //               About Us
    //             </button>
    //           </li>
    //           <li>
    //             <button
    //               onClick={() => navigate("/services")}
    //               className="hover:text-white text-left"
    //             >
    //               Our Services
    //             </button>
    //           </li>
    //           <li>
    //             <button
    //               onClick={() => navigate("/")}
    //               className="hover:text-white text-left"
    //             >
    //               Our Team
    //             </button>
    //           </li>
    //           <li>
    //             <button
    //               onClick={() => navigate("/portfolio")}
    //               className="hover:text-white text-left"
    //             >
    //               Portfolio
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="text-white font-bold text-lg mb-3">Useful Links</h3>
    //         <ul className="space-y-2">
    //           <li>
    //             <button
    //               onClick={() => alert("Privacy Policy page coming soon!")}
    //               className="hover:text-white text-left"
    //             >
    //               Privacy Policy
    //             </button>
    //           </li>
    //           <li>
    //             <button
    //               onClick={() => alert("Terms & Conditions page coming soon!")}
    //               className="hover:text-white text-left"
    //             >
    //               Terms & Conditions
    //             </button>
    //           </li>
    //           <li>
    //             <button
    //               onClick={() => alert("FAQ page coming soon!")}
    //               className="hover:text-white text-left"
    //             >
    //               FAQ's
    //             </button>
    //           </li>
    //           <li>
    //             <button
    //               onClick={() => navigate("/contact")}
    //               className="hover:text-white text-left"
    //             >
    //               Contact Us
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     {/* Contact Info */}
    //     <div className="space-y-4 text-sm text-gray-400">
    //       <h3 className="text-white font-bold text-lg">Get In Touch</h3>
    //       <div className="flex items-center gap-3">
    //         <CiMobile1 className="text-lime-400 w-5 h-5" />
    //         <span>012 1234567 890</span>
    //       </div>
    //       <div className="flex items-center gap-3">
    //         <Mail className="text-lime-400 w-5 h-5" />
    //         <span>hello@example.com</span>
    //       </div>
    //       <div className="flex items-start gap-3">
    //         <MapPin className="text-lime-400 w-5 h-5 mt-1" />
    //         <span>1 Gibfield Park Avenue Atherton Manchester M46 0SU</span>
    //       </div>
    //     </div>

    //     {/* Social Icons */}
    //     <div className="flex justify-center gap-5">
    //       <button
    //         onClick={() =>
    //           window.open("https://facebook.com/swanlogics", "_blank")
    //         }
    //         className="bg-brand-purple p-3 rounded-full"
    //       >
    //         <Facebook className="w-4 h-4 text-white" />
    //       </button>
    //       <button
    //         onClick={() =>
    //           window.open("https://instagram.com/swanlogics", "_blank")
    //         }
    //         className="bg-brand-purple p-3 rounded-full"
    //       >
    //         <Instagram className="w-4 h-4 text-white" />
    //       </button>
    //       <button
    //         onClick={() =>
    //           window.open("https://twitter.com/swanlogics", "_blank")
    //         }
    //         className="bg-brand-purple p-3 rounded-full"
    //       >
    //         <X className="w-4 h-4 text-white" />
    //       </button>
    //       <button
    //         onClick={() =>
    //           window.open("https://linkedin.com/company/swanlogics", "_blank")
    //         }
    //         className="bg-brand-purple p-3 rounded-full"
    //       >
    //         <Linkedin className="w-4 h-4 text-white" />
    //       </button>
    //     </div>

    //     {/* CTA Button */}
    //     <div className="flex justify-center">
    //       <Button
    //         onClick={() => navigate("/quote")}
    //         className="flex items-center gap-2 bg-lime-300 text-brand-ink font-bold rounded-full px-6 py-3"
    //       >
    //         Get A Quote
    //         <ArrowRight className="w-5 h-5" />
    //       </Button>
    //     </div>

    //     {/* Copyright */}
    //     <div className="pt-6 border-t border-white/20 text-center text-lg text-gray-400 space-y-3">
    //       <p>© SwanLogics Ltd 2025</p>
    //       <p>Web Design Manchester</p>
    //       <p>All Rights Reserved</p>
    //     </div>
    //   </footer>
    //   {/* ---------------- END MOBILE FOOTER ---------------- */}
    // </>
  );
}