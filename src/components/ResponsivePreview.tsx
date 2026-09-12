export const ResponsivePreview = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] p-8 overflow-x-auto">
      <div className="flex gap-8 items-start w-max mx-auto">
        <div className="flex flex-col gap-2">
          <span className="text-slate-400 text-sm font-medium">Desktop View</span>
          <div className="w-[1024px] bg-white rounded-lg overflow-hidden shadow-2xl origin-top" style={{ transform: 'scale(0.6)', transformOrigin: 'top left', height: '1600px' }}>
            <div className="h-full overflow-y-auto pointer-events-none">
              {children}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 -ml-[400px]">
          <span className="text-slate-400 text-sm font-medium">Tablet View</span>
          <div className="w-[768px] bg-white rounded-lg overflow-hidden shadow-2xl origin-top" style={{ transform: 'scale(0.6)', transformOrigin: 'top left', height: '1600px' }}>
            <div className="h-full overflow-y-auto pointer-events-none">
               {children}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 -ml-[300px]">
          <span className="text-slate-400 text-sm font-medium">Mobile View</span>
          <div className="w-[375px] bg-white rounded-lg overflow-hidden shadow-2xl origin-top border-4 border-slate-800" style={{ transform: 'scale(0.6)', transformOrigin: 'top left', height: '1600px' }}>
             <div className="h-full overflow-y-auto pointer-events-none">
               {children}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};