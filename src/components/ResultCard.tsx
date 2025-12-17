import { ExternalLink, Heart } from "lucide-react";
import { LINKS } from "../constants/links";
import type { Species } from "../utils/petLogic";
import { useTranslation, Trans } from "react-i18next";
import { trackExternalLinkClick } from "../utils/analytics";

interface ResultCardProps {
    age: number;
    humanAge: number;
    dailyKcal: number;
    cupAmount: number;
    bcs: number;
    species: Species;
}

export default function ResultCard({ age, humanAge, dailyKcal, cupAmount, bcs, species }: ResultCardProps) {
    const { t } = useTranslation();
    const isSenior = age >= 7;
    const isOverweight = bcs > 5;

    const dietLink = species === 'dog' ? LINKS.DOG.DIET : LINKS.CAT.DIET;
    const jointLink = species === 'dog' ? LINKS.DOG.JOINT : LINKS.CAT.JOINT;

    return (
        <div className="bg-white rounded-3xl p-6 shadow-lg space-y-6">
            <div className="space-y-2 text-center">
                <p className="text-stone-500">{t('result.intro')}</p>
                <h2 className="text-3xl font-bold text-stone-800">
                    <Trans i18nKey="result.human_age" values={{ age: humanAge }}>
                        Human Age <span className="text-orange-500">{humanAge}</span>
                    </Trans>
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-stone-50 p-4 rounded-2xl text-center">
                    <p className="text-xs text-stone-500 mb-1">{t('result.daily_kcal')}</p>
                    <p className="font-bold text-stone-700">{dailyKcal} kcal</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-2xl text-center">
                    <p className="text-xs text-stone-500 mb-1">{t('result.cup_desc')}</p>
                    <p className="font-bold text-stone-700">{t('result.cup_unit', { count: cupAmount })}</p>
                </div>
            </div>

            <div className="space-y-3 pt-2">
                {isOverweight && (
                    <a
                        href={dietLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => trackExternalLinkClick('diet', species)}
                        className="flex items-center justify-between w-full p-4 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors"
                    >
                        <span className="font-bold text-sm">{t('result.diet_btn')}</span>
                        <ExternalLink size={16} />
                    </a>
                )}

                {isSenior && (
                    <a
                        href={jointLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => trackExternalLinkClick('joint', species)}
                        className="flex items-center justify-between w-full p-4 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors"
                    >
                        <span className="font-bold text-sm">{t('result.joint_btn')}</span>
                        <Heart size={16} />
                    </a>
                )}
            </div>
        </div>
    );
}
