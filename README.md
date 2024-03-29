# How-JavaScript-Works

자바스크립트는 왜 그 모양일까 더글라스 클락포드

- 언어에 숙달했다는 것을 증명하고 싶다면, 좋은 프로그램을 만들면 됩니다.
- 더 작고, 더 낫게 만들어야 합니다.
- ECMA Script 표준을 읽어보세요.

## 1장 이름

1. 이름만 보고도 무엇을 하는 것인지 알 수 있어야 합니다.
2. 서수형은 thing_nr 기수형은 nr_thing 으로 표현합니다. (첫 번째 사람: person-one, 두 명의 사람 two-person)
3. 생성자 함수만 대문자로 시작하고 나머지는 소문자로 시작합니다.
4. 예약어는 변수 이름이나 매개변수로 사용할 수 없습니다.

## 2장 숫자

1. 자바스크립트의 수는 실수에서 영감받았지만, 진짜 실수는 아닙니다.
2. number는 인텔의 iAPX-432 프로세서를 위해 처음 개발된 IEEE 부동소수점 연산 표준을 차용했습니다.
3. 부동소수점은 두개의 수로 하나의 숫자를 표현합니다.
   - 첫 번째 수: 계수나 유효숫자, 분수 도는 기수라고 불리는 숫자
   - 두 번째 수 : 지수

4. 자바스크립트의 number는 java의 double과 비슷합니다.
   - 64비트 2진 부동소수점
   - 1개의 부호비트와 11비트의 지수, 53비트의 유효숫자로 구성
   - 65비트를 64비트로 표현
   - 지수 : 부호와 유효숫자 사이의 공간을 전부 차지함.
   - 부호 \* 유효숫자 \* (2 \*\* 지수)

5. 자바스크립트에는 0과 -0이 있습니다.
6. NaN은 typeof에서 number로 표시됩니다.
   - NaN===NaN은 언제나 false입니다.
   - Number.isNaN(value)를 사용해야 합니다.

## 3장 큰 정수

- BigInt

## 4장 큰 부동소수점

- 부동소수점 시스템
  1. 계수(coefficient)
  2. 지수(exponent)
  3. 밑수(basis)
- 값 = 계수*(밑수**지수)

## 5장 큰 유리수

- 유리수 : 두개의 정수 비율로 나타낼 수 있는 수
- 값 = 분자/분모

## 6장 boolean

- ture, false
- falsy한 값 사용하지 않는 것을 권장

## 7장 배열

- 자바스트립트의 배열은 객체
- array.prototype 상속
- 스택과 큐 배열로 구현
- 배열의 내장함수
  - 검색 : indexOf, include
  - 축약 : reduce
  - 반복 : every, some, find,findIndex, filter, map
  - 정렬 : sort

## 8장 객체

- null과 undefined를 제외한 모든 것을 객체로 취급
- 속성: key와 value
- 객체 복사 : objectassign
- 객체 불변성: Object.freeze => 최상위 객체만 동결
- weekmap

## 9장 문자열

- 유니코드 : 코드유닛(16비트 문자 중 하나), 코드 포인트(문자에 해당하는 숫자 표시)
- 템플릿 리터럴 : dump
- 정규 표현식
  - string, match, replace, search, split 함수는 인자로 정규표현식 객체를 받음
  - 정규표현식 객체로는 JSON 텍스트를 분석할 수 없음

## 10장 빈 값

- null, undefined

## 11장 문장

- 문장의 종류
  - 표현식: expression language
  - 문장 표현식: statement languege

- 선언문: let, const, function(함수 객체를 만들고 이를 저장할 수 있는 변수 지정, function 선언문은 호이스팅됩니당)
- 표현식: 할당문, 호출문, delete
- 분기: if, swich (순수함수 스타일로 코드 작성 => 삼항연산자)
- 반복문: 반복문을 만드는 가장 좋은 방법은 꼬리 재귀(tail recursion)
- 중단문: break, continue, return, throw

## 12장 함수

- 배경
  - 최초의 프로그램은 '루틴'이라고 불림 => 서브 루틴 등장! => 서브 루틴을 묶어서 라이브러리 생성!
  - 컴파일러: 명렁어 목록, 호출번호, 서브루틴 라이브러리를 가지고 있는 테이프를 전달받아 처리했었음
  - 다른 소스의 정보를 조립해서 프로그램 생성
  - 어셈블리, 컴파일러, 라이브러리, 소스, 호출 등 용어 탄생

