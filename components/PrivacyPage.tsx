
import React from 'react';
import { ArrowRight, ShieldCheck, Lock, EyeOff, Globe } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const PrivacyPage: React.FC<Props> = ({ onBack }) => {
  return (
    <main className="flex-grow container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group"
        >
          <div className="p-2 rounded-full bg-slate-800 group-hover:bg-slate-700">
            <ArrowRight className="rotate-180" size={18} />
          </div>
          <span className="font-medium">Back to Dashboard</span>
        </button>

        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-slate-700/50">
          <div className="flex items-center space-x-4 mb-10">
            <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-500">
              <ShieldCheck size={40} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight">Privacy Policy</h1>
              <p className="text-slate-500 mt-1">Last Updated: October 2024</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-slate-300">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Lock size={20} className="text-pink-500" />
                1. Data Collection
              </h2>
              <p className="leading-relaxed">
                Quick Tok Downloader & Tools is designed with a privacy-first approach. We do not store any media files downloaded through our tools on our servers. All processing, including video extraction, text formatting, and calculation, happens locally within your web browser.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <EyeOff size={20} className="text-pink-500" />
                2. Use of Cookies
              </h2>
              <p className="leading-relaxed">
                We use minimal functional cookies to remember your preferences (such as search queries or active categories). We do not use tracking cookies for the purpose of third-party advertising or profiling.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Globe size={20} className="text-pink-500" />
                3. External Links
              </h2>
              <p className="leading-relaxed">
                Our tools process TikTok URLs provided by you. When you enter a link, our client-side scripts interact with public TikTok endpoints to fetch the necessary media data. We do not transmit your personal account information or credentials during this process.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <ShieldCheck size={20} className="text-pink-500" />
                4. User Rights
              </h2>
              <p className="leading-relaxed">
                As we do not store personal data or account information, you have complete control over your usage. Simply clearing your browser cache will remove any temporary data processed by the application.
              </p>
            </section>

            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 mt-12">
              <p className="text-sm italic text-slate-400">
                If you have any questions regarding this policy, please contact us at privacy@quicktok.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;
