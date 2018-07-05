// 1 ~ 45 사이의 랜덤한 숫자 반환
function getRandomNum(){
    return parseInt(Math.random()*45+1)
}

function checkDuplicatedNum(lotto_nums, ball_num){
    return lotto_nums.includes(ball_num)
}
