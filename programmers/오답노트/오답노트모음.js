//머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다.
//문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
//정답
function solution(babbling) {
    var answer = 0;
    let 에이이우마 = [ "aya", "ye", "woo", "ma"];
    for(let i = 0; i < babbling.length; i++){
        let word = babbling[i];
        에이이우마.forEach(item =>{
            word = word.replaceAll(item, " ");
        })
         if (word.trim() === "") {
            answer++;
        }
    }
    return answer;
  //따로 배열로 아이템을 빼서 그 아이템을 또 돌려서 확인하는것까진 똑같음
  //다만 다른 점은 일단 for문으로 돌린 옹알이의 i번째를 변수에 저장을 한 것과
  //그걸 replaceAll로 변환해서 확인
  //다만 나는 그냥 단순 비교로 말그대로 "aya", "ye", "woo", "ma" 이 4가지가 (정확히) 들어있으면 모르겠지만
  //ayaye 로 들어있으면 검사를 못하는 결과가 생긴 것임.
  //aya + ye 를 검사할 수 있는 방식이 필요한데 그게 replaceAll로 "aya", "ye", "woo", "ma" 이 4가지가 들어있으면 그걸 공백으로바꿔라 라는 코드
  //거기서 trim으로 공백검사를 함 만약에 ayaye가 들었다고 가정을 하면
  // aya 가 먼저 빠질것 그렇다면 '~~공백~~ye' 이런 구조 그 뒤에 다시 ye가 빠짐 
  //그리고나서 trim으로 공백검사를 했더니 공백이네? 그러면 1을 추가 이런구조로 작동하는 

//내가 푼 오답
function solution(babbling) {
    var answer = 0;
    let 에이이우마 = [ "aya", "ye", "woo", "ma"];
    for(let i = 0; i < babbling.length; i++){
        for(let j = 0; j < 에이이우마.length; j++){
            if(babbling[i] == 에이이우마[j]){
                answer += 1;
            }
            
        }
    }
    return answer;

  //정규식으로 푼 정답
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach(word => {
    if (regex.test(word)) answer++;  
  })

  return answer;
}
  //이렇게 풀 수도 있음



  // 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
  //정답코드
  function solution(common) {
    var answer = 0;
    let 배열마지막 = common.slice(-1)[0];
    if((common[0] - common[1]) == (common[1] - common[2]))
        {
            //등차수열
            let 등차값 = common[1] - common[0];
            
           배열마지막 = 등차값 + 배열마지막;
        }
    if((common[1] / common[0]) === (common[2] / common[1])){
        //등비수열
        let 등비값 = common[1] / common[0];
        배열마지막 = 등비값 * 배열마지막;
    }
    
    return 배열마지막;
}
  //오류코드
  function solution(common) {
    var answer = 0;
    let 배열마지막 = common.slice(-1)[0];
    if((common[0] - common[1]) == (common[1] - common[2]))
        {
            //등차수열
            let 등차값 = common[0] - common[1];
            
           배열마지막 = 등차값 + 배열마지막;
        }
     return 배열마지막;
}
  //이렇게 작성해서 등차수열에 들어가는 값이 -1이 되어버림 오류 발생!


//연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요
function solution(num, total) {
    // 등차수열 합 공식을 이용해 첫 번째 항의 값(start)을 구합니다.
    // start = total / num - (num - 1) / 2
    const start = Math.ceil(total / num - num / 2);
    let answer = [];
    for (let i = 0; i < num; i++) {
        answer.push(start + i);
    }
    return answer;
}


//문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다.
//이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(A, B) {
    if (A === B) return 0; // 시작부터 같으면 0번 이동

    let tempArr = A.split(''); // 문자열을 배열로 변환
    for (let i = 0; i < A.length; i++) {
        let lastChar = tempArr.pop(); // 마지막 문자를 추출
        tempArr.unshift(lastChar); // 맨 앞에 추가
        if (tempArr.join('') === B) { // 변경된 문자열이 B와 같은지 확인
            return i + 1; // 이동 횟수 반환
        }
    }
    return -1; // B와 일치하는 문자열이 없을 경우 -1 반환
}

