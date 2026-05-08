import React, { useState } from "react";
import { ArrowLeft, ImagePlus, Video } from "lucide-react";

const steps = [
  "Owner Details",
  "Property Details",
  "Pricing & Amenities",
  "Media Upload",
  "Document Upload",
];

const subtitles = [
  "Enter your personal information",
  "Tell us about your property",
  "Set pricing & select amenities",
  "Upload property photos & video",
  "Upload ownership documents",
];

// Reusable labeled field
const Field = ({ label, required, hint, children }) => (
  <div className="mb-3">
    <label className="block text-xs sm:text-sm font-semibold text-[#00695C] mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {hint && <p className="text-[10px] text-gray-400 mt-1">{hint}</p>}
  </div>
);

const inputCls = "input w-full text-sm placeholder:text-gray-300 placeholder:text-xs";

export default function OwnerFormModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col max-h-[95vh] sm:max-h-[90vh]">

        {/* ── HERO HEADER ── */}
        <div
          className="relative flex flex-col items-center justify-center min-h-[100px] sm:min-h-[110px] px-4 pt-4 pb-7 overflow-hidden shrink-0"
          style={{
            background: "linear-gradient(160deg, #00695C 0%, #00897B 45%, #26A69A 75%, #80CBC4 100%)",
          }}
        >
          {/* glow blobs */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 15% 60%, rgba(255,255,255,0.18) 0%, transparent 45%), radial-gradient(circle at 85% 25%, rgba(255,255,255,0.12) 0%, transparent 40%)",
            }}
          />

          {/* ── LEFT SIDE BUILDINGS (white, decorative) ── */}
          <svg
            className="absolute bottom-0 left-0 pointer-events-none"
            width="160"
            height="90"
            viewBox="0 0 160 90"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* B1 - Tallest skyscraper far left */}
            <rect x="0" y="10" width="13" height="80" fill="white" />
            <polygon points="6.5,4 0,10 13,10" fill="white" />
            <rect x="2" y="15" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="6" y="15" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="10" y="15" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="2" y="22" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="6" y="22" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="10" y="22" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="2" y="29" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="6" y="29" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="10" y="29" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="2" y="36" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="6" y="36" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="10" y="36" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="2" y="43" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="6" y="43" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="10" y="43" width="2" height="3" fill="#26A69A" opacity="0.5" />

            {/* B2 - Narrow tower with antenna */}
            <rect x="15" y="28" width="9" height="62" fill="white" />
            <rect x="18" y="22" width="3" height="8" fill="white" />
            <rect x="19" y="18" width="1" height="6" fill="white" />
            <rect x="16" y="33" width="2" height="3" fill="#26A69A" opacity="0.45" />
            <rect x="20" y="33" width="2" height="3" fill="#26A69A" opacity="0.45" />
            <rect x="16" y="40" width="2" height="3" fill="#26A69A" opacity="0.45" />
            <rect x="20" y="40" width="2" height="3" fill="#26A69A" opacity="0.45" />
            <rect x="16" y="47" width="2" height="3" fill="#26A69A" opacity="0.45" />
            <rect x="20" y="47" width="2" height="3" fill="#26A69A" opacity="0.45" />
            <rect x="16" y="54" width="2" height="3" fill="#26A69A" opacity="0.45" />
            <rect x="20" y="54" width="2" height="3" fill="#26A69A" opacity="0.45" />

            {/* B3 - Wide office block */}
            <rect x="26" y="35" width="22" height="55" fill="white" />
            <rect x="28" y="40" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="34" y="40" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="40" y="40" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="28" y="48" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="34" y="48" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="40" y="48" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="28" y="56" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="34" y="56" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="40" y="56" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="28" y="64" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="34" y="64" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="40" y="64" width="3" height="4" fill="#26A69A" opacity="0.4" />

            {/* B4 - Short squat block */}
            <rect x="50" y="52" width="14" height="38" fill="white" />
            <rect x="52" y="57" width="3" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="58" y="57" width="3" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="52" y="64" width="3" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="58" y="64" width="3" height="3" fill="#26A69A" opacity="0.4" />

            {/* B5 - Medium stepped tower */}
            <rect x="66" y="42" width="12" height="48" fill="white" />
            <rect x="68" y="36" width="8" height="8" fill="white" />
            <rect x="70" y="32" width="4" height="6" fill="white" />
            <rect x="67" y="47" width="2" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="72" y="47" width="2" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="67" y="54" width="2" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="72" y="54" width="2" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="67" y="61" width="2" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="72" y="61" width="2" height="3" fill="#26A69A" opacity="0.4" />

            {/* B6 - Tiny filler block */}
            <rect x="80" y="60" width="10" height="30" fill="white" opacity="0.8" />
            <rect x="82" y="64" width="2" height="3" fill="#26A69A" opacity="0.35" />
            <rect x="86" y="64" width="2" height="3" fill="#26A69A" opacity="0.35" />

            {/* B7 - Another narrow accent */}
            <rect x="92" y="50" width="8" height="40" fill="white" opacity="0.75" />
            <rect x="93" y="55" width="2" height="3" fill="#26A69A" opacity="0.35" />
            <rect x="97" y="55" width="2" height="3" fill="#26A69A" opacity="0.35" />
            <rect x="93" y="62" width="2" height="3" fill="#26A69A" opacity="0.35" />
            <rect x="97" y="62" width="2" height="3" fill="#26A69A" opacity="0.35" />
          </svg>

          {/* ── RIGHT SIDE BUILDINGS (white, decorative) ── */}
          <svg
            className="absolute bottom-0 right-0 pointer-events-none"
            width="160"
            height="90"
            viewBox="0 0 160 90"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* B1 - Tallest skyscraper far right */}
            <rect x="147" y="10" width="13" height="80" fill="white" />
            <polygon points="153.5,4 147,10 160,10" fill="white" />
            <rect x="148" y="15" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="152" y="15" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="156" y="15" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="148" y="22" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="152" y="22" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="156" y="22" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="148" y="29" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="152" y="29" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="156" y="29" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="148" y="36" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="152" y="36" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="156" y="36" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="148" y="43" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="152" y="43" width="2" height="3" fill="#26A69A" opacity="0.5" />
            <rect x="156" y="43" width="2" height="3" fill="#26A69A" opacity="0.5" />

            {/* B2 - Narrow tower with antenna */}
            <rect x="136" y="28" width="9" height="62" fill="white" />
            <rect x="138" y="22" width="3" height="8" fill="white" />
            <rect x="139" y="18" width="1" height="6" fill="white" />
            <rect x="137" y="33" width="2" height="3" fill="#26A69A" opacity="0.45" />
            <rect x="141" y="33" width="2" height="3" fill="#26A69A" opacity="0.45" />
            <rect x="137" y="40" width="2" height="3" fill="#26A69A" opacity="0.45" />
            <rect x="141" y="40" width="2" height="3" fill="#26A69A" opacity="0.45" />
            <rect x="137" y="47" width="2" height="3" fill="#26A69A" opacity="0.45" />
            <rect x="141" y="47" width="2" height="3" fill="#26A69A" opacity="0.45" />
            <rect x="137" y="54" width="2" height="3" fill="#26A69A" opacity="0.45" />
            <rect x="141" y="54" width="2" height="3" fill="#26A69A" opacity="0.45" />

            {/* B3 - Wide office block */}
            <rect x="112" y="35" width="22" height="55" fill="white" />
            <rect x="114" y="40" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="120" y="40" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="126" y="40" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="114" y="48" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="120" y="48" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="126" y="48" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="114" y="56" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="120" y="56" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="126" y="56" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="114" y="64" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="120" y="64" width="3" height="4" fill="#26A69A" opacity="0.4" />
            <rect x="126" y="64" width="3" height="4" fill="#26A69A" opacity="0.4" />

            {/* B4 - Short squat block */}
            <rect x="96" y="52" width="14" height="38" fill="white" />
            <rect x="98" y="57" width="3" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="104" y="57" width="3" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="98" y="64" width="3" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="104" y="64" width="3" height="3" fill="#26A69A" opacity="0.4" />

            {/* B5 - Medium stepped tower */}
            <rect x="82" y="42" width="12" height="48" fill="white" />
            <rect x="84" y="36" width="8" height="8" fill="white" />
            <rect x="86" y="32" width="4" height="6" fill="white" />
            <rect x="83" y="47" width="2" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="88" y="47" width="2" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="83" y="54" width="2" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="88" y="54" width="2" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="83" y="61" width="2" height="3" fill="#26A69A" opacity="0.4" />
            <rect x="88" y="61" width="2" height="3" fill="#26A69A" opacity="0.4" />

            {/* B6 - Tiny filler block */}
            <rect x="70" y="60" width="10" height="30" fill="white" opacity="0.8" />
            <rect x="72" y="64" width="2" height="3" fill="#26A69A" opacity="0.35" />
            <rect x="76" y="64" width="2" height="3" fill="#26A69A" opacity="0.35" />

            {/* B7 - Another narrow accent */}
            <rect x="60" y="50" width="8" height="40" fill="white" opacity="0.75" />
            <rect x="61" y="55" width="2" height="3" fill="#26A69A" opacity="0.35" />
            <rect x="65" y="55" width="2" height="3" fill="#26A69A" opacity="0.35" />
            <rect x="61" y="62" width="2" height="3" fill="#26A69A" opacity="0.35" />
            <rect x="65" y="62" width="2" height="3" fill="#26A69A" opacity="0.35" />
          </svg>

          {/* building silhouette bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-white"
            style={{
              height: '15px',
              clipPath: "polygon(0 100%, 0 100%, 2% 100%, 2% 70%, 4% 70%, 4% 45%, 6% 45%, 6% 70%, 8% 70%, 8% 20%, 10% 20%, 10% 70%, 12% 70%, 12% 55%, 14% 55%, 14% 15%, 16% 15%, 16% 55%, 18% 55%, 18% 65%, 20% 65%, 20% 35%, 22% 35%, 22% 50%, 24% 50%, 24% 68%, 26% 68%, 26% 38%, 28% 38%, 28% 52%, 30% 52%, 30% 28%, 32% 28%, 32% 52%, 34% 52%, 34% 68%, 36% 68%, 36% 45%, 38% 45%, 38% 58%, 40% 58%, 40% 42%, 42% 42%, 42% 58%, 44% 58%, 44% 68%, 46% 68%, 46% 50%, 48% 50%, 48% 42%, 50% 42%, 50% 50%, 52% 50%, 52% 68%, 54% 68%, 54% 50%, 56% 50%, 56% 58%, 58% 58%, 58% 42%, 60% 42%, 60% 58%, 62% 58%, 62% 45%, 64% 45%, 64% 28%, 66% 28%, 66% 45%, 68% 45%, 68% 68%, 70% 68%, 70% 38%, 72% 38%, 72% 52%, 74% 52%, 74% 15%, 76% 15%, 76% 52%, 78% 52%, 78% 20%, 80% 20%, 80% 65%, 82% 65%, 82% 45%, 84% 45%, 84% 65%, 86% 65%, 86% 100%, 88% 100%, 88% 70%, 90% 70%, 90% 45%, 92% 45%, 92% 70%, 94% 70%, 94% 20%, 96% 20%, 96% 70%, 98% 70%, 98% 100%, 100% 100%)",
            }}
          />

          {/* green teal dots scattered across the silhouette zone */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '28px' }}>
            {[5,10,17,23,29,35,41,47,53,59,65,71,77,83,89,95].map((left, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#26A69A]"
                style={{
                  left: `${left}%`,
                  bottom: `${4 + (i % 3) * 5}px`,
                  width: '3px',
                  height: '3px',
                  opacity: 0.5 + (i % 3) * 0.15,
                }}
              />
            ))}
          </div>

          {/* back button */}
          <button
            onClick={onClose}
            className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-white/25 hover:bg-white/40 flex items-center justify-center z-10"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>

          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/25 hover:bg-white/40 flex items-center justify-center z-10 text-white font-bold text-sm"
          >
            ✕
          </button>

          <div className="text-3xl mb-1 relative z-10">🏠</div>
          <h1
            className="text-base sm:text-lg font-extrabold text-white tracking-wide relative z-10"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.2)" }}
          >
            Property Owner Registration
          </h1>
          <p className="text-[11px] text-white/80 relative z-10 mt-0.5">
            List your property with us — fast &amp; easy
          </p>
        </div>

        {/* ── STEP TITLE BAND ── */}
        <div className="text-center px-4 py-2 bg-gradient-to-r from-green-50 to-teal-50 border-b border-green-100 shrink-0">
          <h2 className="text-sm sm:text-base font-bold text-[#00695C]">{steps[step]}</h2>
          <p className="text-[10px] sm:text-xs text-green-500 mt-0.5">
            Step {step + 1} of {steps.length} — {subtitles[step]}
          </p>
        </div>

        {/* ── STEPS BAR ── */}
        <div className="flex items-start justify-between px-2 sm:px-3 py-2 shrink-0 border-b border-gray-100 overflow-x-auto">
          {steps.map((s, i) => (
            <div key={i} className="flex-1 flex flex-col items-center min-w-[54px]">
              <div
                className={`w-6 h-6 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  i < step
                    ? "bg-green-500 text-white"
                    : i === step
                    ? "bg-[#00695C] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {i < step ? "✓" : i + 1}
              </div>
              <p className={`text-[9px] mt-1 text-center px-0.5 ${i === step ? "text-[#00695C] font-bold" : "text-gray-400"}`}>
                {s}
              </p>
            </div>
          ))}
        </div>

        {/* ── SCROLLABLE BODY ── */}
        <div className="px-3 sm:px-4 py-3 overflow-y-auto flex-1">

          {/* STEP 1 - Owner Details */}
          {step === 0 && (
            <>
              <Field label="Owner Name" required hint="As per your government-issued ID">
                <input className={inputCls} placeholder="Enter your full name" />
              </Field>
              <Field label="Contact Number" required>
                <input className={inputCls} type="tel" placeholder="Enter your 10-digit mobile number" />
              </Field>
              <Field label="Email ID" required hint="We'll send listing updates to this email">
                <input className={inputCls} type="email" placeholder="Enter your email address" />
              </Field>
              <Field label="Address" required>
                <textarea
                  className="input w-full text-sm resize-y min-h-[80px] placeholder:text-gray-300 placeholder:text-xs"
                  placeholder={"Enter your current residential address\n(Street, Area, City, State, PIN)"}
                />
              </Field>
              <Field label="ID Proof / Aadhaar / PAN" required hint="12-digit Aadhaar or 10-character PAN">
                <input className={inputCls} placeholder="Enter Aadhaar or PAN number" />
              </Field>
            </>
          )}

          {/* STEP 2 - Property Details */}
          {step === 1 && (
            <>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-green-50">
                <div className="w-1 h-4 bg-[#00695C] rounded" />
                <h3 className="text-sm font-bold text-[#00695C]">Property Details</h3>
              </div>
              <Field label="Property Title / Name" required>
                <input className={inputCls} placeholder="e.g. Green Valley 3BHK Apartment" />
              </Field>
              <Field label="Property Category" required>
                <input className={inputCls} placeholder="e.g. Apartment, Villa, Plot..." />
              </Field>
              <Field label="Property Type" required>
                {["Residential", "Commercial", "Mill / Industrial"].map(t => (
                  <label key={t} className="flex items-center gap-2 text-xs sm:text-sm mb-2">
                    <input type="radio" name="ptype" className="accent-[#00695C] w-3.5 h-3.5" /> {t}
                  </label>
                ))}
              </Field>
              <Field label="Property Address" required>
                <textarea
                  className="input w-full text-sm resize-y min-h-[70px] placeholder:text-gray-300 placeholder:text-xs"
                  placeholder={"Enter complete property address\n(Flat No., Building, Street, Locality)"}
                />
              </Field>
              <Field label="City" required>
                <input className={inputCls} placeholder="Enter city name" />
              </Field>
              <Field label="Area Details" required hint="Enter values in square feet">
                <div className="grid grid-cols-2 gap-2">
                  <input className={inputCls} type="number" placeholder="Build-up Area (sq ft)" />
                  <input className={inputCls} type="number" placeholder="Carpet Area (sq ft)" />
                </div>
              </Field>
              <Field label="Room Details">
                <div className="grid grid-cols-2 gap-2">
                  <input className={inputCls} type="number" placeholder="No. of Bedrooms" />
                  <input className={inputCls} type="number" placeholder="No. of Bathrooms" />
                </div>
              </Field>
              <Field label="Furnishing Status" required>
                {["Full Furnish", "Semi Furnish", "Unfurnished"].map(f => (
                  <label key={f} className="flex items-center gap-2 text-xs sm:text-sm mb-2">
                    <input type="radio" name="furnish" className="accent-[#00695C] w-3.5 h-3.5" /> {f}
                  </label>
                ))}
              </Field>
              <Field label="Parking Facility">
                <div className="flex gap-5">
                  <label className="flex items-center gap-2 text-xs sm:text-sm">
                    <input type="radio" name="parking" className="accent-[#00695C] w-3.5 h-3.5" /> Yes, available
                  </label>
                  <label className="flex items-center gap-2 text-xs sm:text-sm">
                    <input type="radio" name="parking" className="accent-[#00695C] w-3.5 h-3.5" /> No parking
                  </label>
                </div>
              </Field>
            </>
          )}

          {/* STEP 3 - Pricing & Amenities */}
          {step === 2 && (
            <>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-green-50">
                <div className="w-1 h-4 bg-[#00695C] rounded" />
                <h3 className="text-sm font-bold text-[#00695C]">Pricing & Amenities</h3>
              </div>
              <Field label="Listing Purpose" required>
                <div className="flex gap-5">
                  <label className="flex items-center gap-2 text-xs sm:text-sm">
                    <input type="radio" name="purpose" className="accent-[#00695C] w-3.5 h-3.5" /> For Sale
                  </label>
                  <label className="flex items-center gap-2 text-xs sm:text-sm">
                    <input type="radio" name="purpose" className="accent-[#00695C] w-3.5 h-3.5" /> For Rent / Lease
                  </label>
                </div>
              </Field>
              <Field label="Expected Price / Rent (₹)" required>
                <input className={inputCls} placeholder="e.g. 45,00,000 or 15,000/month" />
              </Field>
              <Field label="Price Type">
                <div className="flex gap-5">
                  <label className="flex items-center gap-2 text-xs sm:text-sm">
                    <input type="radio" name="priceType" className="accent-[#00695C] w-3.5 h-3.5" /> Fixed Price
                  </label>
                  <label className="flex items-center gap-2 text-xs sm:text-sm">
                    <input type="radio" name="priceType" className="accent-[#00695C] w-3.5 h-3.5" /> Negotiable
                  </label>
                </div>
              </Field>
              <Field label="Maintenance Charges (₹/month)">
                <input className={inputCls} placeholder="Enter monthly maintenance amount" />
              </Field>
              <Field label="Available From" hint="Date from which the property is available">
                <input className={inputCls} type="date" />
              </Field>
              <Field label="Select Amenities">
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {["Lift", "Power Backup", "Security", "Water Supply", "Garden", "Gym", "Swimming Pool"].map(a => (
                    <span key={a} className="chip text-xs sm:text-sm">{a}</span>
                  ))}
                </div>
              </Field>
              <Field label="Other Amenities">
                <input className={inputCls} placeholder="e.g. Clubhouse, CCTV, Solar Panel..." />
              </Field>
            </>
          )}

          {/* STEP 4 - Media Upload */}
          {step === 3 && (
            <>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-green-50">
                <div className="w-1 h-4 bg-[#00695C] rounded" />
                <h3 className="text-sm font-bold text-[#00695C]">Media Upload</h3>
              </div>
              <p className="text-[10px] sm:text-xs text-center text-gray-400 mb-3">📸 Minimum 3 property images required</p>
              <Field label="Property Images" required>
                <div className="upload-box cursor-pointer hover:bg-green-50">
                  <input type="file" accept="image/*" multiple className="hidden" id="property-images" />
                  <label htmlFor="property-images" className="cursor-pointer flex flex-col items-center">
                    <ImagePlus className="mx-auto mb-2 w-8 h-8 sm:w-10 sm:h-10 text-[#00695C]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#00695C]">Upload Property Photos</span>
                    <span className="text-[10px] text-gray-400 mt-1">Click to select multiple images (JPG, PNG)</span>
                  </label>
                </div>
              </Field>
              <Field label="Property Video">
                <div className="upload-box cursor-pointer hover:bg-green-50">
                  <input type="file" accept="video/mp4,video/mov" className="hidden" id="property-video" />
                  <label htmlFor="property-video" className="cursor-pointer flex flex-col items-center">
                    <Video className="mx-auto mb-2 w-8 h-8 sm:w-10 sm:h-10 text-[#00695C]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#00695C]">Upload Property Video Tour</span>
                    <p className="text-[10px] text-gray-400">MP4 or MOV format supported</p>
                  </label>
                </div>
              </Field>
            </>
          )}

          {/* STEP 5 - Document Upload */}
          {step === 4 && (
            <>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-green-50">
                <div className="w-1 h-4 bg-[#00695C] rounded" />
                <h3 className="text-sm font-bold text-[#00695C]">Document Upload</h3>
              </div>
              <Field label="Property Ownership Proof" required>
                <div className="upload-box cursor-pointer hover:bg-green-50">
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" id="ownership-proof" />
                  <label htmlFor="ownership-proof" className="cursor-pointer">
                    <div className="text-2xl mb-1">📄</div>
                    <div className="text-xs sm:text-sm font-semibold text-[#00695C]">Upload Ownership Document</div>
                    <span className="block text-[10px] text-gray-400 mt-1">Sale deed, registry, or title deed (PDF/JPG/PNG)</span>
                  </label>
                </div>
              </Field>
              <Field label="Owner ID Proof" required>
                <div className="upload-box cursor-pointer hover:bg-green-50">
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" id="id-proof" />
                  <label htmlFor="id-proof" className="cursor-pointer">
                    <div className="text-2xl mb-1">🪪</div>
                    <div className="text-xs sm:text-sm font-semibold text-[#00695C]">Upload ID Proof</div>
                    <span className="block text-[10px] text-gray-400 mt-1">Aadhaar, PAN, or Passport (PDF/JPG/PNG)</span>
                  </label>
                </div>
              </Field>
              <Field label="Additional Documents">
                <div className="upload-box cursor-pointer hover:bg-green-50">
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" multiple className="hidden" id="additional-docs" />
                  <label htmlFor="additional-docs" className="cursor-pointer">
                    <div className="text-2xl mb-1">📎</div>
                    <div className="text-xs sm:text-sm font-semibold text-[#00695C]">+ Add More Documents</div>
                    <span className="block text-[10px] text-gray-400 mt-1">Tax receipts, NOC, floor plans (Multiple allowed)</span>
                  </label>
                </div>
              </Field>
            </>
          )}
        </div>

        {/* ── ENHANCED FOOTER WITH PROGRESS BAR ── */}
        <div className="flex flex-col shrink-0 bg-white rounded-b-2xl border-t border-teal-100 overflow-hidden">
          {/* Top accent line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-[#00695C] via-[#26A69A] to-[#80CBC4]" />

          {/* Progress bar */}
          {step < 4 && (
            <div className="px-4 pt-2.5 pb-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] text-gray-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#26A69A] inline-block"></span>
                  Form completion
                </span>
                <span className="text-[9px] text-[#00695C] font-bold">
                  {Math.round(((step + 1) / 5) * 100)}%
                </span>
              </div>
              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00695C] to-[#26A69A] rounded-full transition-all duration-500"
                  style={{ width: `${((step + 1) / 5) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Step dots indicator */}
          <div className="flex justify-center gap-1.5 pt-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i < step
                    ? 'w-3 h-1.5 bg-green-400'
                    : i === step
                    ? 'w-5 h-1.5 bg-[#00695C]'
                    : 'w-1.5 h-1.5 bg-gray-200'
                }`}
              />
            ))}
          </div>

          {/* Buttons row */}
          <div className="flex gap-2 px-4 py-3">
            {step > 0 && (
              <button
                className="px-4 py-2 text-sm font-semibold text-[#00695C] bg-teal-50 hover:bg-teal-100 rounded-lg transition-all duration-200 flex items-center gap-1 border border-teal-200"
                onClick={() => setStep(step - 1)}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>
            )}

            <button
              className={`px-5 py-2 text-sm font-semibold text-white rounded-lg transition-all duration-200 flex items-center gap-1.5 ml-auto shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 ${
                step === 4
                  ? 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700'
                  : 'bg-gradient-to-r from-[#00695C] to-[#00897B] hover:from-[#005a4f] hover:to-[#00695C]'
              }`}
              onClick={() => (step === 4 ? onClose() : setStep(step + 1))}
            >
              {step === 4 ? (
                <><span>✓</span> Submit Form</>
              ) : (
                <>Continue <span className="text-base">→</span></>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}