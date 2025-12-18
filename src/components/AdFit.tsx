import { useEffect, useRef } from 'react';

interface AdFitProps {
    unit: string;
    width: number;
    height: number;
    className?: string;
}

/**
 * Kakao AdFit 광고 컴포넌트
 * @param unit - 광고 단위 ID (DAN-xxx 형식)
 * @param width - 광고 너비
 * @param height - 광고 높이
 * @param className - 추가 CSS 클래스
 */
function AdFit({ unit, width, height, className = '' }: AdFitProps) {
    const adRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 스크립트가 이미 로드되었는지 확인
        const existingScript = document.querySelector('script[src*="ba.min.js"]');

        if (!existingScript) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//t1.daumcdn.net/kas/static/ba.min.js';
            script.async = true;
            document.body.appendChild(script);
        } else {
            // 스크립트가 이미 있으면 광고를 다시 로드
            if (window.adfit) {
                try {
                    window.adfit.refresh();
                } catch (e) {
                    console.debug('AdFit refresh failed:', e);
                }
            }
        }

        return () => {
            // 컴포넌트 언마운트 시 정리 작업은 필요 없음
            // AdFit 스크립트는 페이지 전체에서 공유됨
        };
    }, []);

    return (
        <div className={`adfit-container ${className}`} ref={adRef}>
            <ins
                className="kakao_ad_area"
                style={{ display: 'none' }}
                data-ad-unit={unit}
                data-ad-width={width.toString()}
                data-ad-height={height.toString()}
            />
        </div>
    );
}

export default AdFit;

// TypeScript 타입 확장
declare global {
    interface Window {
        adfit?: {
            refresh: () => void;
        };
    }
}
