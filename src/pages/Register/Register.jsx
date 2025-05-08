// import React, { useState } from 'react';
// import registerbg from "../../assets/registerbg.svg";

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
//   return (
//     <div className="w-full h-full flex items-center justify-center bg-gray-50 relative overflow-hidden"
//     >
//       {/* Decorative diagonal stripes */}

      
//       {/* Form Container */}
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 z-10">
//         <h1 className="text-2xl font-bold text-center mb-8">HOŞ GELDİNİZ.</h1>
//         <p className="text-sm text-center mb-6">Aşağıdaki formu doldurarak hesabınızı oluşturmaya başlayabilirsiniz.</p>
        
//         <form>
//           <div className="mb-4">
//             <input 
//               type="text"
//               placeholder="Kullanıcı adı"
//               className="w-full p-3 border border-gray-300 rounded"
//             />
//           </div>
          
//           <div className="mb-2">
//             <input 
//               type="email"
//               placeholder="E-posta"
//               className="w-full p-3 border border-gray-300 rounded"
//             />
//           </div>
          
//           <p className="text-xs mb-4">Hesabınızı aktif edebilmeniz için lütfen Email bilgisi girdiğinizden emin olunuz ve emailinize gelen linke tıklayınız onaylayınız.</p>
          
//           <div className="mb-4 relative">
//             <input 
//               type={showPassword ? "text" : "password"}
//               placeholder="Parola"
//               className="w-full p-3 border border-gray-300 rounded"
//             />
//             <button 
//               type="button"
//               className="absolute right-3 top-3" 
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showPassword ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} />
//               </svg>
//             </button>
//           </div>
          
//           <div className="mb-4 relative">
//             <input 
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Yeni Parolayı Onayla"
//               className="w-full p-3 border border-gray-300 rounded"
//             />
//             <button 
//               type="button"
//               className="absolute right-3 top-3" 
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showConfirmPassword ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} />
//               </svg>
//             </button>
//           </div>
          
//           <div className="mb-4">
//             <div className="flex border border-gray-300 rounded">
//               <span className="bg-gray-100 p-3 text-gray-500 rounded-l border-r">+90</span>
//               <input 
//                 type="tel"
//                 placeholder=""
//                 className="w-full p-3 rounded-r"
//               />
//             </div>
//           </div>
          
//           <p className="text-xs mb-4">Hesabınızı aktif edebilmeniz için lütfen telefon numaranızın girdiğini olduğundan emin olunuz ve telefonunuza gelen kod ile hesabınızı onaylayınız.</p>
          
//           <div className="mb-4">
//             <select className="w-full p-3 border border-gray-300 rounded text-gray-500">
//               <option>Cinsiyet</option>
//               <option>Erkek</option>
//               <option>Kadın</option>
//             </select>
//           </div>
          
//           <div className="mb-4">
//             <input 
//               type="text"
//               placeholder="Ad"
//               className="w-full p-3 border border-gray-300 rounded"
//             />
//           </div>
          
//           <div className="mb-4">
//             <input 
//               type="text"
//               placeholder="Soyad"
//               className="w-full p-3 border border-gray-300 rounded"
//             />
//           </div>
          
//           <div className="mb-4 flex space-x-2">
//             <input 
//               type="text"
//               placeholder="Gün"
//               className="w-1/3 p-3 border border-gray-300 rounded"
//             />
//             <input 
//               type="text"
//               placeholder="Ay"
//               className="w-1/3 p-3 border border-gray-300 rounded"
//             />
//             <input 
//               type="text"
//               placeholder="Yıl"
//               className="w-1/3 p-3 border border-gray-300 rounded"
//             />
//           </div>
          
//           <div className="mb-6">
//             <textarea 
//               placeholder="Adres"
//               className="w-full p-3 border border-gray-300 rounded resize-none h-24"
//             ></textarea>
//           </div>
          
//           <div className="mb-2 flex items-start">
//             <input type="checkbox" className="mt-1 mr-2" />
//             <p className="text-xs">Bonus ve Sürpriz Hediyelerle ilgili Bilgi Mail ve SMS almak istiyorum.</p>
//           </div>
          
