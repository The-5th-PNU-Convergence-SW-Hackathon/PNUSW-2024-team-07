
# Template for Hackathon
이 레파지토리는 참여자들이 해커톤 결과물을 위한 레파지토리 생성시에 참고할 내용들을 담고 있습니다.
1. 레파지토리 생성
2. 레파지토리 구성
3. README.md 가이드라인
4. README.md 작성팁
<br/>


## 1. 레파지토리 생성하기
- [https://classroom.github.com/a/mrBmI_GF](https://classroom.github.com/a/mrBmI_GF)
- 위 Github Classroom 링크에 접속해 본인 조의 github 레파지토리를 생성하세요.
<img src="https://github.com/pnuswedu/SW-Hackathon-2024/assets/34933690/a1e1403b-eeb5-40f1-b2a3-83f5d640a369" width="600px" alt="Classroom에서 team 생성" />

- 레파지토리 생성 시 팀 이름은 `{연도}-TEAM-{조번호}` 형식으로 생성하세요.
- 예를 들어, 2024년도 3조의 팀명은 `2024-TEAM-03` 입니다.
- 이 경우 `PNUSW-2024-TEAM-03`이라는 이름으로 레포지토리가 생성됩니다.
<br/>


## 2. 레파지토리 구성
- 레파지토리 내에 `README.md` 파일 생성하고 아래의 가이드라인과 작성팁을 참고하여 파일을 작성하세요.
- 레파지토리 내에 `docs` 폴더를 생성하고 폴더 내에는 과제 수행 하면서 작성한 각종 보고서, 발표자료를 올려둡니다.
- 그 밖에 레파지토리의 폴더 구성은 과제 결과물에 따라 자유롭게 구성하되 가급적 코드의 목적이나 기능에 따라 폴더를 나누어 구성하세요.  
<br/>


### 1. 프로젝트 소개
#### 1.1. 개발배경 및 필요성
> 인크루트의 조사 결과 일주일에 한 시간 미만으로 대화하는 가족의 비율은 함께 사는 경우 59.4%, 따로 사는 경우 89.2%이다. 또한 통계청 조사 결과 가족과 떨어져 사는 1인 가구가 꾸준히 증가하고 있다. 이를 통해 가족 소> 통 단절 문제는 점차 심화 될 것임을 예상할 수 있다. 이런 가족 소통 문제는 가족 간의 오해부터 전문가의 도움이 필요한 상황 및 중장년 우울증의 원인이 되어 심각한 사회문제로 이어진다. (파이낸셜, 중년 성인의 우울과 무력감)
>부산 지역 가족과 부산대 학생들은 이런 가족 소통 단절 위험에 더 취약하다. 통계청의 조사 결과 부산은 20대 청년 인구 유출 문제가 지방에서 가장 높다. 또한 2023년 부산대 언론사 채널 303의 조사 결과 가족과 떨어져 사는 응답자가 과반수 이상이었다. 즉, 이미 가족 소통 단절을 경험하고 있거나, 경험하게 될 가능성이 다른 지역에 비해 크다. 가족과 떨어져서 생활하는 부산대 재학생 5명과 진행한 FGI에서도 "고등학교 때보다 대화시간이 줄었다.", >"필요한 이야기만 하고 안부 위주로만 대화한다."라는 응답을 얻었다.


가족 소통 단절이 발생하는 원인은 1) 세대 차이와 일상 공유 부족으로 인한 대화 소재 부족, 2) 공감 표현의 어려움, 3) 물리적, 심리적 요인으로 인한 가족과 시간 보내기 어려움이다. (이수화, 중앙일보) 또한, 자체적으로 실시한 FGI를 통해서 온라인을 통한 연락이더라도, 바쁜 일상 혹은 심리적 거리에 의해 연락에 시간을 투자하기 어려워하는 것을 알 수 있었다. 기존의 대안으로는 카카오톡, 네이버 밴드, 가족 문답 앱인 앤서록 등이 있다. 그러나 카카오톡은 대화 주제를 만들 수 있는 기능 미비하며, 네이버 밴드는 1020의 낮은 사용률, 앤서록은 질문형식의 높은 진입 장벽이란 단점을 가진다. 또 다른 대안으로 전문가와의 상담이 있지만, 높은 비용, 양측의 시간 조율, 다른 지역 거주 시 상담 불가능 등의 단점이 있다. (심리 상담센터 빈, 숨고) 따라서 가족 소통 단절의 원인을 해결하면서도 낮은 가격과 쉬운 기능을 가진 앱 개발을 통해 소통 단절을 해결하고자 한다.
"패밀링" 앱을 통해 대화 소재를 만들고, 애정 표현을 쉽게 하도록 하며, 연락의 부담을 줄여 가족 소통 단절을 해결하자. 

