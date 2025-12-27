
import React, { useState } from 'react';
import { Link as LinkIcon, Trash2, Copy, Check, ShieldCheck } from 'lucide-react';

const LinkCleaner: React.FC = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [cleanedUrl, setCleanedUrl] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const cleanLink = () => {
    try {
      const url = new URL(inputUrl.trim());
      // Remove TikTok-specific tracking parameters
      const paramsToRemove = ['is_from_webapp', 'sender_device', 'sender_web_id', 'share_app_id', 'utm_source', 'utm_campaign', 'utm_medium'];
      
      paramsToRemove.forEach(p => url.searchParams.delete(p));
      
      // If it's a mobile share link (vt.tiktok.com), there aren't many params to strip usually, 
      // but standard web links have many.
      
      setCleanedUrl(url.toString());
    } catch (e) {
      // If not a full URL, just return it as is or show error
      setCleanedUrl(inputUrl.split('?')[0]);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(cleanedUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex items-start space-x-3 mb-6">
        <ShieldCheck className="text-blue-500 shrink-0" size={20} />
        <p className="text-sm text-blue-200">
          Tracking parameters allow TikTok to see exactly who shared a link. Cleaning them protects your privacy and makes links look cleaner.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Paste TikTok Link</label>
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
            <LinkIcon size={18} />
          </div>
          <input 
            type="text" 
            className="w-full bg-slate-900 border border-slate-700 rounded-xl py-4 pl-12 pr-24 focus:ring-2 focus:ring-pink-500 outline-none"
            placeholder="https://www.tiktok.com/@user/video/..."
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          />
          <button 
            onClick={cleanLink}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg text-sm font-bold transition-colors"
          >
            Clean
          </button>
        </div>
      </div>

      {cleanedUrl && (
        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2">
          <label className="block text-sm font-medium text-slate-400">Cleaned Result</label>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 flex items-center justify-between group">
            <div className="flex-1 mr-4 overflow-hidden">
              <p className="text-sm font-mono truncate text-pink-400">{cleanedUrl}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => { setInputUrl(''); setCleanedUrl(''); }}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-red-500 hover:text-white transition-all"
              >
                <Trash2 size={18} />
              </button>
              <button
                onClick={handleCopy}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-bold transition-all ${isCopied ? 'bg-green-600 text-white' : 'bg-slate-700 text-white hover:bg-slate-600'}`}
              >
                {isCopied ? <Check size={18} /> : <Copy size={18} />}
                <span>{isCopied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkCleaner;
