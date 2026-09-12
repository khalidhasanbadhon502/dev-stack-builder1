import logo from '../assets/logo-text.png';
export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-100 mt-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12">
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="DevStack Logo" 
                className="h-8 w-auto object-contain" 
              />
            </div>

            <p className="text-base text-slate-500 font-normal leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center gap-5 pt-2 text-base font-medium text-slate-600">
              <a href="#github" className="hover:text-slate-900 transition-colors">GitHub</a>
              <a href="#twitter" className="hover:text-slate-900 transition-colors">Twitter</a>
              <a href="#linkedin" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase">PRODUCT</h4>
            <ul className="space-y-2.5 text-base text-slate-500 font-medium">
              <li><a href="#home" className="hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
            </ul>
          </div>
        
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase">COMPANY</h4>
            <ul className="space-y-2.5 text-base text-slate-500 font-medium">
              <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
          </div>
        
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase">LEGAL</h4>
            <ul className="space-y-2.5 text-base text-slate-500 font-medium">
              <li><a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>
    
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 font-normal">
          <p>&copy; {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-900 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};