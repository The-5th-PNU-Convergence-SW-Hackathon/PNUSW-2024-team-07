<h1> 1. 가족 소통을 해결하는 애플리케이션, 패밀링  <img src= "https://github.com/user-attachments/assets/b92c6c91-839e-4d96-b481-66ed54d65698" width = 30></h1>

```
부산대학교에 오고 자취를 하다 보니 가족과 같이 살 때는 몰랐던 대화의 어려움이 있었습니다.

매일 똑같은 존화만 하다 어느 순간부터 전화도 안하게 되었습니다.
저뿐만이 아닌 떨어져 사는 가족 모두가 겪는 문제라고 생각해, 가족과 떨어져 사는 대학생이 이용할 수 있는 가족 소통 앱, 패밀링을 개발했습니다. 

패밀링은 간단하고, 재밌게 떨어져살아도 가족 대화를 할 수 있게 만드는 소통 애플리케이션입니다!

매일 업데이트되는 주제에 맞는 사진을 업로드해 내 일상을 공유하고,
애정 카드로 어색하지 않게 애정을 나누고,
AI를 사용해 내가 입력한 텍스트를 AI가 애정 가득 표현으로 바꿔 보내주는 기능도 있습니다.
연락이 힘들거나 집중해야 할 때를 위한 상태 보기 기능도 존재합니다.

패밀링을 사용해서 내 소식이 궁금한 부모님께 효도해 보세요 ~ 🥳 ❤️‍🔥 
```

## 1.1. 개발배경 및 필요성
### 1.1.1 떨어져 사는 가족 비율의 증가와 함께 늘어나는 소통 부족 가족

1인 가구 비율이 2023년 35.5%로 증가했으며, 따라서 **전체 인구의 3분의 1은 혼자 살고 있다**(통계청). 또한 청년 가구 중 절반이 부모와 떨어져 거주하고 있다(동아일보 2020.08.28). 이런 현상은 계속해서 증가해 떨어져 사는 가족의 비중도 늘어날 것이다. 

가족과 떨어져 사는 사람들은 그렇지 않은 사람들보다 소통 부족 문제에 더 취약하다.

떨어져 사는 가족은 '가족 대화 시간이 한 시간 미만'인 비율이 1.5배 높았다(인크루트 2023.05.06). 또한, 가족과 떨어져 지내는 성인 남녀 10명 중 7명은 하루 평균 30분 미만으로 가족과 대화한다고 답했다(로이슈 2023.05.09).

### 1.1.2 부산 지역의 가족 소통 부족 문제

2021년 기준, **20대 인구 유출이 가장 심한 지역은 부산**이었으며. 또한 부산의 1인 가구 비중은 전국 특·광역시 중 4번째이며, 전국 평균인 33.4%보다 높았다(통계청).  부산시 관계자는 2050년에는 부모와 자녀가 떨어져 사는 가구의 비율이 67%에 이를 것으로 예상한다고 이야기했다(한경일보 2023.04.16). 

**따라서 부산에서도 청년 인구 유출과 1인 가구 증가로 인해 가족 소통 부족 문제를 이미 겪고 있거나 겪게 될 가능성이 높다.**

### 1.1.3 부산대 학생들이 이야기하는 가족 소통 부족 문제

2022년에 진행한 채널 303의 주거 형태 조사 결과에 따르면 응답자의 57%가 가족과 떨어져 살고 있었다.

부산대 재학생과의 그룹 인터뷰를 진행하였으며, **학생들은 떨어져 살기 시작한 이후 가족과의 대화가 줄어들었으며**, 형식적인 대화와 바쁜 일상으로 인해 가족 대화가 어렵다고 이야기하였다. 

> 원래도 대화를 잘 안 하긴 했는데 몸이 멀어지니까 대화 주제가 없는 것 같아요. 고둥학교때는 밥 먹었니 ? 안 먹었으면 고기 구워줄까? 같은 대화하면서 밥 먹으면서 얘기했는데 지금은 잘 지내지 ? 같은 대화예요. - 부산대 정보컴퓨터공학과 25세
>
> 대화 내용도 사생활보다는 필요한 부분 지원 이야기를 위주로 하는 것 같습니다.  - 부산대 생명과학과 24세
> 
> 집에 있을 때에 비해서 반의반도 안될 정도로 대화를 자주 안 하게 되니 서로에 대해 잘 모르는 것 같아요.  - 부산대 바이오환경에너지학과 23세  

### 1.1.4 소통 부족이 가져오는 사회적 문제

가족 소통 부족 문제는 개인의 외로움과 불편함, 가족 구성원 간의 오해와 유대감 약화에서 청년 고립이나, 중년 우을증으로 이어질 수 있다.  

34만 명의 고립 청년에게 연간 약 7조 5천억 원의 사회적 비용이 발생한다. 이에는 비경제 활동으로 인한 사회적 손실비용과, 의료비용 등이 포함된다.  **고립청년 중 12.4%는 가족 관계**로 인해 고립을 시작한다.  또한 건강한 가족 대화는 중년 우울증 예방에 긍정적인 영향을 미치며 가족과의 관계가 **중년 우울증의 중요한 요인**으로 작용한다. (박봉길 2008, 이보라·홍승현 2024)

### 1.1.5 떨어져 사는 가족이 겪는 소통 부족의 원인

**1) 물리적 거리로 인한 일상 공유의 어려움과 대화 소재 부족 :** 물리적 거리로 인해 일상을 공유할 기회가 줄어들고 대화 소재의 부족으로 이어진다. 대화의 주제가 한정적이게 되고, 공감대 형성이 어려워진다. 공통된 관심사나 일상 공유가 부족한 상황에서는 대화의 필요성을 느끼지 못해 소통이 더욱 단절될 수 있다.

**2) 애정 · 공감 표현의 어색함 :** 가족 간의 관계는 애정과 친밀감을 전제로 하기 때문에 애정, 공감 표현의 빈도가 중요하다. 그러나 현대 가족들은 공감 표현의 어려움을 겪고 있다(이수화 2019). 특히 떨어져 사는 가족은 메신저를 이용해 소통을 하게 되어, 텍스트 소통의 경우 비언어적인 신호가 부족하여 감정을 표현하는데 더 어렵기 때문에 이런 문제를 더 심하게 겪을 수 있다.

**3) 바쁜 일상과 시간 부족:** 현대인의 바쁜 일상과 시간 부족은 떨어져 사는 가족들 간의 소통을 더욱 어렵게 만든다. 많은 사람들이 직장이나 학업, 개인적인 일들로 하루를 보내다 보며 가족과의 대화 시간이 줄어든다. 떨어져 살기 때문에 대화할 기회를 찾는 것이 더욱 어렵고, 이는 소통 부족으로 이어진다.

