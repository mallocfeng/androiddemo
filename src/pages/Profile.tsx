import React from 'react';

export default function Profile() {
  return (
    <main className="pt-20 pb-32 px-4 max-w-4xl mx-auto space-y-6">
      {/* User Profile Header Section */}
      <section className="relative overflow-hidden rounded-xl gov-header-gradient p-8 shadow-lg border-b-4 border-gov-gold/30">
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[140px] text-white" data-icon="shield">shield</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-gov-gold/50 bg-white/20 overflow-hidden shadow-inner">
              <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWmZkPrGfZcpVOCqnQrsYzjiSpEFUIGHEXX6nVUgA9XhIGlDKScK9dMSYIFQtqg1fZKOB7hcvCO5ZVsSzCF4ZdN8AF_ccBPLCtAQ6ujk7uEIWxjyS1dKnKuCRJKQVObNJiDcp5H6-Ma7ZAxYy1NVZMdY0zWiy4vilLnpmdb5TzY_LevtNVl8X39XqlBOp64hBDrgGuwFj8_xumv_URxCUFj2p6GX8_de2DfqRhPZrJ40rfYOPCQfI12SM40VIeuyIw_Fgs7DmhJZI"/>
            </div>
            <div className="absolute bottom-0 right-0 bg-gov-gold text-primary w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              <span className="material-symbols-outlined text-xs font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-headline font-extrabold tracking-tight text-white">张建设</h1>
            <p className="text-white/80 text-sm mt-1 uppercase tracking-widest font-label font-medium">公民身份号码：1101********0012</p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold text-gov-gold flex items-center gap-1 border border-gov-gold/30">
                <span className="material-symbols-outlined text-[14px]">badge</span>
                已实名认证
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold text-gov-gold flex items-center gap-1 border border-gov-gold/30">
                <span className="material-symbols-outlined text-[14px]">medical_services</span>
                医保电子凭证
              </span>
            </div>
          </div>
          <div className="md:ml-auto">
            <button className="bg-gov-gold text-primary hover:bg-yellow-400 px-6 py-2 rounded-md font-label text-sm font-black shadow-md active:scale-95 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">edit</span>
              编辑资料
            </button>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg flex flex-col justify-between h-32 shadow-sm border-t-2 border-primary">
          <span className="material-symbols-outlined text-primary text-3xl">pending_actions</span>
          <div>
            <span className="block text-2xl font-bold text-primary">3</span>
            <span className="text-xs text-on-surface-variant font-label uppercase tracking-wider font-bold">待办事项</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg flex flex-col justify-between h-32 shadow-sm border-t-2 border-gov-gold">
          <span className="material-symbols-outlined text-gov-gold text-3xl">folder_shared</span>
          <div>
            <span className="block text-2xl font-bold text-on-surface">12</span>
            <span className="text-xs text-on-surface-variant font-label uppercase tracking-wider font-bold">我的电子证照</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg flex flex-col justify-between h-32 shadow-sm border-t-2 border-primary">
          <span className="material-symbols-outlined text-primary text-3xl">history</span>
          <div>
            <span className="block text-2xl font-bold text-on-surface">28</span>
            <span className="text-xs text-on-surface-variant font-label uppercase tracking-wider font-bold">办事记录</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg flex flex-col justify-between h-32 shadow-sm border-t-2 border-gov-gold">
          <span className="material-symbols-outlined text-gov-gold text-3xl">star</span>
          <div>
            <span className="block text-2xl font-bold text-on-surface">15</span>
            <span className="text-xs text-on-surface-variant font-label uppercase tracking-wider font-bold">我的收藏</span>
          </div>
        </div>
      </div>

      {/* My Applications Section */}
      <section className="space-y-4">
        <div className="flex justify-between items-center px-2">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-primary rounded-full"></div>
            <h2 className="text-lg font-headline font-black text-on-surface">我的办件</h2>
          </div>
          <span className="text-xs text-primary font-bold tracking-widest uppercase cursor-pointer flex items-center">查看全部 <span className="material-symbols-outlined text-xs">chevron_right</span></span>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-6 rounded-lg flex items-center justify-between border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="bg-red-50 p-3 rounded-full text-primary border border-primary/10">
                <span className="material-symbols-outlined">description</span>
              </div>
              <div>
                <h3 className="font-bold text-on-surface">申领中华人民共和国社保卡</h3>
                <p className="text-xs text-on-surface-variant mt-1">流水号：2023102400582</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold border border-green-200">已办结</span>
              <span className="text-[10px] text-zinc-400 mt-2">2023-11-01</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg flex items-center justify-between border-l-4 border-gov-gold shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-50 p-3 rounded-full text-yellow-600 border border-gov-gold/20">
                <span className="material-symbols-outlined">home_repair_service</span>
              </div>
              <div>
                <h3 className="font-bold text-on-surface">不动产登记电子证明查询</h3>
                <p className="text-xs text-on-surface-variant mt-1">流水号：2023111200194</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-[10px] font-bold border border-yellow-200">审核中</span>
              <span className="text-[10px] text-zinc-400 mt-2">2023-11-12</span>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Layout: Favorites & Settings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3 px-2">
            <div className="w-1.5 h-6 bg-primary rounded-full"></div>
            <h2 className="text-lg font-headline font-black text-on-surface">政策收藏</h2>
          </div>
          <div className="bg-white rounded-xl divide-y divide-zinc-100 overflow-hidden shadow-sm">
            <div className="p-5 flex gap-4 items-start hover:bg-zinc-50 transition-colors">
              <div className="flex-1">
                <h4 className="font-bold text-on-surface leading-snug group-hover:text-primary transition-colors">国务院办公厅关于印发《政务服务电子文件归档管理办法》的通知</h4>
                <p className="text-[11px] text-on-surface-variant mt-2 font-medium">发布日期：2023-10-15</p>
              </div>
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
            </div>
            <div className="p-5 flex gap-4 items-start hover:bg-zinc-50 transition-colors">
              <div className="flex-1">
                <h4 className="font-bold text-on-surface leading-snug group-hover:text-primary transition-colors">关于做好2024年度城乡居民基本医疗保险集中参保缴费工作的通知</h4>
                <p className="text-[11px] text-on-surface-variant mt-2 font-medium">发布日期：2023-11-08</p>
              </div>
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 px-2">
            <div className="w-1.5 h-6 bg-primary rounded-full"></div>
            <h2 className="text-lg font-headline font-black text-on-surface">设置中心</h2>
          </div>
          <div className="bg-white rounded-xl overflow-hidden p-2 shadow-sm border border-zinc-100">
            <div className="flex items-center gap-3 p-4 hover:bg-zinc-50 transition-all rounded-lg cursor-pointer group">
              <span className="material-symbols-outlined text-primary">notifications_active</span>
              <span className="flex-1 text-sm font-bold">通知推送</span>
              <span className="material-symbols-outlined text-zinc-300">chevron_right</span>
            </div>
            <div className="flex items-center gap-3 p-4 hover:bg-zinc-50 transition-all rounded-lg cursor-pointer group border-t border-zinc-50">
              <span className="material-symbols-outlined text-primary">security</span>
              <span className="flex-1 text-sm font-bold">账户安全</span>
              <span className="material-symbols-outlined text-zinc-300">chevron_right</span>
            </div>
            <div className="flex items-center gap-3 p-4 hover:bg-zinc-50 transition-all rounded-lg cursor-pointer group border-t border-zinc-50">
              <span className="material-symbols-outlined text-primary">settings_accessibility</span>
              <span className="flex-1 text-sm font-bold">通用设置</span>
              <span className="material-symbols-outlined text-zinc-300">chevron_right</span>
            </div>
            <div className="mt-4 p-4">
              <button className="w-full py-2.5 bg-primary text-white rounded font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-colors shadow-sm">
                退出当前账号
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
