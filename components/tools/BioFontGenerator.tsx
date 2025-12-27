
import React, { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

const BioFontGenerator: React.FC = () => {
  const [text, setText] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const fontMaps = [
    { name: 'Italic', transform: (t: string) => t.split('').map(c => italicMap[c] || c).join('') },
    { name: 'Bold', transform: (t: string) => t.split('').map(c => boldMap[c] || c).join('') },
    { name: 'Script', transform: (t: string) => t.split('').map(c => scriptMap[c] || c).join('') },
    { name: 'Bubble', transform: (t: string) => t.split('').map(c => bubbleMap[c] || c).join('') },
    { name: 'Square', transform: (t: string) => t.split('').map(c => squareMap[c] || c).join('') },
    { name: 'Monospace', transform: (t: string) => t.split('').map(c => monoMap[c] || c).join('') },
  ];

  const handleCopy = (content: string, index: number) => {
    navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Enter your TikTok bio text</label>
        <textarea
          className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-pink-500 outline-none h-24"
          placeholder="e.g. Life is short, make it sweet..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {text ? fontMaps.map((font, idx) => (
          <div key={idx} className="bg-slate-900 p-4 rounded-xl border border-slate-700 flex items-center justify-between group">
            <div className="flex-1 mr-4 overflow-hidden">
              <p className="text-xs text-slate-500 mb-1 font-mono uppercase tracking-widest">{font.name}</p>
              <p className="text-lg truncate">{font.transform(text)}</p>
            </div>
            <button
              onClick={() => handleCopy(font.transform(text), idx)}
              className={`p-2 rounded-lg transition-all ${copiedIndex === idx ? 'bg-green-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            >
              {copiedIndex === idx ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
        )) : (
          <div className="col-span-full text-center py-10 text-slate-500 border-2 border-dashed border-slate-800 rounded-3xl">
            Type something above to see the magic...
          </div>
        )}
      </div>
    </div>
  );
};

// Unicode Maps (Simplified for demo)
const italicMap: Record<string, string> = { 'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻' };
const boldMap: Record<string, string> = { 'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇' };
const scriptMap: Record<string, string> = { 'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽', 'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃' };
const bubbleMap: Record<string, string> = { 'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ' };
const squareMap: Record<string, string> = { 'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄿', 'h': '🄷', 'i': '🄸', 'j': '🄹', 'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾', 'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉' };
const monoMap: Record<string, string> = { 'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣' };

export default BioFontGenerator;
