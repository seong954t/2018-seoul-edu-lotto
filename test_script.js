function getRandomNumTest(){
    for(var i = 0; i<10000; i++){
        random_num = getRandomNum()
        if(random_num >= 1 && random_num <= 45){
            if(!Number.isInteger(random_num)){
                alert("getRandomNum 실패")
                return
            }
        }else{
            alert("getRandomNum 실패")
            return
        }
    }
    alert("getRandomNum 성공")
}

function checkDuplicatedNumTest(){
    eqaul(true, checkDuplicatedNum([1, 3, 5, 2, 4], 5))
    eqaul(false, checkDuplicatedNum([2, 3, 7, 11, 31], 16))
}

function getLottoNumsTest(){
    for(var i = 0; i<10000; i++){
        var get_lotto_nums = getLottoNums();
        var get_lotto_nums_set = new Set(get_lotto_nums);
        if(get_lotto_nums.length != 6){
            alert("getLottoNums 실패");
            return;
        }else{
            if(get_lotto_nums.length != get_lotto_nums_set.size){
                alert("getLottoNums 실패");
                return;
            }
        }
    }
    alert("getLottoNums 성공");
}

function getWinningNumbersAndBonusNumberTest(){

}

function getDuplicatedNumTest(lotto_nums){

}

function getWinningResultTest(lotto_nums){

}

function equal(a, b){
  return a === b;
}