- function
  - function 연산자로 함수 객체를 만듬
  - 함수객체는 인자목록과 함께 호출됨, 인자목록에는 표현식이 있을수도 없을수도 있음. 각각은 쉼표로 분리됨
  - 각 표현식은 계산된 뒤, 함수의 매개변수에 지정됨
  - 매개변수 목록보다 긴 인자들은 함수에서 무시됨
  - 함수가 호출되면 activation object가 생성 => 호출된 함수의 반환주소와 실행에 필요한 정보를 저장하고 이를 호출된 함수에 바인딩 함

- 활성객체(activation object)
  - 자바스트립트는 활성객체를 heap에 저장함
  - 함수가 종료된다고 자동으로 종료되지 않음. => 가비지 컬렉터가 처리
    1. 함수객체에 대한 참조
    2. 함수를 호출한 측의 활성객체에 대한 참조, 이 참조는 return 문이 실행흐름을 함수 호출 측으로 돌릴 때 사용
    3. 호출 완료 후 실행을 재개하기 위해 필요한 정보, 대개는 함수호출문 바로 다음 명령어의 주소
    4. 인자에 의해 초기화되는 함수 매개변수
    5. undefined 초기화된 함수 변수들

## 13장 제너레이터

- ES6부터 제너레이터 도입
- function*
- 실행 흐름을 멈추거나 재개할 수 있어 실행흐름이 복잡해짐.

## 14장 예외

- 되감기
  - JS 컴파일러는 컴파일하는 모든 함수에 대란 캐치맵을 만듬.
  - 캐치맵이 함수 몸체의 명령어 위치와 이들을 처리하는 catch 문을 연결함.
  - throw문이 실행되면 예외가 발생하고 현재 함수에 대한 캐치맵을 참조함.
- 일상적인 예외
  - 예외 처리는 예상하지 못한 문제를 처리할 때만 사용해야함.
- 비동기 프로그램에서의 예외 처리
  - 예외처리는 스택을 거꾸로 되감으면서 진행
  - 예외로 발생된 값은 스택의 더 아래쪽에 있는 함수 호출로 전달됨
- 보란
- 신뢰성

## 15장 프로그램

- 자바스트립트 엔진은 자바스트립트 코드를 컴파일하고, 적재하고, 빠르게 실행함
- HTML에 `<script>`를 이용해 자바스트립트 코드를 삽입하는 것은 성능과 보안적인 측면에서 좋지 않음.
- 전역변수
  - global 스코프
  - window 변수와 self 변수가 있음. (self변수: 페이지 스코프에 대한 참조가 포함되어 있음)
- 모듈
- 응집도(cohesion)와 결합도(coupling)
  - 좋은 프로그래밍이란 미시적 수준에서는 좋은 코딩 규칙에 거시적으로는 좋은 모듈 설계에 달려있음
  - 좋은 모듈은 응집도는 높고 결합도는 약하게 설계되어 있음
  - 모듈 인터페이스를 간단 명료하게 만들 것

## 16장 this

- self는 스몰토스 언어에서 파생되었음, 클래스를 프로토타입으로 대체한 프로그래밍 언어
- 객체는 다른 객체를 바로 상속할 수 있음
- 객체가 생성되면 새로운 객체 콘텐츠의 일부 혹은 전체를 가지는 프로토타입이 지정됨
- 프로토타입에 있는 함수가 어떤 객체에서 동작하고 있는지 알아내기 위해 this가 등장
  - 문법: 메서드 호출 => .,(),[]로 구성된 삼항연산자를 사용
  - 삼항연산자의 구성: 사용하고자 하는 객체, 메서드 이름, 인자 목록

1. 지정된 이름을 메서드를 찾기 위해 객체와 프로토타입 체인 검색 => 못찾은 경우 예외 발생
2. 메서드를 찾으면 인자 목록을 건네 메서드 호출 => 메서드는 자신을 동작시킨 객체에 대한 정보를 this라는 묵시적 매개변수로 전달받음
3. 메서드 호출만 this 바인딩을 제공받음. 메서드 안에 함수가 있다면, 함수는 this에 접근할 수 없음
4. this는 동적으로 바인딩됨

__new 생성자호출__

- Object.create에 대한this값을 만듬
- 새로운 객체에 바인딩된 this값으로 함수 호출
- 함수가 객체를 반환하지 않으면 this를 강제로 반환

__this없이 사용하기__

## 17장 클래스 없는 자바스트립트

객체지향 프로그래밍 개발

- 각 부분이 서로 통신하는 모델
- 좋은 설계에서는 속성들이 숨겨져 있고 메세드드이 속성 값을 단순히 변경하는 것이 아닌 트랜젝션을 처리함
- 객체의 인터페이스는 오직 그 자신의 메서드여야 함 => 캡슐화

