import React from 'react';

export default function Home() {
  return (
    <main className="py-6 px-6 max-w-5xl mx-auto space-y-10">
      {/* Search Anchor Section */}
      <section className="relative">
        <div className="flex flex-col gap-1 mb-6">
          <span className="text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-primary">Official Information Portal</span>
          <h2 className="text-3xl font-black tracking-tight text-on-surface border-l-4 border-primary pl-4">搜索政务服务</h2>
        </div>
        <div className="relative flex items-center bg-white rounded-lg px-4 py-4 shadow-md focus-within:border-b-2 focus-within:border-[#fcd400] transition-all group border border-zinc-200">
          <span className="material-symbols-outlined text-primary mr-3">search</span>
          <input className="bg-transparent border-none focus:outline-none focus:ring-0 w-full text-on-surface placeholder-on-surface-variant/60" placeholder="搜索政策、办事指南或服务..." type="text"/>
          <button className="bg-primary text-white px-6 py-2.5 rounded-md text-sm font-bold shadow-sm active:scale-95 transition-transform whitespace-nowrap min-w-[80px]">搜索</button>
        </div>
      </section>

      {/* Featured News Carousel */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 relative group overflow-hidden rounded-xl h-[400px] shadow-xl border-2 border-primary/10">
          <img alt="National Development Meeting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqVs_ebvN02ugrPdSFuaKO5g0Z-pzUynuLYN2k-770OOohMOWq85SSA9h7FV1Y9W7gOCfkc5BXTAemmyVC-3sWtaA4aafuTJlLMbH3A3d8-vWdNwhDUQb28CuNJ_397a4LPDjaHYvtIZKIt4xd32E-3Twb1qylpaaIKWyo9GMtkz2J1Blit1rLH1TOXvMk43avhoZ2h2K2c21t197qBlExl1-BBdjULxf6zVJBCkPJOloEbpDDPcROPKVNpbLC4BzuxblDvD9Ulhk"/>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent"></div>
          <div className="absolute bottom-0 p-8 space-y-3">
            <span className="inline-block px-3 py-1 bg-[#fcd400] text-primary text-[10px] font-black tracking-widest uppercase rounded-sm">专题报道</span>
            <h3 className="text-2xl font-black text-white leading-tight drop-shadow-md">坚持以人民为中心的发展思想 续写经济快速发展</h3>
            <p className="text-white/80 text-sm line-clamp-2">深入贯彻落实新发展理念，推动高质量发展迈出坚实步伐...</p>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-xl border-t-4 border-primary shadow-lg flex flex-col justify-between h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-6xl text-primary">campaign</span>
            </div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary font-bold text-lg">campaign</span>
                <span className="text-[0.6875rem] font-black uppercase tracking-wider text-primary">通知公告</span>
              </div>
              <ul className="space-y-4">
                <li className="group cursor-pointer border-b border-zinc-100 pb-3 last:border-0">
                  <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2">关于进一步优化营商环境的指导意见</p>
                  <span className="text-[10px] text-on-surface-variant font-medium">2024.05.20</span>
                </li>
                <li className="group cursor-pointer border-b border-zinc-100 pb-3 last:border-0">
                  <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2">2024年政务公开工作要点发布</p>
                  <span className="text-[10px] text-on-surface-variant font-medium">2024.05.18</span>
                </li>
              </ul>
            </div>
            <button className="mt-4 text-xs font-black text-primary flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-wider">
              查看更多 <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Service Bento Grid */}
      <section>
        <div className="flex items-baseline justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-primary"></div>
            <h2 className="text-2xl font-black tracking-tight text-on-surface">政策解读</h2>
          </div>
          <div className="h-[1px] flex-1 mx-6 bg-primary/10"></div>
          <span className="text-[11px] font-black text-primary uppercase tracking-widest">Policy Interpretation</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: 'menu_book', title: '法律法规', desc: '权威解读最新颁布的法律法规内容', bg: 'authority-gradient', iconColor: 'text-white' },
            { icon: 'visibility', title: '政务公开', desc: '让权力在阳光下运行，增强透明度', bg: 'bg-zinc-50', iconColor: 'text-primary' },
            { icon: 'info', title: '办事指南', desc: '详细的服务流程与申请材料说明', bg: 'bg-zinc-50', iconColor: 'text-primary' },
            { icon: 'contact_support', title: '联系我们', desc: '在线咨询、投诉建议与反馈渠道', bg: 'bg-zinc-50', iconColor: 'text-primary' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md border border-zinc-100 hover:border-primary/30 transition-all group cursor-pointer relative overflow-hidden text-center flex flex-col items-center">
              <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mb-4 shadow-lg ring-4 ring-primary/5 border-2 border-primary/20`}>
                <span className={`material-symbols-outlined ${item.iconColor} text-2xl`}>{item.icon}</span>
              </div>
              <h4 className="font-black text-on-surface text-sm mb-1 group-hover:text-primary">{item.title}</h4>
              <p className="text-[10px] text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vertical Content List */}
      <section className="space-y-6">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase">Latest Updates</span>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-primary"></div>
            <h2 className="text-2xl font-black tracking-tight text-on-surface">最近更新</h2>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl flex gap-6 items-center group cursor-pointer hover:shadow-lg border border-zinc-100 transition-all">
            <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border border-zinc-200">
              <img alt="Economy report" className="w-full h-full object-cover transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhSdll2wEOc1f5Jpr8GndBzNx0wICZxyiVgtdds-ueKy8enelt86wzJVyNhEUe5kptdOXnjFqMCIOHD-FLpU6j-eZaVKh8BRzt6iEwUI3D44wxKqNdAFr5_5hP1g-_4u0flFIQRWOAMWQI95LWpcRVJ1b1w9ng7PaiYFgOMcJMfoV1nt5Mh3PMJsgCqwuzLMWZL3SqWllV3lYqhPb_9thGDT-oErRGw2nqeYCxMGMhSZEl1DVy_eOOqG8ifbAdraOJBV6vLGxx_QM"/>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-primary px-2 py-0.5 bg-primary/5 rounded uppercase tracking-widest">经济发展</span>
                <span className="text-[10px] text-on-surface-variant font-medium">2小时前</span>
              </div>
              <h4 className="text-lg font-black text-on-surface leading-snug group-hover:text-primary transition-colors">国务院印发《关于加强数字政府建设的指导意见》</h4>
              <p className="text-sm text-on-surface-variant line-clamp-1">全面推进政府履职数字化转型，提升治理现代化水平...</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
