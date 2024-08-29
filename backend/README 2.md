# familing-backend

    
## Commit convention    

```
1. Type(File or function): Subject
ex) feat(LoginService): 사용자의 로그인 검증 기능 구현
2. Type: Subject  // 파일이 여러개 일 때
ex) feat: 로그인 기능 구현
```

|    Type    | 설명                                             |
|:----------:|------------------------------------------------|
|    feat    | 새로운 기능 추가                                      |
|    fix     | 버그 수정                                          |
|   style    | 코드 수정 없음 (세미콜론 누락, 코드 포맷팅, 파일, 폴더명 수정 혹은 이동 등) |
|  refactor  | 코드 리팩토링                                        |
|  comment   | 주석 추가 및 변경                                     |
|    docs    | 문서 수정 (README.md 등)                            |
|    test    | 테스트 코드 추가                                      |
|   chore    | 빌드 업무 수정, 패키지 매니저 수정 (pom.xml 등)               |
|   remove   | 파일 삭제                                          |

### commit은 최소한의 기능 단위로 해주세요!

## Git Flow

![image](https://github.com/Familing/familing-backend/assets/64734115/90aae5a5-1a90-4649-97a3-089f67a3cd37)

### 저희 프로젝트는 master가 아니라 main 입니다.

main 브랜치에 merge가 되면 자동으로 배포가 됩니다.

### 기능 구현 시
1. issue탭에서 기능 구현 이슈 등록 (구현할 기능, todo 작성)
2. develop 브랜치로 이동해서 현재 develop 브랜치와 로컬 pull 해서 동기화 하기
```
git checkout develop
git pull origin develop
```
3.  생성된 이슈 번호와 구현할 기능을 간단하게 축약한 브랜치 이름을 생성한다.
ex) 이슈가 #2번이고 로그인 기능을 구현할 계획이라면  아래와 같은 브랜치 생성

```
git checkout -b feature/2-login
```

기능 구현 후 develop 브랜치로 PR 생성 후 코드 리뷰 후 merge

참고 : https://velog.io/@myoungji-kim/git-flow

## RestFul Api 

1. 의미를 바로 알아볼 수 있도록 작성하고, 소문자를 사용한다.
   ```text
    ❌ GET /users/writing
    ❌ GET /users/Post-Comments
    ✅ GET /users/post-comments
2. URI가 길어지는 경우 언더바(_) 대신 하이픈(-)을 사용한다.
   ```text
    ❌ GET /users/profile_image
    ✅ GET /users/profile-image
3. 마지막에 슬래시(/)를 포함하지 않는다.
   ```text
    ❌ GET /users/
    ✅ GET /users
4. 리소스에 대한 행위를 HTTP Method로 표현한다.
    ```text
   URI에 HTTP Method가 포함되어서는 안된다.   
    ❌ get /users/
    ✅ GET /users
    
5. resource는 동사가 포함되어서는 안되고 명사를 사용한다.
    ```text
     ❌ GET /users/show/1
     ✅ GET /users/1
6. 파일 확장자는 URI에 포함시키지 않는다.
    ```text
    ❌ GET /users/photo.jpg
    ✅ GET /users/photo (이때, payload의 포멧은 headers에 accept를 사용한다.)
7. URI 사이에 연관 관계가 있는 경우 /리소스/고유ID/관계에 있는 리소스 순으로 작성한다.
     ```text
    ❌ GET /users/profile/{user_id}
    ✅ GET /users/{user_id}/profile
8. URI에 적성되는 영어의 복수형으로 작성한다.
     ```text
    ❌ GET /product
    ✅ GET /products 
9. URI는 /구분자를 사용하여 자원의 계층 관계를 나타내는데 사용한다.
   

![image](https://github.com/Familing/familing-backend/assets/64734115/af9cf33d-4ba4-43ed-8adb-2dce12e31160)

참고 : https://velog.io/@tiger/API-RESTful-API

## 패키지 구조

```
com
 ㄴ pinu
    ㄴ familing
        ㄴ domain
        |   ㄴ chat
        |   | ㄴ controller
        |   | ㄴ dto
        |   | ㄴ entity
        |   | ㄴ exception
        |   | ㄴ repository
        |   | ㄴ service
        |   ㄴ user
        |   | ㄴ controller
        |   | ㄴ dto
        |   | ㄴ entity
        |   | ㄴ exception
        |   | ㄴ repository
        |   | ㄴ service
        | ...
        ㄴ global
        |  ㄴ auth
        |   ㄴ common
        |   ㄴ config
        |   ㄴ error
        |   ㄴ infra
        |   ㄴ util
        ㄴ familingApplication
```
### 최상위 레벨에서는 domain과 global로 패키징한다.
### domain 패키지에서는 도메인을 기준으로 하위 패키지를 구성한다.
### global 패키지에서는 프로젝트 전방위적으로 사용할 수 있는 클래스들로 구성한다.
