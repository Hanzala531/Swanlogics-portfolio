import { useRef, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const testimonialsData = [
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore.",
    name: "Gary Neville",
    company: "Inside Out Contracts",
    initial: "G",
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore.",
    name: "Gary Neville",
    company: "Inside Out Contracts",
    initial: "G",
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore.",
    name: "Gary Neville",
    company: "Inside Out Contracts",
    initial: "G",
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore.",
    name: "Gary Neville",
    company: "Inside Out Contracts",
    initial: "G",
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore.",
    name: "Gary Neville",
    company: "Inside Out Contracts",
    initial: "G",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [stepWidth, setStepWidth] = useState<number>(0);

  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const [visible, setVisible] = useState<boolean[]>(() =>
    testimonialsData.map(() => false)
  );

  useEffect(() => {
    const measure = () => {
      const firstCard = cardsRef.current[0];
      if (!firstCard || !scrollRef.current) return;
      const style = window.getComputedStyle(firstCard);
      const marginRight = parseFloat(style.marginRight || "0");
      setStepWidth(Math.round(firstCard.offsetWidth + marginRight));
      updateButtons();
    };

    const updateButtons = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    measure();
    window.addEventListener("resize", measure);
    scrollRef.current?.addEventListener("scroll", updateButtons);

    return () => {
      window.removeEventListener("resize", measure);
      scrollRef.current?.removeEventListener("scroll", updateButtons);
    };
  }, []);

  // IntersectionObserver + initial check
  useEffect(() => {
    const sc = scrollRef.current;
    if (!sc) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = [...prev];
          let changed = false;

          entries.forEach((entry) => {
            const target = entry.target as HTMLDivElement;
            const idx = cardsRef.current.indexOf(target);
            if (idx >= 0) {
              if (entry.intersectionRatio > 0) {
                // ✅ animate in as soon as 1% visible
                if (!next[idx]) {
                  next[idx] = true;
                  changed = true;
                }
              } else {
                // ✅ animate out when fully gone
                if (next[idx]) {
                  next[idx] = false;
                  changed = true;
                }
              }
            }
          });

          return changed ? next : prev;
        });
      },
      {
        root: sc,
        threshold: [0, 0.01], // trigger at 0% (gone) and >1% (enter)
      }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    // ✅ Force sync check right after mount
    cardsRef.current.forEach((el, i) => {
      if (!el || !sc) return;
      const rect = el.getBoundingClientRect();
      const rootRect = sc.getBoundingClientRect();
      const overlap =
        Math.max(
          0,
          Math.min(rect.right, rootRect.right) -
            Math.max(rect.left, rootRect.left)
        ) || 0;
      const visibleFraction = overlap / rect.width;
      if (visibleFraction > 0) {
        setVisible((prev) => {
          if (!prev[i]) {
            const copy = [...prev];
            copy[i] = true;
            return copy;
          }
          return prev;
        });
      }
    });

    return () => observer.disconnect();
  }, [testimonialsData.length, stepWidth]);

  const nextSlide = () => {
    if (!scrollRef.current || stepWidth === 0) return;
    const sc = scrollRef.current;
    const newLeft = Math.min(
      sc.scrollLeft + stepWidth,
      sc.scrollWidth - sc.clientWidth
    );
    sc.scrollTo({ left: newLeft, behavior: "smooth" });
  };

  const prevSlide = () => {
    if (!scrollRef.current || stepWidth === 0) return;
    const sc = scrollRef.current;
    const newLeft = Math.max(sc.scrollLeft - stepWidth, 0);
    sc.scrollTo({ left: newLeft, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl flex mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between flex-col items-start gap-10 mb-8">
          <div>
            <div className="mb-2">
              <span className="text-base font-bold text-[#101700] bg-[#f5f3fe] px-5 py-1 rounded-3xl">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl md:leading-tight font-bold text-gray-900">
              Why Our Clients Love Craft CMS
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                canScrollLeft
                  ? "bg-black text-lime-500 hover:bg-gray-800"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <GoArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                canScrollRight
                  ? "bg-lime-400 text-black hover:bg-lime-500"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <GoArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <style>{`
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

        <div
          ref={scrollRef}
		  id="scrollable-container"
          className="flex gap-6 overflow-x-auto px-2 py-4 scroll-smooth hide-scrollbar"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              key={index}
              className="w-[220px] sm:w-[260px] lg:w-[320px] flex-shrink-0 group"
              initial="hidden"
              variants={cardVariants}
              animate={visible[index] ? "visible" : "hidden"}
            >
              <div className="bg-gray-50 rounded-2xl p-6 h-full flex flex-col justify-between items-start shadow-md transition-transform duration-300 group-hover:shadow-lg">
                <p className="text-gray-600 mb-6 line-clamp-4">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <div className="bg-lime-400 text-black font-bold text-xl w-10 h-10 flex items-center justify-center rounded-md mr-3">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-black">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
