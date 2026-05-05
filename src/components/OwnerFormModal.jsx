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

          {/* building silhouette bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-7 bg-white"
            style={{
              clipPath:
                "polygon(0 100%, 5% 40%, 10% 40%, 10% 20%, 14% 20%, 14% 40%, 20% 40%, 20% 0%, 25% 0%, 25% 40%, 30% 40%, 30% 60%, 35% 60%, 35% 30%, 40% 30%, 40% 60%, 48% 60%, 48% 45%, 52% 45%, 52% 60%, 60% 60%, 60% 35%, 65% 35%, 65% 60%, 72% 60%, 72% 40%, 76% 40%, 76% 20%, 80% 20%, 80% 40%, 85% 40%, 85% 55%, 90% 55%, 90% 40%, 95% 40%, 95% 65%, 100% 65%, 100% 100%)",
            }}
          />

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

        {/* ── FOOTER ── */}
        <div className="flex gap-2 sm:gap-3 p-3 sm:p-4 border-t bg-white shrink-0 rounded-b-2xl">
          {step > 0 && (
            <button className="btn-outline text-sm px-3 py-2" onClick={() => setStep(step - 1)}>
              ← Back
            </button>
          )}
          <button
            className="btn-primary ml-auto text-sm px-4 py-2"
            onClick={() => (step === 4 ? onClose() : setStep(step + 1))}
          >
            {step === 4 ? "✓ Submit Form" : "Continue →"}
          </button>
        </div>

      </div>
    </div>
  );
}