import React from 'react';

export interface TechItem {
  id: string | number;
  name: string;
  description: string;
  category: string;
  level: string;
  rating: number;
  icon?: string;
  badge?: string;
}

interface TechCardProps {
  tech: TechItem;
  isSelected: boolean;
  onToggleSelect: (tech: TechItem) => void;
}

export const TechCard: React.FC<TechCardProps> = ({ tech, isSelected, onToggleSelect }) => {
  return (
    <div className={`bg-white p-5 rounded-[24px] transition-all duration-300 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] border ${
      isSelected ? 'border-pink-500 shadow-[0_4px_16px_rgba(236,72,153,0.15)]' : 'border-slate-100'
    }`}>
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-xl border border-slate-100">
            {tech.icon ? (
              <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
            ) : (
              <span className="text-lg font-bold text-slate-700">{tech.name.charAt(0)}</span>
            )}
          </div>
          {tech.badge && (
            <span className="text-[11px] font-medium px-3 py-1 bg-sky-50 text-sky-600 rounded-full">
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{tech.name}</h3>
        <p className="text-slate-500 mb-6 text-xs leading-relaxed line-clamp-2">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4 text-xs text-slate-500 font-medium pt-3 border-t border-slate-50">
          <span className="text-slate-600">{tech.category}</span>
          <span className="text-slate-600">{tech.level}</span>
          <div className="flex items-center gap-1 text-slate-900 font-bold">
            <span className="text-amber-400 text-sm">★</span> 
            <span>{tech.rating.toFixed(1)}</span>
          </div>
        </div>

        <button
          onClick={() => onToggleSelect(tech)}
          className={`w-full font-medium py-3 px-4 rounded-xl text-xs transition duration-200 shadow-sm flex items-center justify-center gap-2
            ${isSelected 
              ? 'bg-pink-50 text-pink-600 font-semibold border border-pink-100' 
              : 'bg-[#0f172a] hover:bg-slate-800 text-white font-semibold'
            }`}
        >
          {isSelected ? (
            <>
              <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
              Added to Stack
            </>
          ) : (
            'Add to Stack'
          )}
        </button>
      </div>
    </div>
  );
};