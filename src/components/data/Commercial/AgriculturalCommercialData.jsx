// Import all images from assets
import villa1_logo from "../../../assets/Villa/villa1_logo.png";
import villa1_1 from "../../../assets/Villa/villa1_1.png";
import villa1_2 from "../../../assets/Villa/villa1_2.png";
import villa1_3 from "../../../assets/Villa/villa1_3.png";
import villa1_4 from "../../../assets/Villa/villa1_4.png";
import villa1_5 from "../../../assets/Villa/villa1_5.png";

import villa2_1 from "../../../assets/Villa/villa2_1.png";
import villa2_2 from "../../../assets/Villa/villa2_2.png";

import villa3_1 from "../../../assets/Villa/villa3_1.png";
import villa3_2 from "../../../assets/Villa/villa3_2.png";
import villa3_3 from "../../../assets/Villa/villa3_3.png";
import villa3_4 from "../../../assets/Villa/villa3_4.png";
import villa3_5 from "../../../assets/Villa/villa3_5.png";

import villa4_1 from "../../../assets/Villa/villa4_1.png";
import villa4_2 from "../../../assets/Villa/villa4_2.png";
import villa4_3 from "../../../assets/Villa/villa4_3.png";
import villa4_4 from "../../../assets/Villa/villa4_4.png";
import villa4_5 from "../../../assets/Villa/villa4_5.png";

import villa5_1 from "../../../assets/Villa/villa5_1.png";
import villa5_2 from "../../../assets/Villa/villa5_2.png";
import villa5_3 from "../../../assets/Villa/villa5_3.png";
import villa5_4 from "../../../assets/Villa/villa5_4.png";
import villa5_5 from "../../../assets/Villa/villa5_5.png";

import villa6_1 from "../../../assets/Villa/villa6_1.png";
import villa6_2 from "../../../assets/Villa/villa6_2.png";
import villa6_3 from "../../../assets/Villa/villa6_3.png";
import villa6_4 from "../../../assets/Villa/villa6_4.png";
import villa6_5 from "../../../assets/Villa/villa6_5.png";

import villa7_1 from "../../../assets/Villa/villa7_1.png";
import villa7_2 from "../../../assets/Villa/villa7_2.png";
import villa7_3 from "../../../assets/Villa/villa7_3.png";
import villa7_4 from "../../../assets/Villa/villa7_4.png";
import villa7_5 from "../../../assets/Villa/villa7_5.png";

import villa8_1 from "../../../assets/Villa/villa8_1.png";
import villa8_2 from "../../../assets/Villa/villa8_2.png";
import villa8_3 from "../../../assets/Villa/villa8_3.png";
import villa8_4 from "../../../assets/Villa/villa8_4.png";
import villa8_5 from "../../../assets/Villa/villa8_5.png";

import villa9_1 from "../../../assets/Villa/villa9_1.png";
import villa9_2 from "../../../assets/Villa/villa9_2.png";
import villa9_3 from "../../../assets/Villa/villa9_3.png";
import villa9_4 from "../../../assets/Villa/villa9_4.png";

import villa10_1 from "../../../assets/Villa/villa10_1.png";
import villa10_2 from "../../../assets/Villa/villa10_2.png";
import villa10_3 from "../../../assets/Villa/villa10_3.png";

