
import React, { useState, useMemo } from 'react';
import { DollarSign, Tag, Users, Zap, Briefcase, Award } from 'lucide-react';

const BrandDealCalculator: React.FC = () => {
  const [avgViews, setAvgViews] = useState('10000');
  const [niche, setNiche] = useState('lifestyle');
  const [engagement, setEngagement] = useState('5');

  const niches: Record<string, number> = {
    'lifestyle': 1.0,
    'finance': 2.5,
    'tech': 2.0,
    'gaming': 1.2,
    'fashion': 1.5,
    'fitness': 1.3,
    'beauty': 1.6,
  };

  const valuation = useMemo(() => {
    const views = parseInt(avgViews) || 0;
    const eng = parseFloat(engagement) || 0;
    const multiplier = niches[niche] || 1.0;

    // Standard TikTok CPM ranges from $1 to $10 depending on niche and engagement
    const baseRate = (views / 1000) * (5 + (eng * 0.5));
    const suggestedPrice = baseRate * multiplier;

    return {
      low: (suggestedPrice * 0.8).toFixed(0),
      mid: suggestedPrice.toFixed(0),
      high: (suggestedPrice * 1.5).toFixed(0),
      cpm: ((suggestedPrice / views) * 1000).toFixed(2)
    };
  }, [avgViews, niche, engagement]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Input Campaign Specs</h4>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-400 block mb-2">Average Video Views (Last 30 Days)</label>
              <input 
                type="number" 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-pink-500 outline-none"
                value={avgViews}
                onChange={(e) => setAvgViews(e.target.value)}
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-400 block mb-2">Primary Content Niche</label>
              <select 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-pink-500 outline-none"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
              >
                {Object.keys(niches).map(n => (
                  <option key={n} value={n}>{n.charAt(0).toUpperCase() + n.slice(1)}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-400 block mb-2">Engagement Rate (%)</label>
              <input 
                type="number" 
                step="0.1"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-pink-500 outline-none"
                value={engagement}
                onChange={(e) => setEngagement(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Pricing Estimates</h4>
          
          <div className="bg-gradient-to-br from-pink-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
            <DollarSign className="absolute -right-4 -top-4 text-white/10 w-32 h-32 rotate-12" />
            
            <p className="text-white/80 text-sm font-medium mb-1">Recommended Post Rate</p>
            <h2 className="text-5xl font-black mb-6">${valuation.mid}</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3">
                <p className="text-[10px] text-white/60 font-bold uppercase mb-1">Market Low</p>
                <p className="text-lg font-bold">${valuation.low}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3">
                <p className="text-[10px] text-white/60 font-bold uppercase mb-1">Premium / Exclusive</p>
                <p className="text-lg font-bold">${valuation.high}</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-white/60 pt-6 border-t border-white/10">
              <span className="flex items-center gap-1"><Zap size={12} /> Estimated CPM: ${valuation.cpm}</span>
              <span className="flex items-center gap-1"><Award size={12} /> Pro Tier</span>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h5 className="flex items-center gap-2 text-sm font-bold mb-4">
              <Briefcase size={16} className="text-pink-500" />
              How to use these rates
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Charge more for usage rights (ads).</li>
              <li>• Bundle multiple posts for a discount.</li>
              <li>• Mention your specific conversion stats.</li>
              <li>• Finance/Tech niches carry 2x-3x premiums.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDealCalculator;
