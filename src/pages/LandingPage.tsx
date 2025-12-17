import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calculator, Heart, Info } from 'lucide-react';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="max-w-3xl mx-auto space-y-12">
            {/* Hero Section */}
            <section className="text-center space-y-6 py-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 leading-tight">
                    반려동물 건강 관리,<br />
                    <span className="text-orange-500">멍냥수첩</span>으로 시작하세요
                </h1>
                <p className="text-lg text-stone-600 max-w-lg mx-auto leading-relaxed">
                    우리 아이의 사람 나이 환산부터, 비만도 측정, 하루 권장 칼로리 계산까지.
                    수의학적 기준에 맞춘 정확한 정보를 제공합니다.
                </p>
                <button
                    onClick={() => navigate('/calculator')}
                    className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-stone-700 transition-all hover:scale-105 shadow-xl"
                >
                    <Calculator size={20} />
                    건강 진단 시작하기
                    <ArrowRight size={20} />
                </button>
            </section>

            {/* Feature Grids (Rich Content for AdSense) */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-4">
                        <Info size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 mb-2">나이 계산기</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">
                        단순히 7을 곱하는 것이 아닙니다. 미국 수의사협회(AVMA) 가이드라인을 기반으로,
                        소형견, 대형견, 고양이의 생애 주기에 맞춘 정확한 사람 나이를 계산해드립니다.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                        <Heart size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 mb-2">비만도(BCS) 분석</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">
                        반려동물의 비만은 만병의 근원입니다. 세계소동물수의사회(WSAVA)의 9단계 BCS 차트를
                        기반으로 우리 아이의 체형을 분석하고 적정 체중을 제안합니다.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4">
                        <Calculator size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 mb-2">칼로리 처방</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">
                        RER(휴식기 에너지 요구량) 공식을 사용하여, 활동량과 중성화 여부,
                        다이어트 필요 여부에 따른 정확한 하루 권장 칼로리와 급여량을 알려드립니다.
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
