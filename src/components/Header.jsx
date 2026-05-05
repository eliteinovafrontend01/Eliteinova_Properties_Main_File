import React, { useState, useEffect, useRef } from "react";
import { User, Menu, ChevronDown, X, Sparkles, Bell, Search, HelpCircle, Settings, LogOut, Home, Building, Landmark, Warehouse, TrendingUp, Shield, DollarSign, Wrench, PaintBucket, Droplets, Heart, Star, Zap, CheckCircle, Award, MapPin, Globe, Phone, Mail, Calendar, Clock, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

const Header = ({ onPostPropertyClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const customerPortalMenu = {
    "Individual": ["Rent", "Buy", "Lease", "Sell"],
    "Apartment": ["Rent", "Buy", "Lease", "Sell"],
    "Commercial": ["Rent", "Buy", "Lease", "Sell"],
    "Land & Plots": ["Rent", "Buy", "Lease", "Sell"],
    "Hostel": ["Rent", "Buy", "Lease", "Sell"],
  };

  const postPropertyMenu = [
    "Owner",
    "Agent",
    "Builder",
    "Hostel",
    "Property Management",
  ];

  const loanMenu = [
    "Home Loan",
    "Property Loan",
    "Construction Loan",
    "Plot Loan",
    "Commercial Loan"
  ];

  const servicesMenu = [
    "Construction",
    "Interior",
    "Painting",
    "Plumbing",
    "Cleaning"
  ];

  const userMenuItems = [
    { name: "👤 Profile", icon: <User className="w-4 h-4" /> },
    { name: "⚙️ Settings", icon: <Settings className="w-4 h-4" /> },
    { name: "❓ Help & Support", icon: <HelpCircle className="w-4 h-4" /> },
    { name: "🚪 Logout", icon: <LogOut className="w-4 h-4" /> },
  ];

  const quickLinks = [
    { name: "⭐ Featured", path: "/featured", icon: <Star className="w-3 h-3" /> },
    { name: "📈 Trending", path: "/trending", icon: <TrendingUp className="w-3 h-3" /> },
    { name: "👑 Premium", path: "/premium", icon: <Award className="w-3 h-3" /> },
    { name: "✅ Verified", path: "/verified", icon: <CheckCircle className="w-3 h-3" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePostSubmenuClick = (item) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    
    if (onPostPropertyClick) {
      onPostPropertyClick(item);
    }
  };

  // Update the handleCustomerPortalClick function in Header.jsx
const handleCustomerPortalClick = (type) => {
  setActiveDropdown(null);
  setMobileMenuOpen(false);
  
  const typeKey = type.toLowerCase().replace(/\s+/g, '-');
  
  if (typeKey === "individual") {
    navigate("/individual");
  } else if (typeKey === "rent") {
    navigate("/rent");
  } else if (typeKey === "buy") {
    navigate("/buy");
  } else if (typeKey === "lease") {
    navigate("/lease");
  } else if (typeKey === "sell") {
    navigate("/sell");
  } else if (typeKey === "apartment") {
    navigate("/apartment");
  } else if (typeKey === "commercial") {
    navigate("/commercial");
  } else if (typeKey === "land-&-plots") {
    navigate("/land-plots");
  } else if (typeKey === "hostel") {
    navigate("/hostel");
  }
};

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-[#00695C]/95 via-[#26A69A]/95 to-[#00695C]/95 backdrop-blur-lg shadow-2xl' 
          : 'bg-gradient-to-r from-[#00695C] via-[#26A69A] to-[#00695C]'
      }`}>
        {/* Floating Particles Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
          
          {/* Animated Waves */}
          <div className="absolute bottom-0 left-0 right-0 h-8">
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/10 to-transparent animate-wave" />
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white/5 to-transparent animate-wave-delayed" />
          </div>
        </div>

        {/* Animated Gradient Border Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />

        {/* ================= TOP BAR ================= */}
        <div className="h-16 md:h-20 w-full px-4 md:px-6 flex items-center relative">
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 animate-glow-sweep" />
          
          <div className="flex items-center justify-between w-full relative z-10">
            {/* LEFT SECTION */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Animated Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-xl hover:bg-white/20 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Menu className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300 relative z-10" />
              </button>

              {/* Animated Logo without white circle */}
              <div
                onClick={() => navigate("/")}
                className="cursor-pointer group relative animate-logo-float"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Logo Container with Holographic Effect */}
                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex items-center justify-center">
                  {/* Holographic Background */}
                  <div className="absolute inset-0 animate-holographic" />
                  
                  {/* Inner Shine */}
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-sm" />
                  
                  <img
                    src={logo}
                    alt="Eliteinova Properties Logo"
                    className="w-10 h-10 md:w-14 md:h-14 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3"
                    style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}
                  />
                </div>
              </div>

              {/* Animated Brand Text with Neon Effect */}
              <div 
                onClick={() => navigate("/")} 
                className="cursor-pointer group relative"
              >
                {/* Text Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#00E5FF]/20 via-transparent to-[#00E5FF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h1
                  className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight relative animate-text-glow"
                  style={{
                    fontFamily: "Pacifico, cursive",
                    color: "#E8F5E9",
                    textShadow: '0 2px 20px rgba(0, 229, 255, 0.3)',
                  }}
                >
                  <span className="relative">
                    Eliteinova Properties
                    {/* Neon Border Effect */}
                    <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#00E5FF] via-[#00FF88] to-[#00E5FF] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500" />
                  </span>
                </h1>
                
                {/* Subheading with Typing Animation */}
                <p 
                  className="text-sm md:text-base lg:text-lg font-normal leading-tight mt-0.5 flex items-center gap-2"
                  style={{
                    fontFamily: "Pacifico, cursive",
                    color: "#C8E6C9",
                  }}
                >
                  <span className="relative whitespace-nowrap">
                    No Brokerage
                    <Sparkles className="absolute -right-5 top-0 w-4 h-4 text-yellow-300 animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                  <span className="text-xs bg-gradient-to-r from-[#00FF88]/20 to-[#00E5FF]/20 px-2 py-0.5 rounded-full border border-white/10 animate-pulse">
                    Trusted
                  </span>
                </p>
              </div>
            </div>

            {/* CENTER SECTION - Quick Links */}
            <div className="hidden lg:flex items-center gap-4 mx-6">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  className="relative group"
                >
                  <span className="text-white/80 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                    {link.icon}
                    {link.name.replace(/[⭐📈👑✅]/g, '')}
                  </span>
                  <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#00FF88] to-[#00E5FF] transform -translate-x-1/2 group-hover:w-4/5 transition-all duration-300 rounded-full" />
                </button>
              ))}
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-3">
              {/* Animated Search Bar */}
              <div ref={searchRef} className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="w-10 h-10 rounded-full flex items-center justify-center relative group transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)',
                    boxShadow: '0 4px 20px rgba(0,105,92,0.3)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00695C] via-[#26A69A] to-[#00695C] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full" />
                  <Search className="w-5 h-5 text-[#00695C] group-hover:text-[#004D40] transition-colors duration-300" />
                </button>

                {searchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-gradient-to-b from-white/98 to-gray-50/98 backdrop-blur-xl rounded-2xl shadow-2xl z-50 border border-white/20 animate-dropdown-slide">
                    <form onSubmit={handleSearch} className="p-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search properties, locations, agents..."
                          className="w-full pl-10 pr-4 py-3 bg-white/50 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#26A69A]/50 focus:border-transparent text-gray-800 placeholder-gray-500"
                          autoFocus
                        />
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button
                          type="button"
                          onClick={() => setSearchQuery("Apartments in Mumbai")}
                          className="text-xs bg-gradient-to-r from-[#26A69A]/10 to-[#00695C]/10 hover:from-[#26A69A]/20 hover:to-[#00695C]/20 text-[#00695C] px-3 py-1.5 rounded-lg transition-all duration-300"
                        >
                          🏙️ Mumbai
                        </button>
                        <button
                          type="button"
                          onClick={() => setSearchQuery("Villas in Bangalore")}
                          className="text-xs bg-gradient-to-r from-[#26A69A]/10 to-[#00695C]/10 hover:from-[#26A69A]/20 hover:to-[#00695C]/20 text-[#00695C] px-3 py-1.5 rounded-lg transition-all duration-300"
                        >
                          🏡 Bangalore
                        </button>
                        <button
                          type="button"
                          onClick={() => setSearchQuery("Commercial Spaces")}
                          className="text-xs bg-gradient-to-r from-[#26A69A]/10 to-[#00695C]/10 hover:from-[#26A69A]/20 hover:to-[#00695C]/20 text-[#00695C] px-3 py-1.5 rounded-lg transition-all duration-300"
                        >
                          🏪 Commercial
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* Animated Notification Bell */}
              <button className="relative group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center relative transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, #FFEB3B, #FF9800)',
                    boxShadow: '0 4px 20px rgba(255,152,0,0.3)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-yellow-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full" />
                  <Bell className="w-5 h-5 text-[#FF6F00] group-hover:text-[#FF3D00] transition-colors duration-300" />
                </div>
                {notificationCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-ping-slow">
                    <span className="text-white text-xs font-bold">{notificationCount}</span>
                  </div>
                )}
              </button>

              {/* Enhanced User Profile with Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center relative group overflow-hidden transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)',
                    boxShadow: '0 4px 20px rgba(0,105,92,0.3)',
                  }}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00695C] via-[#26A69A] to-[#00695C] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full" />
                  
                  {/* Orbital Rings */}
                  <div className="absolute -inset-1 rounded-full border border-white/20 animate-orbit-slow" />
                  <div className="absolute -inset-2 rounded-full border border-white/10 animate-orbit" />
                  
                  <User className="w-6 h-6 md:w-7 md:h-7 text-[#00695C] group-hover:text-[#004D40] transition-colors duration-300 relative z-10 group-hover:rotate-12" />
                  
                  {/* Online Status */}
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse border-2 border-white" />
                </button>

                {userMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-gradient-to-b from-white/98 to-gray-50/98 backdrop-blur-xl rounded-2xl shadow-2xl z-50 border border-white/20 animate-dropdown-slide">
                    <div className="p-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00695C] to-[#26A69A] flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">👤 John Doe</p>
                          <p className="text-xs text-gray-500">👑 Premium Member</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      {userMenuItems.map((item, index) => (
                        <button
                          key={item.name}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r from-[#00695C]/5 to-[#26A69A]/5 transition-all duration-300 rounded-lg animate-dropdown-item"
                          style={{ animationDelay: `${index * 50}ms` }}
                          onClick={() => {
                            setUserMenuOpen(false);
                            if (item.name === "🚪 Logout") {
                              // Handle logout
                            } else {
                              navigate(`/${item.name.toLowerCase().replace(/[👤⚙️❓🚪]/g, '').trim()}`);
                            }
                          }}
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden md:flex h-14 items-center relative bg-gradient-to-r from-[#004D40]/80 via-[#00796B]/80 to-[#004D40]/80 backdrop-blur-sm border-t border-white/10">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer-slow" />
          </div>
          
          <div className="flex items-center relative z-10">
            {/* Home Button with Active Indicator */}
            <button
              onClick={() => {
                navigate("/");
                setActiveTab("home");
              }}
              className={`group relative px-5 h-14 text-white font-semibold text-base transition-all duration-300 overflow-hidden ${
                activeTab === "home" 
                  ? 'bg-gradient-to-r from-white/15 to-transparent' 
                  : 'hover:bg-white/10'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <span className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </span>
              
              {/* Active Indicator */}
              {activeTab === "home" && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 to-amber-400 animate-pulse" />
              )}
            </button>

            {/* Customer Portal */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("customer")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => navigate("/customer-portal")}
                className="group relative px-5 h-14 text-white font-semibold text-base hover:bg-white/10 flex items-center gap-2 transition-all duration-300"
              >
                <Building className="w-4 h-4" />
                <span>Customer Portal</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "customer" ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === "customer" && (
                <div className="absolute top-full left-0 bg-gradient-to-b from-white/98 to-gray-50/98 backdrop-blur-xl rounded-2xl shadow-2xl z-50 min-w-[160px] border border-white/20 animate-dropdown-slide">
                  {Object.entries(customerPortalMenu).map(([key, submenu]) => (
                    <div key={key} className="relative group">
                      <button 
                        onClick={() => handleCustomerPortalClick(key)}
                        className="w-full px-4 py-3 text-left text-sm font-semibold text-black hover:bg-gradient-to-r from-[#00695C]/5 to-[#26A69A]/5 transition-all duration-300 capitalize"
                      >
                        {key}
                      </button>
                      <div className="absolute left-full top-0 hidden group-hover:block bg-gradient-to-b from-white/98 to-gray-50/98 backdrop-blur-xl rounded-2xl shadow-2xl min-w-[140px] z-50 border border-white/20 animate-nested-slide">
                        {submenu.map((item) => (
                          <button
                            key={item}
                            onClick={() => handleCustomerPortalClick(item.toLowerCase())}
                            className="w-full px-4 py-2.5 text-left text-sm text-black hover:bg-gradient-to-r from-[#00695C]/5 to-[#26A69A]/5 transition-all duration-300"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Post Property */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("post")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => navigate("/post-property")}
                className="group relative px-5 h-14 text-white font-semibold text-base hover:bg-white/10 flex items-center gap-2 transition-all duration-300"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Post Your Property</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "post" ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === "post" && (
                <div className="absolute top-full left-0 bg-gradient-to-b from-white/98 to-gray-50/98 backdrop-blur-xl rounded-2xl shadow-2xl z-50 min-w-[220px] border border-white/20 animate-dropdown-slide">
                  {postPropertyMenu.map((item) => (
                    <button
                      key={item}
                      onClick={() => handlePostSubmenuClick(item)}
                      className="w-full px-4 py-3 text-left text-sm font-semibold text-black hover:bg-gradient-to-r from-[#00695C]/5 to-[#26A69A]/5 transition-all duration-300"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Find Your Loan */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("loan")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="group relative px-5 h-14 text-white font-semibold text-base hover:bg-white/10 flex items-center gap-2 transition-all duration-300">
                <Landmark className="w-4 h-4" />
                <span>Find Your Loan</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "loan" ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === "loan" && (
                <div className="absolute top-full left-0 bg-gradient-to-b from-white/98 to-gray-50/98 backdrop-blur-xl rounded-2xl shadow-2xl z-50 min-w-[180px] border border-white/20 animate-dropdown-slide">
                  {loanMenu.map((item) => (
                    <button
                      key={item}
                      className="w-full px-4 py-3 text-left text-sm font-semibold text-black hover:bg-gradient-to-r from-[#00695C]/5 to-[#26A69A]/5 transition-all duration-300"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="group relative px-5 h-14 text-white font-semibold text-base hover:bg-white/10 flex items-center gap-2 transition-all duration-300">
                <Settings className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "services" ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 bg-gradient-to-b from-white/98 to-gray-50/98 backdrop-blur-xl rounded-2xl shadow-2xl z-50 min-w-[160px] border border-white/20 animate-dropdown-slide">
                  {servicesMenu.map((item) => (
                    <button
                      key={item}
                      className="w-full px-4 py-3 text-left text-sm font-semibold text-black hover:bg-gradient-to-r from-[#00695C]/5 to-[#26A69A]/5 transition-all duration-300"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Live Stats with Emojis */}
            <div className="ml-auto mr-4 flex items-center gap-6">
              <div className="text-white/80 text-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-bold">🏠 1,234+</span>
                <span className="text-white/60">Properties</span>
              </div>
              <div className="text-white/80 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-400" />
                <span className="font-bold">😊 567+</span>
                <span className="text-white/60">Happy Clients</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50 animate-fade-in"
          onClick={toggleMobileMenu}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00695C]/90 via-[#26A69A]/90 to-[#00695C]/90 backdrop-blur-xl animate-backdrop-fade" />
          
          <div 
            className="absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-[#00695C] to-[#26A69A] shadow-2xl overflow-y-auto animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-white border-opacity-20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-white/10 to-transparent">
                  <Menu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl">📱 Menu</h2>
                  <p className="text-white/60 text-sm">👋 Welcome back!</p>
                </div>
              </div>
              <button 
                onClick={toggleMobileMenu} 
                className="p-2 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <X className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>
            
            {/* Mobile Search */}
            <div className="p-5">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="🔍 Search..."
                    className="w-full pl-10 pr-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/60"
                  />
                </div>
              </form>
            </div>
            
            {/* Mobile Menu Items with Expandable Submenus */}
            <div className="p-5">
              <button 
                onClick={() => {
                  navigate('/');
                  toggleMobileMenu();
                }}
                className="w-full text-left text-white font-semibold py-4 border-b border-white border-opacity-20 text-lg animate-slide-in-item"
                style={{ animationDelay: '0ms' }}
              >
                Home
              </button>
              
              <details className="border-b border-white border-opacity-20 animate-slide-in-item" style={{ animationDelay: '50ms' }}>
                <summary className="text-white font-semibold py-4 cursor-pointer list-none text-lg">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customer-portal");
                        toggleMobileMenu();
                      }}
                      className="text-left flex-1"
                    >
                      Customer Portal
                    </button>
                    <ChevronDown className="w-5 h-5 pointer-events-none" />
                  </div>
                </summary>
                <div className="pl-5 pb-3">
                  {Object.entries(customerPortalMenu).map(([key, submenu]) => (
                    <details key={key} className="mb-3">
                      <summary className="text-white text-base py-3 capitalize cursor-pointer list-none">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleCustomerPortalClick(key);
                            }}
                            className="text-left flex-1"
                          >
                            {key}
                          </button>
                          <ChevronDown className="w-4 h-4 pointer-events-none" />
                        </div>
                      </summary>
                      <div className="pl-5">
                        {submenu.map((item) => (
                          <button 
                            key={item} 
                            onClick={() => {
                              handleCustomerPortalClick(item.toLowerCase());
                              toggleMobileMenu();
                            }}
                            className="block text-white text-sm py-2.5 w-full text-left hover:bg-white hover:bg-opacity-10"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </details>
              
              <details className="border-b border-white border-opacity-20 animate-slide-in-item" style={{ animationDelay: '100ms' }}>
                <summary className="text-white font-semibold py-4 cursor-pointer list-none text-lg">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/post-property");
                        toggleMobileMenu();
                      }}
                      className="text-left flex-1"
                    >
                      Post Your Property
                    </button>
                    <ChevronDown className="w-5 h-5 pointer-events-none" />
                  </div>
                </summary>
                <div className="pl-5 pb-3">
                  {postPropertyMenu.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        handlePostSubmenuClick(item);
                        toggleMobileMenu();
                      }}
                      className="block text-white text-base py-3 w-full text-left hover:bg-white hover:bg-opacity-10"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </details>

              <details className="border-b border-white border-opacity-20 animate-slide-in-item" style={{ animationDelay: '150ms' }}>
                <summary className="text-white font-semibold py-4 cursor-pointer list-none text-lg">
                  <span className="flex items-center justify-between">
                    Find Your Loan
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="pl-5 pb-3">
                  {loanMenu.map((item) => (
                    <button 
                      key={item} 
                      className="block text-white text-base py-3 w-full text-left hover:bg-white hover:bg-opacity-10"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </details>
              
              <details className="border-b border-white border-opacity-20 animate-slide-in-item" style={{ animationDelay: '200ms' }}>
                <summary className="text-white font-semibold py-4 cursor-pointer list-none text-lg">
                  <span className="flex items-center justify-between">
                    Services
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="pl-5 pb-3">
                  {servicesMenu.map((item) => (
                    <button 
                      key={item} 
                      className="block text-white text-base py-3 w-full text-left hover:bg-white hover:bg-opacity-10"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </details>

              {/* Profile */}
              <button
                onClick={() => {
                  navigate("/profile");
                  toggleMobileMenu();
                }}
                className="w-full text-left text-white font-semibold py-4 border-b border-white border-opacity-20 text-lg animate-slide-in-item"
                style={{ animationDelay: '250ms' }}
              >
                Profile
              </button>

              {/* Notifications */}
              <button
                onClick={() => {
                  navigate("/notifications");
                  toggleMobileMenu();
                }}
                className="w-full text-left text-white font-semibold py-4 border-b border-white border-opacity-20 text-lg animate-slide-in-item"
                style={{ animationDelay: '300ms' }}
              >
                Notifications
              </button>

              {/* Help */}
              <button
                onClick={() => {
                  navigate("/help");
                  toggleMobileMenu();
                }}
                className="w-full text-left text-white font-semibold py-4 text-lg animate-slide-in-item"
                style={{ animationDelay: '350ms' }}
              >
                Help
              </button>
            </div>

            {/* Mobile Stats */}
            <div className="p-5 border-t border-white/10 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">🏠 1,234+</div>
                  <div className="text-white/60 text-sm mt-1">Properties</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">😊 567+</div>
                  <div className="text-white/60 text-sm mt-1">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20"></div>

      {/* Custom Animations CSS */}
      <style jsx>{`
        @keyframes particle-float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-20px) translateX(15px) rotate(90deg); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-15px) translateX(-10px) rotate(180deg); 
            opacity: 0.8;
          }
          75% { 
            transform: translateY(10px) translateX(20px) rotate(270deg); 
            opacity: 0.4;
          }
        }
        .animate-particle-float {
          animation: particle-float 10s ease-in-out infinite;
        }

        @keyframes wave {
          0% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(50px) scaleY(1.2); }
          100% { transform: translateX(100px) scaleY(1); }
        }
        .animate-wave {
          animation: wave 8s ease-in-out infinite;
        }
        .animate-wave-delayed {
          animation: wave 8s ease-in-out infinite 2s;
        }

        @keyframes holographic {
          0% { 
            background: linear-gradient(45deg, #00E5FF20, #00FF8820, #00E5FF20); 
          }
          50% { 
            background: linear-gradient(135deg, #00FF8820, #00E5FF20, #00FF8820); 
          }
          100% { 
            background: linear-gradient(225deg, #00E5FF20, #00FF8820, #00E5FF20); 
          }
        }
        .animate-holographic {
          animation: holographic 4s linear infinite;
        }

        @keyframes logo-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-3px) rotate(-1deg); }
          50% { transform: translateY(-5px) rotate(0deg); }
          75% { transform: translateY(-3px) rotate(1deg); }
        }
        .animate-logo-float {
          animation: logo-float 6s ease-in-out infinite;
        }

        @keyframes text-glow {
          0%, 100% { 
            text-shadow: 0 2px 20px rgba(0, 229, 255, 0.3);
          }
          50% { 
            text-shadow: 0 2px 30px rgba(0, 229, 255, 0.6), 0 0 40px rgba(0, 255, 136, 0.4);
          }
        }
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { 
            opacity: 0;
            transform: scale(0.5) rotate(0deg);
          }
          50% { 
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(10px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(10px) rotate(-360deg); }
        }
        .animate-orbit {
          animation: orbit 4s linear infinite;
        }

        @keyframes orbit-slow {
          0% { transform: rotate(0deg) translateX(15px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(15px) rotate(-360deg); }
        }
        .animate-orbit-slow {
          animation: orbit-slow 6s linear infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer-slow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer-slow {
          animation: shimmer-slow 8s linear infinite;
        }

        @keyframes glow-sweep {
          0%, 100% { 
            background-position: 0% 50%; 
            opacity: 0.3;
          }
          50% { 
            background-position: 100% 50%; 
            opacity: 0.6;
          }
        }
        .animate-glow-sweep {
          background-size: 200% 200%;
          animation: glow-sweep 4s ease infinite;
        }

        @keyframes ping-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes dropdown-slide {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-dropdown-slide {
          animation: dropdown-slide 0.3s ease-out forwards;
        }

        @keyframes dropdown-item {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-dropdown-item {
          animation: dropdown-item 0.3s ease-out forwards;
        }

        @keyframes nested-slide {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-nested-slide {
          animation: nested-slide 0.2s ease-out forwards;
        }

        @keyframes nested-item {
          from {
            opacity: 0;
            transform: translateX(-5px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-nested-item {
          animation: nested-item 0.2s ease-out forwards;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        @keyframes backdrop-fade {
          from {
            backdrop-filter: blur(0);
            opacity: 0;
          }
          to {
            backdrop-filter: blur(10px);
            opacity: 1;
          }
        }
        .animate-backdrop-fade {
          animation: backdrop-fade 0.3s ease-out forwards;
        }

        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes slide-in-item {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-item {
          animation: slide-in-item 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Header;