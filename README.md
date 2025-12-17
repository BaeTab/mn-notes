# 멍냥수첩 (MungNyang Note) 🐾

**멍냥수첩**은 반려동물(강아지, 고양이)의 건강을 관리하기 위한 종합 웹 애플리케이션입니다.  
수의학적 기준을 바탕으로 나이 환산, 비만도(BCS) 분석, 그리고 하루 권장 칼로리 계산 기능을 제공합니다.

🔗 **배포 주소**: [https://mn-notess.web.app](https://mn-notess.web.app)

---

## ✨ 주요 기능

### 1. 📅 나이 계산기
- 단순히 7을 곱하는 방식이 아닙니다.
- **미국 수의사협회(AVMA)** 가이드라인을 준수합니다.
- 소형견, 대형견, 고양이의 생애 주기를 고려한 정밀한 사람 나이 환산 기능을 제공합니다.

### 2. ⚖️ 비만도 (BCS) 측정 및 자동 계산
- **세계소동물수의사회(WSAVA)**의 9단계 BCS 차트를 기반으로 합니다.
- **자동 모드**: 현재 체중과 목표 체중을 입력하면 자동으로 BCS 단계를 추정해줍니다.
- **수동 모드**: 직관적인 이미지를 보고 직접 선택하거나 슬라이더로 미세 조정이 가능합니다.

### 3. 🍖 맞춤형 칼로리 처방 (RER/DER)
- **RER (휴식기 에너지 요구량)** 공식을 사용합니다.
- 활동 계수(DER)를 적용하여 중성화 여부, 비만 여부 등에 따라 우리 아이에게 딱 맞는 하루 권장 칼로리와 급여량(종이컵 기준)을 계산합니다.

### 4. 🌐 다국어 지원 (i18n)
- **한국어**와 **영어**를 지원하여 글로벌 사용자를 배려했습니다.
- 브라우저 언어 감지 및 버튼을 통한 실시간 언어 전환이 가능합니다.

### 5. 📱 반응형 웹 디자인
- 모바일 퍼스트 디자인으로 스마트폰, 태블릿, 데스크탑 어디서든 쾌적하게 사용할 수 있습니다.

---

## 🛠 기술 스택

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Deployment**: Firebase Hosting
- **Analytics**: Firebase Analytics (Google Analytics 4)
- **I18n**: i18next, react-i18next
- **SEO**: React Helmet Async

---

## 🚀 설치 및 실행 방법

```bash
# 레포지토리 클론
git clone [repository-url]

# 디렉토리 이동
cd mn-notes

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

---

## 📄 라이선스 (License)

이 프로젝트는 **비상업적 용도**로만 사용할 수 있습니다.  
자세한 내용은 [LICENSE](./LICENSE) 파일을 참고하세요.

**CC BY-NC 4.0 (Attribution-NonCommercial 4.0 International)**
- ✔️ **공유**: 복제, 배포, 전시, 공연 및 공중송신 (비상업적 목적으로만)
- ✔️ **변경**: 2차적 저작물 작성 (비상업적 목적으로만)
- ❌ **영리 목적 이용 불가**: 이 저작물은 영리 목적으로 이용할 수 없습니다.

Copyright (c) 2025 MungNyang Note. All Rights Reserved.
