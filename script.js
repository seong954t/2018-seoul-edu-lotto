winning_numbers = []
bonus_number = 0

// 1 ~ 45 사이의 랜덤한 숫자 반환
function getRandomNum(){
    return parseInt(Math.random()*45+1)
}

function checkDuplicatedNum(lotto_nums, ball_num){
    return lotto_nums.includes(ball_num)
}

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

function getWinningNumbersAndBonusNumber(){
    winning_numbers = getLottoNums()
    while(checkDuplicatedNum(winning_numbers, bonus_number = getRandomNum()));
}

function add(a, b){
    return a+b
}

function getDuplicatedNum(lotto_nums){
    check_winnings = []
    for(ball_num of lotto_nums){
        check_winnings.push(checkDuplicatedNum(winning_numbers, ball_num))
    }
    return check_winnings.reduce(add)
}

function getWinningResult(lotto_nums){
    duplicated_num = getDuplicatedNum(lotto_nums)
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