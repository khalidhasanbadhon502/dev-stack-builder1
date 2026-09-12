import bannerImg from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto flex flex-col items-center justify-between gap-12 px-6 lg:flex-row">
        
        <div className="max-w-xl text-left">
          
          <h1 className="text-4xl font-extrabold tracking-tight text-[#0F172A] md:text-6xl leading-[1.15] text-[100%]">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-[#FF5E36] via-[#E11D48] to-[#9333EA] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-500 leading-relaxed max-w-lg text-[100%]">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-xl bg-gradient-to-r from-[#FF5E36] to-[#E11D48] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-95 text-[100%]">
              Explore Technologies
            </button>
            
            <button className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition-all hover:bg-gray-50 hover:text-slate-900 text-[100%]">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          <img 
            src={bannerImg} 
            alt="Development Stack Visual" 
            className="w-full max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;