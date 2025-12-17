import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";

/**
 * 반려동물 종류 선택 이벤트
 */
export const trackPetTypeSelection = (petType: 'dog' | 'cat') => {
    if (analytics) {
        logEvent(analytics, 'select_pet_type', {
            pet_type: petType,
        });
    }
};

/**
 * 계산 완료 이벤트
 */
export const trackCalculationComplete = (params: {
    species: 'dog' | 'cat';
    age: number;
    weight: number;
    bcs: number;
    isNeutered: boolean;
    dogSize?: 'small' | 'medium' | 'large';
}) => {
    if (analytics) {
        logEvent(analytics, 'calculation_complete', {
            species: params.species,
            age: params.age,
            weight: params.weight,
            bcs: params.bcs,
            is_neutered: params.isNeutered,
            dog_size: params.dogSize || 'n/a',
        });
    }
};

/**
 * BCS 모드 전환 이벤트
 */
export const trackBCSModeToggle = (mode: 'auto' | 'manual') => {
    if (analytics) {
        logEvent(analytics, 'toggle_bcs_mode', {
            mode: mode,
        });
    }
};

/**
 * 외부 링크 클릭 이벤트
 */
export const trackExternalLinkClick = (linkType: 'diet' | 'joint', species: 'dog' | 'cat') => {
    if (analytics) {
        logEvent(analytics, 'click_external_link', {
            link_type: linkType,
            species: species,
        });
    }
};

/**
 * 언어 변경 이벤트
 */
export const trackLanguageChange = (language: string) => {
    if (analytics) {
        logEvent(analytics, 'change_language', {
            language: language,
        });
    }
};

/**
 * CTA 버튼 클릭 이벤트
 */
export const trackCTAClick = (buttonName: string) => {
    if (analytics) {
        logEvent(analytics, 'click_cta', {
            button_name: buttonName,
        });
    }
};

/**
 * 중성화 상태 토글 이벤트
 */
export const trackNeuteredToggle = (isNeutered: boolean) => {
    if (analytics) {
        logEvent(analytics, 'toggle_neutered', {
            is_neutered: isNeutered,
        });
    }
};

/**
 * 강아지 크기 선택 이벤트
 */
export const trackDogSizeSelection = (size: 'small' | 'medium' | 'large') => {
    if (analytics) {
        logEvent(analytics, 'select_dog_size', {
            size: size,
        });
    }
};