#### 1.2. 개발 목표 및 주요 내용
> 프로젝트의 목표 및 주요 내용을 작성하세요.

패밀링 앱 소개 
"패밀링"의 뜻: family + ing의 합성어로 앱을 사용하며 가족 소통 단절 문제를 해결하고, 더 가까운 가족이 되어가자는 의미를 담고있다.

주요 기능 설명

생성형 AI란 주어진 문제(프롬프트)에 맞는 텍스트, 이미지, 코드 등을 만들어 낼 수 있는 AI로 1) 빠른 데이터 생성, 2) 언제든지 이용 가능, 3) 원하는 프롬프트에 따라 다양한 데이터 제공이라는 장점을 가진다. 
(1) 스냅샷: 미리 설정한 시간에, 매일 주어지는 주제에 맞는 사진을 업로드하고 가족과 공유한다. 쉽고 간편하게 일상을 공유해 대화 주제를 만들어 가며, 해당 사진을 주제로 채팅을 활성화할 수 있다.  
(2) AI 봇: 패밀링 앱 내 채팅에서 사용하는 기능으로 생성형 AI를 이용해 사용자가 입력한 텍스트를 애정 표현과 공감 표현을 포함한 텍스트로 변환해 준다. 
따라서 이 생성형 AI를 AI 봇에 도입해 즉각적인 효과, 물리적, 시간적 한계 극복 등의 이점을 가져갈 수 있다. 또한 애정이나 공감 표현에 서툴렀던 사용자에게 간단하고, 경제적인 해결책이 될 수 있다.
(3) 애정카드 : 사용자는 애정, 걱정, 응원의 메시지 등이 적힌 카드를 원하는 가족에게 보낼 수 있다. 이는 바쁜 일상속에서도 가족 간의 애정과 지지를 표현할 수 있게 해준다.
(4) 상태보기 : 사용자의 현재 상태를 설정하고 가족들과 공유할 수 있다. 각자의 상태와 연락 가능 여부를 한눈에 확인할 수 있어 연락에 대한 부담을 줄일 수 있다.


#### 1.3. 세부내용
> 위 내용을 작성하세요.

#### 1.4. 기존 서비스 대비 차별성
> 위 내용을 작성하세요.

#### 1.5. 사회적가치 도입 계획
> 위 내용을 작성하세요.


### 2. 상세설계
#### 시스템 구성도

<img width="675" alt="스크린샷 2024-08-30 오후 4 48 23" src="https://github.com/user-attachments/assets/8eb2af42-b79c-4a25-9a81-57cba9ea22fd">

#### ERD

