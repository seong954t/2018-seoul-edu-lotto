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

function checkDuplicatedNumTest(lotto_nums, ball_num){
    
}

function getLottoNumsTest(){
    
}

function getWinningNumbersAndBonusNumberTest(){
    
}

function getDuplicatedNumTest(lotto_nums){
    
}

function getWinningResultTest(lotto_nums){
    
}