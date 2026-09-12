import type { Itech } from "../type/type";

interface TechCardProps{
    tech:Itech,
    isSelected:Boolean,
    onToggleStack:(Tech:Itech)=>void;
}

const TechCard = ({ tech,isSelected=false, onToggleStack }: TechCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
      
      {/* Top Row: Icon + Badge */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100">
            <img src={tech.icon} alt={tech.name} className="w-7 h-7 object-contain" />
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            {tech.badge}
          </span>
        </div>

        {/* Name & Description */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
          {tech.description}
        </p>
      </div>

      {/* Bottom Section: Meta details + CTA Button */}
      <div>
        {/* Meta Info: Category, Difficulty, Rating */}
        <div className="flex items-center justify-between text-xs text-gray-600 mb-5 pt-4 border-t border-gray-100">
          <span className="bg-gray-100 text-gray-700 font-medium px-2.5 py-1 rounded-md">
            {tech.category}
          </span>
          <span className="font-medium text-gray-500">{tech.difficulty}</span>
          <div className="flex items-center gap-1 font-semibold text-gray-800">
            <span className="text-amber-400">★</span>
            <span>{tech.rating}</span>
          </div>
        </div>

        {/* Add to Stack Button */}
       <button 
  onClick={(e) => {
    e.stopPropagation();
    console.log("Card button clicked for:", tech?.name);
    if (onToggleStack) {
      onToggleStack(tech);
    } else {
      console.error("onToggleStack prop is missing or undefined in TechCard!");
    }
  }}
  className={`w-full font-medium text-sm py-3 rounded-xl transition-colors shadow-sm cursor-pointer ${
    isSelected 
      ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100' 
      : 'bg-gray-900 hover:bg-black text-white'
  }`}
>
  {isSelected ? 'Remove from Stack' : 'Add to Stack'}
</button>
      </div>

    </div>
  );
};


        
        
    


export default TechCard;