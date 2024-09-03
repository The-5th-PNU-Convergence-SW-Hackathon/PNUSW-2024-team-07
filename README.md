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

패밀링을 사용해서 내 소식이 궁금한 부모님께 효도해 보세요 ~ 🥳 
```

## 1.1. 개발배경 및 필요성
### 1.1.1 떨어져 사는 가족 비율의 증가와 함께 늘어나는 소통 부족 가족

1인 가구 비율이 2023년 35.5%로 증가했으며, 따라서 전체 인구의 3분의 1은 혼자 살고 있다(통계청). 또한 청년 가구 중 절반이 부모와 떨어져 거주하고 있다(동아일보 2020.08.28). 이런 현상은 계속해서 증가해 떨어져 사는 가족의 비중도 늘어날 것이다. 

가족과 떨어져 사는 사람들은 그렇지 않은 사람들보다 소통 부족 문제에 더 취약하다.

떨어져 사는 가족은 '가족 대화 시간이 한 시간 미만'인 비율이 1.5배 높았다(인크루트 2023.05.06). 또한, 가족과 떨어져 지내는 성인 남녀 10명 중 7명은 하루 평균 30분 미만으로 가족과 대화한다고 답했다(로이슈 2023.05.09).

### 1.1.2 부산 지역의 가족 소통 부족 문제

2021년 기준, 20대 인구 유출이 가장 심한 지역은 부산이었으며. 또한 부산의 1인 가구 비중은 전국 특·광역시 중 4번째이며, 전국 평균인 33.4%보다 높았다(통계청).  부산시 관계자는 2050년에는 부모와 자녀가 떨어져 사는 가구의 비율이 67%에 이를 것으로 예상한다고 이야기했다(한경일보 2023.04.16). 

따라서 부산에서도 청년 인구 유출과 1인 가구 증가로 인해 가족 소통 부족 문제를 이미 겪고 있거나 겪게 될 가능성이 높다.

### 1.1.3 부산대 학생들이 이야기하는 가족 소통 부족 문제

2022년에 진행한 채널 303의 주거 형태 조사 결과에 따르면 응답자의 57%가 가족과 떨어져 살고 있었다.

부산대 재학생과의 그룹 인터뷰를 진행하였으며, 학생들은 떨어져 살기 시작한 이후 가족과의 대화가 줄어들었으며, 형식적인 대화와 바쁜 일상으로 인해 가족 대화가 어렵다고 이야기하였다. 

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

패밀링의 유저 데이터는 가족 소통에 대한 특수한 데이터로 학술연구나, 공공기관에서 쓰일 수 있다. 이에 한국 데이터 산업 진흥원이 제시한 데이터 거래 및 가격 책정 절차 안내서를 참고해 가격을 선정하였다. 데이터 판매를 위해 제3자 제공 동의를 받도록 한다.

> 차별화된 상품은 실제 투입된 원가를 바탕으로 제시할 수 있다. 제시된 이윤은 인건비와 경비, 일반관리비의 4%이었다.
> 

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

## 2.2. ERD

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
| **JDK** | 17 |

# 3. 개발결과
## 3.1. 전체시스템 흐름도




## 3.2. 기능설명
**로그인**

![패밀링 화면 흐름도-로그인 .drawio (1).png](https://prod-files-secure.s3.us-west-2.amazonaws.com/35fcd473-6b4a-40a8-af94-8368c00155b9/cfbb6fc7-312d-4a36-9fd8-8ec4da9ee2b1/%ED%8C%A8%EB%B0%80%EB%A7%81_%ED%99%94%EB%A9%B4_%ED%9D%90%EB%A6%84%EB%8F%84-%EB%A1%9C%EA%B7%B8%EC%9D%B8_.drawio_(1).png)

- 사용자는

```

```

**가족 생성**

![패밀링 화면 흐름도-가족.drawio (2).png](https://prod-files-secure.s3.us-west-2.amazonaws.com/35fcd473-6b4a-40a8-af94-8368c00155b9/3fbd62a6-d754-46fb-92b6-3676b40bef0a/%ED%8C%A8%EB%B0%80%EB%A7%81_%ED%99%94%EB%A9%B4_%ED%9D%90%EB%A6%84%EB%8F%84-%EA%B0%80%EC%A1%B1.drawio_(2).png)

```