생성자

- 객체를 반환하는 함수
- 단단한 객체(Hard object): 메서드만 가지고 있음. 클로저 내부에 있는 데이터에 대한 완전성을 보호하며 다형성과 캡슐화를 제공함
- 부드러운 데이터 객체(Soft Object): 데이터만 가지고 있음. 정의된 동작이 없으며 함수에 의해 처리될 수 있는 편리한 데이터 집합

생성자 매개변수

- 매개변수로 하나의 객체만 전달받는 생성자를 만듬
  - key 문자열 값이 코드 자체를 문서화해줍니다. 호출할 때 어떤 인자가 어떤 일을 하는지 코드 자체가 알려주기 때문에 가독성이 증가함.
  - 인자가 어떤 순서로 전달되어도 관계 없음
  - 기존의 코드를 수정하지 않고도 새로운 인자를 추가할 수 있음
  - 쓸모없는 매개변수를 무시됨

컴포지션

크기

- 객체를 생성하는 방법은 프로토타입을 사용하는 방법보다 메모리를 더 많이 사용함
  - 프로토타입을 사용하는 경우: 프로토 타입 객체가 메서드를 가진 프로토타입에 대한 참조만 가지고 있음
  - 객체를 사용하는 경우: 모든 단단한 객체가 모든 객체의 메서드를 다 가지고 있음
- 메모리 사용량은 객체를 생성할 경우 약간 증가하지만, 모듈화에서 얻는 이익이 더 큼!
  - 속성값 처리를 트랜잭션으로 만듦으로써 메서드의 수는 줄이고 응집도를 더 높임

## 18장 꼬리 호출(tail call optomozation)

최적화의 가장 중요한 점은 새로운 버그를 만들지 않는 것과 좋은 프로그램의 버그를 완전히 제거하여 프로그램의 새로운 패러다임을 가져온다는 것

- 꼬리호출: 함수가 마지막으로 하는 일이 어떤 함수를 호출해 그 결과를 바로 반환할 때 일어남

```js
function continuize(any){
  return function hero(continuation, ...args){
    return continuation(any(...args))//꼬리 호출
  }
}
```

함수 호출 하면

1. 인자표현식을 계산
2. 함수의 매개변수와 변수를 저장할 수 있는 충분한 크기의 활성객체를 생성
3. 호출된 함수 객체에 대한 참조를 새로운 활성객체에 저장
4. 전달받은 인자를 새로운 활성객체의 매개변수에 저장, 빠진 인자는 undefined로 간주
5. 활성객체의 모든 변수 값을 undefined로 지정
6. 함수의 호출 명령어의 바로 다음 명령어를 활성객체의 다음 명령어(next instruction)필드 값으로 지정
7. 새로운 활성 객체의 호출자(caller) 필드 값에 현재 활성 객체 지정, 이는 실제 호출 스택이 아니라 활성객체의 연결된 목록임
8. 새로운 활성 객체를 현재 활성 객체로 지정
9. 호출된 함수를 실행함

최적화한 경우 함수의 호출

1. 인자표현식을 계산
2. 현재 활성 객체가 확인
    - 공간이 충분한 경우: 현재 활성 객체를 새로운 활성 객체로 사용
    - 공간이 부족한 경우: 충분한 크기의 활성객체 생성 후 새로운 활성객체 caller 필드 값에 현재 활성 객체를 지정, 새로운 활성객체를 현재 활성 객체로 지정함
3. 호출된 활성객체에 대한 참조를 새로운 활성객체애 저장함
4. 전달받은 인자를 새로운 활성 객체의 매개변수에 저장함. 빠진 인자는 undefined로 간주, 남은 인자는 버림
5. 활성객체의 모든 변수 값을 undefined로 지정
6. 호출된 함수를 실행

예외
try블록 내의 꼬리 호출은 최적화되지 않음!

## 19장 순수함

함수형 프로그래밍은 말 그대로 함수형 프로그래밍하는 것을 뜻함.

- 순수함은 아주 휼륭한 모듈화를 내포하고 있음
- 순수 함수는 매우 높은 응집도를 보임. 함수의 모든 것은 하나의 결과를 만들어 내기 위해서만 존재함
- 순수 함수는 테스트하기도 쉬움
- 순수 함수는 어떤 사이드 이펙트도 없고 외부에 대한 의존성도 없으며 영향도 받지 않기 때문에 순수 함수들을 모아서 더 크고 복잡한 함수를 만들 수 있음

