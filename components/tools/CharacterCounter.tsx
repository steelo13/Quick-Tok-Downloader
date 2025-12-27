
import React, { useState } from 'react';

const CharacterCounter: React.FC = () => {
  const [text, setText] = useState('');
  
  const limits = [
    { name: 'Caption', max: 4000 },
    { name: 'Bio', max: 80 },
    { name: 'Comment', max: 150 },
    { name: 'Username', max: 30 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Paste or type your content</label>
        <textarea
          className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-pink-500 outline-none h-40 text-lg"
          placeholder="Start typing..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {limits.map(limit => {
          const percentage = Math.min((text.length / limit.max) * 100, 100);
          const isOver = text.length > limit.max;
          
          return (
            <div key={limit.name} className="bg-slate-900 p-4 rounded-xl border border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase">{limit.name}</span>
                <span className={`text-xs font-mono ${isOver ? 'text-red-500' : 'text-slate-400'}`}>
                  {text.length}/{limit.max}
                </span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${isOver ? 'bg-red-500' : percentage > 85 ? 'bg-yellow-500' : 'bg-pink-500'}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700 flex flex-wrap gap-4 text-sm text-slate-400">
        <div>Words: <span className="text-white font-bold">{text.trim() === '' ? 0 : text.trim().split(/\s+/).length}</span></div>
        <div>Lines: <span className="text-white font-bold">{text.split('\n').length}</span></div>
        <div>Spaces: <span className="text-white font-bold">{text.split(' ').length - 1}</span></div>
      </div>
    </div>
  );
};

export default CharacterCounter;
