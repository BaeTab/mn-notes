import { useState, useEffect } from 'react';
import PetTab from '../components/PetTab';
import BCSSelector from '../components/BCSSelector';
import ResultCard from '../components/ResultCard';
import { calculateHumanAge, calculateRER, calculateCalories, estimateBCS, type Species, type DogSize } from '../utils/petLogic';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

function CalculatorPage() {
    const { t } = useTranslation();
    const [species, setSpecies] = useState<Species>('dog');
    const [age, setAge] = useState<number | ''>('');
    const [weight, setWeight] = useState<number | ''>('');
    const [idealWeight, setIdealWeight] = useState<number | ''>('');
    const [dogSize, setDogSize] = useState<DogSize>('small');
    const [isNeutered, setIsNeutered] = useState(true);
    const [bcs, setBcs] = useState(5);
    const [isAutoBcs, setIsAutoBcs] = useState(false);

    const currentAge = Number(age) || 0;
    const currentWeight = Number(weight) || 0;
    const currentIdealWeight = Number(idealWeight) || 0;

    useEffect(() => {
        if (isAutoBcs && currentWeight > 0 && currentIdealWeight > 0) {
            const estimated = estimateBCS(currentWeight, currentIdealWeight);
            setBcs(estimated);
        }
    }, [currentWeight, currentIdealWeight, isAutoBcs]);

    const humanAge = calculateHumanAge(species, currentAge, dogSize);
    const rer = calculateRER(currentWeight);
    const { dailyKcal, cupAmount } = calculateCalories(rer, isNeutered, bcs);

    return (
        <div className="flex justify-center w-full">
            <Helmet>
                <title>{t('meta.title')} - {t('calc.title')}</title>
                <meta name="description" content={t('meta.description')} />
            </Helmet>

            <div className="w-full max-w-md space-y-8">
                <header className="text-center space-y-2">
                    <h1 className="text-3xl font-extrabold text-stone-800">{t('calc.title')}</h1>
                    <p className="text-stone-500">{t('calc.subtitle')}</p>
                </header>

                <PetTab selected={species} onSelect={setSpecies} />

                <div className="bg-white p-6 rounded-3xl shadow-sm space-y-6">
                    <div className="space-y-2">
                        <label className="text-stone-700 font-bold block">{t('calc.age_label')}</label>
                        <input
                            type="number"
                            value={age}
                            placeholder="3"
                            onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
                            className="w-full bg-stone-100 rounded-xl p-4 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-200"
                        />
                    </div>

                    {species === 'dog' && (
                        <div className="space-y-3">
                            <label className="text-stone-700 font-bold block">{t('calc.size_label')}</label>
                            <div className="grid grid-cols-3 gap-2">
                                {(['small', 'medium', 'large'] as const).map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setDogSize(size)}
                                        className={`p-3 rounded-xl text-sm font-medium transition-colors ${dogSize === size
                                            ? 'bg-orange-100 text-orange-600 border-2 border-orange-200'
                                            : 'bg-stone-50 text-stone-500 border-2 border-transparent hover:bg-stone-100'
                                            }`}
                                    >
                                        {t(`calc.sizes.${size}`)}
                                        <span className="block text-xs font-normal mt-1">
                                            {size === 'small' ? '~10kg' : size === 'medium' ? '~25kg' : '25kg~'}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-stone-700 font-bold block">{t('calc.weight_label')}</label>
                        <input
                            type="number"
                            value={weight}
                            placeholder="5.2"
                            step="0.1"
                            onChange={(e) => setWeight(e.target.value === '' ? '' : Number(e.target.value))}
                            className="w-full bg-stone-100 rounded-xl p-4 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-200"
                        />
                    </div>

                    <div className="flex items-center justify-between py-2">
                        <label className="text-stone-700 font-bold">{t('calc.neutered_label')}</label>
                        <button
                            onClick={() => setIsNeutered(!isNeutered)}
                            className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors ${isNeutered ? 'bg-orange-400' : 'bg-stone-300'
                                }`}
                        >
                            <div
                                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${isNeutered ? 'translate-x-6' : 'translate-x-0'
                                    }`}
                            />
                        </button>
                    </div>

                    <div className="border-t border-stone-100 pt-4 space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-stone-700 font-bold">{t('calc.auto_bcs_label')}</label>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-stone-400">{isAutoBcs ? t('calc.target_weight_label') : t('calc.bcs_manual_guide')}</span>
                                <button
                                    onClick={() => {
                                        setIsAutoBcs(!isAutoBcs);
                                        if (!isAutoBcs) setIdealWeight('');
                                    }}
                                    className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${isAutoBcs ? 'bg-blue-400' : 'bg-stone-300'}`}
                                >
                                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isAutoBcs ? 'translate-x-6' : 'translate-x-0'}`} />
                                </button>
                            </div>
                        </div>

                        {isAutoBcs ? (
                            <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                                <div>
                                    <label className="text-blue-600 font-bold block text-sm">{t('calc.target_weight_label')}</label>
                                    <input
                                        type="number"
                                        value={idealWeight}
                                        placeholder={t('calc.target_weight_placeholder')}
                                        step="0.1"
                                        onChange={(e) => setIdealWeight(e.target.value === '' ? '' : Number(e.target.value))}
                                        className="w-full bg-blue-50 border border-blue-100 rounded-xl p-4 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-200 mt-1"
                                    />
                                </div>

                                {currentWeight > 0 && currentIdealWeight > 0 && (
                                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center space-y-1">
                                        <p className="text-xs text-blue-500 font-medium">{t('calc.bcs_result')}</p>
                                        <p className="text-xl font-bold text-blue-700">
                                            {bcs}
                                            <span className="text-sm font-normal text-blue-600 ml-2">
                                                ({bcs <= 3 ? t('calc.bcs_levels.under') : bcs <= 6 ? t('calc.bcs_levels.ideal') : t('calc.bcs_levels.over')})
                                            </span>
                                        </p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <BCSSelector value={bcs} onChange={setBcs} species={species} />
                        )}
                    </div>
                </div>

                {currentAge > 0 && currentWeight > 0 && (
                    <ResultCard
                        age={currentAge}
                        humanAge={humanAge}
                        dailyKcal={dailyKcal}
                        cupAmount={cupAmount}
                        bcs={bcs}
                        species={species}
                    />
                )}
            </div>
        </div>
    );
}

export default CalculatorPage;
