winning_numbers = []
bonus_number = 0
user_lotto_numbers_list = []

// 1 ~ 45 사이의 랜덤한 숫자 반환
function getRandomNum(){
    return parseInt(Math.random()*45+1)
}

// lotto_nums(list) 값들 중 ball_num(number)값과 중복되는 값이 있는지 확인한다.
function checkDuplicatedNum(lotto_nums, ball_num){
    return lotto_nums.includes(ball_num)
}

// getRandomNum 함수를 통해 lotto_nums(list)에 숫자 6개를 넣어 반환한다.
// checkDuplicatedNum 함수를 통해 lotto 숫자에 중복된 숫자가 들어가지 않도록 한다.
function getLottoNums(){
    lotto_nums = []
    while(lotto_nums.length != 6){
        ball_num = getRandomNum()
        if(!checkDuplicatedNum(lotto_nums, ball_num)){
            lotto_nums.push(ball_num)
        }
    }
    return lotto_nums
}

// 당첨번호를 위한 lotto 숫자 6개와, 그와 중복되지 않는 bonus_number를 얻는다.
function getWinningNumbersAndBonusNumber(){
    winning_numbers = getLottoNums()
    while(checkDuplicatedNum(winning_numbers, bonus_number = getRandomNum()));
}

function add(a, b){
    return a+b
}

// 당첨번호 winning_number와 자신의 lotto_nums 중 일치하는 번호의 개수를 반환한다.
function getMachedNum(lotto_nums){
    check_winnings = []
    for(ball_num of lotto_nums){
        check_winnings.push(checkDuplicatedNum(winning_numbers, ball_num))
    }
    return check_winnings.reduce(add)
}

// getMachedNum 함수를 통해 얻은 값을 통해 꽝, 5등, 4등, 3등, 2등, 1등을 반환한다.
// 꽝  -> 2개 이하 동일
// 5등 -> 3개 동일
// 4등 -> 4개 동일
// 3등 -> 5개 동일
// 2등 -> 5개 동일, 보너스 동일
// 1등 -> 6개 동일
function getWinningResult(lotto_nums){
    duplicated_num = getMachedNum(lotto_nums)
    switch(duplicated_num){
        case 3:
            return '5등'
        case 4:
            return '4등'
        case 5:
            if(checkDuplicatedNum(lotto_nums, bonus_number)){
                return '2등'
            }else{
                return '3등'
            }
        case 6:
            return '1등'
        default:
            return '꽝'
    }
}

function addLottoNum(){
    user_lotto_numbers_list.push(getLottoNums());
}

function checkWinLotto(){
  getWinningNumbersAndBonusNumber();
  for(user_lotto_numbers of user_lotto_numbers_list){
    console.log(getWinningResult(user_lotto_numbers));
  }
}
