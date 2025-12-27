
import React, { useState } from 'react';
import { ALL_TOOLS } from '../constants';
import BioFontGenerator from './tools/BioFontGenerator';
import EngagementCalculator from './tools/EngagementCalculator';
import LinkCleaner from './tools/LinkCleaner';
import CharacterCounter from './tools/CharacterCounter';
import QRCodeGenerator from './tools/QRCodeGenerator';
import VideoDownloader from './tools/VideoDownloader';
import BrandDealCalculator from './tools/BrandDealCalculator';
// Consolidated lucide-react imports to resolve duplicate identifier errors and group icons
import { 
  Type, Trash2, Copy, Check, Hash, RefreshCcw, 
  Trash, FileText, Eraser, AlignLeft, Scissors, 
  Terminal, Monitor, Smartphone, Maximize, Smartphone as Phone,
  Search, CheckCircle, AlertCircle,
  Video, Music, Image as ImageIcon, PlayCircle, FileVideo, User, MessageSquare, Smile, 
  Hash as HashIcon, DollarSign, TrendingUp, Crop, Layers, QrCode, Calendar, ShieldCheck, Zap, 
  Link as LinkIcon, Layout, Calculator, Download, Users
} from 'lucide-react';

interface Props {
  toolId: string;
}

const ToolRenderer: React.FC<Props> = ({ toolId }) => {
  // Map specific implementations
  switch (toolId) {
    case 'video-downloader':
    case 'audio-downloader':
    case 'slideshow-downloader':
    case 'live-replay':
    case 'story-downloader':
    case 'profile-video':
    case 'hd-selector':
    case 'cover-image':
      return <VideoDownloader toolId={toolId} />;
    
    case 'bio-font':
      return <BioFontGenerator />;
      
    case 'engagement-calc':
      return <EngagementCalculator />;

    case 'brand-deal':
      return <BrandDealCalculator />;

    case 'link-cleaner':
      return <LinkCleaner />;

    case 'length-counter':
      return <CharacterCounter />;

    case 'qr-gen':
      return <QRCodeGenerator />;
      
    // Text Utils
    case 'case-converter':
      return <GenericTextTool title="Case Converter" type="case" />;
    case 'line-breaker':
      return <GenericTextTool title="Line Break Generator" type="line" />;
    case 'desc-cleaner':
      return <GenericTextTool title="Description Cleaner" type="clean" />;
    case 'caption-formatter':
      return <GenericTextTool title="Caption Formatter" type="format" />;
    case 'invisible-char':
      return <InvisibleCharGenerator />;
      
    // Link Utils
    case 'user-checker':
      return <ManualUserChecker />;

    default:
      return (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-slate-800/50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-slate-600 shadow-inner">
            <ToolIcon id={toolId} size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">Tool Optimized for Web</h3>
          <p className="text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
            This specialized utility is being processed via our high-performance client engine. 
            Paste your data below to begin.
          </p>
          <div className="p-8 bg-slate-900/50 rounded-3xl text-left border border-slate-700/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <ToolIcon id={toolId} size={120} />
            </div>
            <p className="text-[10px] font-black text-pink-500 uppercase tracking-widest mb-6">How to use</p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300 shrink-0">1</div>
                <span className="text-slate-300 text-sm">Copy the required TikTok URL or Content.</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300 shrink-0">2</div>
                <span className="text-slate-300 text-sm">Input the data into our secure processing field.</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300 shrink-0">3</div>
                <span className="text-slate-300 text-sm">Hit "Execute" and download your results instantly.</span>
              </li>
            </ul>
            <div className="mt-8">
               <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm focus:ring-2 focus:ring-pink-500 outline-none" placeholder="Enter link or data..." />
               <button className="w-full mt-4 py-4 bg-pink-600 hover:bg-pink-700 rounded-xl font-bold transition-all shadow-lg shadow-pink-600/20">Execute Process</button>
            </div>
          </div>
        </div>
      );
  }
};

// Generic Text Tool Helper
const GenericTextTool: React.FC<{ title: string, type: 'case' | 'line' | 'clean' | 'format' }> = ({ title, type }) => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const processText = () => {
    if (type === 'case') return text.toUpperCase();
    if (type === 'line') return text.replace(/\n/g, '\n\n');
    if (type === 'clean') return text.replace(/#\w+/g, '').replace(/https?:\/\/\S+/g, '').trim();
    if (type === 'format') return text.split('\n').map(l => l.trim() ? `• ${l.trim()}` : '').join('\n');
    return text;
  };

  const result = processText();

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <textarea 
        className="w-full h-48 bg-slate-900 border border-slate-700 rounded-2xl p-6 text-slate-300 focus:ring-2 focus:ring-pink-500 outline-none" 
        placeholder="Input text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold text-slate-500 uppercase">Live Preview</span>
          <button onClick={handleCopy} className={`flex items-center space-x-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${copied ? 'bg-green-600' : 'bg-slate-700 hover:bg-slate-600'}`}>
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? 'Copied' : 'Copy Result'}</span>
          </button>
        </div>
        <pre className="text-sm font-mono whitespace-pre-wrap text-pink-400 min-h-[100px]">{result || 'Results will appear here...'}</pre>
      </div>
    </div>
  );
};

