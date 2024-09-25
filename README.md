# MainCalendar
**Mendix를 위한 FullCalendar 통합 위젯**

MainCalendar 위젯은 FullCalendar를 Mendix에 통합할 수 있는 직관적인 방법을 제공합니다. 다양한 캘린더 뷰, 이벤트 상호작용을 지원하며, 애플리케이션의 요구에 맞게 완전히 커스터마이징할 수 있습니다.

## 기능
- **다양한 캘린더 뷰**: FullCalendar의 dayGrid 및 timeGrid 플러그인을 사용하여 월, 주, 일 뷰 간에 전환할 수 있습니다.
- **인터랙티브 이벤트 관리**: Mendix Microflow와 통합하여 이벤트 생성, 수정, 삭제를 지원합니다.
- **다국어 지원**: FullCalendar는 여러 언어를 지원하며, 이 위젯은 한국어로 사전 설정되어 있습니다.
- **사용자 정의 버튼**: 이벤트 생성을 위한 커스텀 버튼을 추가할 수 있습니다.
- **반응형 디자인**: 데스크탑과 모바일 장치 모두에서 작동합니다.

## 사용법
1. Mendix 프로젝트에서 **MainCalendar** 위젯을 설치합니다.
2. 위젯을 페이지에 배치하고 필요한 속성 및 Microflow를 설정합니다.
3. 캘린더에 나타낼 이벤트 데이터를 **events** 속성을 통해 전달합니다.
4. **onClickEvent** 및 **onCreateEvent**와 같은 Microflow 이벤트 핸들러를 설정하여 이벤트 클릭이나 생성 시 동작을 처리합니다.

## 데모 프로젝트
[샌드박스 링크]

## 문제, 제안 및 기능 요청
문제나 기능 요청이 있으면 아래 링크에서 확인 및 제출해 주세요:  
[GitHub 이슈 링크]

## 개발 및 기여 방법

1. NPM 패키지 의존성을 설치합니다:

npm install
NPM v7.x.x 이상을 사용 중인 경우 다음 명령어를 사용하세요:

npm install --legacy-peer-deps
2. 코드 변경을 실시간으로 반영하려면 다음 명령어로 개발 모드를 실행합니다:

npm start
이 명령어를 실행하면:
- 위젯이 번들링됩니다.
- 번들은 프로젝트 루트 디렉토리의 `dist` 폴더에 포함됩니다.
- 번들은 Mendix 테스트 프로젝트의 `deployment` 및 `widgets` 폴더에 포함됩니다.

## 기여
위젯 개발에 기여하고 싶다면, GitHub 리포지토리에서 Pull Request를 생성해 주세요. 프로젝트 기여 지침에 따라 코드를 제출하시면 됩니다.
