import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import LandingPage from './pages/LandingPage';
import { PawPrint } from 'lucide-react';
import RouteTracker from './components/RouteTracker';

function App() {
  return (
    <BrowserRouter>
      <RouteTracker />
      <div className="min-h-dvh bg-stone-50 font-sans text-stone-900 flex flex-col">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100">
          <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-extrabold text-xl text-stone-800 hover:opacity-80 transition-opacity">
              <PawPrint className="text-orange-500" />
              <span>멍냥수첩</span>
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
