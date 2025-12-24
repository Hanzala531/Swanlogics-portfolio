import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("Home");
  const [starPos, setStarPos] = React.useState({ left: 0, width: 0 });
  const linkRefs = React.useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const links = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Quotation", href: "/quote" },
    { label: "Contact Us", href: "/contact" },
  ];
  // Sync active state with current pathname
  React.useEffect(() => {
    const currentPath = location.pathname;
    const currentLink = links.find((link) => link.href === currentPath);
    if (currentLink) {
      setActive(currentLink.label);
    } else {
      // Handle nested routes (e.g., /services/javascript-workflow should show "Our Services")
      const parentLink = links.find(
        (link) => link.href !== "/" && currentPath.startsWith(link.href)
      );
      if (parentLink) {
        setActive(parentLink.label);
      }
    }
  }, [location.pathname]); // Removed links from dependency array
  React.useEffect(() => {
    const activeIndex = links.findIndex((l) => l.label === active);
    const el = linkRefs.current[activeIndex];
    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement.getBoundingClientRect();
      setStarPos({
        left: rect.left - parentRect.left + rect.width / 2,
        width: rect.width,
      });
    }
  }, [active]);
  return (
    <nav className="sticky top-0 z-50 w-full ml-auto items-center bg-white/90 backdrop-blur shadow-sm supports-[backdrop-filter]:bg-white/70">
      <div className="flex mx-auto max-w-[1380px] items-center justify-between px-6 py-4 md:px-12 lg:px-10 xl:px-12">
        {/* Left: Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3"
        >
          <img
            src="/Swanlogics logo purple head.png"
            alt="SwanLogics logo"
            className="h-6 w-auto md:h-7 lg:h-9 xl:h-13 "
          />
        </button>
        {/* Mobile/Tablet Menu Button */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? (
            <X className="h-6 w-6 text-brand-ink" />
          ) : (
            <Menu className="h-6 w-6 text-brand-ink" />
          )}
        </button>

        {/* Desktop Links - Hidden on mobile */}
        <div className="relative hidden lg:flex justify-center items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {links.map((link, i) => (
            <button
              key={link.label}
              ref={(el) => {
                linkRefs.current[i] = el;
              }}
              onClick={() => {
                navigate(link.href);
              }}
              className={`relative text-[18px] transition-colors ${
                active === link.label
                  ? "text-brand-ink font-semibold"
                  : "text-brand-ink/70 hover:text-brand-ink"
              }`}
            >
              {link.label}
            </button>
          ))}
          {/* Moving Star Indicator */}
          <div
            className="absolute top-full mt-1 h-3 w-3 -translate-x-1/2 transition-all duration-300"
            style={{
              left: `${starPos.left}px`,
            }}
          >
            <img src="/Star.png" alt="active indicator" className="h-3 w-3" />
          </div>
        </div>
        {/* Desktop CTA - Only visible on large screens */}
        <div className="hidden items-center gap-3 lg:flex relative ">
          {/* <img src="/Vector.svg" alt="" className="h-5 w-5 opacity-80" /> */}
          <Button
            onClick={() => navigate("/quote")}
             variant="ghost"
  size={undefined}
  className="
    !bg-[#D0FF71]
    !text-black
    !font-bold

    !px-10
    !py-4
    !rounded-full

    hover:!bg-lime-300
    hover:!-translate-x-4
    hover:!pl-6 hover:!pr-10 

    !transition-all !duration-1000 !ease-out
    flex items-center gap-2 whitespace-nowrap
    text-base"
          >
            Start A Project
          </Button>
          <img
            src="/Arrow 1-1.svg"
            alt="arrow"
            className="p-[14px] rounded-full bg-lime-300 text-brand-ink absolute  left-[152px]"
          />
        </div>
      </div>
      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-3">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                navigate(link.href);
                setOpen(false);
              }}
              className={`text-base transition-colors ${
                active === link.label
                  ? "text-brand-ink font-semibold"
                  : "text-brand-ink/70 hover:text-brand-ink"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