## 1.2. 개발 목표 및 주요 내용

### **가족 소통 어플리케이션, 패밀링**

다양한 대화 주제를 제공하며, 간단한 방법으로 애정표현을 돕고, 짧은 시간에도 효과적으로 소통을 할 수 있는 기능을 통해 가족 소통 부족 문제를 해결할 수 있다.’

패밀링(Familing)은 `Family`와 `-ing`의 합성어로, 소통 단절을 겪는 가족이 패밀링의 사용으로 건강한 가족이 된다는 의미를 담고 있다.

### 패밀링의 주요 기능

패밀링은 4가지의 주요기능을 통해, 대화 소재 부족, 애정 표현의 어색함, 바쁜 일상의 어려움을 해결할 수 있다.

<img src= "https://github.com/user-attachments/assets/e417b455-4add-42f7-9c50-3b4fd4018b28" width = 500>
<img src= "https://github.com/user-attachments/assets/a3c3b16c-fb71-468a-80ef-78693da80938" width = 500>
<img src= "https://github.com/user-attachments/assets/da33e88e-f835-47dc-a794-5061aa214600" width = 500>
<img src= "https://github.com/user-attachments/assets/9325a00d-fa67-437f-9a86-bad473c4d440" width = 500>


## 1.3. 세부내용
### 수익 모델 : 프리미엄 구독과 데이터 판매

고정적인 수익 모델인 데이터 판매와, 프리미엄 구독을 통한 추가 수익 모델을 두었다. 

#### 지출 비용 계산

```
서버비용 : 35000원(월)
- t3.medium 인스턴스 사용 + Savings Plans (1년짜리)
	* t3.medium는 초기 모바일 어플리케이션 운영에 가장 많이 쓰이는 인스턴스이다.) 

GPT 4o 비용 : 19500원(월)
- GPT 4o: 50글자당 0.325원
- 한달에 예상 이용 횟수 60번 * 0.325 = 19.5원
- 사용자 1000명으로 가정)

인건비 : 3000만원
- 팀원 5명

일반 관리비 : 122,180원 
- 서버비용과 인건비의 4%로 책정) 
```

#### 구독

가족 소통 부족은 일회성으로 해결되는  것이 아닌 장기적인 이용이 요구되기 때문에 구독 모델을 선택했다.
다만 무료 타입을 두어 기본적인 기능들을 제공해 충분한 사용자 수를 유치하고, 유료 모델인 프리미엄형을 두어 추가 수익을 기대할 수 있다.  

|  | 무료 | 프리미엄형 (1200원) |
| --- | --- | --- |
| 상태보기 기능 | o  | o |
| 애정 카드 기능 | 기본 3개 | 16개 |
| AI 봇 | o | o |
| 스냅샷 | o | o |

#### 데이터 판매

패밀링의 유저 데이터는 가족 소통에 대한 특수한 데이터로 학술연구나, 공공기관에서 쓰일 수 있다. 가족이라는 특정한 집단과 소통을 목적으로 하는 데이터가 제공되기 때문에 학술이나 공공기관에서 사용할 수 있는 차별화된 데이터가 생성된다. 이에 한국 데이터 산업 진흥원이 제시한 데이터 거래 및 가격 책정 절차 안내서를 참고해 가격을 선정하였다. 데이터 판매를 위해 제3자 제공 동의를 받도록 한다.

> 차별화된 상품은 실제 투입된 원가를 바탕으로 제시할 수 있다. 제시된 이윤은 인건비와 경비, 일반관리비의 4%이었다.
> (이후 데이터 가공을 위한 인건비가 포함되더라도 이윤은 동일하게 가져갈 수 있음.)

```
패밀링의 예상 판매가 : 3,303,747, 총 이윤 4%  
인건비 : 300만원
운영비 : 54,500원
일반 관리비 : 122,180원 
```


## 1.4. 기존 서비스 대비 차별성
### **가족 소통 부족을 해결하기 위해 만들어진 패밀링**

|  | 나의 정보를 볼 수 있는 사람들 | 사용자의 니즈 | 대화 주제 제공 | 애정 표현을 돕는 기능 |
| --- | --- | --- | --- | --- |
| 카카오톡 | 연락처에 있는 모든 사람과 나를 추가한 사람들 | 메세지를 주고 받는다. | -  | 이모티콘 |
| 패밀링 | 가족에 가입한 사람들 | 떨어져 살면서 생긴 소통 부족을 해결하고 싶다. | 스냅샷과 상태보기 등 | 애정 카드와 AI 봇 |

**패밀링은 가족 대화의 시작을 만들어주고, 가족 대화의 즐거움을 제공한다.**

가족 대화는 일상 공유의 어려움, 대화 소재의 부족으로 발생한다. 패밀링은 스냅샷으로 대화의 시작을 만들고 다양한 주제로 대화할 수 있게 도와준다. 매일 달라지는 주제는 흥미를 유발하고, 간단하게 사진을 업로드할 수 있어 간단한 방법으로 일상을 공유할 수 있게 한다.

또한 AI 봇을 이용한 애정표현 전송 기능은 형식적인 대화에서 즐거운 이벤트가 되어 대화의 재미와 활기를 제공할 수 있다. 


## 1.5. 사회적가치 도입 계획
### **패밀링이 가져올 사회적 가치: 고립 청년의 사회적 비용 감소**

만약 금정구의 1인 가구 중 가족 관계가 원인이 된 고립 청년중 10%가  패밀링을 사용한다는 가정하에 **절감되는 사회적 비용은 매년 1천 2백만원이다**.

```jsx
7,360(금정구구 가구) * 19.2%(1인 가구 중 30대미만 청년) * 3.1%(고립 청년 비율)
* 12.4%(가족관계에 의한 소통 단절 고립 청년 비율)
* 10%(예상 패밀링 사용 비율) * 22,000,000원(고립청년 1인당 사회적 비용)
```

이를 부산으로 확대한다면 **매년 7.5억원의 사회적 비용 절감**이 발생하는 것이다. 

```jsx
456,704(부산 1인가구) * 19.2%(1인 가구 중 30대미만 청년) * 3.1%(고립 청년 비율)
* 12.4%(가족관계에 의한 소통 단절 고립 청년 비율)
* 10%(예상 패밀링 사용 비율) * 22,000,000원(고립청년 1인당 사회적 비용)
```

## 1.6. 홍보 방안

### 어플의 기능 설명과 인지도 개선

가족 소통 어플은 사용자에게 낯설 수 있다. 또한 모바일 기기 사용이 익숙하지 않은 부모 세대나 6070은 어려움을 느낄 수 있다. 따라서 종이를 이용해 팸플릿을 제작해 사용자의 기능 체험을 돕고, 사용자의 어려움을 해소시킬 수 있다. 

