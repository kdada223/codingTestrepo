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
  
