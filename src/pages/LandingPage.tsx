import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calculator, Globe } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function LandingPage() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ko' ? 'en' : 'ko');
    };

    return (
        <div className="max-w-3xl mx-auto space-y-12">
            <Helmet>
                <title>{t('meta.title')}</title>
                <meta name="description" content={t('meta.description')} />
                <html lang={i18n.language} />
            </Helmet>

            <div className="flex justify-end px-4">
                <button onClick={toggleLang} className="flex items-center gap-1 text-sm font-medium text-stone-500 hover:text-orange-500 transition-colors bg-white px-3 py-1.5 rounded-full shadow-sm border border-stone-100">
                    <Globe size={16} />
                    <span>{i18n.language === 'ko' ? 'English' : '한국어'}</span>
                </button>
            </div>
            {/* Hero Section */}
            <section className="text-center space-y-6 py-6 md:py-12">
                <div className="inline-block animate-bounce mb-2">
                    <span className="text-4xl">🐾</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 leading-tight whitespace-pre-wrap">
                    <Trans i18nKey="landing.hero_title">
                        Pet Health Care, Start with <span className="text-orange-500">MungNyang Note</span>
                    </Trans>
                </h1>
                <p className="text-xl text-stone-600 max-w-lg mx-auto leading-relaxed opacity-90">
                    {t('landing.hero_desc')}
                </p>
                <button
                    onClick={() => navigate('/calculator')}
                    className="inline-flex items-center gap-3 bg-orange-400 text-white px-8 py-4 rounded-full text-xl hover:bg-orange-500 transition-all hover:scale-105 shadow-[0_4px_14px_0_rgba(251,146,60,0.39)] hover:shadow-[0_6px_20px_rgba(251,146,60,0.23)]"
                >
                    <Calculator size={24} />
                    {t('landing.cta_start')}
                    <ArrowRight size={24} />
                </button>
            </section>

            {/* Feature Grids (Rich Content for AdSense) */}
            <div className="grid md:grid-cols-3 gap-6 px-4">
                <div className="bg-white p-6 rounded-[2rem] shadow-lg border-2 border-orange-50 hover:border-orange-200 transition-colors">
                    <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-4 text-2xl shadow-sm">
                        🎂
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 mb-2">{t('landing.features.age_title')}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">
                        {t('landing.features.age_desc')}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-[2rem] shadow-lg border-2 border-blue-50 hover:border-blue-200 transition-colors">
                    <div className="w-14 h-14 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center mb-4 text-2xl shadow-sm">
                        ⚖️
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 mb-2">{t('landing.features.bcs_title')}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">
                        {t('landing.features.bcs_desc')}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-[2rem] shadow-lg border-2 border-green-50 hover:border-green-200 transition-colors">
                    <div className="w-14 h-14 bg-green-100 text-green-500 rounded-2xl flex items-center justify-center mb-4 text-2xl shadow-sm">
                        🥗
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 mb-2">{t('landing.features.calorie_title')}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">
                        {t('landing.features.calorie_desc')}
                    </p>
                </div>
            </div>

            {/* Detailed Article Section (SEO & AdSense Friendly) */}
            <article className="prose prose-stone max-w-none bg-stone-50 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-stone-800 mb-4">왜 반려동물 비만 관리가 중요할까요?</h2>
                <p className="text-stone-600 mb-4">
                    연구에 따르면, 적정 체중을 유지한 반려견은 비만 반려견보다 평균 2년 더 오래 산다고 합니다.
                    비만은 관절염, 당뇨병, 심장 질환의 주요 원인이 되며, 아이들의 삶의 질을 크게 떨어뜨립니다.
                    하지만 많은 보호자님들이 우리 아이가 '통통해서 귀엽다'고 생각하여 위험 신호를 놓치곤 합니다.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-3">BCS (Body Condition Score)란?</h3>
                <p className="text-stone-600 mb-4">
                    BCS는 반려동물의 체형을 시각적, 촉각적으로 평가하는 지표입니다.
                    1단계(매우 마름)부터 9단계(매우 비만)까지 나누어져 있으며, 이상적인 단계는 4~5단계입니다.
                    갈비뼈가 눈으로 보이지 않지만 만졌을 때 쉽게 느껴지고, 위에서 봤을 때 허리 라인이 잘록하다면 건강한 상태입니다.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-3">정확한 사료량 계산이 필요한 이유</h3>
                <p className="text-stone-600">
                    사료 포장지에 적힌 급여량은 '평균적인' 아이들을 기준으로 합니다.
                    활동량이 적은 실내견이나 중성화를 한 아이들은 그보다 적은 칼로리가 필요합니다.
                    멍냥수첩의 계산기는 RER 공식에 활동 계수(DER)를 적용하여, 우리 아이에게 딱 맞는 맞춤형 급여량을 제시합니다.
                </p>
            </article>

            <div className="p-4 text-center text-xs text-stone-400">
                <p>본 서비스에서 제공하는 결과는 수의학적 참고 자료이며, 전문적인 진단을 대신할 수 없습니다.</p>
                <p>정확한 건강 상태 확인을 위해서는 수의사와 상담하세요.</p>
            </div>
        </div>
    );
}
