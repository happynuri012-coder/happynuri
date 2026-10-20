# 해피누리 홈페이지 (v19 · 회사소개 페이지 추가)

정적 반응형 홈페이지입니다. GitHub Pages에 배포할 수 있습니다.

## 파일 구성
- `index.html`: 메인 페이지 구조 및 콘텐츠
- `about.html`: 회사 소개 페이지 (대표 인사말, 이름의 뜻, 미션·비전, 핵심 가치, CI·색상 의미, 회사 개요, 제휴 안내)
- `styles.css`: 반응형 디자인과 스타일
- `script.js`: 모바일 메뉴 및 연도 표시
- `assets/happy-nuri-logo.png`: 투명 배경 세로형 로고 (밝은 배경용, 원본 색상)
- `assets/happy-nuri-logo-light.png`: 투명 배경 세로형 로고, 글자만 흰색 (어두운 배경용: 히어로·푸터)
- `assets/happy-nuri-logo-horizontal.png` / `-horizontal-light.png`: 심벌+HAPPY NURI 가로형 (헤더 사용)
- `assets/happy-nuri-logo-en-light.png`: 심벌 + 영문 HAPPY NURI만 (흰 글자, 회사소개 CI 영역에서 사용)
- `assets/happy-nuri-symbol.png`: 심벌만 투명 배경
- `assets/favicon.png`, `favicon-48.png`, `apple-touch-icon.png`: 심벌 기반 아이콘 (apple-touch-icon만 네이비 배경)
- `assets/happy-nuri-logo-original.png`, `-symbol-original.png`, `-reference.jpg`: 투명 처리 전 원본 (사이트에서는 사용하지 않음, 보관용)
- `assets/hero-bg.jpg` / `hero-bg-sm.jpg`: 히어로 배경 이미지 (PC 2400×1200 / 모바일 1200×600, 사람 옆모습 + AI 칩 두뇌 + 사방으로 뻗는 지능망)
- `assets/page-bg.jpg`: 회사소개 페이지 상단 배경 (금색·청록 리본과 연결망)
- `assets/signature.png`: 대표 인사말 옆 자필 서명 (투명 PNG, 같은 이름으로 교체 가능)
- `assets/favicon.svg`: 구버전 CSS 모사 아이콘 (사용하지 않음)

## GitHub Pages 배포/업데이트
1. 저장소에 기존 `index.html`, `styles.css`, `script.js`와 `assets` 폴더를 업로드합니다.
2. 기존 파일을 교체할 때는 `assets` 폴더 안 이미지 파일도 함께 올립니다.
3. Settings → Pages에서 배포 상태를 확인합니다.

## 유의사항
- 해피운세 및 AI 업무 도구는 현재 페이지에서 준비/개발 중으로 표시합니다.
- 개인정보처리방침 링크 대신 현재는 개인정보 관련 문의 이메일 링크를 제공합니다. 실제로 개인정보를 수집하는 기능을 추가하기 전에는 사업 운영 방식에 맞는 개인정보처리방침 페이지를 별도로 마련해야 합니다.
- 헤더(가로형), 메인 비주얼·푸터(흰 글자 세로형)의 로고는 제공된 원본 로고를 배경만 제거해 사용합니다. CSS 도형으로 로고를 다시 그리지 않습니다.
- 어두운 배경에서는 반드시 `-light` 버전을 사용하세요. 기본 버전의 네이비 글자는 어두운 배경에서 보이지 않습니다.

- `about.html`의 대표 인사말은 초안입니다. 주소는 사업자등록증의 사업장 소재지로 통일했습니다.
