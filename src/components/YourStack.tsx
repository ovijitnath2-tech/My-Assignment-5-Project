import type { Itech } from '../type/type';

interface YourStackProps {
  stack: Itech[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-6">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
        <p className="text-xs text-gray-400 font-medium mt-1">
          {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
        </p>
      </div>

      {/* List of items or Empty state */}
      {stack.length === 0 ? (
        <div className="py-8 text-center text-sm text-gray-400 border border-dashed border-gray-200 rounded-xl mb-4">
          No technologies added yet.
        </div>
      ) : (
        <div className="space-y-3 mb-6 max-h-87.5 overflow-y-auto pr-1">
          {stack.map((item) => (
            <div 
              key={item.id}
              className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <div>
                  <h4 className="text-sm font-bold text-gray-800 leading-none">{item.name}</h4>
                  <span className="text-[10px] text-gray-400 font-medium">{item.category}</span>
                </div>
              </div>

              {/* Single item remove button */}
              <button 
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 font-bold text-sm px-2 py-1 transition-colors"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All Button */}
      {stack.length > 0 && (
        <button 
          onClick={onRemoveAll}
          className="w-full py-2.5 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 font-medium text-sm transition-colors"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;