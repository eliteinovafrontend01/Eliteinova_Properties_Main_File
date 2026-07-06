import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slidesData = [
  {
    title: "Apartments",
    subtitle: "Where Comfort Meets Convenience",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    title: "Commercial Buildings",
    subtitle: "Elevate Your Business Address",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    title: "Hostels",
    subtitle: "Your Home Away From Home",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596276122653-651a3898309f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1567521464027-f127ff1443cd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    title: "Individual Villas",
    subtitle: "Your Space. Your Sanctuary.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    title: "Land and Plots",
    subtitle: "Build Your Dream Home",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1444653389962-8149286c578a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500530815614-230a33d7b75f?w=800&auto=format&fit=crop&q=80"
    ]
  }
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  return (
    <div className="w-full bg-[#F4F7F6] font-sans antialiased mt-0 pt-0">
      
      {/* Main Banner Housing Container - Height reduced to h-[420px]/h-[480px] to cover header gap cleanly */}
      <div className="relative w-full overflow-hidden h-[600px] md:h-[420px] lg:h-[480px] bg-[#D1E2DB] top-0 mt-0">
        
        {/* Render Slides Loop */}
        {slidesData.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.title}
              className={`absolute inset-0 w-full h-full flex flex-col md:flex-row transition-all duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              
              {/* Left Text Block - Rich Geometric Accent Settings */}
              <div 
                className="w-full md:w-[40%] lg:w-[36%] h-[240px] md:h-full bg-[#D1E2DB] text-[#2C3E35] relative flex flex-col justify-center px-6 sm:px-12 md:pl-12 lg:pl-16 pr-10 shrink-0 z-30 overflow-hidden"
                style={{
                  clipPath: window.innerWidth >= 768 ? 'polygon(0 0, 100% 0, 90% 100%, 0 100%)' : 'none'
                }}
              >
                {/* BACKGROUND DIAMOND GEOMETRY GRAPHICS */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.25] z-0">
                  <div className="absolute top-4 left-6 w-12 h-12 border border-[#1E7A6E] transform rotate-45" />
                  <div className="absolute top-12 left-20 w-6 h-6 border border-[#1E7A6E] bg-[#1E7A6E]/10 transform rotate-45" />
                  <div className="absolute top-24 -left-8 w-24 h-24 border-2 border-dashed border-[#1E7A6E] transform rotate-45" />
                  <div className="absolute top-1/3 right-8 w-12 h-12 border border-[#1E7A6E] transform rotate-45" />
                  <div className="absolute top-[45%] left-1/4 w-10 h-10 border border-[#1E7A6E] bg-[#1E7A6E]/20 transform rotate-45" />
                  <div className="absolute bottom-8 left-16 w-20 h-20 border border-[#1E7A6E]/60 transform rotate-45" />
                  <div className="absolute bottom-2 right-16 w-14 h-14 border-2 border-[#1E7A6E] transform rotate-45" />
                  <div className="absolute bottom-24 -right-10 w-28 h-28 border border-dashed border-[#1E7A6E]/40 transform rotate-45" />
                </div>

                {/* Content Container */}
                <div className={`relative z-10 transition-all duration-500 transform ${isActive ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}>
                  <span className="text-[13px] lg:text-[14px] font-black tracking-[5px] text-[#1E7A6E] block mb-1">
                    LUXURY
                  </span>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[0.95] uppercase text-[#1C2D24]">
                    {slide.title.split(" ")[0]}
                    <span className="block text-[#556B60] font-light text-2xl sm:text-3xl lg:text-[34px] tracking-tight mt-1 lowercase first-letter:uppercase">
                      {slide.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h2>

                  <div className="w-14 h-[3px] bg-[#1E7A6E] my-4" />
                  
                  <p className="text-[#4A5D54] text-xs sm:text-sm lg:text-[16px] font-bold leading-snug mb-6 max-w-[300px] md:max-w-none">
                    {slide.subtitle}
                  </p>

                  <button className="w-[140px] lg:w-[155px] h-[42px] lg:h-[48px] bg-[#1E7A6E] text-white font-extrabold text-xs rounded-sm tracking-widest hover:bg-[#14534B] transition-colors shadow-md">
                    EXPLORE NOW
                  </button>
                </div>
              </div>

              {/* Right Side Photo Grid Matrix */}
              <div className="w-full md:w-[60%] lg:w-[64%] h-[360px] md:h-full relative z-10 grid grid-cols-2 grid-rows-2 gap-1 p-1 bg-[#D1E2DB]">
                
                <div className="relative w-full h-full overflow-hidden">
                  <img src={slide.images[0]} alt="Property Highlight 1" className="w-full h-full object-cover" />
                </div>

                <div className="relative w-full h-full overflow-hidden">
                  <img src={slide.images[1]} alt="Property Highlight 2" className="w-full h-full object-cover" />
                </div>

                <div className="relative w-full h-full overflow-hidden">
                  <img src={slide.images[2]} alt="Property Highlight 3" className="w-full h-full object-cover" />
                </div>

                <div className="relative w-full h-full overflow-hidden">
                  <img src={slide.images[3]} alt="Property Highlight 4" className="w-full h-full object-cover" />
                </div>

                {/* Central Intersecting Diamond Windows Frame */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
                  <div className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] transform rotate-45 shadow-2xl border-[5px] md:border-[6px] border-[#D1E2DB] overflow-hidden bg-[#D1E2DB]">
                    <div className="w-full h-full transform -rotate-45 scale-[1.42]">
                      <img 
                        src={slide.images[4]} 
                        alt="Featured Central Highlight" 
                        className="w-full h-full object-cover pointer-events-auto"
                      />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          );
        })}

        {/* Slide Carousel Arrow Overlays */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-[#1E7A6E] text-[#1C2D24] hover:text-white p-2 rounded-full shadow-md backdrop-blur-sm transition-all duration-300 z-40"
          aria-label="Previous Banner Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-[#1E7A6E] text-[#1C2D24] hover:text-white p-2 rounded-full shadow-md backdrop-blur-sm transition-all duration-300 z-40"
          aria-label="Next Banner Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicator Pagination Strip */}
        <div className="absolute bottom-4 left-6 md:left-auto md:right-8 flex gap-2 z-40">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-6 bg-[#1E7A6E]" : "w-2 bg-[#1C2D24]/30 hover:bg-[#1C2D24]/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Categories Navigation Grid - Parallelogram Buttons */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {["Customer Portal", "Post Your Property", "Find Your Loan", "Services"].map(
          (label) => (
            <button
              key={label}
              className="text-white font-bold py-3 rounded-none text-sm tracking-wider shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 relative"
              style={{
                background: "linear-gradient(135deg, #14534B, #1E7A6E)",
                clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                padding: "12px 24px",
              }}
            >
              {label}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;