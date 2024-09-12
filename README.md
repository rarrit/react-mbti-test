# :leader: REACT MBTI TEST PROJECT

## :rocket: 베포 링크

[https://fact-mbti-test.vercel.app/](https://fact-mbti-test.vercel.app/)

## :fountain_pen: 프로젝트 설명

- **_프로젝트 기간_**
  - 2024.09.05 ~ 2024.09.10
- **_프로젝트 명_**
  - 팩트폭행 MBTI TEST
- **_프로젝트 목표_**
  - 회원가입/로그인/프로필 관리 기능 구현(JWT)
  - 로그인 유지 기능 구현
  - Tanstack Query 사용
  - axios를 이용한 API 호출
  - 단계별 리팩토링
    - Context API
    - Tanstack Query
    - Zustand

## :hammer_and_wrench: STACK

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## :card_index_dividers: 프로젝트 구조

<details>
<summary>프로젝트 구조</summary>
📦src<br/>
 ┣ 📂api<br/>
 ┃ ┣ 📜authAPI.js<br/>
 ┃ ┗ 📜mbtiAPI.js<br/>
 ┣ 📂assets<br/>
 ┃ ┣ 📂img<br/>
 ┃ ┃ ┣ 📂mbti<br/>
 ┃ ┗ 📜react.svg<br/>
 ┣ 📂components<br/>
 ┃ ┣ 📂footer<br/>
 ┃ ┣ 📂header<br/>
 ┃ ┣ 📜GlobalStyle.jsx<br/>
 ┃ ┣ 📜Layout.jsx<br/>
 ┃ ┣ 📜ProtectedRoute.jsx<br/>
 ┃ ┣ 📜TestForm.jsx<br/>
 ┃ ┣ 📜TestResultItem.jsx<br/>
 ┃ ┗ 📜TestResultList.jsx<br/>
 ┣ 📂constants<br/>
 ┃ ┗ 📜queryKeys.js<br/>
 ┣ 📂context<br/>
 ┃ ┗ 📜AuthContext.jsx<br/>
 ┣ 📂data<br/>
 ┃ ┗ 📜questions.js<br/>
 ┣ 📂hooks<br/>
 ┃ ┣ 📜mutations.jsx<br/>
 ┃ ┗ 📜queries.jsx<br/>
 ┣ 📂instance<br/>
 ┃ ┗ 📜baseInstance.js<br/>
 ┣ 📂pages<br/>
 ┃ ┣ 📜Join.jsx<br/>
 ┃ ┣ 📜Login.jsx<br/>
 ┃ ┣ 📜Main.jsx<br/>
 ┃ ┣ 📜Mypage.jsx<br/>
 ┃ ┣ 📜TestPage.jsx<br/>
 ┃ ┗ 📜TestResultPage.jsx<br/>
 ┣ 📂shared<br/>
 ┃ ┗ 📜Router.jsx<br/>
 ┣ 📂utils<br/>
 ┃ ┣ 📜dateResult.js<br/>
 ┃ ┣ 📜mbtiCalculator.js<br/>
 ┃ ┣ 📜mbtiImg.js<br/>
 ┃ ┗ 📜mbtiResult.js<br/>
 ┣ 📂zustand<br/>
 ┃ ┗ 📜userStore.js<br/>
 ┣ 📜App.css<br/>
 ┣ 📜App.jsx<br/>
 ┣ 📜index.css<br/>
 ┗ 📜main.jsx<br/>
</details>

## :bulb: 주요 기능 소개

### :one: 메인 페이지

![1  mbti-test-main](https://github.com/user-attachments/assets/8d85374b-7b5e-4db3-a19a-35bd9fb1f9f5)

- 약간의 어그로성 문구와 `테스트하기` 버튼을 통해 로그인 페이지로 이동합니다.

### :two: 회원가입 페이지

![3  main-test-join](https://github.com/user-attachments/assets/0ba69d86-15fd-47b7-b134-a414e07cc298)

- JWT 인증 서버를 사용하여 회원가입을 구현합니다.
- 닉네임, 아이디, 비밀번호 입력 후 회원가입 버튼을 클릭하면 "회원가입이 완료되었습니다." 문구와 함께 `로그인` 페이지로 이동합니다.

### :three: 로그인 페이지

![2  mbti-test-login](https://github.com/user-attachments/assets/dcf2d29e-35ca-43cc-acb6-19cd961ac115)

- JWT 인증 서버를 사용하여 로그인을 구현합니다.
- 인증이 되지 않은 사용자는 서비스를 이용할 수 없도록 설정합니다.
- localStorage를 사용하여, JWT토큰을 저장하고 페이지 로드 시 해당 토큰을 이용해 사용자의 로그인 상태를 복원합니다.
- 아이디와, 비밀번호를 입력 후 로그인 버튼을 클릭하면 "로그인이 완료되었습니다." 문구와 함께 `메인` 페이지로 이동합니다.

### :four: 프로필 페이지

![4  mbti-test-mypage](https://github.com/user-attachments/assets/e728fb08-59f0-47cc-abc1-00c89f4c0ea1)


- JWT 인증 서버를 사용하여 프로필 수정을 구현합니다.
- 인증이 되지 않은 사용자는 서비스를 이용할 수 없도록 설정합니다.
- 아이디, 이전 닉네임을 확인할 수 있으며, 변경 닉네임에 값을 입력 후 닉네임을 변경 버튼을 클릭하면 변경된 닉네임으로 확인이 가능합니다.

### :five: 테스트 페이지

![5  mbti-test-test](https://github.com/user-attachments/assets/6125ffa1-ed27-45c3-9bae-71af51103b2b)


- 로그인한 사용자가 MBTI 테스트를 진행할 수 있도록 합니다.
- 12개의 문항에 대해 체크 후 저장 버튼을 클릭하면, MBTI 테스트 결과가 화면에 출력됩니다.

### :six: 결과보기 페이지

![6  mbti-test-result](https://github.com/user-attachments/assets/fb96422b-b977-4936-856d-f4dbabd3bb0a)

- MBTI 테스트 결과 리스트가 있는 페이지입니다.
  - 사용자가 MBTI 테스트를 완료하면, 결과를 계산하여 json-server에 저장합니다.
  - MBTI 결과는 `E/I`, `S/N`, `T/F`, `J/P` 네 가지 지표를 기반으로 계산됩니다.
  - 테스트 결과는 기본적으로 공개(true)로 설정됩니다.
  - 게시물은 본인이 쓴 게시물만 공개/비공개, 삭제 처리가 가능합니다.
    - 비공개 선택 시 해당 글은 결과보기 페이지에서 본인만 확인이 가능합니다.

## 구현 과정
- [[1차] 팩트폭행 MBTI 테스트 프로젝트 - 초기 세팅 및 회원 기능](https://rarrit.github.io/react/mini/mbti-project-1/)
- [[2차] 팩트폭행 MBTI 테스트 프로젝트 - MBTI 테스트 기능 적용](https://rarrit.github.io/react/mini/mbti-project-2/)
- [[3차] 팩트폭행 MBTI 테스트 프로젝트 - 리팩토링(API,상태 관리)](https://rarrit.github.io/react/mini/mbti-project-3/)


## :joystick: Trouble Shooting
- [React에서 템플릿 리터럴 br 적용하는 방법](https://rarrit.github.io/til/react/troubleshooting/react-inner-html/)
- 작성중...

## :fire: 회고

이번 프로젝트를 통해 다양한 기술들을 접해볼 수 있었다. 트러블 슈팅을 처리하느라 사용하지 못한 기술들도 있는데, 이후 리팩토링 과정을 진행하면서 경험해볼 예정이다.

- `Context API`
  - Context API를 사용하면서 무분별한 props 사용이 사라졌고, 필요한 props와 이벤트를 직접 가져와 사용하다 보니 하위 컴포넌트로 props를 전달하는 불필요한 작업이 줄어들었다. 덕분에 코드의 가독성도 훨씬 좋아졌다.
- `Tanstack Query`
  - Tanstack Query는 서버 상태를 효율적으로 관리할 수 있어서 매우 유용했다. 특히 커스텀 훅으로 만들어 사용하면서 복잡한 로직을 훨씬 간결하게 처리할 수 있었고 API 호출 시 데이터 처리 흐름을 더 명확하게 할 수 있었다.
- `tailwind`
  - 처음에는 Tailwind로 전체 스타일을 관리하려 했으나, 가독성 문제가 발생해 display flex와 같은 레이아웃 잡는 용도로만 사용하려 했다. Header 작업 중 reset.css 라이브러리를 설치했더니 tailwind가 적용되지 않는 문제가 발생되었으며 1시간 넘게 수정했지만 실패로 돌아가 이번 과제 완료 후 문제점을 찾으려 한다. (styled-components 로 대체함)
- `zustand`
  - 이번 프로젝트에 적용하지 못했지만, 차후 리팩토링 과정에서 상태 관리를 더욱 효율적으로 할 수 있도록 Zustand를 사용할 계획이다. 특히, 전역 상태 관리에서 얼마나 효율적인지 확인해보고싶다.

### :pushpin: 5-1) 어려웠던 점

- 로그인 유,무를 확인하여 처리하는 과정에서 토큰과 상태값 관리에 어려움이 있었다.
- Tanstack Query를 custom hook으로 만들어 사용했을 때 동작 방식을 이해하는 데에 어려움이 있었다.

### :pushpin: 5-2) 알게된 점

- 서버 상태관리에 대해 알아볼 수 있는 좋은 시간이었다.
- 커스텀 훅을 만들어 사용했을 때 이전의 복잡한 로직을 간결하게 처리할 수 있게 되었다.
- tailwind에서 적용할 값이 많아질 경우 가독성이 정말 좋지 않은 것 같다. 기본 레이아웃에만 적용하면 어떨지 생각이 든다.
