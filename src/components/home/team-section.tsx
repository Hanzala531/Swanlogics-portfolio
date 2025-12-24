import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/icons";
import arrow from "../../assets/arrow.svg";

export function TeamSection() {
  const members = [
    {
      src: "/team-member1.png",
      name: "Ava Stone",
      role: "Product Designer",
      quote: "Design is not just what it looks like - design is how it works.",
    },
    {
      src: "/team-member2.png",
      name: "William C. Krueger",
      role: "Creative Director",
      quote:
        "Great things are never done by one person; they're done by a team of people working together.",
    },
    {
      src: "/team-member3.png",
      name: "James Carter",
      role: "Frontend Engineer",
      quote: "Code is like humor. When you have to explain it, it's bad.",
    },
    {
      src: "/team-member4.png",
      name: "Mia Collins",
      role: "Project Manager",
      quote:
        "Success is the result of preparation, hard work, and learning from failure.",
    },
  ];

  return (
    <section id="team" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 sm:mb-12 md:mb-16 text-balance text-center font-rf-dewi text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Teamwork Makes The Dream Work
        </h2>

        <div className="mb-8 sm:mb-10 md:mb-12 grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center items-center gap-3 sm:gap-4 w-full sm:w-[70vw] mx-auto">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="group relative overflow-hidden flex-shrink-0"
            >
              {/* Team member card */}
              <div
                className={`relative overflow-hidden rounded-2xl h-[55vw] sm:h-[25vw] w-full transition-all duration-500 ease-in-out group-hover:shadow-xl ${index === 1 ? "sm:w-[15vw] sm:group-hover:w-[24vw]" : "sm:w-[15vw] sm:group-hover:w-[24vw]"}`}
              >
                {/* Image container */}
                <div className="aspect-square overflow-hidden h-full w-full transition-all duration-500 ease-in-out">
                  <img
                    src={member.src}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Quote card - only visible on hover */}
                <div className="absolute inset-x-3 bottom-3 transform translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-xl bg-white p-4 shadow-lg border border-gray-100">
                    {/* Purple icon circle */}
                    <div className="absolute 2xl:top-[-19vw] right-4 w-16 h-16  bg-brand-purple rounded-full flex items-center justify-center sm:-top-10 sm:w-10 sm:h-10 xl:top-[-10rem] ">
                      <img src={arrow} alt="Arrow" className="" />
                    </div>

                    <h4 className="mb-1 text-sm sm:text-base font-bold text-brand-ink">
                      {member.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {member.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center justify-center flex">
          <div className="hidden lg:flex items-center gap-3 relative">
            <Button
              // onClick={() => navigate("/services")}
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
    hover:!pl-6 hover:!pr-4

    !transition-all !duration-1000 !ease-out
    flex items-center gap-2 whitespace-nowrap
    text-base"
            >
              View All Services
            </Button>
            <img
              src="/Arrow 1-1.svg"
              alt="arrow"
              className="p-[14px] rounded-full bg-lime-300 text-brand-ink absolute  left-[139px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
