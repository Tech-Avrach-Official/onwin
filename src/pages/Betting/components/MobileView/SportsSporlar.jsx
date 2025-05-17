import { X, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const sportsPopular = ['Futbol', 'Basketbol', 'Tenis'];
const sportsAZ = [
  'Amerikan Futbolu', 'Avustralya Futbolu', 'Badminton', 'Beyzbol', 'Basketbol',
  'Plaj Futbolu', 'Plaj Voleybolu', 'Kriket', 'Dart', 'Çim Hokeyi',
  'Florbol', 'Futsal', 'Hentbol', 'Buz Hokeyi'
];

export default function SpprtsSporlas() {
const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="bg-gray-100 z-50 md:hidden overflow-y-auto px-4">
      <div className="flex items-center justify-between pt-4">
        <h2 className="text-xs font-semibold">Tüm Sporlar</h2>
        <button onClick={handleGoBack} >
          <X className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <div className="flex flex-col gap-3 py-4">
        <button className="bg-gradient-to-b from-[#4a3870] to-[#2b1c4b] text-white rounded-sm py-2 font-semibold text-sm">
          Canlı Bahis
        </button>
        <button className="bg-gradient-to-b from-[#4a3870] to-[#2b1c4b] text-white rounded-sm py-2 font-semibold text-sm">
          Canlı Yayın Öncesi Bahisler
        </button>
        <button className="bg-gradient-to-b from-[#4a3870] to-[#2b1c4b] text-white rounded-sm py-2 font-semibold text-sm">
          E-spor bahislerine git
        </button>
      </div>

      <div className="mt-4">
        <Section title="Popüler Sporlar" items={sportsPopular} />
        <Section title="A-Z Sporlar" items={sportsAZ} />
      </div>

      <button className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-fuchsia-600 flex items-center justify-center shadow-lg">
        <MessageCircle className="text-white w-5 h-5" />
      </button>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div className="">
      <div className="bg-[#4a3870] rounded-t-sm text-white px-4 py-2 text-xs">{title}</div>
      <ul className="divide-y text-sm bg-white">
        {items.map((item, i) => (
          <li key={i} className="px-4 py-1 text-xs">{item}</li>
        ))}
      </ul>
    </div>
  );
}
