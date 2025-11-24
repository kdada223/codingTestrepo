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
