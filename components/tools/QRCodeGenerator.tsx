
import React, { useState, useRef } from 'react';
import { Download, QrCode } from 'lucide-react';

const QRCodeGenerator: React.FC = () => {
  const [url, setUrl] = useState('');
  const qrRef = useRef<HTMLDivElement>(null);

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url || 'https://tiktok.com')}&bgcolor=ffffff&color=000000&margin=10`;

  return (
    <div className="space-y-8 max-w-xl mx-auto">
      <div className="text-center">
        <div className="inline-block p-6 bg-white rounded-3xl shadow-2xl mb-6">
          <img 
            src={qrUrl} 
            alt="TikTok QR Code" 
            className="w-48 h-48 block"
          />
        </div>
        <p className="text-slate-500 text-sm">Scan with any mobile camera to open link</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">TikTok Profile or Video URL</label>
          <input 
            type="text" 
            className="w-full bg-slate-900 border border-slate-700 rounded-xl py-4 px-4 focus:ring-2 focus:ring-pink-500 outline-none"
            placeholder="https://tiktok.com/@yourusername"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <button 
            onClick={() => window.open(qrUrl, '_blank')}
            className="flex-1 bg-white text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-slate-200 transition-colors"
          >
            <Download size={20} />
            <span>Download PNG</span>
          </button>
          <button 
            className="px-6 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors"
            title="Custom styles coming soon"
          >
            <QrCode size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