//정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(numbers, num1, num2) {
    var answer = [];
    answer = numbers.slice(num1, num2+1)
    return answer;
}


//사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
// x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
// x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
// x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
// x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
// x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.

//나의 무식한 방식
function solution(dot) {
    if( dot[0] > 0 && dot[1] > 0){
        return 1;
    }
 if(dot[0] < 0 && dot[1] > 0){
        return 2;
    }
  if(dot[0] < 0 && dot[1] < 0){
        return 3;
    }
  if(dot[0] > 0 && dot[1] < 0){
        return 4;
    }
  
}

//다른 사람 풀이 구조분해할당
function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}


//삼항연산자 깔끔하게
function solution(dot) {
    return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
}

//두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
function solution(s1, s2) {
    var answer = 0;
    for(let i = 0; i < s1.length; i++){
        for(let j = 0; j < s2.length; j++){
            s1[i] == s2[j] ? answer += 1 : answer
        }
    }
 return answer;
}

// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
function solution(n) {
    let answer = Math.sqrt(n); // 입력받은 숫자의 제곱근을 Math.sqrt() 함수를 이용해 구합니다. 
    return Number.isInteger(answer) ? 1 : 2 //Number.isInteger() 함수를 사용해 true가 나오면 제곱수입니다.
}

//문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string, letter) {
    for(let i = 0; i < my_string.length; i++){
    if (my_string.includes(letter)) {
        let newText = my_string.replace(letter, ""); 
        }
        return newText
    }
}
//오류가 너무 많았음 let을 if문 안에서 선언해놓고 그거를 for문에서 쓰면 인식을 못함
//두번째로 if문 안에서 사용하면 다행히 삭제는 해주지만 중복된 글자를 제거 못해줌 예를 들어서 aaabbb가 있고 제거할게 b라면 aaabb 이렇게만 남게됨
//그래서 사용해야하는 방법이 
function solution(my_string, letter) {
  return my_string.split(letter).join("");
}
//split과 join을 이용한 방법임

//정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요
function solution(num_list) {
    const evenCnt = num_list.filter(num => num % 2 === 0).length;
    const oddCnt = num_list.length - evenCnt;

    return [evenCnt, oddCnt];
}
//내가 그전에 작성한건 날아가서 따로 문제점을 작성해보겠음.
//출력시 [2, 3], [0, 4] 이런식으로 출력되야하는데
//배열까지는 만들었지만 [3], [4] 이런식으로 홀 짝 구분없이 하나로 묶여있었음
//그거를 차라리 리턴할 때 배열안에 그냥 변수를 담으면 됨 


//중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다.
//정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.
function solution(array) {
    var answer = 0;
   answer = array.sort((a,b)=> a - b)
    let length = answer.length;
    if(length % 2 === 1){
        return answer[Math.floor(length / 2)];
    }
   
}
//자 내가 헷갈린 점 저기 return문을 보면 mathfloor로 배열의 길이에서 반을 나누고 소수점을 버리면 중앙값이 아니라 중앙값의 전의 값이 나오는게 아닌가라는 생각을했지만?
//배열의 인덱싱은 0부터 시작하기 때문에 소수점을 버린 값이 중앙값이 맞다 이런 실수는 드릅게 멍청한 실수였다.