//           <div className="mb-6 flex items-start">
//             <input type="checkbox" className="mt-1 mr-2" />
//             <p className="text-xs">Kullanıcı Sözleşmesini okudum ve kabul ediyorum.</p>
//           </div>
          
//           <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded font-medium hover:bg-purple-700 transition">
//             HESAP OLUŞTUR
//           </button>
//         </form>
//       </div>
      
//       {/* Chat button */}
//       <div className="fixed bottom-6 right-6 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import registerbg from "../../assets/registerbg.svg";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  return (
    <div className="w-full h-full pb-20 flex items-center justify-center relative overflow-hidden"
    >
      <img src={registerbg} className='w-full h-screen object-contain  absolute top-0' alt="" />

       <div className="w-full max-w-lg bg-white rounded-lg p-6 z-10">
        <h1 className="text-xl font-bold text-center mb-5">HOŞ GELDİNİZ.</h1>
         <p className="text-sm text-gray-500 text-center mb-6">Aşağıdaki formu doldurarak hesabınızı oluşturmaya <br /> başlayabilirsiniz.</p>
        
         <form>
           <div className="mb-4">
             <input 
              type="text"
              placeholder="Kullanıcı adı"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          
          <div className="mb-2">
            <input 
              type="email"
              placeholder="E-posta"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          
          <p className="text-xs mb-4">Hesabınızı aktif edebilmeniz için lütfen Email bilgisi girdiğinizden emin olunuz ve emailinize gelen linke tıklayınız onaylayınız.</p>
          
          <div className="mb-4 relative">
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="Parola"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <button 
              type="button"
              className="absolute right-3 top-3" 
              onClick={() => setShowPassword(!showPassword)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showPassword ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} />
              </svg>
            </button>
          </div>
          
          <div className="mb-4 relative">
            <input 
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Yeni Parolayı Onayla"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <button 
              type="button"
              className="absolute right-3 top-3" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showConfirmPassword ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} />
              </svg>
            </button>
          </div>
          
          <div className="mb-4">
            <div className="flex border border-gray-300 rounded">
              <span className="bg-gray-100 p-3 text-gray-500 rounded-l border-r">+90</span>
              <input 
                type="tel"
                placeholder=""
                className="w-full p-3 rounded-r"
              />
            </div>
          </div>
          
          <p className="text-xs mb-4">Hesabınızı aktif edebilmeniz için lütfen telefon numaranızın girdiğini olduğundan emin olunuz ve telefonunuza gelen kod ile hesabınızı onaylayınız.</p>
          
          <div className="mb-4">
            <select className="w-full p-3 border border-gray-300 rounded text-gray-500">
              <option>Cinsiyet</option>
              <option>Erkek</option>
              <option>Kadın</option>
            </select>
          </div>
          
          <div className="mb-4">
            <input 
              type="text"
              placeholder="Ad"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          
          <div className="mb-4">
            <input 
              type="text"
              placeholder="Soyad"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          
          <div className="mb-4 flex space-x-2">
            <input 
              type="text"
              placeholder="Gün"
              className="w-1/3 p-3 border border-gray-300 rounded"
            />
            <input 
              type="text"
              placeholder="Ay"
              className="w-1/3 p-3 border border-gray-300 rounded"
            />
            <input 
              type="text"
              placeholder="Yıl"
              className="w-1/3 p-3 border border-gray-300 rounded"
            />
          </div>
          
          <div className="mb-6">
            <textarea 
              placeholder="Adres"
              className="w-full p-3 border border-gray-300 rounded resize-none h-24"
            ></textarea>
          </div>
          
          <div className="mb-2 flex items-start">
            <input type="checkbox" className="mt-1 mr-2" />
            <p className="text-xs">Bonus ve Sürpriz Hediyelerle ilgili Bilgi Mail ve SMS almak istiyorum.</p>
          </div>
          
          <div className="mb-6 flex items-start">
            <input type="checkbox" className="mt-1 mr-2" />
            <p className="text-xs">Kullanıcı Sözleşmesini okudum ve kabul ediyorum.</p>
          </div>
          
          <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded font-medium hover:bg-purple-700 transition">
            HESAP OLUŞTUR
          </button>
        </form>
      </div>
      
      {/* Chat button */}
      <div className="fixed bottom-6 right-6 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
    </div>
  );
};

export default Register;