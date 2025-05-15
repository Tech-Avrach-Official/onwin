import React, { useState } from 'react';
import { Share2 ,Trash,Settings} from 'lucide-react';
import BettingCard from './card';


const SportRightSide = () => {
    const [activeTab, setActiveTab] = useState('Tekli');
    const tabs = ['Tekli', 'Kombine', 'Sistem'];

    return (
        <div className='rightSideCards hidden flex flex-col'>
            {/* tab section for rightside */}
            <div className=' flex flex-wrap justify-between px-8 py-1 mt-2 rounded-lg bg-white shadow-2xl z-5'>
                {tabs.map((tab) => (
                    <span
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`cursor-pointer px-3 py-1 rounded ${activeTab === tab ? 'border-b-4 border-gray-900' : 'text-gray-700'
                            }`}
                    >
                        {tab}
                    </span>
                ))}
            </div>

            {/* section two for second container */}
            <div className='flex flex-wrap gap-3  py-2'>
                <h2 className='text-xs'>Seçimler (1)</h2>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                    <Share2 size={16} />
                </button>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                    <Trash size={16} />
                    <span className='text-xs'>Hepsini sil</span>
                </button>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                    <Settings size={16} />
                    <span className='text-xs'>Bahis ayarlan</span>
                </button>
            </div>
            <BettingCard/>

        </div>
    );
};

export default SportRightSide;
