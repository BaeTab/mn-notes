import { useTranslation } from "react-i18next";
import type { Species } from "../utils/petLogic";

interface BCSSelectorProps {
    value: number;
    onChange: (val: number) => void;
    species: Species;
}

export default function BCSSelector({ value, onChange, species }: BCSSelectorProps) {
    const { t } = useTranslation();
    const imageSrc = species === 'dog' ? '/images/dog_bcs.png' : '/images/cat_bcs.png';

    // Helper to determining label from value (1-9)
    const getLabel = (val: number) => {
        if (val <= 3) return `${t('calc.bcs_levels.under')} (Underweight)`;
        if (val <= 6) return `${t('calc.bcs_levels.ideal')} (Ideal)`;
        return `${t('calc.bcs_levels.over')} (Overweight)`;
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <label className="text-stone-700 font-bold">BCS</label>
                <span className="text-orange-500 font-bold">{value} - {getLabel(value)}</span>
            </div>

            <div className="bg-white rounded-2xl border-2 border-stone-100 overflow-hidden">
                <img
                    src={imageSrc}
                    alt={`${species} body condition score guide`}
                    className="w-full h-auto object-cover"
                />
            </div>

            <p className="text-xs text-stone-400 text-center">
                {t('calc.bcs_manual_guide')}
            </p>

            {/* Visual Selection Buttons */}
            <div className="grid grid-cols-3 gap-2">
                <button
                    onClick={() => onChange(3)}
                    className={`p-3 rounded-xl border-2 transition-all ${value <= 3
                        ? 'border-blue-400 bg-blue-50 text-blue-700'
                        : 'border-stone-200 hover:border-blue-200'
                        }`}
                >
                    <div className="font-bold text-sm">{t('calc.bcs_levels.under')}</div>
                    {/* <div className="text-xs opacity-70">갈비뼈가 보임</div> */}
                </button>

                <button
                    onClick={() => onChange(5)}
                    className={`p-3 rounded-xl border-2 transition-all ${value > 3 && value <= 6
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-stone-200 hover:border-green-200'
                        }`}
                >
                    <div className="font-bold text-sm">{t('calc.bcs_levels.ideal')}</div>
                    {/* <div className="text-xs opacity-70">허리가 잘록함</div> */}
                </button>

                <button
                    onClick={() => onChange(8)}
                    className={`p-3 rounded-xl border-2 transition-all ${value > 6
                        ? 'border-red-400 bg-red-50 text-red-700'
                        : 'border-stone-200 hover:border-red-200'
                        }`}
                >
                    <div className="font-bold text-sm">{t('calc.bcs_levels.over')}</div>
                    {/* <div className="text-xs opacity-70">허리가 없음</div> */}
                </button>
            </div>

            {/* Fine-tuning Slider */}
            <div className="pt-2">
                <input
                    type="range"
                    min="1"
                    max="9"
                    step="1"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-orange-400"
                />
                <div className="flex justify-between text-xs text-stone-400 px-1 mt-1">
                    <span>1</span>
                    <span>5</span>
                    <span>9</span>
                </div>
            </div>
        </div>
    );
}
