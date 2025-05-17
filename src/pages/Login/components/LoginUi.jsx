import React, { useState } from 'react';
import registerbg from "../../../assets/registerbg.svg";
import { Link } from 'react-router-dom';
import { useSite } from '@/context/SiteContext';

const LoginUi = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { language } = useSite();

  return (
    <div className="w-full pt-10 h-screen flex justify-center bg-white relative overflow-hidden p-4">
      <img src={registerbg} className='w-full h-screen object-contain absolute top-0 hidden md:block' alt="" />

      <div className="w-full max-w-md z-10">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">
          {language === "turkish" ? "HOŞ GELDİNİZ" : "WELCOME"}
        </h1>
        <p className="text-center mb-6 text-gray-600">
          {language === "turkish" ? "Lütfen hesabınıza giriş yapınız." : "Please log into your account."}
        </p>

        <div>
          <div className="mb-4">
            <input
              type="text"
              placeholder={language === "turkish" ? "Kullanıcı adı veya e-posta adresi" : "Username or email address"}
              className="w-full p-4 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-2 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={language === "turkish" ? "Parola" : "Password"}
              className="w-full p-4 border border-gray-300 rounded"
            />
            <button
              type="button"
              className="absolute right-3 top-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    showPassword
                      ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  }
                />
              </svg>
            </button>
          </div>

          <div className="mb-4">
            <a href="#" className="text-gray-600 text-sm hover:text-purple-600">
              {language === "turkish" ? "Parolanızı mı unuttunuz?" : "Forgot your password?"}
            </a>
          </div>

          <div className="mb-8 text-base">
            <p>
              {language === "turkish"
                ? "Google'da gördüğünüz yanında reklam yazılı siteler sahte sitelerdir lütfen tıklamayınız. Güncel giriş adresimiz"
                : "Sites labeled as ads on Google are fake, please do not click. Our current login address is"}
            </p>
            <p className="font-bold">
              onwin2401<span className="text-red-700">.com</span>
            </p>
            <span className="text-base">
              {language === "turkish"
                ? "Adres değişikliğinden etkilenmemek için"
                : "To avoid being affected by address changes,"}
            </span>
            <p className="text-base">
              <a href="https://cutt.ly/onwinde" className="text-blue-500 font-bold">
                https://cutt.ly/onwinde
              </a>{" "}
              {language === "turkish"
                ? "adresini tarayıcınıza veya not defterinize kayıt ediniz bu link sizi her zaman güncel giriş adresimize yönlendirecektir."
                : "please save this link in your browser or notepad. This link will always direct you to our current login address."}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#C625AC] text-white py-4 rounded font-medium transition"
            onClick={(e) => e.preventDefault()}
          >
            {language === "turkish" ? "GİRİŞ YAP" : "LOG IN"}
          </button>

          <div className="mt-6 text-center">
            <span className="text-gray-600">{language === "turkish" ? "Üye değil misiniz? " : "Not a member? "}</span>
            <Link to="/register" className="text-purple-600 font-bold">
              {language === "turkish" ? "HEMEN ÜYE OL" : "REGISTER NOW"}
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </div>
    </div>
  );
};

export default LoginUi;
