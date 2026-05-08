import React, { useState } from "react";
import { ArrowLeft, ImagePlus, Video } from "lucide-react";

const steps = ["Owner Details","Property Details","Pricing & Amenities","Media Upload","Document Upload"];
const subtitles = ["Enter your personal information","Tell us about your property","Set pricing & select amenities","Upload property photos & video","Upload ownership documents"];

const Field = ({ label, required, hint, children }) => (
  <div className="mb-2.5">
    <label className="block text-[11px] font-semibold text-[#00695C] mb-0.5">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {hint && <p className="text-[9px] text-gray-400 mt-0.5">{hint}</p>}
  </div>
);

const FieldDt = ({ label, required, hint, children }) => (
  <div className="mb-3">
    <label className="block text-xs sm:text-sm font-semibold text-[#00695C] mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {hint && <p className="text-[10px] text-gray-400 mt-1">{hint}</p>}
  </div>
);

const inMob = "w-full border border-gray-200 rounded-lg px-2.5 py-1.5 text-[11px] text-gray-700 placeholder:text-gray-300 placeholder:text-[10px] focus:outline-none focus:border-[#00695C] focus:ring-1 focus:ring-[#00695C]/20 bg-white transition-all";
const inDt  = "input w-full text-sm placeholder:text-gray-300 placeholder:text-xs";

