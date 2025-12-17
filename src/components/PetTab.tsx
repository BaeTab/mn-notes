import { motion } from "framer-motion";
import { Dog, Cat } from "lucide-react";
import type { Species } from "../utils/petLogic";


interface PetTabProps {
    selected: Species;
    onSelect: (species: Species) => void;
}

export default function PetTab({ selected, onSelect }: PetTabProps) {
    return (
        <div className="flex bg-white p-2 rounded-full shadow-inner border border-orange-100 mb-8 mx-4">
            {(['dog', 'cat'] as const).map((species) => (
                <button
                    key={species}
                    onClick={() => onSelect(species)}
                    className={`relative flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium transition-colors z-10 ${selected === species ? "text-white" : "text-stone-500 hover:text-stone-700"
                        }`}
                >
                    {selected === species && (
                        <motion.div
                            layoutId="activeTab"
                            className={`absolute inset-0 rounded-full shadow-md ${species === 'dog' ? 'bg-[#FFB978]' : 'bg-[#8FD3FF]'
                                }`}
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                        {species === 'dog' ? <Dog size={18} /> : <Cat size={18} />}
                        {species === 'dog' ? "강아지" : "고양이"}
                    </span>
                </button>
            ))}
        </div>
    );
}