![familing-erd](https://github.com/user-attachments/assets/d5d6ce83-18e1-4165-bc21-a078888bf474)


#### 2.1. 사용 기술

| 구분                | 사항(성능)       |
|---------------------|-----------------|
| **스프링부트**       | 3.2.5           |
| **java**            | 17              |
| **GPT API**         | GPT3.5           |
| **kafka**           | 2.7.2           |
| **MySQL**           | 8.0             |
| **Docker**          | 24.0.5          |
| **AWS**             | t2.micro, s3, RDS    |
| **React Native CLI**| 2.0.1           |
| **Node.js**         | 20.12.0         |
| **Android Studio**  | 2023.2.1        |
| **JDK**             | 17              |


### 3. 개발결과
#### 3.1. 전체시스템 흐름도
> 위 내용을 작성하세요.

#### 3.2. 기능설명
> 각 페이지 마다 사용자의 입력의 종류와 입력에 따른 결과 설명 및 시연 영상.
> 
> ex. 로그인 페이지:
> 
> - 이메일 주소와 비밀번호를 입력하면 입력창에서 유효성 검사가 진행됩니다.
> 
> - 요효성 검사를 통과하지 못한 경우, 각 경고 문구가 입력창 하단에 표시됩니다.
>   
> - 유효성 검사를 통과한 경우, 로그인 버튼이 활성화 됩니다.
>   
> - 로그인 버튼을 클릭 시, 입력한 이메일 주소와 비밀번호에 대한 계정이 있는지 확인합니다.
>   
> - 계정이 없는 경우, 경고문구가 나타납니다.
>
> (영상)

#### 3.3. 기능명세서
> 개발한 제품에 대한 기능명세서를 작성해 제출하세요.
> 
> 노션 링크, 한글 문서, pdf 파일, 구글 스프레드 시트 등...

#### 3.4. 디렉토리 구조

├── familing/
│   ├── domain/
│   │   ├── alarm/
│   │   │   ├── controller/
│   │   │   │   ├── AlarmController
│   │   │   ├── dto/
│   │   │   │   ├── AlarmDto
│   │   │   │   ├── AlarmResponseDto
│   │   │   ├── entity/
│   │   │   │   ├── Alarm
│   │   │   ├── repository/
│   │   │   │   ├── AlarmRepository
│   │   │   ├── service/
│   │   │   │   ├── AlarmService
│   │   │   │   ├── AlarmType
│   │   ├── chat/
│   │   │   ├── config/
│   │   │   │   ├── HttpHandshakeInterceptor
│   │   │   │   ├── ListenerConfiguration
│   │   │   │   ├── ProducerConfig
│   │   │   │   ├── StompHandler
│   │   │   ├── controller/
│   │   │   │   ├── ChatController
│   │   │   ├── dto/
│   │   │   │   ├── ChatResponseDto
│   │   │   │   ├── ChatRoomInfoDto
│   │   │   │   ├── ChattingHistoryResponseDto
│   │   │   ├── entity/
│   │   │   │   ├── ChatRoom
│   │   │   │   ├── Chatting
│   │   │   │   ├── Message
│   │   │   ├── messaging/
│   │   │   │   ├── MessageReceiver
│   │   │   │   ├── MessageSender
│   │   │   ├── repository/
│   │   │   │   ├── ChatRoomRepository
│   │   │   │   ├── MongoChatRepository
│   │   │   ├── service/
│   │   │   │   ├── ChatService
│   │   ├── family/
│   │   │   ├── controller/
│   │   │   │   ├── FamilyController
│   │   │   ├── dto/
│   │   │   │   ├── FamilyCode
│   │   │   │   ├── FamilyDto
│   │   │   │   ├── FamilyName
│   │   │   │   ├── FamilyUserDto
│   │   │   │   ├── FamilyUsersDto
│   │   │   │   ├── MyFamilyDto
│   │   │   ├── entity/
│   │   │   │   ├── Family
│   │   │   ├── handler/
│   │   │   │   ├── FamilyCodeHandler
│   │   │   ├── repository/
│   │   │   │   ├── FamilyRepository
│   │   │   ├── service/
│   │   │   │   ├── FamilyService
│   │   ├── gpt/
│   │   │   ├── config/
│   │   │   │   ├── ChatGPTConfig
│   │   │   ├── controller/
│   │   │   │   ├── ChatGPTController
│   │   │   ├── dto/
│   │   │   │   ├── ChatGptRequest
│   │   │   │   ├── ChatGPTResponse
│   │   │   │   ├── GptRequestMessage
│   │   │   │   ├── Prompt
│   │   ├── lovecard/
│   │   │   ├── controller/
│   │   │   │   ├── LovecardController
│   │   │   ├── dto/
│   │   │   │   ├── LovecardLogResponse
│   │   │   │   ├── LovecardRequest
│   │   │   │   ├── LovecardResponse
│   │   │   ├── entity/
│   │   │   │   ├── Lovecard
│   │   │   │   ├── LovecardLog
│   │   │   ├── repository/
│   │   │   │   ├── LovecardLogRepository
│   │   │   │   ├── LovecardRepository
│   │   │   ├── service/
│   │   │   │   ├── LovecardService
│   │   ├── payment/
│   │   │   ├── entity/
│   │   │   │   ├── Payment
│   │   ├── snapshot/
│   │   │   ├── controller/
│   │   │   │   ├── SnapshotController
│   │   │   ├── dto/
│   │   │   │   ├── CustomPage
│   │   │   │   ├── SnapshotImageRequest
│   │   │   │   ├── SnapshotResponse
│   │   │   ├── entity/
│   │   │   │   ├── Snapshot
│   │   │   │   ├── SnapshotImage
│   │   │   │   ├── SnapshotTitle
│   │   │   ├── repository/
│   │   │   │   ├── SnapshotImageRepository
│   │   │   │   ├── SnapshotRepository
│   │   │   │   ├── SnapshotTitleRepository
│   │   │   ├── scheduler/
│   │   │   │   ├── SnapshotScheduler
│   │   │   ├── service/
│   │   │   │   ├── SnapshotService
│   │   │   │   ├── TitleService
│   │   ├── status/
│   │   │   ├── controller/
│   │   │   │   ├── StatusController
│   │   │   ├── dto/
│   │   │   │   ├── MyFamilyStatusResponse
│   │   │   │   ├── StatusRequest
│   │   │   │   ├── StatusResponse
│   │   │   ├── entity/
│   │   │   │   ├── Status
│   │   │   ├── repository/
│   │   │   │   ├── StatusRepository
│   │   │   ├── service/
│   │   │   │   ├── StatusService
│   │   ├── subscription/
│   │   │   ├── controller/
│   │   │   │   ├── SubscriptionController
│   │   │   ├── dto/
│   │   │   │   ├── SubscriptionResponse
│   │   │   ├── entity/
│   │   │   │   ├── Subscription
│   │   │   ├── repository/
│   │   │   │   ├── SubscriptionRepository
│   │   │   ├── service/
│   │   │   │   ├── SubscriptionService
│   │   ├── user/
│   │   │   ├── controller/
│   │   │   │   ├── UserController
│   │   │   ├── dto/
│   │   │   │   ├── Nickname
│   │   │   │   ├── Realname
│   │   │   │   ├── UserDto
│   │   │   │   ├── UserResponse
│   │   │   ├── entity/
│   │   │   │   ├── User
│   │   │   ├── repository/
│   │   │   │   ├── UserRepository
│   │   │   ├── service/
│   │   │   │   ├── UserService
│   │   │   │   ├── Gender
│   ├── global/
│   │   ├── config/
│   │   │   ├── CorsMvcConfig
│   │   │   ├── MongoConfig
│   │   │   ├── MongoProperties
│   │   │   ├── SecurityConfig
│   │   │   ├── WebSocketConfiguration
│   │   ├── error/
│   │   │   ├── CustomException
│   │   │   ├── ExceptionCode
│   │   │   ├── GlobalExceptionHandler
│   │   ├── jwt/
│   │   │   ├── JWTFilter
│   │   │   ├── JWTUtil
│   │   ├── oauth/
│   │   │   ├── controller/
│   │   │   │   ├── KakaoController
│   │   │   ├── dto/
│   │   │   │   ├── AccessToken
│   │   │   │   ├── CustomOAuth2User
│   │   │   │   ├── KakaoProfileRequest
│   │   │   │   ├── KakaoResponse
│   │   │   │   ├── OAuth2Response
│   │   │   │   ├── PrincipalDetails
│   │   │   ├── properties/
│   │   │   │   ├── KakaoProperties
│   │   │   ├── service/
│   │   │   │   ├── CustomOAuth2UserService
│   │   │   │   ├── KakaoService
│   │   │   │   ├── PrincipalService
│   │   │   │   ├── CustomSuccessHandler
│   │   ├── s3/
│   │   │   ├── AwsS3Service
│   │   │   ├── S3Config
│   │   │   ├── S3Image
│   │   │   ├── S3ImageRepository
│   │   │   ├── S3ImgDto
│   │   ├── util/
│   │   │   ├── ApiUtils
│   │   │   ├── ConstantUtil
│   │   │   ├── SecurityUtil
│   ├── FamilingApplication
### 4. 설치 및 사용 방법
> 제품을 설치하기 위헤 필요한 소프트웨어 및 설치 방법을 작성하세요.
>
> 제품을 설치하고 난 후, 실행 할 수 있는 방법을 작성하세요.

### 5. 소개 및 시연 영상


> 프로젝트에 대한 소개와 시연 영상을 넣으세요.
> 프로젝트 소개 동영상을 교육원 메일(swedu@pusan.ac.kr)로 제출 이후 센터에서 부여받은 youtube URL주소를 넣으세요.

### 6. 팀 소개
> 팀원 소개 & 구성원 별 역할 분담 & 간단한 연락처를 작성하세요.

### 7. 해커톤 참여 후기
> 팀원 별 해커톤 참여 후기를 작성하세요.


