import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="relative w-[420px] bg-[#1a1a1a] rounded-lg text-white shadow-lg border border-gray-700">
        {/* Top Header */}
        <div className="bg-[#ffcc00] text-black text-center text-lg font-bold py-2 rounded-t-lg relative">
          Hoşgeldiniz
          <button onClick={onClose} className="absolute top-2 right-3">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pt-6 pb-8 text-center">
          <p className="text-md font-medium mb-6">
            Gerçekten oynamak için oturum açın
          </p>

          {/* Form */}
          <div className="flex justify-between gap-3 mb-4">
            <div className="flex-1">
              <label className="block text-sm text-left mb-1">E-mail</label>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-3 py-2 bg-[#2a2a2a] text-white rounded outline-none border border-gray-600 focus:border-yellow-400"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-left mb-1">
                Casibom Şifrenizi
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Casibom Şifrenizi"
                  className="w-full px-3 py-2 bg-[#2a2a2a] text-white rounded outline-none border border-gray-600 focus:border-yellow-400"
                />
                <button className="absolute right-2 top-2.5 text-gray-400">
                  👁️
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-between text-sm text-yellow-400 mb-6">
            <a href="#" className="hover:underline">Kayıt</a>
            <a href="#" className="hover:underline">Şifrenizi mi unuttunuz??</a>
          </div>

          {/* Login Button */}
          <button className="bg-white text-black font-semibold px-8 py-2 rounded hover:bg-gray-200 transition">
            Giriş
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
