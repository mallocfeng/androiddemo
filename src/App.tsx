import React, { useState } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Feedback from './pages/Feedback';
import Profile from './pages/Profile';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'services': return <Services />;
      case 'feedback': return <Feedback />;
      case 'profile': return <Profile />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-surface pb-16">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-primary/10 shadow-sm">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-2xl">account_balance</span>
            <h1 className="font-headline tracking-tight text-lg font-bold">国家政务服务平台</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-zinc-500 hover:bg-zinc-50 transition-colors p-2 rounded-full">search</button>
            <button className="material-symbols-outlined text-zinc-500 hover:bg-zinc-50 transition-colors p-2 rounded-full">notifications</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full z-50 pb-safe bg-white/95 backdrop-blur-md border-t border-zinc-200 shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center h-16 w-full px-4 max-w-md mx-auto">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center justify-center w-16 transition-all duration-200 active:scale-95 ${activeTab === 'home' ? 'text-primary font-bold' : 'text-zinc-400 hover:text-primary'}`}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: activeTab === 'home' ? "'FILL' 1" : "'FILL' 0" }}>home</span>
            <span className="font-label text-[10px] font-bold tracking-wide mt-1">首页</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('services')}
            className={`flex flex-col items-center justify-center w-16 transition-all duration-200 active:scale-95 ${activeTab === 'services' ? 'text-primary font-bold' : 'text-zinc-400 hover:text-primary'}`}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: activeTab === 'services' ? "'FILL' 1" : "'FILL' 0" }}>apps</span>
            <span className="font-label text-[10px] font-bold tracking-wide mt-1">服务</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('feedback')}
            className={`flex flex-col items-center justify-center w-16 transition-all duration-200 active:scale-95 ${activeTab === 'feedback' ? 'text-primary font-bold' : 'text-zinc-400 hover:text-primary'}`}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: activeTab === 'feedback' ? "'FILL' 1" : "'FILL' 0" }}>chat_bubble</span>
            <span className="font-label text-[10px] font-bold tracking-wide mt-1">反馈</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center justify-center w-16 transition-all duration-200 active:scale-95 ${activeTab === 'profile' ? 'text-primary font-bold' : 'text-zinc-400 hover:text-primary'}`}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: activeTab === 'profile' ? "'FILL' 1" : "'FILL' 0" }}>person</span>
            <span className="font-label text-[10px] font-bold tracking-wide mt-1">我的</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
