//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    var ans = 0;
    while (n > 0) {
        if (n % 2 !== 0) {
            n = (n - 1) / 2
            ans++
        } else {
            n = n / 2
        }
    }
    return ans;
}

//정답 2 (dp이용) - downpool
function solution(n){
    let ans = 0;

    function DP(a){
        if(a <= 1){
            ans++;
            return;
        }else{
            if(a % 2 == 0){
                return DP(a / 2);
            }else{
                ans++;
                return DP(a - 1);
            }
        }
    }
    DP(n);

    return ans;
}
