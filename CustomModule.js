class Prime{
    prime(n){
        var flag=true;
        for(let i=2;i<n;i++){
            if(n%i==0){
                flag = false;
                break;
            }
            else{
                flag = true;
            }
        }
        if(flag==true){
            console.log("Number is prime...");
        }
        else{
            console.log("Number is not prime...");
        }
    }
    
}
class Palindrome{
    isPalidrome(num){
        let rev = 0;
        let temp=num;
        let digit = num%10;
        rev = rev * 10 + digit;
        num = parseInt(num/10);

        if(temp==rev){
            console.log("Number is palindrome...");
        }
        else{
            console.log("Number is not palindrome...")
        }
    }
}
class Arsmstrong{
    isArmstrong(num){
        let c=0;
        let temp = num;
        let data = num;
        let pow=0;
        let sum=0;
        while(num != 0){
            c++;
            num = parseInt(num/10);
        }
        while(temp>0){
            pow = temp%10;
            sum += Math.pow(pow, c);
            temp = parseInt(temp/10);
            console.log(sum);
        }
        if(sum==data){
            console.log("Number is Arsmstrong...");
        }
        else{
            console.log("Number is not Armstrong...")
        }
    }
}

module.exports = [Prime, Palindrome, Arsmstrong];