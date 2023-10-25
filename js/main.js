let n=parseInt(prompt("Enter the value"));

let fun=function(n){
    if(n<=13){
        let ans=13-n
        document.write(ans)
    }
    else{
         ans=(n-13)*2
        document.write(ans)
    }
}
fun(n);