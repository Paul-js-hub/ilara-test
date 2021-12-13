// Program to check whether a string is a palindrome or not
function palindrome(str){
    var str = str.toLowerCase();;
    
    // find the length of the string
    let len = str.length;
    //iterate or loop half of the string
    for(let i = 0; i < len / 2; i++){
        //checks if the first and corresponding last characters are the same.
        if(str[i] !== str[len-1-i]){
            return false;
        }
    }

    return true;
}

console.log(palindrome("Dad"));