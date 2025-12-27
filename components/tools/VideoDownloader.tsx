
import React, { useState } from 'react';
import { Download, Search, CheckCircle2, ShieldAlert, Loader2, Music, Video, Zap } from 'lucide-react';

interface Props {
  toolId: string;
}

const VideoDownloader: React.FC<Props> = ({ toolId }) => {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleDownload = () => {
    if (!url.includes('tiktok.com')) return;
    
    setIsProcessing(true);
    // Simulate server processing (since we can't do real cross-origin media fetch without a proxy)
    setTimeout(() => {
      setIsProcessing(false);
      setResult({
        title: "TikTok Video #39281",
        author: "@creator_name",
        thumbnail: `https://picsum.photos/400/700?random=${Math.random()}`,
        duration: "00:15",
        links: [
          { label: 'Download HD (No Watermark)', format: 'MP4', quality: '1080p', type: 'video' },
          { label: 'Download SD (No Watermark)', format: 'MP4', quality: '720p', type: 'video' },
          { label: 'Download Original Audio', format: 'MP3', quality: '320kbps', type: 'audio' }
        ]
      });
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div className="bg-pink-600/10 border border-pink-500/20 p-4 rounded-2xl flex items-center space-x-3">
        <Zap className="text-pink-500" size={24} />
        <div>
          <h4 className="font-bold text-pink-400">High Speed Extraction Enabled</h4>
          <p className="text-xs text-pink-300 opacity-80">Our tool removes watermarks from videos and photos carousels instantly.</p>
        </div>
      </div>

      <div className="relative">
        <input 
          type="text" 
          className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-5 pl-6 pr-40 focus:ring-2 focus:ring-pink-500 outline-none text-lg shadow-2xl"
          placeholder="Paste TikTok link here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button 
          onClick={handleDownload}
          disabled={!url || isProcessing}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-8 py-3 bg-pink-600 hover:bg-pink-700 disabled:bg-slate-700 disabled:cursor-not-allowed rounded-xl font-black text-lg transition-all flex items-center space-x-2"
        >
          {isProcessing ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} />}
          <span>Download</span>
        </button>
      </div>

      {isProcessing && (
        <div className="text-center py-10 animate-pulse">
          <div className="inline-block w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-slate-400">Extracting high-resolution media from link...</p>
        </div>
      )}

      {result && !isProcessing && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-500">
          <div className="md:col-span-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[9/16] shadow-2xl border border-slate-700 group">
              <img src={result.thumbnail} className="w-full h-full object-cover" alt="Video Preview" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <p className="font-bold text-white">{result.author}</p>
                <p className="text-xs text-slate-300">{result.duration}</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xl font-bold">Ready to Download</h4>
            <div className="space-y-3">
              {result.links.map((link: any, idx: number) => (
                <button 
                  key={idx}
                  className="w-full flex items-center justify-between p-4 bg-slate-800 hover:bg-slate-700 rounded-2xl border border-slate-700 transition-all group"
                  onClick={() => alert('Demo: Link extracted successfully. In a production environment, this would start the file download.')}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-slate-900 rounded-xl group-hover:bg-pink-600/20 transition-colors">
                      {link.type === 'video' ? <Video size={20} /> : <Music size={20} />}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-sm">{link.label}</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest">{link.quality} • {link.format}</p>
                    </div>
                  </div>
                  <Download size={20} className="text-slate-500 group-hover:text-pink-500" />
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 bg-slate-800/50 rounded-2xl border border-slate-700 flex items-start space-x-3">
              <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={16} />
              <p className="text-xs text-slate-400 leading-relaxed">
                By using our service, you agree to our terms. This downloader is intended for personal archival of public content. Please respect creators' copyright.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDownloader;
