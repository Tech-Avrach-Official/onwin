import { X } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SportsBahis() {
  const [activeTab, setActiveTab] = useState("kupon");
  const [subTab, setSubTab] = useState("açık");

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      {/* <div className="flex items-center justify-between p-4 bg-white border-b shadow-sm">
        <div className="flex items-center gap-2">
          <button>❌</button>
        </div>
      </div> */}

      {/* Tabs */}
      <div className="flex justify-between bg-white border-b">
        <button
          className={`w-1/2 text-center text-sm py-3 font-semibold ${
            activeTab === "kupon" ? "text-white bg-[#200B4D]" : "text-gray-800"
          }`}
          onClick={() => setActiveTab("kupon")}
        >
          Bahis Kuponu (0)
        </button>
        <button
          className={`w-1/2 text-center  text-sm py-3 font-semibold ${
            activeTab === "bahislerim" ? "text-white bg-[#200B4D]" : "text-gray-800"
          }`}
          onClick={() => setActiveTab("bahislerim")}
        >
          Bahislerim (0)
        </button>
         <div onClick={handleGoBack} className="p-4 bg-gray-200">
            <X className="text-purple-700 w-5 h-5" />
          </div>
      </div>

      {/* FREEBET */}
      <div className="text-center py-2 text-white bg-[#200B4D] text-sm tracking-widest">
        FREEBET
      </div>

      {/* Content */}
      {activeTab === "bahislerim" ? (
        <>
          {/* Sub Tabs */}
          <div className="flex justify-around border-b bg-white">
            {["Açık", "Sonuçlanmış", "Bahis Bozdur"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSubTab(tab.toLowerCase())}
                className={`py-2 w-full text-sm ${
                  subTab === tab.toLowerCase() ? "font-semibold text-purple-700" : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Empty State */}
         <div className="relative flex justify-center items-center h-[60vh]">
  <div className="w-8 h-8 bg-[#c625ab76] rounded-full  flex items-center justify-center animate-ping">
  </div>
    <div className="absolute  w-5 h-5 bg-pink-500 rounded-full"></div>
</div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center mt-5 px-4 space-y-4">
          <p className="text-sm font-medium text-gray-700">Bahis kuponunuz boş</p>
          <button className="w-full bg-gradient-to-b from-[#4a3870] to-[#2b1c4b] text-white rounded-sm py-2 font-semibold text-sm">
            Canlı Bahis
          </button>
          <button className="w-full bg-gradient-to-b from-[#4a3870] to-[#2b1c4b] text-white rounded-sm py-2 font-semibold text-sm">
            E-Spor Canlı Bahis
          </button>
        </div>
      )}

      {/* Floating Button */}
    </div>
  );
}
