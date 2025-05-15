import { useState } from 'react';

export default function BetSlip() {
    const [betAmount, setBetAmount] = useState(0);
    const [keepBets, setKeepBets] = useState(true);

    const numberOfBets = 1;
    const totalBet = betAmount * numberOfBets;
    const possibleWin = totalBet * 2; // Example multiplier

    const increaseBet = () => setBetAmount(prev => +(prev + 1).toFixed(2));
    const decreaseBet = () => setBetAmount(prev => (prev > 0 ? +(prev - 1).toFixed(2) : 0));

    return (
        <div className="border border-gray-200 shadow p-4 rounded bg-white mt-2">
            <div className='flex justify-between'>
                <div className=''>
                    <div className="text-sm font-semibold text-gray-700">Kupon Başına Tutar</div>

                    <div className="text-sm text-gray-500 mt-1">1 Bahisler</div>
                </div>

                <div className="flex items-center mt-2">
                    <button
                        onClick={decreaseBet}
                        className="px-3 py-1 border border-gray-300 rounded text-gray-500 disabled:opacity-50"
                    >
                        -
                    </button>
                    <div className="px-2 py-1 border border-gray-300 rounded bg-gray-100 text-gray-500">
                        {betAmount.toFixed(2)}
                    </div>
                    <button
                        onClick={increaseBet}
                        className="px-3 py-1 border border-gray-300 rounded text-gray-500"
                    >
                        +
                    </button>
                </div>
            </div>


            <div className="mt-3 text-sm text-gray-500">
                Toplam bahis tutarı: <span className="text-black">₺ {totalBet.toFixed(2)}</span>
            </div>

            <div className="mt-1 text-sm font-bold text-gray-800">
                Olası kazanç: <span className="text-black">₺ {possibleWin.toFixed(2)}</span>
            </div>

            <div className="mt-3 flex items-center">
                <input
                    type="checkbox"
                    checked={keepBets}
                    onChange={() => setKeepBets(!keepBets)}
                    className="mr-2 accent-purple-600"
                />
                <label className="text-sm text-gray-700">Bahislerimi Tut</label>
            </div>

            <button className="mt-4 w-full py-2 text-white font-bold rounded bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 transition">
                BAHİS İÇİN GİRİŞ YAPIN
            </button>
        </div>
    );
}
