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