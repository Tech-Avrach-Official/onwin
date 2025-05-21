import React, { useState, useEffect } from 'react';
import Navbar from '@/component/Navbar';
import SubNavbar from '@/component/SubNavbar';
import { StickLoader } from '@/component/StickLoader';
import Modal from './components/Modal'; // Adjust path if needed
import { useLocation } from 'react-router-dom';

const GameScreen = () => {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const location = useLocation();


  const params = new URLSearchParams(location.search);
  const gameName = params.get('game');


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const timer = setTimeout(() => {
      setLoading(false);
      setModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
      <SubNavbar />
      <div className="flex flex-col h-screen bg-black relative">
        <div className="flex h-full w-full justify-center items-center">
          {loading ? (
            <StickLoader />
          ) : (
            <h1 className="text-4xl font-bold text-white">{gameName}</h1>
          )}
        </div>
        {modal && <Modal onClose={() => setModal(false)} />}
      </div>
    </div>
  );
};

export default GameScreen;
