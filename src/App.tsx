import { Nav } from './components/Nav';
import Banner from './components/Banner';
import { TechExplorer } from './components/TechExplorer';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Nav />
      <main className="flex-grow">
        <Banner />
        <TechExplorer />
      </main>
      <Footer />
    </div>
  );
}

export default App;