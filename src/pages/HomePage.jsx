import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slidesData = [
  {
    title: "Apartments",
    subtitle: "Where Comfort Meets Convenience",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80", // Top Left: Modern Facade
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80", // Top Right: Living Lounge
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80", // Bottom Left: Gourmet Kitchen
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop&q=80", // Bottom Right: Master Bedroom
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80"  // Center Diamond: Penthouse Terrace
    ]
  },
  {
    title: "Commercial Buildings",
    subtitle: "Elevate Your Business Address",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80", // Top Left: Skyscraper
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80", // Top Right: Corporate Lobby
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&auto=format&fit=crop&q=80", // Bottom Left: Boardroom
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop&q=80", // Bottom Right: Creative Coworking
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=80"  // Center Diamond: Modern Glass Exterior
    ]
  },
  {
    title: "Hostels",
    subtitle: "Your Home Away From Home",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80", // Top Left: Hostel Building
      "https://images.unsplash.com/photo-1596276122653-651a3898309f?w=800&auto=format&fit=crop&q=80", // Top Right: Shared Bedroom
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80", // Bottom Left: Study Lounge
      "https://images.unsplash.com/photo-1567521464027-f127ff1443cd?w=800&auto=format&fit=crop&q=80", // Bottom Right: Dining Area
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop&q=80"  // Center Diamond: Recreation Area
    ]
  },
  {
    title: "Individual Villas",
    subtitle: "Your Space. Your Sanctuary.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=80", // Top Left: Luxury Villa Facade
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=80", // Top Right: Grand Atrium
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&auto=format&fit=crop&q=80", // Bottom Left: Private Pool
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80", // Bottom Right: Manicured Lawn
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80"  // Center Diamond: Elegant Entryway
    ]
  },
  {
    title: "Land and Plots",
    subtitle: "Build Your Dream Home",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80", // Top Left: Golden Field Acres
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=80", // Top Right: Mountain Road Access
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80", // Bottom Left: Green Valley Landscape
      "https://images.unsplash.com/photo-1444653389962-8149286c578a?w=800&auto=format&fit=crop&q=80", // Bottom Right: Prime Commercial Plot
      "https://images.unsplash.com/photo-1500530815614-230a33d7b75f?w=800&auto=format&fit=crop&q=80"  // Center Diamond: Scenic Open Topography
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
    <div className="w-full bg-[#F4F7F6] font-sans antialiased">
      
      {/* Main Banner Housing Container */}
      <div className="relative w-full overflow-hidden h-[680px] md:h-[480px] lg:h-[550px] bg-[#D1E2DB]">
        
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
              
              {/* Left Text Block - Soft Light Sage Green Background */}
              <div 
                className="w-full md:w-[35%] lg:w-[32%] h-[240px] md:h-full bg-[#D1E2DB] text-[#2C3E35] relative flex flex-col justify-center px-6 sm:px-12 md:pl-10 lg:pl-16 pr-8 shrink-0 z-30"
                style={{
                  clipPath: window.innerWidth >= 768 ? 'polygon(0 0, 100% 0, 88% 100%, 0 100%)' : 'none'
                }}
              >
                <div className={`transition-all duration-500 transform ${isActive ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}>
                  <span className="text-[12px] lg:text-[14px] font-black tracking-[4px] text-[#1E7A6E] block mb-1">
                    LUXURY
                  </span>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight leading-none uppercase text-[#1C2D24]">
                    {slide.title.split(" ")[0]}
                    <span className="block text-[#556B60] font-light text-2xl sm:text-3xl lg:text-[30px] tracking-normal mt-1">
                      {slide.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h2>

                  <div className="w-10 h-[2.5px] bg-[#1E7A6E] my-4" />
                  
                  <p className="text-[#4A5D54] text-xs sm:text-sm lg:text-[14px] font-semibold mb-6 max-w-[280px] md:max-w-none">
                    {slide.subtitle}
                  </p>

                  <button className="w-[140px] lg:w-[150px] h-[42px] lg:h-[46px] bg-[#1E7A6E] text-white font-bold text-xs rounded-sm tracking-wider hover:bg-[#14534B] transition-colors shadow-md">
                    EXPLORE NOW
                  </button>
                </div>
              </div>

              {/* Right Side Photo Grid Matrix */}
              <div className="w-full md:w-[65%] lg:w-[68%] h-[440px] md:h-full relative z-10 grid grid-cols-2 grid-rows-2 gap-1.5 p-1.5 bg-[#D1E2DB]">
                
                {/* Block 1: Top Left */}
                <div className="relative w-full h-full overflow-hidden">
                  <img src={slide.images[0]} alt="Property Highlight 1" className="w-full h-full object-cover" />
                </div>

                {/* Block 2: Top Right */}
                <div className="relative w-full h-full overflow-hidden">
                  <img src={slide.images[1]} alt="Property Highlight 2" className="w-full h-full object-cover" />
                </div>

                {/* Block 3: Bottom Left */}
                <div className="relative w-full h-full overflow-hidden">
                  <img src={slide.images[2]} alt="Property Highlight 3" className="w-full h-full object-cover" />
                </div>

                {/* Block 4: Bottom Right */}
                <div className="relative w-full h-full overflow-hidden">
                  <img src={slide.images[3]} alt="Property Highlight 4" className="w-full h-full object-cover" />
                </div>

                {/* Central Intersecting Diamond Windows Frame (Contains Image 5) */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
                  <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[210px] md:h-[210px] lg:w-[250px] lg:h-[250px] transform rotate-45 shadow-2xl border-[5px] md:border-[7px] border-[#D1E2DB] overflow-hidden bg-[#D1E2DB]">
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
        <div className="absolute bottom-5 left-6 md:left-auto md:right-8 flex gap-2 z-40">
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

      {/* Quick Access Categories Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {["Customer Portal", "Post Your Property", "Find Your Loan", "Services"].map(
          (label) => (
            <button
              key={label}
              className="text-white font-bold py-3.5 rounded-full text-sm tracking-wider shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #14534B, #1E7A6E)" }}
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