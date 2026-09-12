import { useEffect, useState } from 'react';
import type { Itech } from '../type/type';
import TechCard from './TechCard';

interface TechContainerProps {
  selectedStack: Itech[];
  onToggleStack: (tech: Itech) => void;
}

const TechContainer = ({ selectedStack = [], onToggleStack }: TechContainerProps) => {
  const [technologies, setTechnologies] = useState<Itech[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data: Itech[]) => setTechnologies(data))
      .catch((err) => console.error('Error loading data:', err));
  }, []);

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-black text-gray-900">
          Explore the{' '}
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((item) => {
          const isSelected = selectedStack.some((s) => String(s.id) === String(item.id));

          return (
            <TechCard 
              key={item.id} 
              tech={item} 
              isSelected={isSelected}
              onToggleStack={onToggleStack} 
            />
          );
        })}
      </div>
    </section>
  );
};

export default TechContainer;