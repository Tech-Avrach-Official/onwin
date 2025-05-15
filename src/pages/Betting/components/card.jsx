import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const BettingCard = () => {
  const [checked, setChecked] = useState(true);
  const [amount, setAmount] = useState(5.0);
  const [isOpen, setIsOpen] = useState(false);
  const odds = 1.58;

  const handleAmountChange = (delta) => {
    setAmount((prev) => Math.max(0, prev + delta));
  };

  return (
    <div className="mt-4 border rounded-lg bg-white shadow-md p-3 text-sm text-gray-800 relative">
      {/* Header */}
      <div className="flex items-center justify-between font-semibold  text-base border-b-2 border-black-100">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="w-4 h-4 bg-transparent"
          />

          {/* Dropdown Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 font-semibold focus:outline-none"
          >
            Galatasaray
            {isOpen ? (
              <ChevronUp className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>
        <div className="text-purple-700 font-bold">{odds.toFixed(2)}</div>
        <X className="w-4 h-4 text-gray-400 cursor-pointer" />
      </div>

      {/* Collapsible Content */}
      {isOpen && (
        
        <div>
      <div className="mt-2 py-2 text-xs text-gray-600">
        <div><strong>Sonuç (NS)</strong></div>
        <div>Galatasaray - Trabzonspor</div>
        <div>Çar, 14. Mayıs • 23:15</div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center border rounded-md overflow-hidden">
          <button
            onClick={() => handleAmountChange(-1)}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
          >
            -
          </button>
          <div className="px-4 py-1 bg-purple-50 font-medium text-purple-700">
            {amount.toFixed(2)}
          </div>
          <button
            onClick={() => handleAmountChange(1)}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
          >
            +
          </button>
        </div>

        <div className="text-sm text-gray-700">
          Olası kazanç <strong className="text-purple-700">₺ {(amount * odds).toFixed(2)}</strong>
        </div>
      </div>
      </div>
      )}

    </div>
  );
};

export default BettingCard;
