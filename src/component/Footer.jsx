import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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



const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and window resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Game providers data
  const gameProviders = [
    { id: 1, name: "Betsoft", image: betsoft },
    { id: 2, name: "Evo", image: evo },
    { id: 3, name: "Ezugi", image: ezugi },
    { id: 4, name: "Microgaming", image: micro },
    { id: 5, name: "Playson", image: playson },
    { id: 6, name: "Pragmatic Play", image: pragmatic },
    { id: 7, name: "Red Rake", image: redrake },
    { id: 8, name: "Spinomenal", image: spinomenal },
    { id: 9, name: "Tom Horn", image: tomhorn },
    { id: 10, name: "Vivo Gaming", image: vivo },
    { id: 11, name: "XPG", image: xpg },
  ];

  // Payment methods data
  const paymentMethods = [
    { id: 1, name: "Visa", image: visa },
    { id: 2, name: "LuqaPay", image: luqapay },
    { id: 3, name: "Cepbank", image: cepbank },
    { id: 4, name: "Jeton", image: jeton },
    { id: 5, name: "Banka", image: banka },
    { id: 6, name: "Bitcoin", image: bitcoin },
    { id: 7, name: "QR", image: qr },
  ];

  // Social media platforms
  const socialPlatforms = [
    { id: 1, name: "Facebook", image: facebook },
    { id: 2, name: "Instagram", image: instagram },
    { id: 3, name: "Twitter", image: twitter },
    { id: 4, name: "Youtube", image: youtube },
    { id: 5, name: "Telegram", image: telegram },
  ];

  // Footer column links
  const footerLinks = [
    {
      id: "kurumsal",
      title: "KURUMSAL",
      links: [
        "Hakkımızda",
        "Ortaklık Programı",
        "Partnerlerimiz",
        "İletişim",
        "Onwin",
        "Onwin Giriş",
        "Onwin Mobil Uygulama",
      ],
    },
    {
      id: "spor",
      title: "SPOR BAHİSLERİ",
      links: [
        "Futbol Bahisleri",
        "Basketbol Bahisleri",
        "Tenis Bahisleri",
        "Sanal Spor Bahisleri",
        "Genel Spor Kuralları",
      ],
    },
    {
      id: "casino",
      title: "CASINO OYUNLARI",
      links: [
        "Ezugi",
        "Evolution",
        "Lucky Streak",
        "Genel Casino Kuralları",
        "Playtech",
        "Alg Casino",
        "Betgames",
        "Amusnet Casino",
        "Pragmatic Play",
        "Vivo Gaming",
        "Xpg Casino",
      ],
    },
    {
      id: "destek",
      title: "DESTEK",
      links: [
        "Sıkça Sorulan Sorular",
        "Para Yatırma",
        "Para Çekme",
        "Şikayetler",
        "Kullanım Şartları",
        "Genel Çevrim Kuralları",
        "Sorumlu Bahis",
        "Kara Para Aklamanın Önlenmesi ve Müşteri Tanıma Politikası",
        "Kendini Uzaklaştırma",
        "Adaletli Oyun ve RNG Test Metodları",
        "Çerezler",
      ],
    },
  ];

  // Render either accordion (mobile) or regular columns (desktop)
  const renderFooterLinks = () => {
    if (isMobile) {
      return (
        <div className="px-4 py-6">
          <Accordion type="single" collapsible className="w-full">
            {footerLinks.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger className="text-base font-extrabold md:border-b-4 md:border-pink-500 py-2">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 py-2">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="text-gray-300 hover:text-white transition">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      );
    } else {
      return (
        <div className="w-full md:w-[65%] grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.id}>
              <h3 className="text-base font-extrabold mb-2 border-b-4 border-pink-500 inline-block">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-300 hover:text-white transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <footer className="bg-[#3B2864] text-white">
      {/* Main Footer */}
      <div className={`flex flex-col md:flex-row ${isMobile ? '' : 'gap-20 py-12 pl-60 pr-20'}`}>
        {/* Links Section */}
        {renderFooterLinks()}

        {/* Logo and Certification Section */}
        <div className={`${isMobile ? 'px-4 py-6 text-center' : 'w-[35%] text-center md:text-left'}`}>
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="Onwin Logo" className="w-40 mb-4" />
          </div>
          <p className="text-xs text-gray-300 mb-2">
            © 2025 Onwin | Tüm Hakları Saklıdır.
          </p>
          <p className="text-xs text-gray-300 max-w-md mx-auto md:mx-0">
            Onwin.com sitesi Soçaş International B.V. altında Curaçao lisans
            numarası OGL/2024/1295/0544 ile Dr.M.J.Hugenholtzweg 25,
            Willemstad, Curaçao adresi altında, Curaçao Gaming Control Board
            lisansı ile hizmet vermekte olup, Government of Curaçao Lisans
            otoritesi tarafından kontrol edilmektedir.
          </p>

          {/* Social Media */}
          <div className="flex space-x-1 mt-3 justify-center md:justify-start">
            {socialPlatforms.map((platform) => (
              <div 
                key={platform} 
                className="h-6 w-6 rounded-full bg-gray-700 opacity-70 hover:opacity-100 transition flex items-center justify-center"
              >
                <img src={platform.image} alt={platform.name} className="h-full" />
              </div>
            ))}
          </div>

          {/* Certification Logo */}
          <div className="flex justify-center md:justify-start mt-4">
            <img src={gcb} alt="GCB Logo" className="h-20" />
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="hidden md:block bg-[#2D1A59]">
        <div className="px-4 md:px-28">
          {/* Payment Methods */}
          <div className="flex flex-wrap justify-center md:justify-between gap-3 md:gap-0 py-3">
            {paymentMethods.map((method) => (
              <div key={method} className="h-5 w-12 rounded flex items-center justify-center text-xs">
                <img src={method.image} alt={method} className="h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Game Providers */}
      <div className="hidden md:block bg-[#200B4D] border-t border-gray-700">
        <div className="container mx-auto px-4">
          {/* Game Providers */}
          <div className="flex overflow-x-auto whitespace-nowrap gap-6 py-2">
            {gameProviders.map((provider) => (
              <div key={provider.id} className="shrink-0">
                <div className="w-24 md:w-40 h-10 md:h-14 rounded flex items-center justify-center text-xs">
                  <img src={provider.image} alt={provider.name} className="h-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="bg-purple-950 py-4 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 text-xs md:text-sm text-gray-400">
            {isMobile ? (
              <>
                <a href="#" className="hover:text-white">Sorumlu Bahis</a>
                <span>|</span>
                <a href="#" className="hover:text-white">Kurallar</a>
                <span>|</span>
                <a href="#" className="hover:text-white">Çerezler</a>
                <span>|</span>
                <a href="#" className="hover:text-white">Gizlilik</a>
                <span>|</span>
                <a href="#" className="hover:text-white">İletişim</a>
              </>
            ) : (
              <>
                <a href="#" className="hover:text-white">Sorumlu Bahis</a>
                <span>|</span>
                <a href="#" className="hover:text-white">Kurallar ve Şartlar</a>
                <span>|</span>
                <a href="#" className="hover:text-white">Çerezler</a>
                <span>|</span>
                <a href="#" className="hover:text-white">Gizlilik Politikası</a>
                <span>|</span>
                <a href="#" className="hover:text-white">İletişim</a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Chat Button - Fixed on all screens */}
      {/* <div className="fixed bottom-8 right-8 z-50">
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
      </div> */}
    </footer>
  );
};

export default Footer;