<img width="500" alt="Group 1972 (2)" src="https://github.com/user-attachments/assets/ae59322f-063f-4b89-a6ac-24c1ea4c285a">



### 2030 세대

대학생은 애플리케이션 사용에 친숙하고 SNS 를 통해 정보를 활발하게 공유해 초기 사용자 유치 전략의 핵심 타깃이다. 타깃 도달율을 높이기 위해 대학가에서 커피차 이벤트를 진행해 어플 설치를 유도하고 추가적인 SNS 확산을 얻을 수 있다. 또한 인스타그램에서 다운로드 링크를 포함한 스토리 광고를 진행해 설치율을 높일 수 있다.

<img width="500" alt="Group 2165" src="https://github.com/user-attachments/assets/7479c755-5f7a-42f4-b03f-d7ee2da2a0c6">


### 4050 세대

4050 세대는 오프라인 광고에 호의적이다. 4050세대가 일상적으로 방문하는 대형마트에 홍보부스와 포스터 광고를 진행해 광고 빈도를 높일 수 있다. 홍보 부스 내에서 직접 기능 설명과 어플 사용 방법을 알릴 수 있어 인지도를 높이고 설치를 유도할 수 있다. 

<img width="500" alt="Group 2118" src="https://github.com/user-attachments/assets/83613a63-1d0e-415d-bbcc-22d1ba971dff" >

### 6070 세대

6070세대 대상으로 스마트폰 활용 교육을 진행하며 패밀링을 홍보할 수 있다. 디지털 사용이 익숙하지 않은 점을 고려해 핵심 기능인 스냅샷을 위주로 설명할 계획이다. 이 기능을 통해 자녀들과 떨어져 사는 경우에도 일상을 나눌 수 있음을 알려 패밀링의 장점을 설명할 수 있다.  

---



# 2. 상세설계
## 2.1. 시스템 구성도
<img width="675" alt="스크린샷 2024-08-30 오후 4 48 23" src="https://github.com/user-attachments/assets/8eb2af42-b79c-4a25-9a81-57cba9ea22fd">

## 2.2. ERD
<img width="675" alt="스크린샷 2024-08-30 오후 4 48 23" src="https://github.com/user-attachments/assets/d5d6ce83-18e1-4165-bc21-a078888bf474">

## 2.3. 사용 기술
| 구분 | 사항(성능) |
| --- | --- |
| **스프링부트** | 3.2.5 |
| **java** | 17 |
| **GPT API** | GPT3.5 |
| **kafka** | 2.7.2 |
| **MySQL** | 8.0 |
| **Docker** | 24.0.5 |
| **AWS** | t2.micro, s3, RDS |
| **React Native CLI** | 2.0.1 |
| **Node.js** | 20.12.0 |
| **Android Studio** | 2023.2.1 |
| **Figma** | UI3 |
| **illustrator** | CC2024 |

