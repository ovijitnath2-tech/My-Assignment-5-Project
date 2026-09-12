import { useState, Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './components/Nav';
import Banners from './components/Banners';
import TechContainer from './components/TechContainer';
import YourStack from './components/YourStack';
import Footer from './components/Footer';
import type { Itech } from './type/type';


const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center py-20 gap-4">
    <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
    <p className="text-gray-500 font-medium text-sm">Loading technologies...</p>
  </div>
);

function App() {
  const [selectedStack, setSelectedStack] = useState<Itech[]>([]);

  const handleToggleStack = (tech: Itech) => {
    const exists = selectedStack.some((item) => String(item.id) === String(tech.id));
    if (exists) {
      setSelectedStack((prev) => prev.filter((item) => String(item.id) !== String(tech.id)));
      toast.warn(`Removed ${tech.name} from your stack!`, { position: 'bottom-right' });
    } else {
      setSelectedStack((prev) => [...prev, tech]);
      toast.success(`Added ${tech.name} to your stack!`, { position: 'bottom-right' });
    }
  };

  const handleRemoveItem = (id: number | string) => {
    const itemToRemove = selectedStack.find((item) => String(item.id) === String(id));
    setSelectedStack((prev) => prev.filter((item) => String(item.id) !== String(id)));
    if (itemToRemove) {
      toast.warn(`Removed ${itemToRemove.name} from your stack!`, { position: 'bottom-right' });
    }
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error('Cleared all technologies from your stack!', { position: 'bottom-right' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        <Nav />
        <Banners />

        <main className="max-w-7xl mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            
            <Suspense fallback={<LoadingFallback />}>
              <TechContainer 
                selectedStack={selectedStack} 
                onToggleStack={handleToggleStack} 
              />
            </Suspense>
          </div>

          <div className="lg:col-span-1">
            <YourStack 
              stack={selectedStack} 
              onRemove={handleRemoveItem} 
              onRemoveAll={handleRemoveAll} 
            />
          </div>
        </main>
      </div>

      <Footer />
      <ToastContainer autoClose={2500} hideProgressBar={false} closeOnClick pauseOnHover />
    </div>
  );
}

export default App;