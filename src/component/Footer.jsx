import { useState } from "react";
import logo from "../assets/logo.svg"; // Placeholder image
import facebook from "../assets/footer/social-facebook.svg";
import instagram from "../assets/footer/social-instagram.svg";
import twitter from "../assets/footer/social-twitter.svg";
import youtube from "../assets/footer/social-youtube.svg";
import telegram from "../assets/footer/social-telegram.svg";
import gcb from "../assets/footer/gcb.png"; // Placeholder image
import visa from "../assets/footer/payment-visa.png";
import luqapay from "../assets/footer/payment-luqapay.png"; // Placeholder image
import cepbank from "../assets/footer/payment-cepbank.png"; // Placeholder image
import jeton from "../assets/footer/payment-jeton.png"; // Placeholder image
import banka from "../assets/footer/payment-banka.png"; // Placeholder image
import bitcoin from "../assets/footer/payment-bitcoin.png"; // Placeholder image
import qr from "../assets/footer/payment-qr.png"; // Placeholder image

import betsoft from "../assets/footer/betsoft.png";
import evo from "../assets/footer/evo.png";
import ezugi from "../assets/footer/ezugi.png";
import micro from "../assets/footer/micro.png";
import playson from "../assets/footer/playson.png";
import pragmatic from "../assets/footer/pragmatic.png";
import redrake from "../assets/footer/redrake.png";
import spinomenal from "../assets/footer/spinomenal.png";
import tomhorn from "../assets/footer/tomhorn.png"; // Placeholder image
import vivo from "../assets/footer/vivo.png"; // Placeholder image
import xpg from "../assets/footer/xpg.png"; // Placeholder image

const gameProviders = [
  { id: 1, name: "Betsoft", logo: betsoft },
  { id: 2, name: "Evo", logo: evo },
  { id: 3, name: "Ezugi", logo: ezugi },    
  { id: 4, name: "Microgaming", logo: micro },
  { id: 5, name: "Playson", logo: playson },
  { id: 6, name: "Pragmatic", logo: pragmatic },
  { id: 7, name: "Redrake", logo: redrake },
  { id: 8, name: "Spinomenal", logo: spinomenal },
  { id: 9, name: "Tomhorn", logo: tomhorn },
  { id: 10, name: "Vivo", logo: vivo },
  { id: 11, name: "XPG", logo: xpg },
];

const Footer = () => {
  return (
    <footer className="bg-[#3B2864] text-white">
      {/* Main Footer */}
      <div className="flex gap-20 py-12 pl-60 pr-20">
        <div className="w-[65%] grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - KURUMSAL */}
          <div>
            <h3 className="text-base font-extrabold mb-2 border-b-4 border-pink-500 inline-block">
              KURUMSAL
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Ortaklık Programı
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Partnerlerimiz
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  İletişim
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Onwin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Onwin Giriş
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Onwin Mobil Uygulama
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - SPOR BAHİSLERİ */}
          <div>
            <h3 className="text-base font-extrabold mb-2 border-b-4 border-pink-500 inline-block">
              SPOR BAHİSLERİ
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Futbol Bahisleri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Basketbol Bahisleri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Tenis Bahisleri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Sanal Spor Bahisleri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Genel Spor Kuralları
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - CASINO OYUNLARI */}
          <div>
            <h3 className="text-base font-extrabold mb-2 border-b-4 border-pink-500 inline-block">
              CASINO OYUNLARI
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Ezugi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Evolution
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Lucky Streak
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Genel Casino Kuralları
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Playtech
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Alg Casino
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Betgames
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Amusnet Casino
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Pragmatic Play
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Vivo Gaming
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Xpg Casino
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - DESTEK */}
          <div>
            <h3 className="text-base font-extrabold mb-2 border-b-4 border-pink-500 inline-block">
              DESTEK
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Sıkça Sorulan Sorular
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Para Yatırma
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Para Çekme
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Şikayetler
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Kullanım Şartları
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Genel Çevrim Kuralları
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Sorumlu Bahis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Kara Para Aklamanın Önlenmesi ve Müşteri Tanıma Politikası
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Kendini Uzaklaştırma
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Adaletli Oyun ve RNG Test Metodları
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Çerezler
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo and Certification Section */}
        <div className="w-[35%]">
          <div className="text-center md:text-left">
            {/* Logo */}
            <img src={logo} alt="Onwin Logo" className="w-40 mb-4" />
            <p className="text-xs text-gray-300 mb-2">
              © 2025 Onwin | Tüm Hakları Saklıdır.
            </p>
            <p className="text-xs text-gray-300 max-w-md">
              Onwin.com sitesi Soçaş International B.V. altında Curaçao lisans
              numarası OGL/2024/1295/0544 ile Dr.M.J.Hugenholtzweg 25,
              Willemstad, Curaçao adresi altında, Curaçao Gaming Control Board
              lisansı ile hizmet vermekte olup, Government of Curaçao Lisans
              otoritesi tarafından kontrol edilmektedir.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex space-x-1 mt-3">
            <img
              src={facebook}
              alt="Facebook"
              className="h-6 w-6 opacity-70 hover:opacity-100 transition"
            />
            <img
              src={instagram}
              alt="Instagram"
              className="h-6 w-6 opacity-70 hover:opacity-100 transition"
            />
            <img
              src={twitter}
              alt="Twitter"
              className="h-6 w-6 opacity-70 hover:opacity-100 transition"
            />
            <img
              src={youtube}
              alt="YouTube"
              className="h-6 w-6 opacity-70 hover:opacity-100 transition"
            />
            <img
              src={telegram}
              alt="Telegram"
              className="h-6 w-6 opacity-70 hover:opacity-100 transition"
            />
          </div>

          {/* Certification Logo */}
          <div>
            <img src={gcb} alt="GCB Certification" className="w-40 mt-4" />
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-[#2D1A59] ">
        <div className="px-28">
            {/* Payment Methods */}
            <div className="flex justify-between  py-3">
              <img src={visa} alt="Visa" className="h-5" />
              <img src={luqapay} alt="Luqapay" className="h-5" />
              <img src={cepbank} alt="Cepbank" className=" h-5" />
              <img src={jeton} alt="Jeton" className="h-5 " />
              <img src={banka} alt="Banka" className="h-5" />
              <img src={bitcoin} alt="Bitcoin" className="h-5" />
              <img src={qr} alt="QR Code" className="h-5" />
            </div>
        </div>
      </div>

      {/* Game Providers */}
      <div className="bg-[#200B4D] border-t border-gray-700">
  <div className="container mx-auto px-4">
    {/* Game Providers */}
    <div className="flex overflow-x-auto whitespace-nowrap gap-6 py-2">
      {gameProviders.map((provider) => (
        <div key={provider.id} className="shrink-0">
          <img
            src={provider.logo}
            alt={provider.name}
            className="w-40 h-14 object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Bottom Links */}
      <div className="bg-purple-950 py-4 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white">
              Sorumlu Bahis
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              Kurallar ve Şartlar
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              Çerezler
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              Gizlilik Politikası
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              İletişim
            </a>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-pink-600 hover:bg-pink-700 text-white rounded-full p-4 shadow-lg transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
