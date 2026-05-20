import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/common/Header";
import HomePage from "./pages/HomePage";
import PostPropertyPage from "./pages/PostPropertyPage";
import CustomerPortalPage from "./pages/CustomerPortalPage";
import IndividualPage from "./pages/Individual/IndividualPage";
import BuyPage from "./pages/BuyPage";
import LeasePage from "./pages/LeasePage";
// import RentPage from "./pages/RentPage";
// import SellPage from "./pages/SellPage";
import ApartmentPage from "./pages/Apartment/ApartmentPage";
import CommercialPage from "./pages/Commercial/CommercialPage";
// import LandPlotsPage from "./pages/LandPlotsPage";
// import HostelPage from "./pages/HostelPage";

// Import all house type pages
import IndependentHousePage from "./pages/Individual/IndependentHousePage";
import IndependentVillaPage from "./pages/Individual/IndependentVillaPage";
import ResidentialApartmentPage from "./pages/Individual/ResidentialApartmentPage";
import DuplexResidentialUnitPage from "./pages/Individual/DuplexResidentialUnitPage";
import RowHousePage from "./pages/Individual/RowHousePage";

// Import all apartment type pages
import RentalApartmentPage from './pages/Apartment/RentalApartmentPage';
import ServicedApartmentPage from './pages/Apartment/ServicedApartmentPage';
import LeaseApartmentPage from './pages/Apartment/LeaseApartmentPage';
import ResidentialApartmentsPage from './pages/Apartment/ResidentialApartmentsPage';
import GatedCommunityApartmentPage from './pages/Apartment/GatedCommunityApartmentPage';
import StudioApartmentPage from './pages/Apartment/StudioApartmentPage';
import DuplexApartmentPage from './pages/Apartment/DuplexApartmentPage';
import LuxuryApartmentPage from './pages/Apartment/LuxuryApartmentPage';
import CondominiumApartmentPage from './pages/Apartment/CondominiumApartmentPage';
import PentHouseApartmentPage from './pages/Apartment/PentHouseApartmentPage';

//Import all commercial type pages
import OfficeSpacePage from "./pages/Commercial/OfficeSpacePage";
// import RetailSpacePage from "./pages/RetailSpacePage";
// import WarehousePage from "./pages/WarehousePage";
// import IndustrialSpacePage from "./pages/IndustrialSpacePage";
// import HotelCommercialPage from "./pages/HotelCommercialPage";
// import CoWorkingSpacePage from "./pages/CoWorkingSpacePage";
import MixedUseCommercialPage from "./pages/Commercial/MixedUseCommercialPage";
import AgriculturalCommercialPropertyPage from "./pages/Commercial/AgriculturalCommercialPropertyPage";

// Import all form modals
import OwnerFormModal from "./components/Forms/OwnerFormModal";
import AgentFormModal from "./components/Forms/AgentFormModal";
import BuilderFormModal from "./components/Forms/BuilderFormModal";
import HostelFormModal from "./components/Forms/HostelFormModal";
import PropertyManagementFormModal from "./components/Forms/PropertyManagementFormModal";

