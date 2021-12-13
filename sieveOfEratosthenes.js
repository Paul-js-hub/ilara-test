// Program to find all prime numbers up to any given limit
function sieveOfEratosthenes(n){
    let array = [];
    let upperLimit = Math.sqrt(n);
    let output = [];

    //Consecutive list of intergers starting from 2 up to n
    for(let i = 0; i <= n; i++){
        array.push(true);
    }

    //Remove multiples (composites) of primes starting from 2, 3, 5, ....
    for(let i = 2; i <= upperLimit; i++){
        if(array[i]){
            for(let j = i * i; j < n; j += i){
                array[j] = false;
            }
        }
    }

    //All arrays that have true are prime numbers
    for(let i = 2; i < n; i++){
        if(array[i]){
            output.push(i);
        }
    }

    return output;
}

console.log(sieveOfEratosthenes(Math.pow(2, 4)));