import {
  AtSign,
  Facebook,
  Instagram,
  MessageCircleMore,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import plane from "../../../assets/home/plane.png";
import { useSite } from "@/context/SiteContext";

const SocialIcons = () => {
  const {language}=useSite()
  if(language==='turkish'){
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-10 lg:px-28 w-full">
      <div className="relative">
        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Text Content */}
          <div>
            <p className="text-[#C625AC] text-base md:text-lg font-medium">
              Bir tık uzağınızda olmak bizi gururlandırıyor
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Destek kanallarımız üzerinden bizimle iletişime geçin.
            </h2>
            <p className="text-gray-500 text-base md:text-xl">
              Sosyal medya hesaplarımızı takip edebilir veya destek almak için bize ulaşabilirsiniz.
            </p>
          </div>

          {/* Airplane Image */}
          <div className="hidden md:block">
            <img src={plane} alt="Paper airplane" className="w-32 md:w-40 object-contain" />
          </div>
        </div>

        {/* Social Icons & Support Info */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-4 mt-8 items-center justify-start">
          {/* Social Media Icons */}
          <div className="flex flex-wrap gap-4">
            {[ 
              { icon: <Facebook size={24} className="text-blue-600" /> },
              { icon: <Instagram size={24} className="text-pink-600" /> },
              { icon: <Twitter size={24} className="text-blue-400" /> },
              { icon: <Youtube size={24} className="text-red-600" /> },
              { icon: <Send size={24} className="text-gray-600" /> },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg flex items-center justify-center shadow-sm"
              >
                {item.icon}
              </div>
            ))}
          </div>

          {/* Email & Live Support Sections */}
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            {/* Email */}
            <div className="bg-white p-4 md:px-6 gap-3 rounded-lg shadow-sm flex items-center">
              <AtSign size={24} className="text-pink-600" />
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase mb-1">
                  E-MAIL ADRESIMIZ
                </p>
                <p className="text-gray-800 text-base md:text-lg font-medium">
                  destek@onwin.com
                </p>
              </div>
            </div>

            {/* Live Support */}
            <div className="bg-white p-4 md:px-6 gap-3 rounded-lg shadow-sm flex items-center">
              <MessageCircleMore size={24} className="text-pink-600" />
              <div>
                <p className="text-gray-500 text-xs font-medium">YARDIM MI LAZIM?</p>
                <p className="font-semibold text-gray-800">CANLI DESTEK</p>
                <p className="text-yellow-500 text-xs">ONLINE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
  return (
  <div className="bg-gray-100 py-12 px-4 md:px-10 lg:px-28 w-full">
    <div className="relative">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Text Content */}
        <div>
          <p className="text-[#C625AC] text-base md:text-lg font-medium">
            Being just one click away makes us proud
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Contact us through our support channels.
          </h2>
          <p className="text-gray-500 text-base md:text-xl">
            You can follow our social media accounts or reach out to us for support.
          </p>
        </div>

        {/* Airplane Image */}
        <div className="hidden md:block">
          <img src={plane} alt="Paper airplane" className="w-32 md:w-40 object-contain" />
        </div>
      </div>

      {/* Social Icons & Support Info */}
      <div className="flex flex-col lg:flex-row flex-wrap gap-4 mt-8 items-center justify-start">
        {/* Social Media Icons */}
        <div className="flex flex-wrap gap-4">
          {[ 
            { icon: <Facebook size={24} className="text-blue-600" /> },
            { icon: <Instagram size={24} className="text-pink-600" /> },
            { icon: <Twitter size={24} className="text-blue-400" /> },
            { icon: <Youtube size={24} className="text-red-600" /> },
            { icon: <Send size={24} className="text-gray-600" /> },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg flex items-center justify-center shadow-sm"
            >
              {item.icon}
            </div>
          ))}
        </div>

        {/* Email & Live Support Sections */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          {/* Email */}
          <div className="bg-white p-4 md:px-6 gap-3 rounded-lg shadow-sm flex items-center">
            <AtSign size={24} className="text-pink-600" />
            <div>
              <p className="text-gray-500 text-xs font-medium uppercase mb-1">
                OUR E-MAIL ADDRESS
              </p>
              <p className="text-gray-800 text-base md:text-lg font-medium">
                support@onwin.com
              </p>
            </div>
          </div>

          {/* Live Support */}
          <div className="bg-white p-4 md:px-6 gap-3 rounded-lg shadow-sm flex items-center">
            <MessageCircleMore size={24} className="text-pink-600" />
            <div>
              <p className="text-gray-500 text-xs font-medium">NEED HELP?</p>
              <p className="font-semibold text-gray-800">LIVE SUPPORT</p>
              <p className="text-yellow-500 text-xs">ONLINE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

};

export default SocialIcons;