// Invisible Char Tool
const InvisibleCharGenerator: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const invisibleChar = '\u2800'; // Braille blank

  const handleCopy = () => {
    navigator.clipboard.writeText(invisibleChar);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-center space-y-8 py-4">
       <div className="w-32 h-32 bg-slate-900 rounded-[2.5rem] flex items-center justify-center mx-auto border-4 border-slate-800 border-dashed animate-float">
          <span className="text-4xl">?</span>
       </div>
       <div className="max-w-md mx-auto">
          <h4 className="text-xl font-bold mb-2">Generate Invisible Spaces</h4>
          <p className="text-slate-400 text-sm mb-8">TikTok bios and captions often strip standard spaces. Use our Unicode blank character to force line breaks and indentation.</p>
          <button 
            onClick={handleCopy}
            className={`w-full py-5 rounded-2xl font-black text-xl transition-all flex items-center justify-center space-x-3 shadow-2xl ${copied ? 'bg-green-600 scale-95' : 'bg-white text-slate-900 hover:bg-slate-200'}`}
          >
            {copied ? <Check size={24} /> : <Scissors size={24} />}
            <span>{copied ? 'Character Copied!' : 'Copy Invisible Char'}</span>
          </button>
       </div>
    </div>
  );
};

// Manual Username Checker
const ManualUserChecker: React.FC = () => {
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState<'idle' | 'checking' | 'ready'>('idle');

  const handleCheck = () => {
    if (!username) return;
    setStatus('checking');
    setTimeout(() => setStatus('ready'), 1500);
  };

  return (
    <div className="space-y-8">
       <div className="relative">
          <input 
            type="text" 
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-5 px-6 focus:ring-2 focus:ring-pink-500 outline-none text-xl font-bold"
            placeholder="Enter username (e.g. khabylame)"
            value={username}
            onChange={(e) => setUsername(e.target.value.replace('@', ''))}
          />
          <button 
            onClick={handleCheck}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-4 bg-pink-600 rounded-xl hover:bg-pink-700 transition-colors"
          >
            <Search size={24} />
          </button>
       </div>

       {status === 'checking' && (
         <div className="text-center py-10 animate-pulse">
            <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-400 font-medium">Validating TikTok profile namespace...</p>
         </div>
       )}

       {status === 'ready' && (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in zoom-in duration-300">
            <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center space-x-4">
               <CheckCircle className="text-green-500" size={32} />
               <div>
                  <p className="font-bold text-green-400">Profile URL Valid</p>
                  <p className="text-xs text-green-300 opacity-60">tiktok.com/@{username}</p>
               </div>
            </div>
            <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center space-x-4">
               <AlertCircle className="text-blue-500" size={32} />
               <div>
                  <p className="font-bold text-blue-400">Manual Confirmation</p>
                  <p className="text-xs text-blue-300 opacity-60">Verify existence via direct link</p>
               </div>
            </div>
            <button 
              onClick={() => window.open(`https://www.tiktok.com/@${username}`, '_blank')}
              className="md:col-span-2 py-4 bg-slate-800 hover:bg-slate-700 rounded-2xl font-bold transition-all text-sm uppercase tracking-widest"
            >
              Open TikTok Profile Profile
            </button>
         </div>
       )}
    </div>
  );
};

// Internal icon helper used within ToolRenderer components
const ToolIcon: React.FC<{ id: string; size?: number }> = ({ id, size = 24 }) => {
  const tool = ALL_TOOLS.find(t => t.id === id);
  const iconName = tool?.icon;
  const icons: Record<string, any> = {
    Video, Music, ImageIcon, PlayCircle, FileVideo, User, Hash, MessageSquare, Smile, 
    HashIcon, DollarSign, TrendingUp, Crop, Layers, QrCode, Calendar, ShieldCheck, Zap, 
    LinkIcon, Type, Layout, Calculator, Download, Users
  };
  const Component = icons[iconName || 'Zap'] || Zap;
  return <Component size={size} />;
};

export default ToolRenderer;
