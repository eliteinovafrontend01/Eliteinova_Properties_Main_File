// MixedUseCommercialData.js
// Import all images from assets (keeping same paths as original)
import villa1_logo from "../../assets/Villa/villa1_logo.png";
import villa1_1 from "../../assets/Villa/villa1_1.png";
import villa1_2 from "../../assets/Villa/villa1_2.png";
import villa1_3 from "../../assets/Villa/villa1_3.png";
import villa1_4 from "../../assets/Villa/villa1_4.png";
import villa1_5 from "../../assets/Villa/villa1_5.png";

import villa2_1 from "../../assets/Villa/villa2_1.png";
import villa2_2 from "../../assets/Villa/villa2_2.png";

import villa3_1 from "../../assets/Villa/villa3_1.png";
import villa3_2 from "../../assets/Villa/villa3_2.png";
import villa3_3 from "../../assets/Villa/villa3_3.png";
import villa3_4 from "../../assets/Villa/villa3_4.png";
import villa3_5 from "../../assets/Villa/villa3_5.png";

import villa4_1 from "../../assets/Villa/villa4_1.png";
import villa4_2 from "../../assets/Villa/villa4_2.png";
import villa4_3 from "../../assets/Villa/villa4_3.png";
import villa4_4 from "../../assets/Villa/villa4_4.png";
import villa4_5 from "../../assets/Villa/villa4_5.png";

import villa5_1 from "../../assets/Villa/villa5_1.png";
import villa5_2 from "../../assets/Villa/villa5_2.png";
import villa5_3 from "../../assets/Villa/villa5_3.png";
import villa5_4 from "../../assets/Villa/villa5_4.png";
import villa5_5 from "../../assets/Villa/villa5_5.png";

import villa6_1 from "../../assets/Villa/villa6_1.png";
import villa6_2 from "../../assets/Villa/villa6_2.png";
import villa6_3 from "../../assets/Villa/villa6_3.png";
import villa6_4 from "../../assets/Villa/villa6_4.png";
import villa6_5 from "../../assets/Villa/villa6_5.png";

import villa7_1 from "../../assets/Villa/villa7_1.png";
import villa7_2 from "../../assets/Villa/villa7_2.png";
import villa7_3 from "../../assets/Villa/villa7_3.png";
import villa7_4 from "../../assets/Villa/villa7_4.png";
import villa7_5 from "../../assets/Villa/villa7_5.png";

import villa8_1 from "../../assets/Villa/villa8_1.png";
import villa8_2 from "../../assets/Villa/villa8_2.png";
import villa8_3 from "../../assets/Villa/villa8_3.png";
import villa8_4 from "../../assets/Villa/villa8_4.png";
import villa8_5 from "../../assets/Villa/villa8_5.png";

import villa9_1 from "../../assets/Villa/villa9_1.png";
import villa9_2 from "../../assets/Villa/villa9_2.png";
import villa9_3 from "../../assets/Villa/villa9_3.png";
import villa9_4 from "../../assets/Villa/villa9_4.png";

import villa10_1 from "../../assets/Villa/villa10_1.png";
import villa10_2 from "../../assets/Villa/villa10_2.png";
import villa10_3 from "../../assets/Villa/villa10_3.png";

