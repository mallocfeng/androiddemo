import React from 'react';

export default function Services() {
  return (
    <main className="py-6 space-y-8">
      {/* Search & Authority Banner */}
      <section className="authority-gradient px-6 py-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-10 -translate-y-10">
          <span className="material-symbols-outlined text-[180px] text-white">account_balance</span>
        </div>
        <div className="max-w-5xl mx-auto relative z-10 space-y-6">
          <div className="space-y-1">
            <p className="text-white/80 font-bold tracking-[0.2em] text-[10px] uppercase">National Government Service Portal</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white leading-tight">一网通办<br/><span className="gold-accent">服务惠民</span></h2>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden group focus-within:ring-2 ring-white/30 transition-all max-w-2xl w-full p-1">
            <span className="material-symbols-outlined pl-3 pr-2 text-white/60 flex-shrink-0">search</span>
            <input className="bg-transparent border-none focus:outline-none w-full text-sm font-medium h-10 text-white placeholder:text-white/50 py-0" placeholder="搜索政务服务、政策文件、办事流程..." type="text"/>
            <button className="bg-white/20 hover:bg-white/30 text-white px-5 h-10 rounded-md font-bold text-sm whitespace-nowrap transition-colors flex items-center justify-center gap-1 shrink-0 ml-2">
              搜索
            </button>
          </div>
          <div className="flex gap-4 text-[10px] text-white/70 font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs gold-accent" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> 权威发布</span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs gold-accent" style={{ fontVariationSettings: "'FILL' 1" }}>security</span> 安全保障</span>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-8">
        {/* Service Grid */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-on-surface flex items-center gap-2">
                <span className="w-1.5 h-5 bg-primary rounded-full"></span>
                服务分类
              </h3>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Categories</span>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-4 gap-3">
            {[
              { icon: 'security', label: '社会保障' },
              { icon: 'payments', label: '税务办理' },
              { icon: 'health_and_safety', label: '医疗卫生' },
              { icon: 'school', label: '教育服务' },
              { icon: 'gavel', label: '法律援助' },
              { icon: 'work', label: '就业创业' },
              { icon: 'home_work', label: '住房保障' },
              { icon: 'directions_car', label: '交通运输' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl flex flex-col items-center justify-center text-center gap-3 shadow-sm border border-zinc-100 transition-all active:scale-95">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <span className="text-xs font-bold text-zinc-700">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Hot Services Section */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-on-surface flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#d4af37] rounded-full"></span>
                热门政务
              </h3>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Frequent</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 bg-white p-6 rounded-xl border-l-[6px] border-primary flex items-center justify-between shadow-md group">
              <div className="space-y-1">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  健康码申领
                  <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full">官方推荐</span>
                </h4>
                <p className="text-xs text-zinc-500">快速获取个人健康证明及通行码</p>
              </div>
              <button className="authority-gradient text-white px-6 py-2.5 rounded font-bold text-sm shadow-lg shadow-red-200 active:scale-95 transition-all">立即办理</button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary bg-red-50 p-2 rounded-lg">description</span>
                <h4 className="font-bold text-sm">办事指南</h4>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">查阅最新政策文件及各类线下窗口办事流程说明。</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-[#d4af37] bg-yellow-50 p-2 rounded-lg">verified</span>
                <span className="text-[10px] font-bold text-primary px-2 py-1 bg-red-50 rounded">已认证</span>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-sm">实名认证</h4>
                <div className="w-full bg-zinc-100 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div className="bg-[#d4af37] w-3/4 h-full"></div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 bg-white p-6 rounded-xl border-l-[6px] border-[#d4af37] flex items-center justify-between shadow-md">
              <div className="space-y-1">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  电子证照库
                  <span className="bg-yellow-100 text-[#d4af37] text-[10px] px-2 py-0.5 rounded-full">我的资料</span>
                </h4>
                <p className="text-xs text-zinc-500">统一管理身份证、行驶证、营业执照等</p>
              </div>
              <span className="material-symbols-outlined text-primary font-bold">chevron_right</span>
            </div>
          </div>
        </section>

        {/* Official Seal / Footnote */}
        <div className="flex flex-col items-center justify-center py-12 opacity-30 gap-3">
          <span className="material-symbols-outlined text-7xl text-primary">account_balance</span>
          <div className="text-center">
            <p className="text-[12px] font-black tracking-[0.4em] text-primary">国家政务服务平台</p>
            <p className="text-[8px] uppercase font-bold tracking-[0.2em] text-zinc-600 mt-1">National Government Service Portal</p>
          </div>
        </div>
      </div>
    </main>
  );
}
