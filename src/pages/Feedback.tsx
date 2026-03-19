import React from 'react';

export default function Feedback() {
  return (
    <main className="py-6 px-6 max-w-7xl mx-auto">
      {/* Authority Header */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl border-l-8 border-primary pl-6">
            <span className="text-[0.6875rem] font-black uppercase tracking-[0.2em] text-primary mb-1 block">Civic Engagement Portal</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface mb-4">互动反馈</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed font-medium">您的声音，是我们进步的动力。通过以下渠道向政府各部门提出建议、投诉或咨询，共同建设更美好的公共服务。</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-red-50 p-5 rounded-sm border-l-4 border-primary shadow-sm">
              <p className="text-xs font-black text-red-800 uppercase tracking-widest mb-1">平均回复时效</p>
              <p className="text-3xl font-black text-primary">2.4 <span className="text-base font-bold">个工作日</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Feedback Channels */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white p-8 flex flex-col justify-between group cursor-pointer border-t-4 border-primary shadow-sm hover:shadow-xl transition-all duration-300">
          <div>
            <div className="w-14 h-14 authority-gradient rounded-sm flex items-center justify-center mb-6 shadow-lg">
              <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
            </div>
            <h3 className="text-xl font-black mb-3">我为政务提建议</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">发现服务流程可以优化？提交您的创新想法，助力政务数字化转型。</p>
          </div>
          <div className="mt-8 flex items-center text-primary font-black text-sm group-hover:gap-2 transition-all">
            立即提交 <span className="material-symbols-outlined ml-1 text-base gold-accent">arrow_forward</span>
          </div>
        </div>

        <div className="bg-white p-8 flex flex-col justify-between group cursor-pointer border-t-4 border-primary shadow-sm hover:shadow-xl transition-all duration-300">
          <div>
            <div className="w-14 h-14 authority-gradient rounded-sm flex items-center justify-center mb-6 shadow-lg">
              <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>report_problem</span>
            </div>
            <h3 className="text-xl font-black mb-3">问题差评与投诉</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">办事遇阻碍、流程不透明？请如实反映，我们将严肃处理每一项诉求。</p>
          </div>
          <div className="mt-8 flex items-center text-primary font-black text-sm group-hover:gap-2 transition-all">
            实名反映 <span className="material-symbols-outlined ml-1 text-base gold-accent">arrow_forward</span>
          </div>
        </div>

        <div className="bg-white p-8 flex flex-col justify-between group cursor-pointer border-t-4 border-primary shadow-sm hover:shadow-xl transition-all duration-300">
          <div>
            <div className="w-14 h-14 authority-gradient rounded-sm flex items-center justify-center mb-6 shadow-lg">
              <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
            </div>
            <h3 className="text-xl font-black mb-3">领导信箱</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">直接对话各级部门主管领导，反映重大民生问题与政策执行难点。</p>
          </div>
          <div className="mt-8 flex items-center text-primary font-black text-sm group-hover:gap-2 transition-all">
            进入信箱 <span className="material-symbols-outlined ml-1 text-base gold-accent">arrow_forward</span>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="bg-white mb-16 shadow-lg border border-zinc-200">
        <div className="bg-primary text-white p-3 px-6 border-l-4 border-[#d4af37] flex items-center gap-3">
          <span className="material-symbols-outlined text-white">edit_note</span>
          <h2 className="text-xl font-black tracking-widest">在线提交反馈</h2>
        </div>
        <div className="p-8 md:p-12 max-w-4xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-red-800">姓名 / 称呼</label>
              <input className="bg-zinc-50 border-0 border-b-2 border-zinc-300 focus:ring-0 focus:border-primary focus:outline-none py-3 px-2 text-on-surface transition-all font-medium" placeholder="请输入您的姓名" type="text"/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-red-800">联系电话</label>
              <input className="bg-zinc-50 border-0 border-b-2 border-zinc-300 focus:ring-0 focus:border-primary focus:outline-none py-3 px-2 text-on-surface transition-all font-medium" placeholder="请输入手机号码以便回复" type="tel"/>
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-red-800">反馈主题</label>
              <input className="bg-zinc-50 border-0 border-b-2 border-zinc-300 focus:ring-0 focus:border-primary focus:outline-none py-3 px-2 text-on-surface transition-all font-medium" placeholder="简要描述您要反映的问题" type="text"/>
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-red-800">详细内容</label>
              <textarea className="bg-zinc-50 border-0 border-b-2 border-zinc-300 focus:ring-0 focus:border-primary focus:outline-none py-3 px-2 text-on-surface transition-all resize-none font-medium" placeholder="请详细描述具体情况、时间、地点及相关部门（限500字）" rows={4}></textarea>
            </div>
            <div className="md:col-span-2 flex justify-end pt-4">
              <button className="authority-gradient text-white px-12 py-4 font-black rounded-sm shadow-xl flex items-center gap-3 hover:brightness-110 active:scale-95 transition-all border-b-4 border-red-900" type="submit">
                确认提交 <span className="material-symbols-outlined gold-accent">send</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Public Responses Section */}
      <section>
        <div className="bg-primary text-white p-3 px-6 border-l-4 border-[#d4af37] flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-white">forum</span>
            <h2 className="text-xl font-black tracking-widest">公众诉求答复</h2>
          </div>
          <button className="text-xs font-black text-white bg-red-800/40 hover:bg-red-800 px-3 py-1.5 rounded flex items-center gap-1 transition-colors">
            查看全部 <span className="material-symbols-outlined text-xs gold-accent">open_in_new</span>
          </button>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-primary shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <p className="text-sm font-black text-red-900">用户 张*亮</p>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">2023-11-20 反映</p>
                </div>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-[10px] font-black px-3 py-1 rounded-full border border-yellow-200 uppercase tracking-widest">已办结</span>
            </div>
            <p className="font-black text-lg text-on-surface">关于增加“跨省通办”事项范围的建议</p>
            <p className="text-sm text-on-surface-variant leading-relaxed font-medium">目前跨省通办的事项还是以户籍证明为主，希望能够增加企业营业执照变更等更多商业服务事项。</p>
            <div className="mt-4 p-5 bg-red-50 border-l-4 border-[#d4af37] shadow-inner">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm font-bold">verified_user</span>
                <span className="text-xs font-black text-red-800">政务服务办公室回复：</span>
              </div>
              <p className="text-sm text-on-surface leading-relaxed font-medium">感谢您的宝贵建议。目前我们正会同市场监管总局推进“企业登记档案跨省查询”等15项新业务。预计将于下季度起逐步在全国政务平台上线。</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