```

**상태보기**

![패밀링 화면 흐름도-상태보기.drawio.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/35fcd473-6b4a-40a8-af94-8368c00155b9/4c42597f-0685-4383-9697-6d5710f59bd3/%ED%8C%A8%EB%B0%80%EB%A7%81_%ED%99%94%EB%A9%B4_%ED%9D%90%EB%A6%84%EB%8F%84-%EC%83%81%ED%83%9C%EB%B3%B4%EA%B8%B0.drawio.png)

```

```

**스냅샷**

![패밀링 화면 흐름도-스냅샷.drawio (1).png](https://prod-files-secure.s3.us-west-2.amazonaws.com/35fcd473-6b4a-40a8-af94-8368c00155b9/e5716796-f793-4ca4-b5bb-91be1632095a/%ED%8C%A8%EB%B0%80%EB%A7%81_%ED%99%94%EB%A9%B4_%ED%9D%90%EB%A6%84%EB%8F%84-%EC%8A%A4%EB%83%85%EC%83%B7.drawio_(1).png)

```

```

**애정카드**

![패밀링 화면 흐름도-애정카드.drawio (1).png](https://prod-files-secure.s3.us-west-2.amazonaws.com/35fcd473-6b4a-40a8-af94-8368c00155b9/1ed76331-631c-4c62-bfb8-56f9e1b10411/%ED%8C%A8%EB%B0%80%EB%A7%81_%ED%99%94%EB%A9%B4_%ED%9D%90%EB%A6%84%EB%8F%84-%EC%95%A0%EC%A0%95%EC%B9%B4%EB%93%9C.drawio_(1).png)

```

```

**AI 봇**

![패밀링 화면 흐름도-채팅화면.drawio (1).png](https://prod-files-secure.s3.us-west-2.amazonaws.com/35fcd473-6b4a-40a8-af94-8368c00155b9/c57b391e-6c79-48a0-b882-847d9c9dc75c/%ED%8C%A8%EB%B0%80%EB%A7%81_%ED%99%94%EB%A9%B4_%ED%9D%90%EB%A6%84%EB%8F%84-%EC%B1%84%ED%8C%85%ED%99%94%EB%A9%B4.drawio_(1).png)

![패밀링 화면 흐름도-채팅화면.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/35fcd473-6b4a-40a8-af94-8368c00155b9/5ecbc6c4-25c2-45d4-a465-c5ce3f52414d/%ED%8C%A8%EB%B0%80%EB%A7%81_%ED%99%94%EB%A9%B4_%ED%9D%90%EB%A6%84%EB%8F%84-%EC%B1%84%ED%8C%85%ED%99%94%EB%A9%B4.jpg)

```

```

**마이페이지**

![패밀링 화면 흐름도-마이페이지.drawio.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/35fcd473-6b4a-40a8-af94-8368c00155b9/fa403dd1-4570-45dd-a71f-be6f82c497e8/%ED%8C%A8%EB%B0%80%EB%A7%81_%ED%99%94%EB%A9%B4_%ED%9D%90%EB%A6%84%EB%8F%84-%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80.drawio.png)

```

```


## 3.3. 기능명세서
> 개발한 제품에 대한 기능명세서를 작성해 제출하세요.
> 
> 노션 링크, 한글 문서, pdf 파일, 구글 스프레드 시트 등...

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

```jsx
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

```


# 4. 설치 및 사용 방법
[패밀링 다운로드 링크](https://www.notion.so/2f3091422296413b8e84090c15a19456?pvs=21) 

# 5. 소개 및 시연 영상
> 프로젝트에 대한 소개와 시연 영상을 넣으세요.
> 프로젝트 소개 동영상을 교육원 메일(swedu@pusan.ac.kr)로 제출 이후 센터에서 부여받은 youtube URL주소를 넣으세요.

# 6. 팀 소개
> 팀원 소개 & 구성원 별 역할 분담 & 간단한 연락처를 작성하세요.

# 7. 해커톤 참여 후기
> 팀원 별 해커톤 참여 후기를 작성하세요.
>
> 
