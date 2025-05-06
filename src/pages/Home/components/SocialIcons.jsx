import {
  AtSign,
  Facebook,
  Instagram,
  MessageCircleMore,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import plane from "../../../assets/home/plane.png"; // Placeholder image

const SocialIcons = () => {
  return (
    <div className="bg-gray-100 py-12 px-28 w-full">
      <div className="relative">
        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Text Content */}
          <div className="mb-8 md:mb-0">
            <p className="text-[#C625AC] text-lg font-medium leading-3">
            Bir tık uzağınızda olmak bizi gururlandırıyor
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Destek kanallarımız üzerinden bizimle iletişime geçin.
            </h2>
            <p className="text-gray-500 leading-3 text-xl">
            Sosyal medya hesaplarımızı takip edebilir veya destek almak için bize ulaşabilirsiniz.
            </p>
          </div>

          {/* Paper Airplane Image (positioned to the right) */}
          <div className="hidden md:block">
            <img
              src={plane}
              alt="Paper airplane"
              className="w-40 object-contain"
            />
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <div className="flex gap-4">
            {/* Social Media Icons */}
            <div className="bg-white p-8 rounded-lg flex items-center justify-center shadow-sm">
              <Facebook size={28} className="text-blue-600" />
            </div>

            <div className="bg-white p-8 rounded-lg flex items-center justify-center shadow-sm">
              <Instagram size={28} className="text-pink-600" />
            </div>

            <div className="bg-white p-8 rounded-lg flex items-center justify-center shadow-sm">
              <Twitter size={28} className="text-blue-400" />
            </div>

            <div className="bg-white p-8 rounded-lg flex items-center justify-center shadow-sm">
              <Youtube size={28} className="text-red-600" />
            </div>

            <div className="bg-white p-8 rounded-lg flex items-center justify-center shadow-sm">
              <Send size={28} className="text-gray-600" />
            </div>

            {/* Email Support - Wide Column */}
          </div>
          <div className="bg-white px-10 gap-3  rounded-lg shadow-sm flex items-center justify-center">
            <div>
              <AtSign size={28} className="text-pink-600" />
            </div>
            <div >
              <p className="text-gray-500 text-xs font-medium  leading-3 uppercase mb-1">
                E-MAIL ADRESIMIZ
              </p>
              <p className="text-gray-800 text-xl font-medium  leading-3">destek@onwin.com</p>
            </div>
          </div>
          <div className="bg-white px-10 gap-3  rounded-lg shadow-sm flex items-center justify-center">
            <div>
              <MessageCircleMore size={28} className="text-pink-600" />
            </div>
            <div >
              <p className="text-gray-500 text-xs font-medium leading-3">
              YARDIM MI LAZIM?
              </p>
              <p className="font-semibold text-gray-800 leading-3">CANLI DESTEK</p>
            <p className="text-yellow-500 text-xs leading-6">ONLINE</p>
            </div>
          </div>

          {/* Live Support - Wide Column */}
          {/* <div className="bg-white rounded-lg shadow-sm col-span-2 md:col-span-1 flex flex-col items-start justify-center">
            <p className="text-gray-500 text-xs uppercase mb-1">
              YARDIM MI LAZIM?
            </p>
            <p className="font-bold text-gray-800">CANLI DESTEK</p>
            <p className="text-yellow-500 text-sm">ONLINE</p>
          </div> */}
        </div>
        {/* Support Channels */}
      </div>
    </div>
  );
};

export default SocialIcons;