function AppLayout() {
  const [openOwnerForm, setOpenOwnerForm] = useState(false);
  const [openAgentForm, setOpenAgentForm] = useState(false);
  const [openBuilderForm, setOpenBuilderForm] = useState(false);
  const [openHostelForm, setOpenHostelForm] = useState(false);
  const [openPropertyManagementForm, setOpenPropertyManagementForm] = useState(false);

  // Central control from Header
  const handlePostPropertyClick = (type) => {
    console.log("Form clicked:", type);
    
    if (type === "Owner") {
      setOpenOwnerForm(true);
    } else if (type === "Agent") {
      setOpenAgentForm(true);
    } else if (type === "Builder") {
      setOpenBuilderForm(true);
    } else if (type === "Hostel") {
      setOpenHostelForm(true);
    } else if (type === "Property Management") {
      setOpenPropertyManagementForm(true);
    }
  };

  return (
    <>
      {/* HEADER (fixed) */}
      <Header
        onMenuToggle={() => {}}
        onPostPropertyClick={handlePostPropertyClick}
      />

      {/* FORM MODALS */}
      {openOwnerForm && (
        <OwnerFormModal
          isOpen={openOwnerForm}
          onClose={() => setOpenOwnerForm(false)}
        />
      )}

      {openAgentForm && (
        <AgentFormModal
          isOpen={openAgentForm}
          onClose={() => setOpenAgentForm(false)}
        />
      )}

      {openBuilderForm && (
        <BuilderFormModal
          isOpen={openBuilderForm}
          onClose={() => setOpenBuilderForm(false)}
        />
      )}

      {openHostelForm && (
        <HostelFormModal
          isOpen={openHostelForm}
          onClose={() => setOpenHostelForm(false)}
        />
      )}

      {openPropertyManagementForm && (
        <PropertyManagementFormModal
          isOpen={openPropertyManagementForm}
          onClose={() => setOpenPropertyManagementForm(false)}
        />
      )}

      {/* MAIN CONTENT — compensate fixed header height */}
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customer-portal" element={<CustomerPortalPage />} />
          
          {/* Customer Portal Routes */}
          <Route path="/individual" element={<IndividualPage />} />
          <Route path="/apartment" element={<ApartmentPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
          {/* <Route path="/rent" element={<RentPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/lease" element={<LeasePage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/land-plots" element={<LandPlotsPage />} />
          <Route path="/hostel" element={<HostelPage />} /> */}
          
          {/* Individual House Type Routes */}
          <Route path="/individual/independent-house" element={<IndependentHousePage />} />
          <Route path="/individual/independent-villa" element={<IndependentVillaPage />} />
          <Route path="/individual/residential-apartment" element={<ResidentialApartmentPage />} />
          <Route path="/individual/duplex-residential-unit" element={<DuplexResidentialUnitPage />} />
          <Route path="/individual/row-house" element={<RowHousePage />} />

          {/* Apartment House  Type Routes */}
          <Route path="/apartment/rental-apartment" element={<RentalApartmentPage />} />
          <Route path="/apartment/serviced-apartment" element={<ServicedApartmentPage />} />
          <Route path="/apartment/lease-apartment" element={<LeaseApartmentPage />} />
          <Route path="/apartment/residential-apartments" element={<ResidentialApartmentsPage />} />
          <Route path="/apartment/gated-community-apartment" element={<GatedCommunityApartmentPage/>} />
          <Route path="/apartment/studio-apartment" element={<StudioApartmentPage/>} />
          <Route path="/apartment/duplex-apartment" element={<DuplexApartmentPage/>} />
          <Route path="/apartment/luxury-apartment" element={<LuxuryApartmentPage/>} />
          <Route path="/apartment/condominium" element={<CondominiumApartmentPage/>} />
          <Route path="/apartment/penthouse-apartment" element={<PentHouseApartmentPage/>} />

          {/* Commercial Type Routes */}
          <Route path="/commercial/office-space" element={<OfficeSpacePage />} />
          {/* <Route path="/commercial/retail-shop" element={<RetailSpacePage />} />
          <Route path="/commercial/showroom" element={<ShowroomPage />} />
          <Route path="/commercial/commercial-land-plot" element={<CommercialLandPlotPage />} />
          <Route path="/commercial/warehouse-godown" element={<WarehousePage />} />
          <Route path="/commercial/industrial-property-factory" element={<IndustrialSpacePage />} />
          <Route path="/commercial/coworking-space" element={<CoWorkingSpacePage />} />
          <Route path="/commercial/business-center" element={<BusinessCenterPage />} />
          <Route path="/commercial/shopping-mall-space" element={<ShoppingMallSpacePage />} />
          <Route path="/commercial/commercial-complex" element={<CommercialComplexPage />} />
          <Route path="/commercial/restaurant-cafe-space" element={<RestaurantCafeSpacePage />} />
          <Route path="/commercial/hotel-lodge-resort-property" element={<HotelCommercialPage />} /> */}
          <Route path="/commercial/mixed-use-commercial-property" element={<MixedUseCommercialPage />} />
          <Route path="/commercial/agricultural-commercial-property" element={<AgriculturalCommercialPropertyPage />} /> 

          <Route 
            path="/post-property" 
            element={<PostPropertyPage onPostPropertyClick={handlePostPropertyClick} />} 
          />
        </Routes>
      </main>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}