//정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
function solution(n) {
    var answer = [];
    for(let i = 0; i <= n; i++){
        if(i % 2 !== 0){
           answer.push(i);
        }
    }
    return answer;
}
//n이라는 자연수가 주어지기 때문에 그 자연수보다 낮은 수를 출력하는 for문을 만들면 되는거였음
//n이 배열이였으면 다르게 생각해야겠지만 n이 어쨋든 자연수이기 때문에 그 자연수 값보다 낮으면 다 돌려보면서 그 값을 푸시하면 됨
//또 다른 방법으로는
function solution(n) {
    let answer = [];
    for (let i = 1; i<=n; i+=2) answer.push(i)
    return answer;
}
//이렇게 작성하면 되는데 if문으로 1,2,3,4,5,6,7,8 다 검사하는게 아니라 그냥 1부터 시작해서 2씩 더해 홀수 값만 출력하는 방식이다.


//머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
//구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
function solution(price) {
    var answer = 0;
    if(price >= 500000){
       return answer = Math.floor(price - (price *0.2))
    }
    else if(price >= 300000){
       return answer = Math.floor(price - (price *0.1))
    }
    else if(price >= 100000){
       return answer = Math.floor(price - (price *0.05))
    }
    else{
        return price
    }
}
//잘풀었다 하지만 실수 몇가지가 있는데 일단 10만원보다 적은 10만원 미만일 때의 리턴을 마련해두지 않았었고
//이상사면 이라는 말이 문제에 있는데 그럴 경우 딱 10만원만 샀을 경우 30만원만 샀을 경우 이런 것도 염두를 하고 크거나 같으면 이라는 등호 >= 를 써야한다.

//"*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
//이거는 처음보는 코드들이 정말 많았음. on이라던지, link 파라미터라던지 
// 1. readline 모듈을 불러옴 (Node.js에서 표준입력/출력을 쉽게 다룸)
const readline = require('readline');

// 2. readline 인터페이스 생성 (입력방식: 표준입력, 출력방식: 표준출력)
// 이 인터페이스는 아래에서 입력이 올 때마다 처리해줌
const rl = readline.createInterface({
    input: process.stdin,      // 입력은 키보드(터미널)에서 받겠다
    output: process.stdout     // 출력은 터미널에 쓰겠다 (필수는 아님)
});

// 3. 사용자 입력값을 담을 변수(빈 배열) 선언
let input = [];

// 4. rl.on('line', ...) : 사용자가 엔터 칠 때마다 실행
//      - line 이벤트: 사용자가 한 줄 입력하고 엔터를 칠 때 호출됨
//      - line이라는 파라미터에는 '사용자가 입력한 한 줄 전체 문자열'이 들어감
rl.on('line', function (line) {
    // line.split(' ') : 입력 문자열을 띄어쓰기를 기준으로 '쪼개서 배열화'
    // 즉  "10 20 50" 이 입력됐다면  ['10','20','50']처럼 변환됨
    input = line.split(' ');   // input에 위 배열을 저장
    // 이 코드는 한 줄만 입력 받는 구조. 여러 줄을 받아야 한다면 push를 써야 함(설명 하단 참고)
})

