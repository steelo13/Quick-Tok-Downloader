
import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Github, 
  Heart, 
  ArrowRight,
  Video,
  Music,
  ImageIcon,
  PlayCircle,
  FileVideo,
  User,
  Hash,
  MessageSquare,
  Smile,
  HashIcon,
  DollarSign,
  TrendingUp,
  Crop,
  Layers,
  QrCode,
  Calendar,
  ShieldCheck,
  Zap,
  Link as LinkIcon,
  Type,
  Layout,
  Calculator,
  Download,
  Users,
  FileText,
  ShieldAlert,
  Info
} from 'lucide-react';
import { Tool, ToolCategory } from './types';
import { ALL_TOOLS, CATEGORIES } from './constants';
import ToolRenderer from './components/ToolRenderer';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedToolId, setSelectedToolId] = useState<string | null>(null);
  const [view, setView] = useState<'home' | 'privacy' | 'terms'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top whenever the tool, category, or main view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedToolId, activeCategory, view]);

  const filteredTools = useMemo(() => {
    return ALL_TOOLS.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const selectedTool = useMemo(() => 
    ALL_TOOLS.find(t => t.id === selectedToolId), 
    [selectedToolId]
  );

  const resetView = () => {
    setSelectedToolId(null);
    setActiveCategory('All');
    setSearchQuery('');
    setView('home');
  };

  const handleToolSelect = (id: string) => {
    setSelectedToolId(id);
    setView('home');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b border-slate-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={resetView}>
            <div className="w-10 h-10 tiktok-gradient rounded-xl flex items-center justify-center text-white font-bold text-xl italic group-hover:scale-110 transition-transform">
              Q
            </div>
            <h1 className="text-xl font-extrabold tracking-tight hidden sm:block">
              Quick<span className="text-pink-500">Tok</span> <span className="text-slate-500 font-light">Downloader & Tools</span>
            </h1>
          </div>

          <div className="flex-1 max-w-xl mx-8 relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search 50+ TikTok tools..."
              className="w-full bg-slate-800 border border-slate-700 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm transition-all focus:bg-slate-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden p-2 text-slate-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      {view === 'privacy' ? (
        <PrivacyPage onBack={resetView} />
      ) : view === 'terms' ? (
        <TermsPage onBack={resetView} />
      ) : (
        <>
          {/* Hero Section (Home Only) */}
          {!selectedToolId && (
            <section className="pt-20 pb-12 px-4 text-center">
              <div className="inline-block px-4 py-1.5 bg-slate-800 rounded-full border border-slate-700 text-pink-500 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
                #1 TikTok Utility Suite
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
                THE ULTIMATE <span className="tiktok-gradient bg-clip-text text-transparent">CREATOR TOOLKIT</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Quick Tok Downloader & Tools offers 50+ professional tools. No API keys, no AI required. 
                Privacy-first, browser-based processing.
              </p>

              {/* Categories Grid */}
              <div className="container mx-auto flex flex-wrap justify-center gap-2 mb-12">
                <button 
                  onClick={() => setActiveCategory('All')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === 'All' ? 'bg-white text-slate-900 shadow-xl shadow-white/5' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                >
                  All Tools
                </button>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center space-x-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id ? 'bg-pink-600 text-white shadow-xl shadow-pink-600/20' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                  >
                    {cat.icon}
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Tools Dashboard */}
          <main className="flex-grow container mx-auto px-4 pb-20">
            {selectedToolId ? (
              <div className="max-w-4xl mx-auto pt-8">
                <button 
                  onClick={() => setSelectedToolId(null)}
                  className="mb-8 flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded-full bg-slate-800 group-hover:bg-slate-700">
                    <ArrowRight className="rotate-180" size={18} />
                  </div>
                  <span className="font-medium">Return to Dashboard</span>
                </button>
                
                <div className="glass-card rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-700/50">
                  <div className="p-8 md:p-12 border-b border-slate-700/50 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-800/20">
                    <div>
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="p-4 rounded-2xl bg-pink-600/10 text-pink-500 shadow-inner">
                          <ToolIcon id={selectedTool?.id || ''} size={32} />
                        </div>
                        <div>
                          <h3 className="text-3xl md:text-4xl font-black tracking-tight">{selectedTool?.name}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="px-2 py-0.5 bg-slate-800 rounded text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                              {selectedTool?.category}
                            </span>
                            <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
                            <span className="text-xs text-slate-500">Free Forever</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                       <button className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-400 transition-colors">
                         <Heart size={20} />
                       </button>
                    </div>
                  </div>
                  
                  {/* Instructions Banner */}
                  {selectedTool?.steps && (
                    <div className="px-8 md:px-12 py-6 bg-slate-900/30 border-b border-slate-700/50">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-pink-500/10 rounded-lg text-pink-500 mt-1">
                          <Info size={16} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-3">How to use this tool</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {selectedTool.steps.map((step, idx) => (
                              <div key={idx} className="flex space-x-3">
                                <span className="text-pink-500 font-black text-xs mt-0.5">{idx + 1}.</span>
                                <p className="text-xs text-slate-400 leading-relaxed">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-8 md:p-12">
                    <ToolRenderer toolId={selectedToolId} />
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                   <p className="text-slate-500 text-sm mb-4">Looking for something else?</p>
                   <button onClick={() => setSelectedToolId(null)} className="px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-2xl font-bold transition-all">
                     Explore More Tools
                   </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTools.length > 0 ? (
                  filteredTools.map(tool => (
                    <div 
                      key={tool.id} 
                      onClick={() => handleToolSelect(tool.id)}
                      className="glass-card p-6 rounded-3xl hover:border-pink-500/50 hover:bg-slate-800/50 transition-all cursor-pointer group flex flex-col justify-between h-full border-slate-800"
                    >
                      <div>
                        <div className="mb-6 p-3 rounded-2xl bg-slate-800/50 inline-block text-slate-400 group-hover:text-pink-500 group-hover:bg-pink-500/10 transition-all">
                           <ToolIcon id={tool.id} />
                        </div>
                        <h4 className="text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform">{tool.name}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-2">{tool.description}</p>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                          {tool.category}
                        </span>
                        <div className="flex items-center text-slate-500 group-hover:text-pink-500 transition-colors text-xs font-bold">
                          Open Tool
                          <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-32 bg-slate-900/50 rounded-[3rem] border border-slate-800 border-dashed">
                    <Search size={48} className="mx-auto text-slate-700 mb-6" />
                    <p className="text-slate-500 text-2xl font-medium italic">No tools found matching "{searchQuery}"</p>
                    <button onClick={() => setSearchQuery('')} className="mt-4 text-pink-500 hover:underline">Clear search</button>
                  </div>
                )}
              </div>
            )}
          </main>
        </>
      )}

      {/* Footer */}
      <footer className="py-16 glass-card border-t border-slate-700 bg-slate-950/50 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6 cursor-pointer" onClick={resetView}>
                <div className="w-10 h-10 tiktok-gradient rounded-xl flex items-center justify-center text-white font-bold text-xl italic">
                  Q
                </div>
                <h2 className="text-xl font-extrabold tracking-tight">
                  Quick<span className="text-pink-500">Tok</span>
                </h2>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                The most complete TikTok utility suite on the web. Built for creators, marketers, and power users who need reliable browser-based tools.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all">
                  <Github size={18} />
                </button>
                <button className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all">
                  <Heart size={18} />
                </button>
              </div>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-bold mb-6">Popular Tools</h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><button onClick={() => handleToolSelect('video-downloader')} className="hover:text-pink-500 transition-colors">Video Downloader</button></li>
                <li><button onClick={() => handleToolSelect('engagement-calc')} className="hover:text-pink-500 transition-colors">Engagement Calc</button></li>
                <li><button onClick={() => handleToolSelect('bio-font')} className="hover:text-pink-500 transition-colors">Bio Font Generator</button></li>
                <li><button onClick={() => handleToolSelect('brand-deal')} className="hover:text-pink-500 transition-colors">Brand Deal Estimator</button></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-bold mb-6">Categories</h3>
              <ul className="space-y-4 text-sm text-slate-400">
                {CATEGORIES.map(cat => (
                  <li key={cat.id}>
                    <button onClick={() => { setView('home'); setSelectedToolId(null); setActiveCategory(cat.id); }} className="hover:text-pink-500 transition-colors flex items-center space-x-2">
                      <span className="opacity-50">{cat.icon}</span>
                      <span>{cat.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-bold mb-6">Support</h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><button onClick={() => setView('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => setView('terms')} className="hover:text-white transition-colors">Terms of Service</button></li>
                <li><a href="mailto:support@quicktok.com" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
            <p>© 2024 Quick Tok Downloader & Tools. Not affiliated with TikTok or ByteDance.</p>
            <div className="flex items-center space-x-1">
              <span>Crafted with</span>
              <Heart size={12} className="text-pink-500 fill-current" />
              <span>for the creators community</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Internal icon helper to avoid redundancy
const ToolIcon: React.FC<{ id: string; size?: number }> = ({ id, size = 24 }) => {
  const tool = ALL_TOOLS.find(t => t.id === id);
  const iconName = tool?.icon;
  
  const icons: Record<string, any> = {
    Video, Music, ImageIcon, PlayCircle, FileVideo, User, Hash, MessageSquare, Smile, 
    HashIcon, DollarSign, TrendingUp, Crop, Layers, QrCode, Calendar, ShieldCheck, Zap, 
    LinkIcon, Type, Layout, Calculator, Download, Users, FileText, ShieldAlert
  };

  const Component = icons[iconName || 'Zap'] || Zap;
  return <Component size={size} />;
};

export default App;