export const MixedUseCommercialData = [
  // RENT - Mixed-Use Commercial Property (Posted by OWNER)
  {
    id: 1,
    tag: "RENT",
    status: "NEW",
    price: "₹3.5 Lakh/month",
    sqftPrice: "₹35 per sqft",
    totalSqft: "10,000 sqft Area",
    builtUp: "9,200 sqft (Built Up area)",
    location: "T. Nagar, Chennai-600017, Tamil Nadu",
    highlights: "Mixed-Use | Retail + Office Space | Main Road Facing | Corner Property",
    postedBy: "Meera Enterprises",
    postedAs: "Owner",
    logo: villa1_logo,
    images: [villa1_1, villa1_2, villa1_3, villa1_4, villa1_5],
    agentDetails: "📍 Direct owner - Mixed-Use Commercial property | Ground floor retail + Upper floors office | Corner location with high visibility",
    contactEmail: "meera.enterprises@example.com",
    contactPhone: "+91 98765 43210",
    experience: "15+ years in commercial real estate",
    achievements: "Trusted by 100+ businesses"
  },
  
  // BUY - Mixed-Use Commercial Property (Posted by AGENT)
  {
    id: 2,
    tag: "BUY",
    status: "RE-SALE",
    price: "₹12.5 Crores",
    sqftPrice: "₹8,500 per sqft",
    totalSqft: "14,700 sqft Area",
    builtUp: "13,500 sqft (Built Up area)",
    location: "OMR, Chennai-600096, Tamil Nadu",
    highlights: "Commercial + Residential | 5 Floors | Near IT Park | High ROI",
    postedBy: "Elite Realtors",
    postedAs: "Agent",
    logo: "",
    images: [villa2_1, villa2_2],
    agentDetails: "🏆 Prime Mixed-Use property | Ground to 5th floor | Retail + Office + Residential units | RERA approved",
    contactEmail: "elite.realtors@example.com",
    contactPhone: "+91 44 2345 6789",
    experience: "20+ years in real estate",
    achievements: "500+ successful commercial deals"
  },
  
  // SELL - Mixed-Use Commercial Property (Posted by BUILDER)
  {
    id: 3,
    tag: "SELL",
    status: "NEW",
    price: "₹8.75 Crores",
    sqftPrice: "₹7,200 per sqft",
    totalSqft: "12,150 sqft Area",
    builtUp: "11,200 sqft (Built Up area)",
    location: "Velachery, Chennai-600042, Tamil Nadu",
    highlights: "Under Construction | Retail + Food Court | Commercial Complex",
    postedBy: "Sriram Constructions",
    postedAs: "Builder",
    logo: "",
    images: [villa3_1, villa3_2, villa3_3, villa3_4, villa3_5],
    agentDetails: "🏗️ Brand new Mixed-Use development | Possession in 12 months | Flexible payment plans | Premium location",
    contactEmail: "sriram.builders@example.com",
    contactPhone: "+91 98888 77766",
    experience: "25+ years in construction",
    achievements: "50+ projects completed"
  },
  
  // LEASE - Mixed-Use Commercial Property (Posted by OWNER)
  {
    id: 4,
    tag: "LEASE",
    status: "NEW",
    price: "₹2.5 Crores",
    sqftPrice: "For 5 Years",
    totalSqft: "8,500 sqft Area",
    builtUp: "7,800 sqft (Built Up area)",
    location: "Anna Nagar, Chennai-600040, Tamil Nadu",
    highlights: "Long-term Lease | Retail + Office | High Footfall Area",
    postedBy: "Kumar Properties",
    postedAs: "Lessor",
    logo: "",
    images: [villa4_1, villa4_2, villa4_3, villa4_4, villa4_5],
    agentDetails: "📄 Prime Mixed-Use property for long-term lease | Ground floor retail, upper floors office | 5+ years lease preferred",
    contactEmail: "kumar.properties@example.com",
    contactPhone: "+91 97777 66554",
    experience: "Commercial leasing specialist",
    achievements: "100+ successful leases"
  },
  
  // RENT - Mixed-Use with Residential (Posted by AGENT)
  {
    id: 5,
    tag: "RENT",
    status: "RE-SALE",
    price: "₹2.2 Lakh/month",
    sqftPrice: "₹28 per sqft",
    totalSqft: "7,850 sqft Area",
    builtUp: "7,200 sqft (Built Up area)",
    location: "Adyar, Chennai-600020, Tamil Nadu",
    highlights: "4 BHK Residential + Office Space | 3 Floors | Prime Location",
    postedBy: "Adyar Realty",
    postedAs: "Agent",
    logo: "",
    images: [villa5_1, villa5_2, villa5_3, villa5_4, villa5_5],
    agentDetails: "🏠 Mixed-Use with residential units | Ground floor office + First/second floor 4BHK | Family-friendly area",
    contactEmail: "adyar.realty@example.com",
    contactPhone: "+91 96666 55443",
    experience: "12+ years in property management",
    achievements: "RERA certified agent"
  },
  
  // BUY - Mixed-Use Showroom (Posted by SELLER)
  {
    id: 6,
    tag: "BUY",
    status: "NEW",
    price: "₹5.2 Crores",
    sqftPrice: "₹6,500 per sqft",
    totalSqft: "8,000 sqft Area",
    builtUp: "7,500 sqft (Built Up area)",
    location: "Purasaivakkam, Chennai-600007, Tamil Nadu",
    highlights: "Showroom Space | 2 Floors | High Street | Excellent Visibility",
    postedBy: "Ramesh S",
    postedAs: "Seller",
    logo: "",
    images: [villa6_1, villa6_2, villa6_3, villa6_4, villa6_5],
    agentDetails: "💰 Premium showroom property | Ground floor retail + First floor office | Clear title | Immediate possession",
    contactEmail: "ramesh.sell@example.com",
    contactPhone: "+91 95555 44332",
    experience: "First time seller",
    achievements: "Property maintained for 8 years"
  },
  
  // LEASE - Mixed-Use Complex (Posted by BUILDER)
  {
    id: 7,
    tag: "LEASE",
    status: "NEW",
    price: "₹1.8 Crores",
    sqftPrice: "For 3 Years",
    totalSqft: "6,500 sqft Area",
    builtUp: "6,000 sqft (Built Up area)",
    location: "Porur, Chennai-600116, Tamil Nadu",
    highlights: "Retail + Food Court | Near Highway | High Footfall",
    postedBy: "Modern Developers",
    postedAs: "Builder",
    logo: "",
    images: [villa7_1, villa7_2, villa7_3, villa7_4, villa7_5],
    agentDetails: "🏗️ Modern Mixed-Use development | Retail shops + Food court area | Ideal for restaurants and retail chains",
    contactEmail: "modern.developers@example.com",
    contactPhone: "+91 94444 33221",
    experience: "18+ years in development",
    achievements: "15 completed commercial projects"
  },
  
  // SELL - Mixed-Use Property (Posted by OWNER)
  {
    id: 8,
    tag: "SELL",
    status: "RE-SALE",
    price: "₹3.95 Crores",
    sqftPrice: "₹5,800 per sqft",
    totalSqft: "6,800 sqft Area",
    builtUp: "6,200 sqft (Built Up area)",
    location: "Nungambakkam, Chennai-600034, Tamil Nadu",
    highlights: "Commercial + Residential | Near Metro | Premium Location",
    postedBy: "Lakshmi Ventures",
    postedAs: "Owner",
    logo: "",
    images: [villa8_1, villa8_2, villa8_3, villa8_4, villa8_5],
    agentDetails: "📍 Owner selling directly | Mixed-Use property | Ground floor retail + Residential apartments above | Clear title",
    contactEmail: "lakshmi.ventures@example.com",
    contactPhone: "+91 99887 66554",
    experience: "Property investor for 10 years",
    achievements: "Well-maintained property"
  },
  
  // RENT - Mixed-Use Office Focus (Posted by AGENT)
  {
    id: 9,
    tag: "RENT",
    status: "NEW",
    price: "₹4.2 Lakh/month",
    sqftPrice: "₹42 per sqft",
    totalSqft: "10,000 sqft Area",
    builtUp: "9,500 sqft (Built Up area)",
    location: "Guindy, Chennai-600032, Tamil Nadu",
    highlights: "Office Space Focus | 4 Floors | Business Park",
    postedBy: "Corporate Spaces",
    postedAs: "Agent",
    logo: "",
    images: [villa9_1, villa9_2, villa9_3, villa9_4],
    agentDetails: "💼 Premium office-focused Mixed-Use property | Fully AC | High-speed internet | 24/7 security | Parking available",
    contactEmail: "corporate.spaces@example.com",
    contactPhone: "+91 44 9876 5432",
    experience: "Corporate real estate specialist",
    achievements: "200+ corporate clients served"
  },
  
  // BUY - Mixed-Use Investment (Posted by AGENT)
  {
    id: 10,
    tag: "BUY",
    status: "RE-SALE",
    price: "₹18.5 Crores",
    sqftPrice: "₹9,250 per sqft",
    totalSqft: "20,000 sqft Area",
    builtUp: "18,500 sqft (Built Up area)",
    location: "Mount Road, Chennai-600002, Tamil Nadu",
    highlights: "High ROI | 6 Floors | Commercial + Residential | Investment Property",
    postedBy: "City Realtors",
    postedAs: "Agent",
    logo: "",
    images: [villa10_1, villa10_2, villa10_3],
    agentDetails: "📈 Best investment opportunity | Fully leased property | 12% annual return | Prime Mount Road location",
    contactEmail: "city.realtors@example.com",
    contactPhone: "+91 44 1234 5678",
    experience: "Investment property specialists",
    achievements: "₹500Cr+ deals closed"
  }
];