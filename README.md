# ⚾ 미션 - 숫자 야구 게임

<br>

## 📝구현할 기능 목록

- **[OK🤙] 1. 정답 생성 기능**
  - 1 ~ 9 사이의 숫자 중 중복되는 숫자 없이 생성
    - 1 2 3 🙆‍♂️ / 1 1 3 🙅‍♂️

- **[OK🤙] 2. USER에게 Input 받아서 Input값이 올바른지 체크하는 함수로 넘기는 기능**
  - USER가 입력한 String값을 배열로 변경해서 Input이 올바른지 체크해주는 함수로 배열을 넘긴다.
  - 배열 안의 요소들은 Number로 변환한다.
  
- **[OK🤙] 3. Input이 올바른지 체크**
  
  - 1 ~ 9 사이의 숫자여야 함

  - 중복되는 숫자가 없어야함

  - 반드시. 3개의 숫자를 선택해야 함

  - Input이 올바를 경우 : USER가 선택한 값과 컴퓨터의 값을 비교

  - Input이 잘못 됐을 경우 : 오류메세지를 출력하고 Input을 다시 받음

- **[OK🤙] 4. Input이 올바르지 않을 때 ```alert```를 이용해 메세지 출력**

  - ```alert```를 이용해 잘못 된 메세지임을 출력

- **[OK🤙] 5. Input이 올바를 때 변수에 Input을 담고 비교하는 함수를 실행시키는 기능**

  - userInputNumbers 변수에 Input을 담음
  - 올바를 경우 : (7)번으로 
  
- **[OK🤙] 6. Input이 올바르지 않을 때 메세지 출력 후 Input창 비우고 다시 입력받는 기능**

  - 올바른 Input이 들어올 때까지 반복해서 입력을 받음
  - 틀렸을 경우 : (2)번으로

- **[OK🤙] 7. USER가 선택한 값과 컴퓨터의 값을 비교해 스트라이크와 볼이 몇개인지 체크하는 기능**
  - 같은 수가 같은 자리 = 스트라이크(S)
  - 같은 수가 다른 자리 = 볼(B)
  - 같은 수가 없을 경우 = 낫싱

- **[ ] 8. 스트라이크와 볼이 몇개인지 체크 후 출력**
  - 정답일 경우
    - "게임을 새로 시작하겠습니까?" <- 출력 후 [게임 재시작] 버튼 생성
  - 스트라이크와 볼이 모두 있을 경우
    - "X볼 X스트라이크입니다." 출력
  - 스트라이크나 볼 둘 중 하나만 있을 경우
    - "X볼입니다." 또는 "X스트라이크입니다." 출력
  - 낫싱일 경우
    - "낫싱입니다." 출력
  
- **[ ] 9. 게임을 다시 시작하는 기능**
  - USER가 정답을 맞췄을 경우 [게임 재시작] 버튼 클릭을 통해 게임을 다시 시작
  
<br>
