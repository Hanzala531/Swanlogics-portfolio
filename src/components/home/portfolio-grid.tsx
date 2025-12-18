import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "@/components/icons"

export function PortfolioGrid() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Brand Design Agency Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 p-8">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-rf-dewi">
              Brand, Design &<br />
              Development
              <br />
              Agency
            </h3>
            <Button variant="outline" size="sm" className="bg-white/80 hover:bg-white">
              View Project
            </Button>
          </div>
          <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full overflow-hidden">
            <img src="/image 2.png" alt="Project preview" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-full overflow-hidden">
            <img src="/professional-woman-diverse.png" alt="Professional" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Furniture Design Card */}
        <div className="relative bg-gray-900 rounded-2xl p-8 text-white overflow-hidden">
          <h3 className="text-2xl font-bold mb-4 font-rf-dewi">
            Furniture Designed To The
            <br />
            Greatest Extent
          </h3>
          <div className="mt-8">
            <img
              src="/image 3.png"
              alt="Furniture website"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Workplace Consultancy Card */}
          <div className="relative rounded-2xl border border-gray-200 bg-white p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full overflow-hidden">
              <img
                src="/image 4.png"
                alt="Consultation team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-sm  w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">
              <p>2025 • Gary Neville</p>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-rf-dewi">
            A Workplace Consultancy
            <br />
            Creating Inspiring
            <br />
            Environments
          </h3>
          <Button className="bg-lime-400 hover:bg-lime-500 text-black">
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Global Talent Group Card */}
        <div className="relative rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 p-8">
          <div className="text-sm text-gray-600 mb-4">
            <p>2025 • Gary Neville</p>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-rf-dewi">
            Redefining A Leading
            <br />
            Global Talent Group
          </h3>
          <div className="absolute top-4 right-4">
            <img src="/image 3.png" alt="Restaurant website" className="w-30 h-24 rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
