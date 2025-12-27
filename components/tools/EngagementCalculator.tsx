
import React, { useState, useMemo } from 'react';
import { TrendingUp, Users, Heart, MessageSquare, Share2 } from 'lucide-react';

const EngagementCalculator: React.FC = () => {
  const [likes, setLikes] = useState<string>('');
  const [comments, setComments] = useState<string>('');
  const [shares, setShares] = useState<string>('');
  const [views, setViews] = useState<string>('');
  const [followers, setFollowers] = useState<string>('');

  const stats = useMemo(() => {
    const l = parseFloat(likes) || 0;
    const c = parseFloat(comments) || 0;
    const s = parseFloat(shares) || 0;
    const v = parseFloat(views) || 0;
    const f = parseFloat(followers) || 0;

    const totalEngagement = l + c + s;
    const engagementByViews = v > 0 ? (totalEngagement / v) * 100 : 0;
    const engagementByFollowers = f > 0 ? (totalEngagement / f) * 100 : 0;

    return {
      total: totalEngagement,
      viewRate: engagementByViews.toFixed(2),
      followerRate: engagementByFollowers.toFixed(2),
      tier: engagementByViews > 10 ? 'Viral' : engagementByViews > 5 ? 'High' : engagementByViews > 2 ? 'Average' : 'Low'
    };
  }, [likes, comments, shares, views, followers]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Input Statistics</h4>
          <div className="space-y-3">
            <StatInput label="Total Likes" value={likes} onChange={setLikes} icon={<Heart size={16} />} />
            <StatInput label="Total Comments" value={comments} onChange={setComments} icon={<MessageSquare size={16} />} />
            <StatInput label="Total Shares" value={shares} onChange={setShares} icon={<Share2 size={16} />} />
            <StatInput label="Total Views" value={views} onChange={setViews} icon={<TrendingUp size={16} />} />
            <StatInput label="Total Followers" value={followers} onChange={setFollowers} icon={<Users size={16} />} />
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Analysis Results</h4>
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 h-full flex flex-col justify-center">
            <div className="text-center mb-6">
              <p className="text-slate-400 text-sm mb-1">Engagement Rate (Views)</p>
              <h2 className={`text-6xl font-black ${parseFloat(stats.viewRate) > 5 ? 'text-pink-500' : 'text-white'}`}>
                {stats.viewRate}%
              </h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-800 rounded-xl">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">vs Followers</p>
                <p className="text-lg font-bold">{stats.followerRate}%</p>
              </div>
              <div className="p-3 bg-slate-800 rounded-xl">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Status</p>
                <p className={`text-lg font-bold ${stats.tier === 'Viral' ? 'text-pink-500' : 'text-white'}`}>{stats.tier}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-500 leading-relaxed italic">
                * An average engagement rate on TikTok is between 3% and 9%. Rates over 10% are considered exceptional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatInput: React.FC<{ label: string; value: string; onChange: (v: string) => void; icon: React.ReactNode }> = ({ label, value, onChange, icon }) => (
  <div className="relative">
    <label className="text-xs font-semibold text-slate-400 mb-1 block ml-1">{label}</label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">{icon}</div>
      <input 
        type="number" 
        className="w-full bg-slate-800 border border-slate-700 rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-pink-500 outline-none text-sm"
        placeholder="0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
);

export default EngagementCalculator;
