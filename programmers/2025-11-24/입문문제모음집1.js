//정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.

function solution(num1, num2) {
    var answer = 0;
    answer = num1 - num2;
    return answer;
}

//정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요
function solution(num1, num2) {
    var answer = 0;
    if(num1 == num2){
        return 1;
    }
    else{
        return -1;
    }
   
}

//머쓱이는 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 2022년 기준 선생님의 나이 age가 주어질 때, 선생님의 출생 연도를 return 하는 solution 함수를 완성해주세요
function solution(age) {
    var answer = 0;
    answer = 2022 - age +1;
    return answer;
}

//정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
    var answer = 0;
    answer = num1 /num2;
    answer = answer * 1000;
    
    return Math.floor(answer);
}

// 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
    var answer = -1;
    answer = num1 % num2;
    return answer;
}

//정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
    var answer = 0;
    answer = num1 * num2;
    return answer;
}

// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
    var answer = 0;
    answer = num1/ num2;
    return  Math.floor(answer);
}

//정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.
function solution(num1, num2) {
    var answer = -1;
    answer = num1 + num2;
    return answer;
}

//각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
// 예각 : 0 < angle < 90
// 직각 : angle = 90
// 둔각 : 90 < angle < 180
// 평각 : angle = 180
function solution(angle) {
    var answer = 0;
    if(0 < angle && angle < 90){
        answer = 1;
    }
    else if( angle == 90){
        answer = 2;
    }
    else if(90 < angle && angle < 180){
        answer = 3;
    }
    else if(angle == 180){
        answer = 4;
    }
    return answer;
}

//머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
function solution(n, k) {
    var answer = 0;
    let m = Math.floor(n / 10);
     answer = (n * 12000) + (k * 2000) - m * 2000;
    return answer;
}

//정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
function solution(n) {
    var answer = 0;
    for(let i = 0; i<= n; i+=2){
        answer += i;
    }
    return answer;
}

//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
    let answer = 0;
    let count = numbers.length;
    let answer2 = 0;
    numbers.forEach(item => {
        answer2 += item;
        answer = answer2 / count;
    })
    return answer;
}

//정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
function solution(num_list) {
    var answer = [];
    answer = num_list.reverse();
    return answer;
}

//문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.(약간 서치를 좀 했던 문제)
function solution(my_string) {
    var answer = '';
    answer = my_string.split('').reverse().join('');
    //문자열+split('') 을 써서 문자열을 각 문자가 요소인 배열로 변환.
    //.reverse(): 배열의 요소 순서를 역순으로 뒤집기
    //.join(''): 뒤집힌 배열을 다시 하나의 문자열로 합치기 끝
    return answer;
}

//머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다.
//할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.
function solution(message) {
    var answer = 0;
    let newAry = message.split('');
    //배열로 변경 후 배열 아이템 하나에 숫자 2를 부여 그 2를 answer에 더해주면 답이 나오는데 뭔가 더 괜찮은 답이 없을까?
    //알아보니 문자열로 length가 적용 된다해서 배열로 바꿀 필요가없
    newAry.forEach(item => {
        item = 2;
        answer += item;
    })
    return answer;
}
//다른 방법1
function solution(message) {
    return message.length*2;
}
//다른 방법2(구조분해할당)
function solution(message) {
    var answer = [...message].length * 2;
    return answer;
}

//머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
function solution(n) {
    var answer = 0;
    //n명의 사람이 한조각씩 피자를 먹기 위해서 얼마나 시켜야하냐?
    //answer에는 시켜야하는 값이 들어가야함 고로 나눴을 때의 몫이 들어가야하고
    //n명이 몇
    // 고로 나눴을 때의 나머지가 소수도 아니고 정수형태의 양수여야함
   answer =  n % 7 === 0 ? Math.floor(n/7) : Math.ceil(n / 7);
    //15 % 7 === 0이 아님 2하고 1이라는 나머지가 남기에  7로 나눴을 때 나머지가 0이 나오면
    //알맞게 시킨거니까 그 값을 리턴하고 아니면 나머지가 생기면 값을 올려버리기 
    return answer;
}
//간단하게 쓰면
const solution = (n) => Math.ceil(n / 7)
//이렇게도 가능하다
//또는
function solution(n) {
    return Math.ceil(n / 7)
}
//이렇게 가능

//어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
function solution(n, t) {
    var answer = 0;
    answer = n * (2 ** t);
    return answer;
}
//이렇게 작성했지만 더 좋은 방법들이 있어서 작성해본다.
function solution(n, t) {
  return n << t;
}
//시프트 연산자를 활용한 방법
function solution(n, t) {

    return n*Math.pow(2,t);
}
//Math.pow를 활용한 방법


//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요
function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b)=> b-a);
    
    const first = numbers[0];
    const second = numbers[1];
    
    answer = first * second;
   
    return answer;
}

//코드상 나랑 비슷하지만 더 줄일 수 있어보여서 가져왔다
function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return numbers[0]*numbers[1];
}

//머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.
function solution(array, height) {
    var answer = 0;
    array.forEach(item => {
       if(item > height){
           answer += 1;
       }
    }) 
    return answer;
}

//선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
function solution(sides) {
    var answer = 0;
    sides.sort((a,b) => b-a);
    const first = sides[0];
    const second = sides[1];
    const third = sides[2];
    
    if(second + third <= first){
        answer = 2
    }
    else{
        answer = 1
    }
    
    return answer;
}
//다른 사람이 짠 간단한 코드
function solution(sides) {
    sides = sides.sort((a,b) => a-b)
    return sides[0]+sides[1] > sides[2] ? 1 : 2;
}
//또 다른 사람이 짠 구조분해할당 코드
function solution(sides) {
    const [long, a, b] = sides.sort((a,b) => b-a);
    return long < a + b ? 1 : 2
}

// 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.
// 정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요
function solution(M, N) {
    return M * N - 1;
}

//순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
function solution(n) {
    var answer = 0;
    for(let i = 0; i <= n; i++){
        if(n % i === 0){
            answer++;
        }
    }
    return answer;
}
//n의 값은 주어지니까 i의 값을 0부터 n의 값까지 돌아가면서 나눴을 때 나머지가 0이 나오면 약수 그러면 1을 더해준다.

//정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
function solution(n, numlist) {
    var answer = [];
    numlist.forEach(item =>{
        item % n == 0 ? answer.push(item) : item 
    })
    return answer;
}

//문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 return하도록 solution 함수를 완성해주세요.
function solution(strlist) {
    var answer = [];
    strlist.forEach(item =>{
        answer.push(item.split("").length)
    })
    
    return answer;
}
//map을 쓰면 진짜로 편함
function solution(strlist) {
    return strlist.map((el) => el.length)
}

//머쓱이는 추운 날에도 아이스 아메리카노만 마십니다.
//아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(money) {
    let coffee = 5500;
    var answer = [];
    answer.push(Math.floor(money / coffee))
    answer.push(money % coffee)
    return answer;
}

//문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2
}

//문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
function solution(my_string, n) {
    var answer = '';
    let newarr = my_string.split('');
    for(let i = 0; i < newarr.length; i++){
        for(let j =0; j<n; j++){
           answer += newarr[i] 
        }
    }
  return answer
}
//진짜 희귀버전
function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}