## 20장 비동기 프래그래밍

순차적 프로그래밍 > 비동기 프로그래밍

- 동시성
- 스레드
  - 가장 오래된 동시성 기법 중 하나로 지금도 널리 사용되고 있음
  - 실제 혹은 가상의 CPU로서 메모리를 공유하며 동시에 실행됨
  - 스레드 간 경쟁으로 발생할 수 있는 위험성은 상호배제로 줄일 수 있음
    - 상호배제: 메모리의 임계구역을 잠그고, 스레드를 차단하고, 서로 경쟁하는 코드실행을 막는 것으로 이루어짐
  - 운영체제에서 스레드는 필요악, 애플리케이션에서 스레드는 악
- 비동기 프로그래밍
  - 비동기 함수는 호출하면 즉각 반환함, 심지어 해야하는 일을 다 끝내지 않아도 반환함
  - 애플리케이션에서 스레드를 사용하지 않고 많은 일을 처리할 수 있도록 해줌
  - 콜백함수와 프로세싱 루프에 근간함
    - 콜백함수: 시작하거나 특정 활동을 지켜보는 함수에 인자로 전달됨, 어떤 활동을 표현하는 객체에 연결됨
    - 프로세싱 루프(이벤트 루프, 메세지 루프)
      - 큐(queue)를 관리!
      - 큐(queue)에서 가장 높은 우선순위를 가지는 이벤트나 메세지를 가져와서 해당 이벤트나 메세지를 처리하도록 등록된 콜백 함수를 호출함, 콜백 함수가 끝나면 큐에서 그 다음 이벤트나 메세지를 꺼내와서 등록된 콜백 함수를 호출함. 이 과정을 계속 반복
      - 이벤트나 메세지는 사용자 입력이나 네트워크, I/O, 프로세스 간 통신을 처리하는 보조 스레드를 통해서 전달됨
      - 자바스크립트 프로그램과 메인 스레드 간에 통신하는 방법이 바로 큐
  - 자바스크립트는 하나의 스레드만 사용. 스레드 상태 값은 대부분 함수의 클로저에 저장되어 있음
- 턴의 법칙
  - 프로세싱 루프의 한 반복을 턴(trun)이라고 함
  - 턴의 법칙: 기다리지말라, 블록하지 말라, 빨리 끝내라,
  - 턴의 법칙을 위반하는 함수는 수정되거나 별도의 프로세스로 격리되어야 함
- 서버 세상에서의 문제
  - 자바스크립트는 이벤트 루프를 처리하기 위해 만들어 짐
- 리퀘스터(requester)
  - 콜백함수를 인자로 전달받고 호출 즉시 반환되지만 작업은 바로 끝나지 않고 미래의 언젠가 끝나는 함수들
  
## 21장 Date

- Date 함수
- ISO 8601: 날짜와 시간을 나타내는 국제 표준

## 22장 JSON

자바스크립트는 JSON 객체의 `parse`, `stringify` 두 개의 함수를 통해 JSON을 지원함

- parse: JSON텍스트를 자바스크립트 데이터로 디코드
- stringify: 값을 받아서 JSON 텍스트로 인코딩

## 23장 테스팅

- TDD
  - 단위테스트: 저수준 코드에서 효과적

## 24장 최적화

- 성능 측정 : 실행하고 얼마나 걸리는지 측정
- 시간을 갉아먹는 것들
  - 병렬화에 실패
  - 턴의 법칙
  - 낮은 응집도
  - 강한 결합도
  - 잘못된 알고리즘
  - 스래싱
  - 비대한 소프트웨어
  - 다른 사람이 만든 코드

## 25장 트랜스파일링

하나의 프로그래밍 언어를 다른 언어로 컴파일 하는 형태

- 트랜스파일러를 만드는 이유
  - 실험적인 용도, 특수화, 유산, 유행, 얼리 엑세스, 보안, 성능
- NEO
  - 트랜스 파일 언어
  - 토큰화, 파싱, 코드, 생성, 실행 환경 단계

## 26장 토큰화

프로그램을 만드는 첫 번째 단계는 소스를 토큰 단위로 쪼개는 것
토큰: 연속된 문자열로 구성되며 소스에서 의미있는 단어를 나타내는 단위

## 27장 파싱

연속한 토큰 객체를 구문 트리 형태로 만들어 내는 과정

## 다음 페러다임의 변화

- 고수준 언어
- 구조적 프로그래밍
- 객체 지향 프로그래밍
- 함수형 프로그래밍
