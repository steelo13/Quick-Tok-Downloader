
import React from 'react';
import { ArrowRight, FileText, Scale, AlertTriangle, ShieldAlert } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const TermsPage: React.FC<Props> = ({ onBack }) => {
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
            <div className="p-4 rounded-2xl bg-pink-500/10 text-pink-500">
              <FileText size={40} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight">Terms of Service</h1>
              <p className="text-slate-500 mt-1">Version 1.2 • October 2024</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-slate-300">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Scale size={20} className="text-blue-500" />
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By accessing and using Quick Tok Downloader & Tools, you agree to comply with and be bound by these Terms of Service. If you do not agree, please refrain from using our tools.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <AlertTriangle size={20} className="text-blue-500" />
                2. Acceptable Use
              </h2>
              <p className="leading-relaxed">
                You agree to use these tools only for lawful purposes. You are solely responsible for respecting the copyright and intellectual property rights of the content creators. Our downloader tools are intended for personal, non-commercial use only.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <ShieldAlert size={20} className="text-blue-500" />
                3. Disclaimer of Warranties
              </h2>
              <p className="leading-relaxed">
                The tools provided on this website are "as is" without warranties of any kind. We do not guarantee that the services will be uninterrupted or error-free. We are not affiliated with TikTok or ByteDance in any capacity.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <FileText size={20} className="text-blue-500" />
                4. Modifications
              </h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms or the functionality of the tools at any time to comply with external platform updates (e.g., changes to TikTok's public API or structure).
              </p>
            </section>

            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 mt-12">
              <p className="text-sm italic text-slate-400">
                Usage of these tools signifies your agreement to these terms. For legal inquiries, please reach out to legal@quicktok.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsPage;