# 3. 개발결과
## 3.1. 전체시스템 흐름도
![패밀링 화면 흐름도-IA drawio (1)](https://github.com/user-attachments/assets/de50b951-b02c-461c-b10f-6c6b0e98caa4)




## 3.2. 기능설명

![패밀링 화면 흐름도-페이지-11](https://github.com/user-attachments/assets/bb78069d-6a1e-4783-a3a7-3b3dd6bcd96e)

#### **로그인**
![패밀링 화면 흐름도-로그인  drawio (1)](https://github.com/user-attachments/assets/f63bcdda-633a-4070-b1b1-b48f172b9281)

```
- 사용자는 카카오 간편 로그인을 통해 로그인을 할 수 있다.
- 사용자는 가족 그룹 존재 여부에 따라 가족을 등록, 생성할 수 있다.
- 가족 그룹이 존재하는 사용자는 홈 화면으로 바로 이동한다.
```

#### **가족 생성**
![패밀링 화면 흐름도-가족 drawio (2)](https://github.com/user-attachments/assets/6f40a743-47b7-4459-9fcc-648e511f498b)

```
- 사용자는 가족 그룹 이름을 설정할 수 있다.
- 사용자는 가족 생성을 할 수 있다.
- 가족을 생성하면 그룹 참여에 필요한 코드를 발급받을 수 있다.
```

#### **상태보기**
![패밀링 화면 흐름도-상태보기 drawio](https://github.com/user-attachments/assets/ee3674ad-741e-4225-b0ec-3e433fe0676e)



```
- 사용자는 가족 구성원의 상태를 조회할 수 있다.
- 사용자는 자신의 상태를 등록할 수 있다.
```

#### **스냅샷**
![패밀링 화면 흐름도-스냅샷 drawio (1)](https://github.com/user-attachments/assets/72290cb5-79b1-4085-9e64-41d081a0ac8f)


```
- 사용자는 이전 스냅샷 기록을 날짜별 조회할 수 있다.
- 사용자는 스냅샷을 카메라를 통해 촬영, 기존 갤러리 이미지를 등록할 수 있다.
- 사용자는 다른 가족 구성원의 스냅샷을 조회할 수 있다.
```

####  **애정카드**
![패밀링 화면 흐름도-애정카드 drawio (1)](https://github.com/user-attachments/assets/ed9f63e7-701b-4062-ad4a-2551a0656473)


```
- 사용자는 전송할 수 있는 애정 카드를 조회할 수 있다.
- 사용자는 자신이 가족 구성원에게 받은 애정 카드를 조회할 수 있다.
- 사용자는 가족 구성원에게 애정 카드를 전송할 수 있다.
```

#### 채팅 

![패밀링 화면 흐름도-채팅화면](https://github.com/user-attachments/assets/61664396-14ae-4a9a-8146-b0ac81e5c916)

```
- 사용자는 가족과 채팅을 할 수 있다.
- 사용자는 애정 봇 기능을 통해 보낼 텍스트를 애정 표현으로 변경 후 전송할 수 있다.
```

#### **마이페이지**
![패밀링 화면 흐름도-마이페이지 drawio](https://github.com/user-attachments/assets/70a49b82-1db7-4fe6-beb1-0062ae98b734)


```
- 사용자는 가족에게 보여질 닉네임을 수정할 수 있다.
- 사용자는 자신의 이름을 수정할 수 있다.
- 사용자는 프로필 이미지를 수정할 수 있다.
- 사용자는 자신의 가족 구성원을 조회할 수 있다.
- 사용자는 스냅샷 알림 시간을 수정할 수 있다.
```


## 3.3. 기능명세서

| 구분 | 기능 | 상세기능 | 설명 | 비고 |
|---|---|---|---|---|
| 1.로그인 | 1.1 SNS 로그인 | 1.1.1 카카오톡 간편 로그인 | 사용자는 카카오 계정을 통해 간편하게 서비스에 가입할 수 있다. | |
| 2. 가족 등록 | 2.1 가족 생성 | 2.1.1 가족 이름 설정 | 사용자는 가족 그룹 이름을 설정할 수 있다. | |
| | | 2.1.2 가족 생성 | 사용자는 가족 생성을 할 수 있다. | |
| | | 2.1.3 코드 발급 | 가족을 생성하면 그룹 참여에 필요한 코드를 발급받을 수 있다. | |
| | 2.2 가족 등록 | 2.2.1 가족 그룹 참여 | 사용자는 이미 생성된 가족 그룹에 가족 코드를 통해 참여할 수 있다. | |
| 3. 스냅샷 | 3.1 스냅샷 알림 | 3.1.1 스냅샷 알림 | 사용자는 스냅샷 시간이 되면 알림을 받을 수 있다. | |
| | | 3.1.2 알림 시간 설정 | 사용자는 스냅샷 알림을 받을 시간을 설정할 수 있다. | |
| | 3.2 스냅샷 주제 | 3.2.1 스냅샷 주제 | 사용자는 랜덤한 스냅샷 주제를 받을 수 있다. | |
| | 3.3 스냅샷 등록 | 3.3.1 갤러리 등록 | 사용자는 갤러리에 있는 사진을 스냅샷으로 등록할 수 있다. | |
| | | 3.3.2 촬영 등록 | 사용자는 카메라 촬영을 통해 스냅샷을 등록할 수 있다. | |
| | 3.4 스냅샷 조회 | 3.4.1 가족의 스냅샷 조회 | 사용자는 다른 가족 구성원이 올린 스냅샷을 확인할 수 있다. | |
| 4. 채팅 | 4.1 가족 단톡방 | 4.1.1 채팅방 입장 | 사용자가 가족 단톡방에 입장할 수 있다. | |
| | | 4.1.2 채팅 전송 | 사용자는 가족 단톡방에 채팅을 전송할 수 있다. | |
| | | 4.1.3 채팅 조회 | 사용자는 다른 가족이 전송한 채팅을 수신할 수 있다. | |
| | | 4.1.4 채팅 알림 | 사용자는 다른 이용자가 채팅을 전송하면 알림을 받을 수 있다. | |
| 5. 애정 붓 | 5.1 애정 붓 | 5.1.1 애정 표현 전송 | 사용자의 채팅을 애정 표현으로 전송 후 채팅방에 바로 전송된다. | |
| 6. 애정 카드 | 6.1 애정 카드 조회 | 6.1.1 전송 가능한 애정카드 조회 | 사용자는 전송 가능한 애정 카드를 조회할 수 있다. | |
| | | 6.1.2 수신한 애정카드 조회 | 사용자는 다른 가족 구성원이 전송한 애정 카드를 조회할 수 있다. | |
| | 6.2 애정 카드 전송 | 6.2.1 애정 카드 전송 | 사용자는 가족 구성원에게 애정 카드를 전송할 수 있다. | |
| | | 6.2.2 애정 카드 수신 | 사용자는 다른 가족 구성원이 전송한 애정 카드를 수신할 수 있다. | |
| | | 6.2.3 애정 카드 알림 | 사용자는 애정 카드를 수신하면 알림을 받을 수 있다. | |
| 7. 상태보기 | 7.1 상태 조회 | 7.1.1 가족 상태 조회 | 사용자는 다른 구성원의 현재 상태를 조회할 수 있다. | |
| | 7.2 상태 변경 | 7.2.1 나의 상태 변경 | 사용자는 나의 상태를 변경할 수 있다. | 기본 값 : "쉬는 중" |
| 8. 마이 페이지 | 8.1 정보 변경 | 8.1.1 닉네임 변경 | 가족 구성원에게 보여지는 닉네임을 변경할 수 있다. | 기본 값 : 사용자의 이름 |
| | | 8.1.2 프로필 이미지 변경 | 자신의 프로필 이미지를 변경할 수 있다. | |
| | | 8.1.3 스냅샷 시간 설정 | 가족 그룹 | 기본 값 : 12:00 |
| | 8.2 가족 조회 | 8.2.1 가족 구성원 조회 | 사용자는 자신의 가족 그룹의 코드와 구성원을 조회할 수 있다. | |
| 9. 알림 | 9.1 알림 조회 | 9.1.1 읽지 않은 알림 | 사용자는 읽지 않은 알림을 조회할 수 있다. | |
| | | 9.1.2 최근 1일 알림 | 사용자는 최근 1일 내 알림을 조회할 수 있다. | |
| | | 9.1.3 최근 일주일 알림 | 사용자는 최근 일주일 알림을 조회할 수 있다. | |

## 3.4. 디렉토리 구조

```
familing-frontend
│
├── _tests_				# 테스트 관련 파일
├── .bundle				# 번들 파일 관련 설정
├── .vscode				# VSCode 설정 파일
├── android				# 안드로이드 관련 코드 및 설정
├── ios					# iOS 관련 코드 및 설정
├── node_modules		# 프로젝트의 의존성 패키지
│
└── src				# 소스 코드 디렉토리
    ├── api				# API 호출 관련 코드
    ├── assets			# 자산 파일
    │   ├── fonts			# 폰트 파일
    │   └── images		# 이미지 파일
    │
    ├── components		# 재사용 가능한 컴포넌트들
    │   ├── common		# 공통 컴포넌트
    │   ├── icon			# 아이콘 관련 컴포넌트
    │   └── features		# 기능별 컴포넌트
    │       ├── Chatting		# 채팅 컴포넌트
    │       ├── Home		# 홈 화면 컴포넌트
    │       ├── Layout		# 레이아웃 관련 컴포넌트
    │       └── LoveCard	# 애정카드 컴포넌트
    │
    ├── navigation		# 내비게이션 관련 코드
    │
    ├── screens			# 실제 기능하는 페이지들
    │   ├── Chatting		# 채팅 화면
    │   ├── Home			# 홈 화면
    │   ├── LoveCard		# 애정카드 화면
    │   │   ├── detail		# 애정카드 상세 화면
    │   │   └── main		# 애정카드 메인 화면
    │   │
    │   ├── MyPage		# 마이 페이지
    │   │   ├── MyFamily		# 가족 관리 화면
    │   │   ├── Nickname	# 닉네임 변경 화면
    │   │   ├── Pay			# 결제 변경 화면
    │   │   ├── SnapshotTime		# 스냅샷 시간 변경 화면
    │   │   └── Subscribe		# 구독 관리 화면
    │   │
    │   ├── Notification		# 알림 화면
    │   │
    │   ├── Register		# 회원가입 화면
    │   │   ├── step1			# 회원가입 1단계
    │   │   ├── step2		# 회원가입 2단계
    │   │   ├── step3		# 회원가입 3단계
    │   │   ├── step4		# 회원가입 4단계
    │   │
    │   ├── Start			# 시작 화면
    └── util				# 유틸리티 함수 및 모듈
```

```
|backend.familing.src.main.java.com.pinu
├── familing/                         # 애플리케이션의 주요 패키지
│   ├── domain/                       # 도메인 관련 코드가 위치하는 패키지
│   │   ├── alarm/                    # 알림(Alarm) 기능 관련 코드
│   │   │   ├── controller/           # 알림 기능을 위한 컨트롤러 클래스
│   │   │   │   ├── AlarmController   # 알림 기능의 HTTP 요청을 처리하는 컨트롤러
│   │   │   ├── dto/                  # 알림 기능에서 사용되는 데이터 전송 객체(DTO)
│   │   │   │   ├── AlarmDto          # 알림 정보 전달을 위한 DTO
│   │   │   │   ├── AlarmResponseDto  # 알림 응답을 위한 DTO
│   │   │   ├── entity/               # 알림 기능의 엔티티 클래스
│   │   │   │   ├── Alarm             # 알림 엔티티, 데이터베이스 테이블과 매핑
│   │   │   ├── repository/           # 알림 기능의 리포지토리 클래스
│   │   │   │   ├── AlarmRepository   # 알림 엔티티에 대한 데이터베이스 접근을 처리
│   │   │   ├── service/              # 알림 기능의 비즈니스 로직을 처리하는 서비스 클래스
│   │   │   │   ├── AlarmService      # 알림 관련 비즈니스 로직 구현
│   │   │   │   ├── AlarmType         # 알림 유형을 정의하는 Enum 클래스
│   │   ├── chat/                     # 채팅(Chat) 기능 관련 코드
│   │   │   ├── config/               # 채팅 기능의 설정 관련 클래스
│   │   │   │   ├── HttpHandshakeInterceptor  # WebSocket 핸드셰이크 인터셉터
│   │   │   │   ├── ListenerConfiguration    # 이벤트 리스너 설정
│   │   │   │   ├── ProducerConfig           # 메시지 프로듀서 설정
│   │   │   │   ├── StompHandler             # STOMP 프로토콜 처리 핸들러
│   │   │   ├── controller/           # 채팅 기능을 위한 컨트롤러 클래스
│   │   │   │   ├── ChatController    # 채팅 기능의 HTTP 요청을 처리하는 컨트롤러
│   │   │   ├── dto/                  # 채팅 기능에서 사용되는 데이터 전송 객체(DTO)
│   │   │   │   ├── ChatResponseDto   # 채팅 응답을 위한 DTO
│   │   │   │   ├── ChatRoomInfoDto   # 채팅방 정보 전달을 위한 DTO
│   │   │   │   ├── ChattingHistoryResponseDto  # 채팅 기록 응답을 위한 DTO
│   │   │   ├── entity/               # 채팅 기능의 엔티티 클래스
│   │   │   │   ├── ChatRoom          # 채팅방 엔티티
│   │   │   │   ├── Chatting          # 채팅 메시지 엔티티
│   │   │   │   ├── Message           # 개별 메시지 엔티티
│   │   │   ├── messaging/            # 메시징 관련 클래스 (메시지 송수신)
│   │   │   │   ├── MessageReceiver   # 메시지 수신 처리
│   │   │   │   ├── MessageSender     # 메시지 송신 처리
│   │   │   ├── repository/           # 채팅 기능의 리포지토리 클래스
│   │   │   │   ├── ChatRoomRepository  # 채팅방 엔티티에 대한 데이터베이스 접근 처리
│   │   │   │   ├── MongoChatRepository # MongoDB 기반 채팅 리포지토리
│   │   │   ├── service/              # 채팅 기능의 비즈니스 로직을 처리하는 서비스 클래스
│   │   │   │   ├── ChatService       # 채팅 관련 비즈니스 로직 구현
│   │   ├── family/                   # 가족(Family) 기능 관련 코드
│   │   │   ├── controller/           # 가족 기능을 위한 컨트롤러 클래스
│   │   │   │   ├── FamilyController  # 가족 기능의 HTTP 요청을 처리하는 컨트롤러
│   │   │   ├── dto/                  # 가족 기능에서 사용되는 데이터 전송 객체(DTO)
│   │   │   │   ├── FamilyCode        # 가족 코드 관련 DTO
│   │   │   │   ├── FamilyDto         # 가족 정보 전달을 위한 DTO
│   │   │   │   ├── FamilyName        # 가족 이름 관련 DTO
│   │   │   │   ├── FamilyUserDto     # 가족 사용자 정보 DTO
│   │   │   │   ├── FamilyUsersDto    # 가족 사용자들 정보 DTO
│   │   │   │   ├── MyFamilyDto       # 사용자의 가족 정보 DTO
│   │   │   ├── entity/               # 가족 기능의 엔티티 클래스
│   │   │   │   ├── Family            # 가족 엔티티
│   │   │   ├── handler/              # 가족 기능의 핸들러 클래스
│   │   │   │   ├── FamilyCodeHandler # 가족 코드 처리 핸들러
│   │   │   ├── repository/           # 가족 기능의 리포지토리 클래스
│   │   │   │   ├── FamilyRepository  # 가족 엔티티에 대한 데이터베이스 접근 처리
│   │   │   ├── service/              # 가족 기능의 비즈니스 로직을 처리하는 서비스 클래스
│   │   │   │   ├── FamilyService     # 가족 관련 비즈니스 로직 구현
│   │   ├── gpt/                      # ChatGPT 관련 기능
│   │   │   ├── config/               # GPT 기능의 설정 클래스
│   │   │   │   ├── ChatGPTConfig     # ChatGPT API 설정 클래스
│   │   │   ├── controller/           # GPT 기능을 위한 컨트롤러 클래스
│   │   │   │   ├── ChatGPTController # GPT 기능의 HTTP 요청을 처리하는 컨트롤러
│   │   │   ├── dto/                  # GPT 기능에서 사용되는 데이터 전송 객체(DTO)
│   │   │   │   ├── ChatGptRequest    # GPT 요청 DTO
│   │   │   │   ├── ChatGPTResponse   # GPT 응답 DTO
│   │   │   │   ├── GptRequestMessage # GPT 요청 메시지 DTO
│   │   │   │   ├── Prompt            # 프롬프트 관련 DTO
│   │   ├── lovecard/                 # 애정 카드(Lovecard) 기능 관련 코드
│   │   │   ├── controller/           # 애정 카드 기능을 위한 컨트롤러 클래스
│   │   │   │   ├── LovecardController # 애정 카드 기능의 HTTP 요청을 처리하는 컨트롤러
│   │   │   ├── dto/                  # 애정 카드 기능에서 사용되는 데이터 전송 객체(DTO)
│   │   │   │   ├── LovecardLogResponse  # 애정 카드 로그 응답 DTO
│   │   │   │   ├── LovecardRequest      # 애정 카드 요청 DTO
│   │   │   │   ├── LovecardResponse     # 애정 카드 응답 DTO
│   │   │   ├── entity/               # 애정 카드 기능의 엔티티 클래스
│   │   │   │   ├── Lovecard          # 애정 카드 엔티티
│   │   │   │   ├── LovecardLog       # 애정 카드 로그 엔티티
│   │   │   ├── repository/           # 애정 카드 기능의 리포지토리 클래스
│   │   │   │   ├── LovecardLogRepository # 애정 카드 로그 리포지토리
│   │   │   │   ├── LovecardRepository    # 애정 카드 리포지토리
│   │   │   ├── service/              # 애정 카드 기능의 비즈니스 로직을 처리하는 서비스 클래스
│   │   │   │   ├── LovecardService   # 애정 카드 관련 비즈니스 로직 구현
│   │   ├── payment/                  # 결제(Payment) 기능 관련 코드
│   │   │   ├── entity/               # 결제 기능의 엔티티 클래스
│   │   │   │   ├── Payment           # 결제 엔티티
│   ├── snapshot/                     # 스냅샷(Snapshot) 기능 관련 코드
│   │   ├── controller/               # 스냅샷 기능을 위한 컨트롤러 클래스
│   │   │   ├── SnapshotController    # 스냅샷 기능의 HTTP 요청을 처리하는 컨트롤러
│   │   ├── dto/                      # 스냅샷 기능에서 사용되는 데이터 전송 객체(DTO)
│   │   │   ├── CustomPage            # 페이지네이션을 위한 커스텀 페이지 DTO
│   │   │   ├── SnapshotImageRequest  # 스냅샷 이미지 요청 DTO
│   │   │   ├── SnapshotResponse      # 스냅샷 응답 DTO
│   │   ├── entity/                   # 스냅샷 기능의 엔티티 클래스
│   │   │   ├── Snapshot              # 스냅샷 엔티티
│   │   │   ├── SnapshotImage         # 스냅샷 이미지 엔티티
│   │   │   ├── SnapshotTitle         # 스냅샷 타이틀 엔티티
│   │   ├── repository/               # 스냅샷 기능의 리포지토리 클래스
│   │   │   ├── SnapshotImageRepository  # 스냅샷 이미지 리포지토리
│   │   │   ├── SnapshotRepository       # 스냅샷 리포지토리
│   │   │   ├── SnapshotTitleRepository  # 스냅샷 타이틀 리포지토리
│   │   ├── scheduler/                # 스냅샷 스케줄러 관련 클래스
│   │   │   ├── SnapshotScheduler     # 스냅샷 스케줄러 구현
│   │   ├── service/                  # 스냅샷 기능의 비즈니스 로직을 처리하는 서비스 클래스
│   │   │   ├── SnapshotService       # 스냅샷 관련 비즈니스 로직 구현
│   │   │   ├── TitleService          # 스냅샷 타이틀 관련 비즈니스 로직 구현
│   ├── status/                       # 상태(Status) 기능 관련 코드
│   │   ├── controller/               # 상태 기능을 위한 컨트롤러 클래스
│   │   │   ├── StatusController      # 상태 기능의 HTTP 요청을 처리하는 컨트롤러
│   │   ├── dto/                      # 상태 기능에서 사용되는 데이터 전송 객체(DTO)
│   │   │   ├── MyFamilyStatusResponse  # 가족 상태 응답 DTO
│   │   │   ├── StatusRequest           # 상태 요청 DTO
│   │   │   ├── StatusResponse          # 상태 응답 DTO
│   │   ├── entity/                   # 상태 기능의 엔티티 클래스
│   │   │   ├── Status                # 상태 엔티티
│   │   ├── repository/               # 상태 기능의 리포지토리 클래스
│   │   │   ├── StatusRepository      # 상태 엔티티에 대한 데이터베이스 접근 처리
│   │   ├── service/                  # 상태 기능의 비즈니스 로직을 처리하는 서비스 클래스
│   │   │   ├── StatusService         # 상태 관련 비즈니스 로직 구현
│   ├── subscription/                 # 구독(Subscription) 기능 관련 코드
│   │   ├── controller/               # 구독 기능을 위한 컨트롤러 클래스
│   │   │   ├── SubscriptionController  # 구독 기능의 HTTP 요청을 처리하는 컨트롤러
│   │   ├── dto/                      # 구독 기능에서 사용되는 데이터 전송 객체(DTO)
│   │   │   ├── SubscriptionResponse  # 구독 응답 DTO
│   │   ├── entity/                   # 구독 기능의 엔티티 클래스
│   │   │   ├── Subscription          # 구독 엔티티
│   │   ├── repository/               # 구독 기능의 리포지토리 클래스
│   │   │   ├── SubscriptionRepository  # 구독 엔티티에 대한 데이터베이스 접근 처리
│   │   ├── service/                  # 구독 기능의 비즈니스 로직을 처리하는 서비스 클래스
│   │   │   ├── SubscriptionService   # 구독 관련 비즈니스 로직 구현
│   ├── user/                         # 사용자(User) 관리 기능 관련 코드
│   │   ├── controller/               # 사용자 관리 기능을 위한 컨트롤러 클래스
│   │   │   ├── UserController        # 사용자 관리 기능의 HTTP 요청을 처리하는 컨트롤러
│   │   ├── dto/                      # 사용자 관리 기능에서 사용되는 데이터 전송 객체(DTO)
│   │   │   ├── Nickname              # 사용자 닉네임 관련 DTO
│   │   │   ├── Realname              # 사용자 실명 관련 DTO
│   │   │   ├── UserDto               # 사용자 정보 전달을 위한 DTO
│   │   │   ├── UserResponse          # 사용자 응답 DTO
│   │   ├── entity/                   # 사용자 관리 기능의 엔티티 클래스
│   │   │   ├── User                  # 사용자 엔티티
│   │   ├── repository/               # 사용자 관리 기능의 리포지토리 클래스
│   │   │   ├── UserRepository        # 사용자 엔티티에 대한 데이터베이스 접근 처리
│   │   ├── service/                  # 사용자 관리 기능의 비즈니스 로직을 처리하는 서비스 클래스
│   │   │   ├── UserService           # 사용자 관련 비즈니스 로직 구현
│   │   │   ├── Gender                # 성별 관련 Enum 클래스
│   ├── global/                       # 전역(Global) 설정 및 유틸리티 관련 코드
│   │   ├── config/                   # 전역 설정 관련 클래스
│   │   │   ├── CorsMvcConfig         # CORS 설정 클래스
│   │   │   ├── MongoConfig           # MongoDB 설정 클래스
│   │   │   ├── MongoProperties       # MongoDB 프로퍼티 클래스
│   │   │   ├── SecurityConfig        # 보안 설정 클래스
│   │   │   ├── WebSocketConfiguration  # WebSocket 설정 클래스
│   │   ├── error/                    # 전역 오류 처리 관련 클래스
│   │   │   ├── CustomException       # 커스텀 예외 클래스
│   │   │   ├── ExceptionCode         # 예외 코드 Enum 클래스
│   │   │   ├── GlobalExceptionHandler # 전역 예외 핸들러
│   │   ├── jwt/                      # JWT 인증 관련 코드
│   │   │   ├── JWTFilter             # JWT 필터 클래스
│   │   │   ├── JWTUtil               # JWT 유틸리티 클래스
│   │   ├── oauth/                    # OAuth 인증 관련 코드
│   │   │   ├── controller/           # OAuth 인증을 위한 컨트롤러 클래스
│   │   │   │   ├── KakaoController   # 카카오 OAuth 인증 처리 컨트롤러
│   │   │   ├── dto/                  # OAuth 인증 관련 DTO
│   │   │   │   ├── AccessToken       # 액세스 토큰 DTO
│   │   │   │   ├── CustomOAuth2User  # 커스텀 OAuth2 사용자 DTO
│   │   │   │   ├── KakaoProfileRequest  # 카카오 프로필 요청 DTO
│   │   │   │   ├── KakaoResponse     # 카카오 응답 DTO
│   │   │   │   ├── OAuth2Response    # OAuth2 응답 DTO
│   │   │   │   ├── PrincipalDetails  # 사용자 정보 관련 DTO
│   │   │   ├── properties/           # OAuth 관련 프로퍼티 클래스
│   │   │   │   ├── KakaoProperties   # 카카오 API 관련 프로퍼티 클래스
│   │   │   ├── service/              # OAuth 인증 관련 서비스 클래스
│   │   │   │   ├── CustomOAuth2UserService  # 커스텀 OAuth2 사용자 서비스 클래스
│   │   │   │   ├── KakaoService      # 카카오 인증 서비스 클래스
│   │   │   │   ├── PrincipalService  # 사용자 정보 처리 서비스 클래스
│   │   │   │   ├── CustomSuccessHandler  # 인증 성공 핸들러 클래스
│   ├── s3/                           # AWS S3 관련 코드
│   │   ├── AwsS3Service              # S3 서비스 클래스, S3 버킷과의 상호작용을 처리
│   │   ├── S3Config                  # S3 설정 클래스
│   │   ├── S3Image                   # S3 이미지 관련 엔티티 클래스
│   │   ├── S3ImageRepository         # S3 이미지 리포지토리
│   │   ├── S3ImgDto                  # S3 이미지 DTO
│   ├── util/                         # 유틸리티 클래스 모음
│   │   ├── ApiUtils                  # API 관련 유틸리티 함수 모음
│   │   ├── ConstantUtil              # 상수 유틸리티 클래스
│   │   ├── SecurityUtil              # 보안 관련 유틸리티 함수 모음
│   ├── FamilingApplication           # 애플리케이션의 메인 클래스 (Spring Boot 애플리케이션 시작점)
```

## 3.5. 멘토링 의견 반영사항

### 산업체 멘토링 의견 반영사항

**계획서 양식에 대한 피드백**

> 목차 번호는 문서의 구조를 명확히 하고 내용을 쉽게 파악할 수 있는 계층적 구성으로 구성되어야 함.
본 계획서는 기본적으로 숫자와 기호(’ㅇ’,’’)를 사용하고 있는데, 일부에서 숫자(1.)-기호--숫자(1.)를
사용하고 있으며 이 부분은 목차 재부여를 권장함
> 

- 이후 작성한 계획서의 경우 목차를 재구성함

**개발일정에 대한 피드백**

> 표에 제시된 8개의 업무를 내용/일정/담당자 등을 기준으로 그룹핑하고 중간 점검/검토/리뷰를
실시할 수 있도록 실시 일정 추가를 권장함. 주요 단계별 중간 점검을 실시함으로써
최종 단계에서의 Fail 판정(출시 불가) 위험을 예방하기 위한 목적임
> 

- 깃허브를 이용해 이슈로 등록하고 일정과 담당자를 정해 업무를 관리함. 그 결과 정해진 시간 내에 개발을 마칠 수 있었음
![image](https://github.com/user-attachments/assets/c56ed15d-7e11-4073-b546-77ff8620af63)
![image](https://github.com/user-attachments/assets/45ea65c6-6c5c-443e-88eb-15c70cc20ba4)



### 가족 문답 어플,앤서록 대표님과의 인터뷰

**마케팅과 관련한 피드백**

> 온라인은 자녀세대를 위주로 진행했으며 가장 비용 대비 효과가 좋은 세대는 30세대의 자녀 세대였다. 또한 의외로 가족 불화나 가족 소통이 없는 경우보다는, 이미 가족 대화를 하는 가족이 쉽게 다운로드하고, 다양하게 이용하였다.
> 

- 실제 가족 문답어플을 이용하는 사용자들의 특성을 확인했고 이에 따라 소통 단절을 해결하자는 초기 목표에서 가족 소통 부족을 해결하자는 목표로 수정하였다. 초기 사용자를 효과적으로 유치하기 위해서는 쉽게 어플을 다운로드하고 이용할 집단이야한다고 생각했기 때문이다. 이에 따라서 패밀링 예상 유저들은 최근의 변화로 대화가 줄어든 가족이나, 형식적인 연락만을 하는 가족으로 설정하였고, 제공하는 기능들도 가볍고 재밌는 기능들로 목표를 두었다.

   

**전반적인 피드백**

> 부모세대가 가장 원하는 것은 자녀가 뭐하고 있는지이다. 그런 점에서 패밀링의 스냅샷 기능은 부모세대가 가장 매력적으로 느낄 기능이다. 또한 30대의 자녀 세대는 형식적이더라도 의무적인 안부인사를 자주 보내고 있었다.
> 

- 스냅샷을 통해, 자녀의 일상을 확인하고 자녀는 형식적인 연락에서 벗어나 다양한 주제로 대화를 할 수 있어 가족 유저들의 니즈를 채워줄 수 있을 것으로 예상한다. 

**애정 표현을 어색하는 사용자의 AI 봇 이용에 대해서**

> 애정 표현을 어색해하는 사용자가 AI 봇을 사용해 텍스트가 변화해도 그것을 보낼지는 의문이 든다. 사용자 입장에서는 채팅중에 버튼 클릭과, 수정, 전송의 여러 단계를 거쳐야하는게 귀찮게 느껴질 수 있다.
> 

- AI 봇으로 올바른 애정 표현을 알리기보다는 애정표현의 즐거움을 제공하는 게 적절하다고 판단했으며, 여러 단계를 거쳐야 전송이 되는 과정이 AI 봇의 사용율을 낮출 수 있다고 생각되어 이후 텍스트 수정 없이 바로 보낼 수 있도록 수정했다.  

### 중간 발표 피드백

**구독료에 대한 피드백**

> 구독료가 비싸 사용자들의 진입 장벽이 높을 수 있다는 피드백을 들었다.
고정 비용인 서버비용을 줄였다. AWS의 여러 모델 중 초기 모바일 어플이 사용하는 t3.medium 인스턴스와 비용 절감을 위한 SP 결제 수단을 알아보았다. 이를 통해 초기 400원으로 잡았던 서버비용을 인당 35원으로 책정하였다. 또한 구독료를 낮추기 위해 추가 BM을 고민하였고 제 3자 정보 제공 동의를 받은 후 해당 데이터를 학술 기관이나 공공기관에 판매하는 BM을 추가했다.

- 데이터 판매 예상 가격은 한국 데이터 산업 진흥원이 제시한 데이터 거래 및 가격 책정 절차 안내서를 참고하였으며, 패밀링이 판매할 사회,경제 관련 데이터들은 중간값 900만원에 거래되고 있어 현실적으로 가능한 금액임을 확인하였다. 


# 4. 설치 및 사용 방법
[패밀링 다운로드 링크](https://www.notion.so/2f3091422296413b8e84090c15a19456?pvs=21) 

https://github.com/user-attachments/assets/0ddd7ff3-feaf-4654-b39c-06342cfd36d1



# 5. 소개 및 시연 영상

[![YouTube Video](https://img.youtube.com/vi/womf95PNCCI/0.jpg)](https://www.youtube.com/watch?v=womf95PNCCI)

# 6. 팀 소개

박준형 백엔드 개발 010-2456-7172

박세은 ui/ux 디자인 010-5784-3380

최윤성 앱 프론트엔드 개발 010-5165-4918

이경서 앱 프론트엔드 개발 010-2929-9496

진서현 백엔드 개발 010-2074-8074 

# 7. 해커톤 참여 후기
> 박세은 : 팀원들과 함께 패밀링 에플리케이션 완성이라는 공동의 목표를 향해 달려나가며 많은 것들을 배웠다. 기획된 내용이 디자인과 개발로 완성되는 모습을 보며 희열을 느꼈다. 협업, 개발 전달 등 많은 것들을 배웠으나 팀원들과의 소중한 인연이 가장 값지다 생각한다. 해커톤이 마무리된 이후에도 팀원들과 재미있는 아이템을 재밌게 만들고싶다.
> 

> 이경서 : 이전까지는 개발자들끼리와의 협업만 해왔는데 이번 기회에 다른 분야의 사람들과 협업하면서 서로 다른 시각을 어떻게 조율해나가야할지 피드백을 주고받는 시간이 인상깊었다. 그리고 누구 하나 자신의 일을 미루지 않고 오히려 자신의 몫을 해내고 다른 사람들의 업무를 도와주려고 하는 모습이 나 자신도 더욱 열심히 개발하게 만드는 원동력이 되었다. 이번 해커톤을 통해 소중한 인연을 얻어서 감사하고 이번 프로젝트가 잘 마무리되면 다른 프로젝트도 함께 하고싶다.
> 

> 박준형 : 팀원들과 함께 해커톤을 기획하고 개발하는 동안, 학교에서는 경험하지 못한 다양한 부분을 배웠고, 실제 배포 과정에서 예상치 못한 오류들이 많았지만 이를 해결하며 직무에 대한 이해도 크게 높아졌습니다. 시간이 촉박해 혼자였다면 어려웠겠지만, 팀원들과의 협업 덕분에 잘 마무리할 수 있었습니다. 앞으로도 이런 기회가 있다면, 꼭 다시 참여하고 싶습니다.
> 

> 최윤성 : 해커톤을 통해 사회의 문제점을 발견하고 이를 해결하는 서비스를 개발하는 것이 의미 있는 과정이였습니다. 디자이너와 함께 협업한것은 처음이었는데 다른 분야의 직무를 이해하고, 소통하고 협업하는 방법을 배울 수 있었습니다. 개발 과정에서 발생한 문제를 해결하고 사용성을 위해 고민하면서 성장할 수 있었고, 팀원들과 함께 협업하면서 이해하고 배려하며 목표를 이루는 법을 배울 수 있어서 기억에 남는 경험이 될 것 같습니다.
> 

> 진서현 : 가족과의 소통 부족을 해결하자는 포부를 가지고 개발을 하다보니 우리 가족의 대화에도 관심이 가게 되더라구요. 가족을 더 자주 생각나게 해주는 프로젝트였습니다.ㅎㅎ  이 어플로 인해 가족 소통이 해결되고 더 많은 사람들의 가족과 행복을 느끼시면 좋겠습니다. 생각보다 장기 프로젝트가 되었는 데, 중간중간 에너지 관리를 잘 해야겠다는 걸 많이 느꼈습니다. 그동안은 단기간의 압박속에서 진행되는 프로젝트를 많이 해왔는데, 장기간의 호흡법도 배워야할 것 같습니다.
> 

# 참고 문헌

- 1인가구의 증가: 통계청, 「인구총조사」 각 연도
- 2가구 중 1가구: 동아일보(2020)  **아이보다 노인이 많은 한국…2가구 중 1가구 부모랑 안살아**(https://www.donga.com/news/Economy/article/all/20200828/102691897/1)
- 1.5배 응답 결과 : 인크루트 자체 조사 결과 (2023.05.06)
- 성인남녀 : 로이슈 (2023.05.09) **[사회이슈] 가족과 떨어져 사는 성인 70% “가족과 소통 시간 하루 30분 미만”**
- 가족 대화 빈도와 화목함 : 신아일보 2023.05.09 (https://www.shinailbo.co.kr/news/articleView.html?idxno=1700196)
- 복지타임즈 2021.01.26 (https://www.bokjitimes.com/news/articleView.html?idxno=30357)
- 더 중앙 2018.05.08 (https://www.joongang.co.kr/article/22601669#home)
- 한경일보 (2023.04.16) https://www.hankyung.com/article/202304160495Y
- 이지훈 2023 온 가족이 모여있는 가상의 거실: 기혼자의 가족단톡방 활용 체험
- 매일 경제 2024.04.09  https://www.mk.co.kr/news/it/10986530
- 서울 경제 2023.08.31 https://www.seoul.co.kr/news/society/2023/08/31/20230831500177
