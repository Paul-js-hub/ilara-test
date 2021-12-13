// Program to check the lcm of two positive integers
function leastCommonMultiple(n1, n2){
    //finding greater number among the numbers and storing it in a min variable
    let min = (n1 > n2) ? n1 : n2;
    while(true){
        if(min % n1 == 0 && min % n2 == 0){
            return min;
        }

        min++;
    }
}

console.log(leastCommonMultiple(6, 8));