export const AgriculturalCommercialData = [
  // BUY - Premium Agricultural Land (Posted by OWNER)
  {
    id: 1,
    tag: "BUY",
    status: "NEW",
    price: "₹2.5 Crores",
    perAcrePrice: "₹12.5 Lakhs per acre",
    totalLandArea: "20 Acres",
    // irrigationStatus: "Borewell + Canal",
    soilType: "Black Soil",
    location: "Thiruvallur District, Chennai-600001, Tamil Nadu",
    highlights: "Irrigated Land | Black Soil | Highway Facing | Fencing Available",
    postedBy: "Muthuraman K",
    postedAs: "Owner",
    logo: villa1_logo,
    images: [villa1_1, villa1_2, villa1_3, villa1_4, villa1_5, villa1_2, villa1_3, villa1_4, villa1_5],
    agentDetails: "📍 Direct owner - No brokerage | Clear title deed | 15+ years of agricultural land ownership | Can share original patta documents",
    contactEmail: "muthuraman.agri@example.com",
    contactPhone: "+91 98765 43210",
    experience: "15+ years in agriculture",
    achievements: "Organic farming certification"
  },
  
  // RENT - Farm Land for Cultivation (Posted by OWNER)
  {
    id: 2,
    tag: "RENT",
    status: "RE-SALE",
    price: "₹25,000/month",
    perAcrePrice: "₹12,500 per acre/year",
    totalLandArea: "5 Acres",
    // irrigationStatus: "Borewell",
    soilType: "Red Soil",
    location: "Chengalpattu, Chennai-603001, Tamil Nadu",
    highlights: "Cultivable Land | Red Soil | Borewell Available | Farm Shed Included",
    postedBy: "Lakshmi Farms",
    postedAs: "Owner",
    logo: "",
    images: [villa4_1, villa4_2, villa4_3, villa4_4, villa4_5],
    agentDetails: "👨‍🌾 Farm owner renting directly | Suitable for vegetable cultivation | Water available | Near highway",
    contactEmail: "lakshmi.farms@example.com",
    contactPhone: "+91 99887 66554",
    experience: "20+ years in farming",
    achievements: "High-yield vegetable production"
  },
  
  // SELL - Commercial Agricultural Land (Posted by SELLER)
  {
    id: 3,
    tag: "SELL",
    status: "RE-SALE",
    price: "₹3.2 Crores",
    perAcrePrice: "₹16 Lakhs per acre",
    totalLandArea: "20 Acres",
    // irrigationStatus: "Canal + Borewell",
    soilType: "Alluvial Soil",
    location: "Kanchipuram District, Chennai-631501, Tamil Nadu",
    highlights: "Converted Land | Alluvial Soil | NA Approved | Suitable for Agro Industry",
    postedBy: "Srinivasan R",
    postedAs: "Seller",
    logo: "",
    images: [villa9_1, villa9_2, villa9_3, villa9_4],
    agentDetails: "💰 Urgent sale | NA conversion approved | Clear title | Suitable for warehouse or agro processing unit | All legal documents ready",
    contactEmail: "srinivasan.sell@example.com",
    contactPhone: "+91 94444 33221",
    experience: "Land development expert",
    achievements: "Successfully converted 50+ acres"
  },
  
  // LEASE - Large Agricultural Land (Posted by LESSOR)
  {
    id: 4,
    tag: "LEASE",
    status: "NEW",
    price: "₹80 Lakhs",
    perAcrePrice: "₹8 Lakhs per acre/year",
    totalLandArea: "50 Acres",
    // irrigationStatus: "River + Borewell",
    soilType: "Mixed Soil",
    location: "Vellore District, Chennai-632001, Tamil Nadu",
    highlights: "Long-term Lease | River Water Access | Suitable for Organic Farming",
    postedBy: "Vellore Agri Estates",
    postedAs: "Lessor",
    logo: "",
    images: [villa7_1, villa7_2, villa7_3, villa7_4, villa7_5],
    agentDetails: "📄 9-year lease available | Corporate lease preferred | Water rights included | Maintenance responsibilities shared",
    contactEmail: "vellore.lease@example.com",
    contactPhone: "+91 98765 12345",
    experience: "30+ years in land leasing",
    achievements: "Trusted lessor for 100+ farmers"
  },
  
  // BUY - Small Farm Land (Posted by AGENT)
  {
    id: 5,
    tag: "BUY",
    status: "NEW",
    price: "₹45 Lakhs",
    perAcrePrice: "₹15 Lakhs per acre",
    totalLandArea: "3 Acres",
    // irrigationStatus: "Borewell + Pond",
    soilType: "Black Soil",
    location: "Sriperumbudur, Chennai-602105, Tamil Nadu",
    highlights: "Fenced Land | Close to Highway | Electricity Available | Farm House",
    postedBy: "Agri Land Solutions",
    postedAs: "Agent",
    logo: "",
    images: [villa2_1, villa2_2],
    agentDetails: "🏆 Trusted agricultural land agency | 500+ successful deals | Free site visit | RERA certified for land",
    contactEmail: "contact@agriland.com",
    contactPhone: "+91 44 1234 5678",
    experience: "15+ years in land consultancy",
    achievements: "500+ successful land deals"
  },
  
  // RENT - Organic Farm Land (Posted by OWNER)
  {
    id: 6,
    tag: "RENT",
    status: "NEW",
    price: "₹35,000/month",
    perAcrePrice: "₹14,000 per acre/month",
    totalLandArea: "2.5 Acres",
    // irrigationStatus: "Drip + Borewell",
    soilType: "Red Soil",
    location: "Hosur, Tamil Nadu-635109",
    highlights: "Organic Certified | Drip Irrigation | Polyhouse Available",
    postedBy: "Green Fields Trust",
    postedAs: "Owner",
    logo: "",
    images: [villa5_1, villa5_2, villa5_3, villa5_4, villa5_5],
    agentDetails: "🌿 Organic farming land | Already certified | Polyhouse and drip system installed | Ideal for organic vegetables",
    contactEmail: "greenfields@example.com",
    contactPhone: "+91 98888 77766",
    experience: "Organic farming specialist",
    achievements: "Certified organic since 2015"
  },
  
  // SELL - Industrial Agricultural Land (Posted by SELLER)
  {
    id: 7,
    tag: "SELL",
    status: "NEW",
    price: "₹5.8 Crores",
    perAcrePrice: "₹19.3 Lakhs per acre",
    totalLandArea: "30 Acres",
    // irrigationStatus: "Canal",
    soilType: "Clay Soil",
    location: "Sri City, Andhra Pradesh-517646",
    highlights: "SEZ Zone | Industrial Corridor | Ideal for Agro Processing",
    postedBy: "Sri City Developers",
    postedAs: "Seller",
    logo: "",
    images: [villa10_1, villa10_2, villa10_3],
    agentDetails: "🏭 Located in SEZ zone | Tax benefits | All approvals in place | Ready for agro-industry setup | Clear title deed",
    contactEmail: "sricity.sell@example.com",
    contactPhone: "+91 97777 66554",
    experience: "Industrial land specialist",
    achievements: "Facilitated 20+ industry setups"
  },
  
  // LEASE - Orchard Land (Posted by OWNER)
  {
    id: 8,
    tag: "LEASE",
    status: "RE-SALE",
    price: "₹25 Lakhs",
    perAcrePrice: "₹5 Lakhs per acre/year",
    totalLandArea: "5 Acres",
    // irrigationStatus: "Borewell + Sprinkler",
    soilType: "Alluvial Soil",
    location: "Krishnagiri, Tamil Nadu-635001",
    highlights: "Existing Mango Orchard | Sprinkler System | Suitable for Fruit Farming",
    postedBy: "Krishnagiri Orchards",
    postedAs: "Owner",
    logo: "",
    images: [villa8_1, villa8_2, villa8_3, villa8_4, villa8_5],
    agentDetails: "🥭 Existing mango orchard with 200+ trees | Sprinkler system installed | Ideal for fruit farming or agri-tourism",
    contactEmail: "orchards.lease@example.com",
    contactPhone: "+91 96666 55443",
    experience: "20+ years in orchard management",
    achievements: "Award-winning mango produce"
  },
  
  // BUY - Premium Agricultural Land (Posted by BUILDER/DEVELOPER)
  {
    id: 9,
    tag: "BUY",
    status: "NEW",
    price: "₹4.5 Crores",
    perAcrePrice: "₹22.5 Lakhs per acre",
    totalLandArea: "20 Acres",
    // irrigationStatus: "2 Borewells + Canal",
    soilType: "Black Cotton Soil",
    location: "Hosur, Tamil Nadu-635126",
    highlights: "Converted Land | Near Highway | 2 Borewells | NA Approved",
    postedBy: "Hosur Land Developers",
    postedAs: "Builder",
    logo: "",
    images: [villa3_1, villa3_2, villa3_3, villa3_4, villa3_5],
    agentDetails: "🏗️ Direct from developer | NA conversion complete | Ready for commercial use | Clear title | Loan approved",
    contactEmail: "hosur.dev@example.com",
    contactPhone: "+91 95555 44332",
    experience: "25+ years in land development",
    achievements: "50+ projects completed successfully"
  },
  
  // RENT - Heritage Agricultural Land (Posted by AGENT)
  {
    id: 10,
    tag: "RENT",
    status: "RE-SALE",
    price: "₹18,000/month",
    perAcrePrice: "₹9,000 per acre/month",
    totalLandArea: "2 Acres",
    // irrigationStatus: "Traditional Well + Borewell",
    soilType: "Red Sandy Soil",
    location: "Mahabalipuram, Chennai-603104, Tamil Nadu",
    highlights: "Traditional Farming | Near Tourist Spot | Ideal for Agri-tourism",
    postedBy: "Heritage Agri Solutions",
    postedAs: "Agent",
    logo: "",
    images: [villa6_1, villa6_2, villa6_3, villa6_4, villa6_5],
    agentDetails: "🏛️ Heritage agricultural land specialist | Verified agent | Best agri-tourism potential in Mahabalipuram",
    contactEmail: "heritage.agri@example.com",
    contactPhone: "+91 44 9876 5432",
    experience: "10+ years in agri-tourism",
    achievements: "Best Agri-Tourism Agent Award 2023"
  }
];