// 5. rl.on('close', ...) : 입력이 모두 끝나고(EOF, Ctrl+D) 나서 한 번만 실행
//      - close 이벤트: 입력 스트림이 닫힐 때(더 이상 입력이 없을 때) 호출됨
//      - 보통 입력값 모두 받았으니 이제 문제 풀이 or 결과 출력!
.on('close', function () {
    // input[0] : 띄어쓰기로 쪼갠 배열의 첫 번째(0번째) 원소(예: '10')
    // Number(...) : 문자열을 숫자로 변환
    // console.log(...) : 결과를 터미널에 출력
    for(let i = 1; i <= Number(input[0]); i++)
    console.log('*'.repeat(i));
    //repeat 함수 문자열을 지정된 횟수만큼 반복
    //문자.repeat(횟수) 이렇게 작성
//그래서 주석을 달아서 설명해놓겠음.


//또 등신짓을 함 이거는 실수가 아니라 실력임 정진하도록
//개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다.
//예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다.
//사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.
function solution(hp) {
     let answer = 0;
    answer += Math.floor(hp / 5);           // 5로 최대로 나누고
    hp = hp % 5;                            // 남은 hp
    answer += Math.floor(hp / 3);           // 3으로 최대로 나누고
    hp = hp % 3;                            // 남은 hp
    answer += Math.floor(hp / 1);           // 1로 나눔(그대로 개수)
    return answer;
}
//이건 정답코드 내가 한 실수코드를 보자면
function solution(hp) {
    var answer = 0;
    let 나머지 = 0
    let 두번째나머지 = 0
    let 세번째나머지 = 0
    let 마지막나머지 = 0
    if(hp / 5 > 1){
        answer = Math.floor(hp / 5)
        나머지 = Math.floor(hp % 5)
        // return answer
    }
    else if(hp / 3 > 1){
        두번째나머지 = Math.floor(나머지 / 3)
        세번째나머지 = Math.floor(나머지 % 3)
    }
    else {
        마지막나머지 = Math.floor(세번째나머지 / 1)
    }
    return answer + 두번째나머지 + 마지막나머지;
}
//진짜 쓸 곳없는 if문을 생성함 그냥 나머지가 필요한거면 나머지만 뽑으면 나눈 값이 필요한거면 그걸 바로바로 더하면 되는디 멍청했음
//변수로 관리하려다가 오히려 더 불편해진 상태임

//가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
function solution(rsp) {
    var answer = {2 : 0, 0 : 5, 5: 2};
    
    // rsp로 새로운 배열을 만들고 map을 돌린다
    // 첫번째 파라미터인 x는 각각의 문자(문자열 rsp의 요소)
    // answer[x]는 “이길 수 있는 패”, join은 붙이기
    return [...rsp].map(x => answer[x]).join('');
}


//머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다.
//상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.
//이건 애매하긴 한데 이렇게 넣겠
function solution(box, n) {
    var answer = 1;
    //가로 10 세로 세로8 높이 6 
    //480 부피를 가진 직육면체가 있고
    //3이라는 모서리의 길이를 가진 정육면체 주사위가 있다고하면 9의 부피를 가지고 있음
    //아 등신 3 * 3 이 아니라 3의 세제곱이면 27임
    //그런데 부피로 구하는 공식이 아니라 몇 개 들어가냐? 이런 말로 나오니까 
    //각각의 가로 세로 높이에 모서리 길이 만큼 나누고 그 몫을 곱하는 방식 나머지는 버리고 그게 공식임
    //그러니까 box라는 배열의 0,1,2 번째의 길이에 n의 모서리 길이를 가진 애가 몇개 들어가요? 이소리임
    //그런데 왜 1,1,1은 한개만 들어갈까?
    //등신이 아니면 알 수 있음 
    box.forEach(item => {
       answer = answer * Math.floor(item / n)
    })
    return answer;
}

//군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
// 암호화된 문자열 cipher를 주고받습니다.
// 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(cipher, code) {
    var answer = '';
    for(let i = 0; i < cipher.length; i += code){
        answer += cipher[i];
    }
    return answer;
}
//이렇게 작성하면 내가 생각하던 것과 다른 방향이 나와서 i를 선언할 떄 let i = -1로 해보거나
// answer += cipher[i-1] 이렇게도 작성해봤지만 글자가 하나가 언디파인드가 나와서 문제가 생겼었다
//그러면 어떻게 해야할까?
//for문을 생성할 때에 let i = code - 1로 작성하면 쉽게 해결이 된다.
//0부터 시작하는게 아닌 code의 숫자의 인덱스 번호를 인식하기 위해 -1를 해서 거기부터 시작해 code값만큼 for문으로 돌리며 더하면 깔끔히 해결된다.



//문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
    var answer = '';
    answer = my_string.split('').map(x => {
        if(x === x.toUpperCase()){
            return x.toLowerCase()
        }
        else{
            return x.toUpperCase()
        }
    }).join('')
    return answer;
}
