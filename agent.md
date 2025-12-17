# Role
당신은 'Pet Health Specialist'이자 'Senior Frontend Developer'입니다.
반려동물을 사랑하는 사용자들이 신뢰할 수 있는 정확한 계산 로직과, 보기만 해도 기분 좋아지는 귀여운 UI(Mobile First)를 구현하는 데 특화되어 있습니다.

# Project Name & Goal
프로젝트명: **"멍냥수첩 (MungNyang Note)"**
목표: 하나의 웹앱에서 **1) 강아지/고양이 나이 환산**, **2) 비만도(BCS) 측정**, **3) 하루 권장 칼로리 계산**을 제공합니다.
결과 화면에서는 반려동물의 상태(비만, 노령 등)에 따라 맞춤형 다이어트 사료나 영양제 구매 링크(수익화)를 자연스럽게 노출합니다.

# Tech Stack
- Framework: React (Vite)
- Language: TypeScript
- Styling: Tailwind CSS (파스텔톤, 둥근 모서리 필수)
- Animation: Framer Motion (부드러운 탭 전환, 카드 팝업 효과)
- Icons: Lucide-react
- Hosting: Firebase Hosting

# Critical Requirements (Must Implement)
다음 3가지는 서비스의 완성도와 수익화를 위해 반드시 코드에 포함되어야 합니다.

1. **Mobile Viewport Fix (`dvh`):**
   - 모바일 웹앱처럼 느껴지도록 전체 컨테이너 높이를 `100dvh` (Dynamic Viewport Height)로 설정하여 주소창에 의한 가림 현상을 방지하세요.

2. **Smart Affiliate Linking (Logic-based):**
   - 단순한 링크가 아니라, 결과에 따른 **조건부 렌더링**을 구현하세요.
   - `Overweight`(과체중) 판정 시 -> "체중 조절용 다이어트 사료 보러가기" 버튼 노출.
   - `Senior`(7세 이상) 판정 시 -> "관절 튼튼 영양제 추천" 버튼 노출.
   - `links.ts` 상수 파일을 따로 만들어 URL을 쉽게 교체할 수 있게 하세요.

3. **BCS Image Placeholders:**
   - 비만도(Body Condition Score) 선택 시 시각 자료가 필수입니다.
   - 실제 이미지는 나중에 넣을 것이므로, 현재는 1~9단계에 해당하는 **회색 Placeholder 박스(또는 Lucide 아이콘)**를 구현하고, "여기에 체형 이미지 추가 필요" 주석을 남기세요.

# Core Logic (Veterinary Standard)

## 1. Age Converter
- **Input:** 종(개/고양이), 크기(소형/중형/대형), 생년월일(또는 나이).
- **Logic:**
  - 고양이: 1년=15살, 2년=24살, 이후 +4살/년.
  - 강아지(소형 ~10kg): 1년=15, 2년=24, 이후 +4살/년.
  - 강아지(중형 ~25kg): 1년=15, 2년=24, 이후 +5살/년.
  - 강아지(대형 25kg~): 1년=15, 2년=24, 이후 +6살/년.

## 2. Obesity & Calorie (RER)
- **Input:** 현재 몸무게(kg), BCS 단계(1~9 슬라이더).
- **RER Formula:** `70 * (체중(kg) ^ 0.75)`
- **Calorie Logic:**
  - 중성화 안 함: RER * 1.8
  - 중성화 함: RER * 1.6
  - 비만 관리 필요: RER * 1.0 (감량 목표)
- **Output:** 일일 권장 칼로리(kcal) 및 종이컵 환산 기준(약 80g/300kcal 기준) 제공.

# UI/UX Design Concept
- **Color Palette:**
  - Primary: `bg-orange-400` (따뜻함, 강아지) & `bg-blue-400` (차분함, 고양이).
  - Background: `bg-stone-50` (눈이 편한 미색).
- **Components:**
  - 모든 버튼과 카드는 `rounded-2xl` 이상으로 둥글게 처리.
  - 입력 폼은 큼직한 터치 영역 확보.
  - 탭(Tab) 전환 시 `layoutId`를 이용한 부드러운 슬라이딩 애니메이션 적용.

# Task Steps
1. 프로젝트 세팅 및 `lucide-react`, `framer-motion` 설치.
2. `utils/petLogic.ts`: 나이 및 칼로리 계산 함수 구현.
3. `constants/links.ts`: 쿠팡 파트너스 링크 등을 담을 상수 파일 생성.
4. `components/PetTab.tsx`: 강아지/고양이 모드 전환 탭 구현.
5. `components/BCSSelector.tsx`: 슬라이더와 체형 이미지 플레이스홀더 구현.
6. `components/ResultCard.tsx`: 결과 및 맞춤형 추천 버튼(광고) 구현.
7. `App.tsx`: 전체 레이아웃 조립.

위 내용을 바탕으로 **지금 바로 실행 가능한 전체 프로젝트 코드**를 파일별로 작성해줘.