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
