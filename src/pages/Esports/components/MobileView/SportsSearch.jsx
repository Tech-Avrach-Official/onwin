// MatchTabsMobile.jsx
import { Trash2, X } from "lucide-react";
import { useState, useEffect, useRef } from "react"; // step 1
import { useNavigate } from "react-router-dom";

export default function SportsSearch() {
  const [activeTab, setActiveTab] = useState("maclar");
  const inputRef = useRef(null); // step 2

  useEffect(() => {
    inputRef.current?.focus(); // step 3
  }, []);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="block md:hidden w-full min-h-screen bg-gray-100">
      {/* Header */}
     <div className="h-full w-full bg-white shadow-md flex items-center justify-between">
        <div className="pl-4 w-full">
          <input
            ref={inputRef}
            type="text"
            placeholder=""
            className="w-full pl-2 border-none outline-none focus:ring-2 focus:ring-white rounded"
          />
        </div>
        <div className="flex gap-4 items-center">
          <Trash2 className="text-gray-700 w-5 h-5" />
          <div onClick={handleGoBack} className="p-4 bg-slate-200">
            <X className="text-purple-700 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex text-center mt-2 text-sm font-semibold shadow-md">
        <button
          onClick={() => setActiveTab("maclar")}
          className={`flex-1 py-3 ${
            activeTab === "maclar"
              ? "bg-[#200B4D] text-white"
              : "bg-white text-black"
          }`}
        >
          Maçlar
          <span className="ml-1 bg-white text-[#200B4D] text-xs font-bold px-2 py-0.5 rounded-full">
            0
          </span>
        </button>
        <button
          onClick={() => setActiveTab("turnuvalar")}
          className={`flex-1 py-3 ${
            activeTab === "turnuvalar"
              ? "bg-[#200B4D] text-white"
              : "bg-white text-black"
          }`}
        >
          Turnuvalar
          <span className="ml-1 bg-white text-[#200B4D] text-xs font-bold px-2 py-0.5 rounded-full">
            0
          </span>
        </button>
      </div>

      {/* Content */}
      {/* <div className="p-4 text-center text-gray-500 text-sm">
        {activeTab === "maclar" ? "Maçlar içeriği" : "Turnuvalar içeriği"}
      </div> */}
    </div>
  );
}
