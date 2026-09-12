import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  rating: number;
  level: string;
  badge: string;
  icon?: string;
}

export const TechExplorer = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/TechData.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading tech data:', err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Technology) => {
    if (selectedStack.some((item) => item.id === tech.id)) {
      toast.error(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const removedTech = selectedStack.find((item) => item.id === id);
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    if (removedTech) {
      toast.info(`${removedTech.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.warn('All items cleared from your stack!');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-slate-700 font-medium text-base">Loading technologies...</p>
      </div>
    );
  }

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Explore the <span className="text-[#ec4899]">Technologies</span>
        </h2>
        <p className="text-base text-slate-600 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {technologies.map((tech) => {
            const isSelected = selectedStack.some((item) => item.id === tech.id);
            return (
              <div 
                key={tech.id} 
                className={`bg-white rounded-2xl p-6 border transition-all shadow-sm flex flex-col justify-between ${
                  isSelected ? 'border-pink-500 ring-2 ring-pink-100' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    {tech.icon ? (
                      <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                    ) : (
                      <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-700 text-xs">
                        {tech.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    <span className="text-xs font-semibold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md">
                      {tech.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.name}</h3>
                  <p className="text-sm text-slate-600 line-clamp-2 mb-4">{tech.description}</p>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs text-slate-500 mb-4 pt-3 border-t border-slate-100">
                    <span className="font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                      {tech.category}
                    </span>
                    <span className="font-medium text-slate-600">
                      {tech.level}
                    </span>
                    <span className="font-bold text-slate-900">
                      ⭐ {tech.rating}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToStack(tech)}
                    disabled={isSelected}
                    className={`w-full py-3 rounded-xl text-sm font-bold transition flex items-center justify-center gap-1.5 ${
                      isSelected 
                        ? 'bg-pink-50 text-pink-600 cursor-not-allowed' 
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {isSelected && <span>✓</span>}
                    {isSelected ? 'Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 sticky top-24 shadow-sm">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
              <span className="text-xs font-bold bg-slate-100 px-2.5 py-1 rounded-full text-slate-700">
                {selectedStack.length} Selected
              </span>
            </div>

            {selectedStack.length === 0 ? (
              <div className="text-center py-10 border-2 border-dashed border-slate-100 rounded-xl">
                <p className="text-sm text-slate-400 font-medium">Your stack is empty.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {selectedStack.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-sm">
                    <div className="flex items-center gap-2.5">
                      {item.icon ? (
                        <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                      ) : (
                        <div className="w-5 h-5 bg-slate-200 rounded flex items-center justify-center font-bold text-[10px] text-slate-700">
                          {item.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                      <span className="font-semibold text-slate-800">{item.name}</span>
                    </div>
                    <button 
                      onClick={() => handleRemoveFromStack(item.id)}
                      className="text-slate-400 hover:text-red-500 font-bold px-1.5 text-base"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  onClick={handleRemoveAll}
                  className="w-full mt-4 py-2.5 bg-white border border-pink-500 text-pink-600 hover:bg-pink-50 rounded-xl text-sm font-bold transition"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};