export default function OwnerFormModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  if (!isOpen) return null;

  return (
    <>
      {/* ══════════════ MOBILE (< sm) ══════════════ */}
      <div className="fixed inset-0 z-50 flex flex-col sm:hidden">
        {/* dim top area */}
        <div className="bg-black/50" style={{ height: "10vh" }} onClick={onClose} />

        {/* sheet */}
        <div className="flex-1 bg-white rounded-3xl flex flex-col overflow-hidden shadow-2xl mx-5 mb-5">

          {/* mobile header */}
          <div
            className="relative flex flex-col items-center justify-center px-4 pt-4 pb-5 overflow-hidden shrink-0 rounded-t-3xl"
            style={{ background: "linear-gradient(160deg,#00695C 0%,#00897B 45%,#26A69A 75%,#80CBC4 100%)", minHeight: 100 }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 15% 60%,rgba(255,255,255,.18) 0%,transparent 45%),radial-gradient(circle at 85% 25%,rgba(255,255,255,.12) 0%,transparent 40%)" }} />
            {/* left buildings - mobile */}
<svg className="absolute bottom-0 left-0 pointer-events-none" width="120" height="70" viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="10" width="13" height="80" fill="white"/><polygon points="6.5,4 0,10 13,10" fill="white"/>
  <rect x="2" y="15" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="6" y="15" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="10" y="15" width="2" height="3" fill="#26A69A" opacity=".5"/>
  <rect x="2" y="22" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="6" y="22" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="10" y="22" width="2" height="3" fill="#26A69A" opacity=".5"/>
  <rect x="2" y="29" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="6" y="29" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="10" y="29" width="2" height="3" fill="#26A69A" opacity=".5"/>
  <rect x="2" y="36" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="6" y="36" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="10" y="36" width="2" height="3" fill="#26A69A" opacity=".5"/>
  <rect x="2" y="43" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="6" y="43" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="10" y="43" width="2" height="3" fill="#26A69A" opacity=".5"/>
  <rect x="15" y="28" width="9" height="62" fill="white"/><rect x="18" y="22" width="3" height="8" fill="white"/><rect x="19" y="18" width="1" height="6" fill="white"/>
  <rect x="16" y="33" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="20" y="33" width="2" height="3" fill="#26A69A" opacity=".45"/>
  <rect x="16" y="40" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="20" y="40" width="2" height="3" fill="#26A69A" opacity=".45"/>
  <rect x="16" y="47" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="20" y="47" width="2" height="3" fill="#26A69A" opacity=".45"/>
  <rect x="16" y="54" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="20" y="54" width="2" height="3" fill="#26A69A" opacity=".45"/>
  <rect x="26" y="35" width="22" height="55" fill="white"/>
  <rect x="28" y="40" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="34" y="40" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="40" y="40" width="3" height="4" fill="#26A69A" opacity=".4"/>
  <rect x="28" y="48" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="34" y="48" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="40" y="48" width="3" height="4" fill="#26A69A" opacity=".4"/>
  <rect x="28" y="56" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="34" y="56" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="40" y="56" width="3" height="4" fill="#26A69A" opacity=".4"/>
  <rect x="50" y="52" width="14" height="38" fill="white"/>
  <rect x="52" y="57" width="3" height="3" fill="#26A69A" opacity=".4"/><rect x="58" y="57" width="3" height="3" fill="#26A69A" opacity=".4"/>
  <rect x="66" y="42" width="12" height="48" fill="white"/><rect x="68" y="36" width="8" height="8" fill="white"/><rect x="70" y="32" width="4" height="6" fill="white"/>
  <rect x="67" y="47" width="2" height="3" fill="#26A69A" opacity=".4"/><rect x="72" y="47" width="2" height="3" fill="#26A69A" opacity=".4"/>
  <rect x="80" y="60" width="10" height="30" fill="white" opacity=".8"/>
  <rect x="92" y="50" width="8" height="40" fill="white" opacity=".75"/>
</svg>

{/* right buildings - mobile */}
<svg className="absolute bottom-0 right-0 pointer-events-none" width="120" height="70" viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
  <rect x="147" y="10" width="13" height="80" fill="white"/><polygon points="153.5,4 147,10 160,10" fill="white"/>
  <rect x="148" y="15" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="152" y="15" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="156" y="15" width="2" height="3" fill="#26A69A" opacity=".5"/>
  <rect x="148" y="22" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="152" y="22" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="156" y="22" width="2" height="3" fill="#26A69A" opacity=".5"/>
  <rect x="148" y="29" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="152" y="29" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="156" y="29" width="2" height="3" fill="#26A69A" opacity=".5"/>
  <rect x="148" y="36" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="152" y="36" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="156" y="36" width="2" height="3" fill="#26A69A" opacity=".5"/>
  <rect x="148" y="43" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="152" y="43" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="156" y="43" width="2" height="3" fill="#26A69A" opacity=".5"/>
  <rect x="136" y="28" width="9" height="62" fill="white"/><rect x="138" y="22" width="3" height="8" fill="white"/><rect x="139" y="18" width="1" height="6" fill="white"/>
  <rect x="137" y="33" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="141" y="33" width="2" height="3" fill="#26A69A" opacity=".45"/>
  <rect x="137" y="40" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="141" y="40" width="2" height="3" fill="#26A69A" opacity=".45"/>
  <rect x="137" y="47" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="141" y="47" width="2" height="3" fill="#26A69A" opacity=".45"/>
  <rect x="137" y="54" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="141" y="54" width="2" height="3" fill="#26A69A" opacity=".45"/>
  <rect x="112" y="35" width="22" height="55" fill="white"/>
  <rect x="114" y="40" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="120" y="40" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="126" y="40" width="3" height="4" fill="#26A69A" opacity=".4"/>
  <rect x="114" y="48" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="120" y="48" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="126" y="48" width="3" height="4" fill="#26A69A" opacity=".4"/>
  <rect x="114" y="56" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="120" y="56" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="126" y="56" width="3" height="4" fill="#26A69A" opacity=".4"/>
  <rect x="96" y="52" width="14" height="38" fill="white"/>
  <rect x="98" y="57" width="3" height="3" fill="#26A69A" opacity=".4"/><rect x="104" y="57" width="3" height="3" fill="#26A69A" opacity=".4"/>
  <rect x="82" y="42" width="12" height="48" fill="white"/><rect x="84" y="36" width="8" height="8" fill="white"/><rect x="86" y="32" width="4" height="6" fill="white"/>
  <rect x="83" y="47" width="2" height="3" fill="#26A69A" opacity=".4"/><rect x="88" y="47" width="2" height="3" fill="#26A69A" opacity=".4"/>
  <rect x="70" y="60" width="10" height="30" fill="white" opacity=".8"/>
  <rect x="60" y="50" width="8" height="40" fill="white" opacity=".75"/>
</svg>

{/* silhouette - mobile */}
<div className="absolute bottom-0 left-0 right-0 bg-white" 
style={{ height:"15px", clipPath:"polygon(0 100%,0 100%,2% 100%,2% 70%,4% 70%,4% 45%,6% 45%,6% 70%,8% 70%,8% 20%,10% 20%,10% 70%,12% 70%,12% 55%,14% 55%,14% 15%,16% 15%,16% 55%,18% 55%,18% 65%,20% 65%,20% 35%,22% 35%,22% 50%,24% 50%,24% 68%,26% 68%,26% 38%,28% 38%,28% 52%,30% 52%,30% 28%,32% 28%,32% 52%,34% 52%,34% 68%,36% 68%,36% 45%,38% 45%,38% 58%,40% 58%,40% 42%,42% 42%,42% 58%,44% 58%,44% 68%,46% 68%,46% 50%,48% 50%,48% 42%,50% 42%,50% 50%,52% 50%,52% 68%,54% 68%,54% 50%,56% 50%,56% 58%,58% 58%,58% 42%,60% 42%,60% 58%,62% 58%,62% 45%,64% 45%,64% 28%,66% 28%,66% 45%,68% 45%,68% 68%,70% 68%,70% 38%,72% 38%,72% 52%,74% 52%,74% 15%,76% 15%,76% 52%,78% 52%,78% 20%,80% 20%,80% 65%,82% 65%,82% 45%,84% 45%,84% 65%,86% 65%,86% 100%,88% 100%,88% 70%,90% 70%,90% 45%,92% 45%,92% 70%,94% 70%,94% 20%,96% 20%,96% 70%,98% 70%,98% 100%,100% 100%)" }} />
            <button onClick={onClose} className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-white/25 hover:bg-white/40 flex items-center justify-center z-10">
              <ArrowLeft className="w-3.5 h-3.5 text-white" />
            </button>
            <button onClick={onClose} className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/25 hover:bg-white/40 flex items-center justify-center z-10 text-white font-bold text-xs">✕</button>
            <div className="text-2xl mb-1 relative z-10">🏠</div>
            <h1 className="text-sm font-extrabold text-white tracking-wide relative z-10 text-center" style={{ textShadow: "0 2px 6px rgba(0,0,0,.2)" }}>
              Property Owner Registration
            </h1>
            <p className="text-[10px] text-white/80 relative z-10 mt-0.5 text-center">List your property with us — fast &amp; easy</p>
          </div>

          {/* step title */}
          <div className="text-center px-3 py-1.5 bg-gradient-to-r from-teal-50 to-emerald-100 border-b border-teal-200 shrink-0">
            <h2 className="text-xs font-bold text-[#00695C]">{steps[step]}</h2>
            <p className="text-[9px] text-green-500 mt-0.5">Step {step + 1} of {steps.length} — {subtitles[step]}</p>
          </div>

          {/* steps bar */}
          <div className="flex items-start justify-between px-1.5 py-1.5 shrink-0 border-b border-gray-100 overflow-x-auto">
            {steps.map((s, i) => (
              <div key={i} className="flex-1 flex flex-col items-center min-w-[50px]">
                <div className={`w-5 h-5 rounded-full text-[9px] flex items-center justify-center font-bold ${i < step ? "bg-green-500 text-white" : i === step ? "bg-[#00695C] text-white" : "bg-gray-200 text-gray-500"}`}>
                  {i < step ? "✓" : i + 1}
                </div>
                <p className={`text-[8px] mt-0.5 text-center px-0.5 ${i === step ? "text-[#00695C] font-bold" : "text-gray-400"}`}>{s}</p>
              </div>
            ))}
          </div>

          {/* body */}
          <div className="px-3 py-2.5 overflow-y-auto flex-1">
            <MobContent step={step} inp={inMob} />
          </div>

          {/* footer */}
          <div className="flex flex-col shrink-0 bg-white border-t border-teal-100">
            <div className="h-[2px] w-full bg-gradient-to-r from-[#00695C] via-[#26A69A] to-[#80CBC4]" />
            {step < 4 && (
              <div className="px-3 pt-1.5 pb-0.5">
                <div className="flex justify-between mb-0.5">
                  <span className="text-[8px] text-gray-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#26A69A] inline-block" />Form completion</span>
                  <span className="text-[8px] text-[#00695C] font-bold">{Math.round(((step+1)/5)*100)}%</span>
                </div>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00695C] to-[#26A69A] rounded-full transition-all duration-500" style={{ width: `${((step+1)/5)*100}%` }} />
                </div>
              </div>
            )}
            <div className="flex justify-center gap-1 pt-1">
              {steps.map((_,i)=>(
                <div key={i} className={`rounded-full transition-all duration-300 ${i<step?'w-2.5 h-1 bg-green-400':i===step?'w-4 h-1 bg-[#00695C]':'w-1 h-1 bg-gray-200'}`} />
              ))}
            </div>
            <div className="flex gap-2 px-3 py-2.5">
              {step > 0 && (
                <button className="px-3 py-1.5 text-[11px] font-semibold text-[#00695C] bg-teal-50 hover:bg-teal-100 rounded-lg border border-teal-200 flex items-center gap-1" onClick={() => setStep(step-1)}>
                  <ArrowLeft className="w-3 h-3" /> Back
                </button>
              )}
              <button
                className={`flex-1 py-2 text-xs font-semibold text-white rounded-xl flex items-center justify-center gap-1 shadow ${step===4?'bg-gradient-to-r from-green-600 to-teal-600':'bg-gradient-to-r from-[#00695C] to-[#00897B]'}`}
                onClick={() => step===4 ? onClose() : setStep(step+1)}
              >
                {step===4 ? <><span>✓</span> Submit Form</> : <>Continue →</>}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════ DESKTOP (>= sm) ══════════════ */}
      <div className="fixed inset-0 bg-black/60 z-50 hidden sm:flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl flex flex-col max-h-[90vh]">

          {/* desktop header */}
          <div className="relative flex flex-col items-center justify-center min-h-[110px] px-4 pt-4 pb-7 overflow-hidden shrink-0 rounded-3xl"
            style={{ background: "linear-gradient(160deg,#00695C 0%,#00897B 45%,#26A69A 75%,#80CBC4 100%)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 15% 60%,rgba(255,255,255,.18) 0%,transparent 45%),radial-gradient(circle at 85% 25%,rgba(255,255,255,.12) 0%,transparent 40%)" }} />

            {/* left buildings */}
            <svg className="absolute bottom-0 left-0 pointer-events-none" width="160" height="90" viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="10" width="13" height="80" fill="white"/><polygon points="6.5,4 0,10 13,10" fill="white"/>
              <rect x="2" y="15" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="6" y="15" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="10" y="15" width="2" height="3" fill="#26A69A" opacity=".5"/>
              <rect x="2" y="22" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="6" y="22" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="10" y="22" width="2" height="3" fill="#26A69A" opacity=".5"/>
              <rect x="2" y="29" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="6" y="29" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="10" y="29" width="2" height="3" fill="#26A69A" opacity=".5"/>
              <rect x="2" y="36" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="6" y="36" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="10" y="36" width="2" height="3" fill="#26A69A" opacity=".5"/>
              <rect x="2" y="43" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="6" y="43" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="10" y="43" width="2" height="3" fill="#26A69A" opacity=".5"/>
              <rect x="15" y="28" width="9" height="62" fill="white"/><rect x="18" y="22" width="3" height="8" fill="white"/><rect x="19" y="18" width="1" height="6" fill="white"/>
              <rect x="16" y="33" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="20" y="33" width="2" height="3" fill="#26A69A" opacity=".45"/>
              <rect x="16" y="40" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="20" y="40" width="2" height="3" fill="#26A69A" opacity=".45"/>
              <rect x="16" y="47" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="20" y="47" width="2" height="3" fill="#26A69A" opacity=".45"/>
              <rect x="16" y="54" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="20" y="54" width="2" height="3" fill="#26A69A" opacity=".45"/>
              <rect x="26" y="35" width="22" height="55" fill="white"/>
              <rect x="28" y="40" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="34" y="40" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="40" y="40" width="3" height="4" fill="#26A69A" opacity=".4"/>
              <rect x="28" y="48" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="34" y="48" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="40" y="48" width="3" height="4" fill="#26A69A" opacity=".4"/>
              <rect x="28" y="56" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="34" y="56" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="40" y="56" width="3" height="4" fill="#26A69A" opacity=".4"/>
              <rect x="28" y="64" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="34" y="64" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="40" y="64" width="3" height="4" fill="#26A69A" opacity=".4"/>
              <rect x="50" y="52" width="14" height="38" fill="white"/>
              <rect x="52" y="57" width="3" height="3" fill="#26A69A" opacity=".4"/><rect x="58" y="57" width="3" height="3" fill="#26A69A" opacity=".4"/>
              <rect x="52" y="64" width="3" height="3" fill="#26A69A" opacity=".4"/><rect x="58" y="64" width="3" height="3" fill="#26A69A" opacity=".4"/>
              <rect x="66" y="42" width="12" height="48" fill="white"/><rect x="68" y="36" width="8" height="8" fill="white"/><rect x="70" y="32" width="4" height="6" fill="white"/>
              <rect x="67" y="47" width="2" height="3" fill="#26A69A" opacity=".4"/><rect x="72" y="47" width="2" height="3" fill="#26A69A" opacity=".4"/>
              <rect x="67" y="54" width="2" height="3" fill="#26A69A" opacity=".4"/><rect x="72" y="54" width="2" height="3" fill="#26A69A" opacity=".4"/>
              <rect x="67" y="61" width="2" height="3" fill="#26A69A" opacity=".4"/><rect x="72" y="61" width="2" height="3" fill="#26A69A" opacity=".4"/>
              <rect x="80" y="60" width="10" height="30" fill="white" opacity=".8"/>
              <rect x="82" y="64" width="2" height="3" fill="#26A69A" opacity=".35"/><rect x="86" y="64" width="2" height="3" fill="#26A69A" opacity=".35"/>
              <rect x="92" y="50" width="8" height="40" fill="white" opacity=".75"/>
              <rect x="93" y="55" width="2" height="3" fill="#26A69A" opacity=".35"/><rect x="97" y="55" width="2" height="3" fill="#26A69A" opacity=".35"/>
              <rect x="93" y="62" width="2" height="3" fill="#26A69A" opacity=".35"/><rect x="97" y="62" width="2" height="3" fill="#26A69A" opacity=".35"/>
            </svg>

            {/* right buildings */}
            <svg className="absolute bottom-0 right-0 pointer-events-none" width="160" height="90" viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
              <rect x="147" y="10" width="13" height="80" fill="white"/><polygon points="153.5,4 147,10 160,10" fill="white"/>
              <rect x="148" y="15" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="152" y="15" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="156" y="15" width="2" height="3" fill="#26A69A" opacity=".5"/>
              <rect x="148" y="22" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="152" y="22" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="156" y="22" width="2" height="3" fill="#26A69A" opacity=".5"/>
              <rect x="148" y="29" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="152" y="29" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="156" y="29" width="2" height="3" fill="#26A69A" opacity=".5"/>
              <rect x="148" y="36" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="152" y="36" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="156" y="36" width="2" height="3" fill="#26A69A" opacity=".5"/>
              <rect x="148" y="43" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="152" y="43" width="2" height="3" fill="#26A69A" opacity=".5"/><rect x="156" y="43" width="2" height="3" fill="#26A69A" opacity=".5"/>
              <rect x="136" y="28" width="9" height="62" fill="white"/><rect x="138" y="22" width="3" height="8" fill="white"/><rect x="139" y="18" width="1" height="6" fill="white"/>
              <rect x="137" y="33" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="141" y="33" width="2" height="3" fill="#26A69A" opacity=".45"/>
              <rect x="137" y="40" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="141" y="40" width="2" height="3" fill="#26A69A" opacity=".45"/>
              <rect x="137" y="47" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="141" y="47" width="2" height="3" fill="#26A69A" opacity=".45"/>
              <rect x="137" y="54" width="2" height="3" fill="#26A69A" opacity=".45"/><rect x="141" y="54" width="2" height="3" fill="#26A69A" opacity=".45"/>
              <rect x="112" y="35" width="22" height="55" fill="white"/>
              <rect x="114" y="40" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="120" y="40" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="126" y="40" width="3" height="4" fill="#26A69A" opacity=".4"/>
              <rect x="114" y="48" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="120" y="48" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="126" y="48" width="3" height="4" fill="#26A69A" opacity=".4"/>
              <rect x="114" y="56" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="120" y="56" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="126" y="56" width="3" height="4" fill="#26A69A" opacity=".4"/>
              <rect x="114" y="64" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="120" y="64" width="3" height="4" fill="#26A69A" opacity=".4"/><rect x="126" y="64" width="3" height="4" fill="#26A69A" opacity=".4"/>
              <rect x="96" y="52" width="14" height="38" fill="white"/>
              <rect x="98" y="57" width="3" height="3" fill="#26A69A" opacity=".4"/><rect x="104" y="57" width="3" height="3" fill="#26A69A" opacity=".4"/>
              <rect x="98" y="64" width="3" height="3" fill="#26A69A" opacity=".4"/><rect x="104" y="64" width="3" height="3" fill="#26A69A" opacity=".4"/>
              <rect x="82" y="42" width="12" height="48" fill="white"/><rect x="84" y="36" width="8" height="8" fill="white"/><rect x="86" y="32" width="4" height="6" fill="white"/>
              <rect x="83" y="47" width="2" height="3" fill="#26A69A" opacity=".4"/><rect x="88" y="47" width="2" height="3" fill="#26A69A" opacity=".4"/>
              <rect x="83" y="54" width="2" height="3" fill="#26A69A" opacity=".4"/><rect x="88" y="54" width="2" height="3" fill="#26A69A" opacity=".4"/>
              <rect x="83" y="61" width="2" height="3" fill="#26A69A" opacity=".4"/><rect x="88" y="61" width="2" height="3" fill="#26A69A" opacity=".4"/>
              <rect x="70" y="60" width="10" height="30" fill="white" opacity=".8"/>
              <rect x="72" y="64" width="2" height="3" fill="#26A69A" opacity=".35"/><rect x="76" y="64" width="2" height="3" fill="#26A69A" opacity=".35"/>
              <rect x="60" y="50" width="8" height="40" fill="white" opacity=".75"/>
              <rect x="61" y="55" width="2" height="3" fill="#26A69A" opacity=".35"/><rect x="65" y="55" width="2" height="3" fill="#26A69A" opacity=".35"/>
              <rect x="61" y="62" width="2" height="3" fill="#26A69A" opacity=".35"/><rect x="65" y="62" width="2" height="3" fill="#26A69A" opacity=".35"/>
            </svg>

            {/* silhouette */}
            <div className="absolute bottom-0 left-0 right-0 bg-white" style={{ height:"15px", clipPath:"polygon(0 100%,0 100%,2% 100%,2% 70%,4% 70%,4% 45%,6% 45%,6% 70%,8% 70%,8% 20%,10% 20%,10% 70%,12% 70%,12% 55%,14% 55%,14% 15%,16% 15%,16% 55%,18% 55%,18% 65%,20% 65%,20% 35%,22% 35%,22% 50%,24% 50%,24% 68%,26% 68%,26% 38%,28% 38%,28% 52%,30% 52%,30% 28%,32% 28%,32% 52%,34% 52%,34% 68%,36% 68%,36% 45%,38% 45%,38% 58%,40% 58%,40% 42%,42% 42%,42% 58%,44% 58%,44% 68%,46% 68%,46% 50%,48% 50%,48% 42%,50% 42%,50% 50%,52% 50%,52% 68%,54% 68%,54% 50%,56% 50%,56% 58%,58% 58%,58% 42%,60% 42%,60% 58%,62% 58%,62% 45%,64% 45%,64% 28%,66% 28%,66% 45%,68% 45%,68% 68%,70% 68%,70% 38%,72% 38%,72% 52%,74% 52%,74% 15%,76% 15%,76% 52%,78% 52%,78% 20%,80% 20%,80% 65%,82% 65%,82% 45%,84% 45%,84% 65%,86% 65%,86% 100%,88% 100%,88% 70%,90% 70%,90% 45%,92% 45%,92% 70%,94% 70%,94% 20%,96% 20%,96% 70%,98% 70%,98% 100%,100% 100%)" }} />

            {/* dots */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height:"28px" }}>
              {[5,10,17,23,29,35,41,47,53,59,65,71,77,83,89,95].map((l,i)=>(
                <div key={i} className="absolute rounded-full bg-[#26A69A]" style={{ left:`${l}%`, bottom:`${4+(i%3)*5}px`, width:"3px", height:"3px", opacity:0.5+(i%3)*0.15 }} />
              ))}
            </div>

            <button onClick={onClose} className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-white/25 hover:bg-white/40 flex items-center justify-center z-10">
              <ArrowLeft className="w-4 h-4 text-white" />
            </button>
            <button onClick={onClose} className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/25 hover:bg-white/40 flex items-center justify-center z-10 text-white font-bold text-sm">✕</button>

            <div className="text-3xl mb-1 relative z-10">🏠</div>
            <h1 className="text-base sm:text-lg font-extrabold text-white tracking-wide relative z-10" style={{ textShadow:"0 2px 6px rgba(0,0,0,.2)" }}>
              Property Owner Registration
            </h1>
            <p className="text-[11px] text-white/80 relative z-10 mt-0.5">List your property with us — fast &amp; easy</p>
          </div>

          {/* step title */}
          <div className="text-center px-4 py-2 bg-gradient-to-r from-teal-50 to-emerald-100 border-b border-teal-200 shrink-0">
            <h2 className="text-sm sm:text-base font-bold text-[#00695C]">{steps[step]}</h2>
            <p className="text-[10px] sm:text-xs text-green-500 mt-0.5">Step {step+1} of {steps.length} — {subtitles[step]}</p>
          </div>

          {/* steps bar */}
          <div className="flex items-start justify-between px-2 sm:px-3 py-2 shrink-0 border-b border-gray-100 overflow-x-auto">
            {steps.map((s,i)=>(
              <div key={i} className="flex-1 flex flex-col items-center min-w-[54px]">
                <div className={`w-6 h-6 rounded-full text-[10px] flex items-center justify-center font-bold ${i<step?"bg-green-500 text-white":i===step?"bg-[#00695C] text-white":"bg-gray-200 text-gray-500"}`}>
                  {i<step?"✓":i+1}
                </div>
                <p className={`text-[9px] mt-1 text-center px-0.5 ${i===step?"text-[#00695C] font-bold":"text-gray-400"}`}>{s}</p>
              </div>
            ))}
          </div>

          {/* body */}
          <div className="px-3 sm:px-4 py-3 overflow-y-auto flex-1">
            <DtContent step={step} inp={inDt} />
          </div>

          {/* footer */}
          <div className="flex flex-col shrink-0 bg-white rounded-b-2xl border-t border-teal-100 overflow-hidden">
            <div className="h-[2px] w-full bg-gradient-to-r from-[#00695C] via-[#26A69A] to-[#80CBC4]" />
            {step < 4 && (
              <div className="px-4 pt-2.5 pb-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[9px] text-gray-400 font-medium flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#26A69A] inline-block"/>Form completion</span>
                  <span className="text-[9px] text-[#00695C] font-bold">{Math.round(((step+1)/5)*100)}%</span>
                </div>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00695C] to-[#26A69A] rounded-full transition-all duration-500" style={{ width:`${((step+1)/5)*100}%` }} />
                </div>
              </div>
            )}
            <div className="flex justify-center gap-1.5 pt-2">
              {steps.map((_,i)=>(
                <div key={i} className={`rounded-full transition-all duration-300 ${i<step?'w-3 h-1.5 bg-green-400':i===step?'w-5 h-1.5 bg-[#00695C]':'w-1.5 h-1.5 bg-gray-200'}`} />
              ))}
            </div>
            <div className="flex gap-2 px-4 py-3">
              {step > 0 && (
                <button className="px-4 py-2 text-sm font-semibold text-[#00695C] bg-teal-50 hover:bg-teal-100 rounded-lg flex items-center gap-1 border border-teal-200" onClick={()=>setStep(step-1)}>
                  <ArrowLeft className="w-3.5 h-3.5"/>Back
                </button>
              )}
              <button className={`px-5 py-2 text-sm font-semibold text-white rounded-lg flex items-center gap-1.5 ml-auto shadow-md hover:-translate-y-0.5 ${step===4?'bg-gradient-to-r from-green-600 to-teal-600':'bg-gradient-to-r from-[#00695C] to-[#00897B]'}`}
                onClick={()=>step===4?onClose():setStep(step+1)}>
                {step===4?<><span>✓</span>Submit Form</>:<>Continue <span className="text-base">→</span></>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Mobile step content ── */
function MobContent({ step, inp }) {
  const ta = `${inp} resize-y`;
  if (step===0) return <>
    <Field label="Owner Name" required hint="As per your government-issued ID"><input className={inp} placeholder="Enter your full name"/></Field>
    <Field label="Contact Number" required><input className={inp} type="tel" placeholder="Enter your 10-digit mobile number"/></Field>
    <Field label="Email ID" required hint="We'll send listing updates to this email"><input className={inp} type="email" placeholder="Enter your email address"/></Field>
    <Field label="Address" required><textarea className={`${ta} min-h-[65px]`} placeholder="Enter your residential address (Street, Area, City, State, PIN)"/></Field>
    <Field label="ID Proof / Aadhaar / PAN" required hint="12-digit Aadhaar or 10-character PAN"><input className={inp} placeholder="Enter Aadhaar or PAN number"/></Field>
  </>;
  if (step===1) return <>
    <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b-2 border-green-50"><div className="w-1 h-3 bg-[#00695C] rounded"/><h3 className="text-[10px] font-bold text-[#00695C]">Property Details</h3></div>
    <Field label="Property Title / Name" required><input className={inp} placeholder="e.g. Green Valley 3BHK Apartment"/></Field>
    <Field label="Property Category" required><input className={inp} placeholder="e.g. Apartment, Villa, Plot..."/></Field>
    <Field label="Property Type" required>{["Residential","Commercial","Mill / Industrial"].map(t=><label key={t} className="flex items-center gap-2 text-[10px] mb-1"><input type="radio" name="ptype" className="accent-[#00695C] w-3 h-3"/>{t}</label>)}</Field>
    <Field label="Property Address" required><textarea className={`${ta} min-h-[55px]`} placeholder="Enter complete property address"/></Field>
    <Field label="City" required><input className={inp} placeholder="Enter city name"/></Field>
    <Field label="Area Details" required hint="In square feet"><div className="grid grid-cols-2 gap-1.5"><input className={inp} type="number" placeholder="Build-up Area"/><input className={inp} type="number" placeholder="Carpet Area"/></div></Field>
    <Field label="Room Details"><div className="grid grid-cols-2 gap-1.5"><input className={inp} type="number" placeholder="Bedrooms"/><input className={inp} type="number" placeholder="Bathrooms"/></div></Field>
    <Field label="Furnishing Status" required>{["Full Furnish","Semi Furnish","Unfurnished"].map(f=><label key={f} className="flex items-center gap-2 text-[10px] mb-1"><input type="radio" name="furnish" className="accent-[#00695C] w-3 h-3"/>{f}</label>)}</Field>
    <Field label="Parking"><div className="flex gap-4"><label className="flex items-center gap-1.5 text-[10px]"><input type="radio" name="parking" className="accent-[#00695C] w-3 h-3"/>Yes</label><label className="flex items-center gap-1.5 text-[10px]"><input type="radio" name="parking" className="accent-[#00695C] w-3 h-3"/>No</label></div></Field>
  </>;
  if (step===2) return <>
    <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b-2 border-green-50"><div className="w-1 h-3 bg-[#00695C] rounded"/><h3 className="text-[10px] font-bold text-[#00695C]">Pricing & Amenities</h3></div>
    <Field label="Listing Purpose" required><div className="flex gap-4"><label className="flex items-center gap-1.5 text-[10px]"><input type="radio" name="purpose" className="accent-[#00695C] w-3 h-3"/>For Sale</label><label className="flex items-center gap-1.5 text-[10px]"><input type="radio" name="purpose" className="accent-[#00695C] w-3 h-3"/>For Rent</label></div></Field>
    <Field label="Expected Price / Rent (₹)" required><input className={inp} placeholder="e.g. 45,00,000 or 15,000/month"/></Field>
    <Field label="Price Type"><div className="flex gap-4"><label className="flex items-center gap-1.5 text-[10px]"><input type="radio" name="pt" className="accent-[#00695C] w-3 h-3"/>Fixed</label><label className="flex items-center gap-1.5 text-[10px]"><input type="radio" name="pt" className="accent-[#00695C] w-3 h-3"/>Negotiable</label></div></Field>
    <Field label="Maintenance (₹/month)"><input className={inp} placeholder="Enter monthly maintenance"/></Field>
    <Field label="Available From"><input className={inp} type="date"/></Field>
    <Field label="Amenities"><div className="flex flex-wrap gap-1 mt-0.5">{["Lift","Power Backup","Security","Water Supply","Garden","Gym","Pool"].map(a=><span key={a} className="px-1.5 py-0.5 text-[9px] bg-teal-50 text-[#00695C] rounded-full border border-teal-200">{a}</span>)}</div></Field>
    <Field label="Other Amenities"><input className={inp} placeholder="e.g. Clubhouse, CCTV..."/></Field>
  </>;
  if (step===3) return <>
    <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b-2 border-green-50"><div className="w-1 h-3 bg-[#00695C] rounded"/><h3 className="text-[10px] font-bold text-[#00695C]">Media Upload</h3></div>
    <p className="text-[9px] text-center text-gray-400 mb-2">📸 Minimum 3 property images required</p>
    <Field label="Property Images" required>
      <div className="border-2 border-dashed border-teal-300 rounded-xl p-3 text-center hover:bg-green-50">
        <input type="file" accept="image/*" multiple className="hidden" id="m-imgs"/>
        <label htmlFor="m-imgs" className="cursor-pointer flex flex-col items-center">
          <ImagePlus className="mb-1 w-7 h-7 text-[#00695C]"/>
          <span className="text-[10px] font-semibold text-[#00695C]">Upload Property Photos</span>
          <span className="text-[9px] text-gray-400">JPG, PNG supported</span>
        </label>
      </div>
    </Field>
    <Field label="Property Video">
      <div className="border-2 border-dashed border-teal-300 rounded-xl p-3 text-center hover:bg-green-50">
        <input type="file" accept="video/mp4,video/mov" className="hidden" id="m-vid"/>
        <label htmlFor="m-vid" className="cursor-pointer flex flex-col items-center">
          <Video className="mb-1 w-7 h-7 text-[#00695C]"/>
          <span className="text-[10px] font-semibold text-[#00695C]">Upload Video Tour</span>
          <span className="text-[9px] text-gray-400">MP4 or MOV</span>
        </label>
      </div>
    </Field>
  </>;
  if (step===4) return <>
    <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b-2 border-green-50"><div className="w-1 h-3 bg-[#00695C] rounded"/><h3 className="text-[10px] font-bold text-[#00695C]">Document Upload</h3></div>
    {[{id:"m-own",e:"📄",t:"Upload Ownership Document",s:"Sale deed, registry (PDF/JPG/PNG)",l:"Ownership Proof",r:true},{id:"m-id",e:"🪪",t:"Upload ID Proof",s:"Aadhaar, PAN or Passport",l:"Owner ID Proof",r:true},{id:"m-add",e:"📎",t:"+ Add More Documents",s:"Tax receipts, NOC, floor plans",l:"Additional Documents",r:false}].map(d=>(
      <Field key={d.id} label={d.l} required={d.r}>
        <div className="border-2 border-dashed border-teal-300 rounded-xl p-3 text-center hover:bg-green-50">
          <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" id={d.id}/>
          <label htmlFor={d.id} className="cursor-pointer">
            <div className="text-xl mb-0.5">{d.e}</div>
            <div className="text-[10px] font-semibold text-[#00695C]">{d.t}</div>
            <span className="text-[9px] text-gray-400">{d.s}</span>
          </label>
        </div>
      </Field>
    ))}
  </>;
  return null;
}

/* ── Desktop step content ── */
function DtContent({ step, inp }) {
  const ta = "input w-full text-sm resize-y placeholder:text-gray-300 placeholder:text-xs";
  if (step===0) return <>
    <FieldDt label="Owner Name" required hint="As per your government-issued ID"><input className={inp} placeholder="Enter your full name"/></FieldDt>
    <FieldDt label="Contact Number" required><input className={inp} type="tel" placeholder="Enter your 10-digit mobile number"/></FieldDt>
    <FieldDt label="Email ID" required hint="We'll send listing updates to this email"><input className={inp} type="email" placeholder="Enter your email address"/></FieldDt>
    <FieldDt label="Address" required><textarea className={`${ta} min-h-[80px]`} placeholder={"Enter your current residential address\n(Street, Area, City, State, PIN)"}/></FieldDt>
    <FieldDt label="ID Proof / Aadhaar / PAN" required hint="12-digit Aadhaar or 10-character PAN"><input className={inp} placeholder="Enter Aadhaar or PAN number"/></FieldDt>
  </>;
  if (step===1) return <>
    <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-green-50"><div className="w-1 h-4 bg-[#00695C] rounded"/><h3 className="text-sm font-bold text-[#00695C]">Property Details</h3></div>
    <FieldDt label="Property Title / Name" required><input className={inp} placeholder="e.g. Green Valley 3BHK Apartment"/></FieldDt>
    <FieldDt label="Property Category" required><input className={inp} placeholder="e.g. Apartment, Villa, Plot..."/></FieldDt>
    <FieldDt label="Property Type" required>{["Residential","Commercial","Mill / Industrial"].map(t=><label key={t} className="flex items-center gap-2 text-xs sm:text-sm mb-2"><input type="radio" name="ptype" className="accent-[#00695C] w-3.5 h-3.5"/>{t}</label>)}</FieldDt>
    <FieldDt label="Property Address" required><textarea className={`${ta} min-h-[70px]`} placeholder={"Enter complete property address\n(Flat No., Building, Street, Locality)"}/></FieldDt>
    <FieldDt label="City" required><input className={inp} placeholder="Enter city name"/></FieldDt>
    <FieldDt label="Area Details" required hint="Enter values in square feet"><div className="grid grid-cols-2 gap-2"><input className={inp} type="number" placeholder="Build-up Area (sq ft)"/><input className={inp} type="number" placeholder="Carpet Area (sq ft)"/></div></FieldDt>
    <FieldDt label="Room Details"><div className="grid grid-cols-2 gap-2"><input className={inp} type="number" placeholder="No. of Bedrooms"/><input className={inp} type="number" placeholder="No. of Bathrooms"/></div></FieldDt>
    <FieldDt label="Furnishing Status" required>{["Full Furnish","Semi Furnish","Unfurnished"].map(f=><label key={f} className="flex items-center gap-2 text-xs sm:text-sm mb-2"><input type="radio" name="furnish" className="accent-[#00695C] w-3.5 h-3.5"/>{f}</label>)}</FieldDt>
    <FieldDt label="Parking Facility"><div className="flex gap-5"><label className="flex items-center gap-2 text-xs sm:text-sm"><input type="radio" name="parking" className="accent-[#00695C] w-3.5 h-3.5"/>Yes, available</label><label className="flex items-center gap-2 text-xs sm:text-sm"><input type="radio" name="parking" className="accent-[#00695C] w-3.5 h-3.5"/>No parking</label></div></FieldDt>
  </>;
  if (step===2) return <>
    <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-green-50"><div className="w-1 h-4 bg-[#00695C] rounded"/><h3 className="text-sm font-bold text-[#00695C]">Pricing & Amenities</h3></div>
    <FieldDt label="Listing Purpose" required><div className="flex gap-5"><label className="flex items-center gap-2 text-xs sm:text-sm"><input type="radio" name="purpose" className="accent-[#00695C] w-3.5 h-3.5"/>For Sale</label><label className="flex items-center gap-2 text-xs sm:text-sm"><input type="radio" name="purpose" className="accent-[#00695C] w-3.5 h-3.5"/>For Rent / Lease</label></div></FieldDt>
    <FieldDt label="Expected Price / Rent (₹)" required><input className={inp} placeholder="e.g. 45,00,000 or 15,000/month"/></FieldDt>
    <FieldDt label="Price Type"><div className="flex gap-5"><label className="flex items-center gap-2 text-xs sm:text-sm"><input type="radio" name="priceType" className="accent-[#00695C] w-3.5 h-3.5"/>Fixed Price</label><label className="flex items-center gap-2 text-xs sm:text-sm"><input type="radio" name="priceType" className="accent-[#00695C] w-3.5 h-3.5"/>Negotiable</label></div></FieldDt>
    <FieldDt label="Maintenance Charges (₹/month)"><input className={inp} placeholder="Enter monthly maintenance amount"/></FieldDt>
    <FieldDt label="Available From" hint="Date from which the property is available"><input className={inp} type="date"/></FieldDt>
    <FieldDt label="Select Amenities"><div className="flex flex-wrap gap-1.5 mt-1">{["Lift","Power Backup","Security","Water Supply","Garden","Gym","Swimming Pool"].map(a=><span key={a} className="chip text-xs sm:text-sm">{a}</span>)}</div></FieldDt>
    <FieldDt label="Other Amenities"><input className={inp} placeholder="e.g. Clubhouse, CCTV, Solar Panel..."/></FieldDt>
  </>;
  if (step===3) return <>
    <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-green-50"><div className="w-1 h-4 bg-[#00695C] rounded"/><h3 className="text-sm font-bold text-[#00695C]">Media Upload</h3></div>
    <p className="text-[10px] sm:text-xs text-center text-gray-400 mb-3">📸 Minimum 3 property images required</p>
    <FieldDt label="Property Images" required>
      <div className="upload-box cursor-pointer hover:bg-green-50"><input type="file" accept="image/*" multiple className="hidden" id="property-images"/>
        <label htmlFor="property-images" className="cursor-pointer flex flex-col items-center"><ImagePlus className="mx-auto mb-2 w-8 h-8 sm:w-10 sm:h-10 text-[#00695C]"/><span className="text-xs sm:text-sm font-semibold text-[#00695C]">Upload Property Photos</span><span className="text-[10px] text-gray-400 mt-1">Click to select multiple images (JPG, PNG)</span></label>
      </div>
    </FieldDt>
    <FieldDt label="Property Video">
      <div className="upload-box cursor-pointer hover:bg-green-50"><input type="file" accept="video/mp4,video/mov" className="hidden" id="property-video"/>
        <label htmlFor="property-video" className="cursor-pointer flex flex-col items-center"><Video className="mx-auto mb-2 w-8 h-8 sm:w-10 sm:h-10 text-[#00695C]"/><span className="text-xs sm:text-sm font-semibold text-[#00695C]">Upload Property Video Tour</span><p className="text-[10px] text-gray-400">MP4 or MOV format supported</p></label>
      </div>
    </FieldDt>
  </>;
  if (step===4) return <>
    <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-green-50"><div className="w-1 h-4 bg-[#00695C] rounded"/><h3 className="text-sm font-bold text-[#00695C]">Document Upload</h3></div>
    {[{id:"ownership-proof",e:"📄",t:"Upload Ownership Document",s:"Sale deed, registry, or title deed (PDF/JPG/PNG)",l:"Property Ownership Proof",r:true},{id:"id-proof",e:"🪪",t:"Upload ID Proof",s:"Aadhaar, PAN, or Passport (PDF/JPG/PNG)",l:"Owner ID Proof",r:true},{id:"additional-docs",e:"📎",t:"+ Add More Documents",s:"Tax receipts, NOC, floor plans (Multiple allowed)",l:"Additional Documents",r:false}].map(d=>(
      <FieldDt key={d.id} label={d.l} required={d.r}>
        <div className="upload-box cursor-pointer hover:bg-green-50"><input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" id={d.id}/>
          <label htmlFor={d.id} className="cursor-pointer"><div className="text-2xl mb-1">{d.e}</div><div className="text-xs sm:text-sm font-semibold text-[#00695C]">{d.t}</div><span className="block text-[10px] text-gray-400 mt-1">{d.s}</span></label>
        </div>
      </FieldDt>
    ))}
  </>;
  return null;
}