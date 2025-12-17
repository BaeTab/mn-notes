import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import LandingPage from './pages/LandingPage';
import { PawPrint } from 'lucide-react';
import RouteTracker from './components/RouteTracker';

function App() {
  return (
    <BrowserRouter>
      <RouteTracker />
      <div className="min-h-dvh bg-background font-sans text-stone-800 flex flex-col transition-colors selection:bg-orange-200">
        {/* Navigation */}
        <nav className="bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-orange-100 shadow-sm">
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
