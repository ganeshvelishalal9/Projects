const str=document.getElementById("input");
function checker(){
    let n = str.value;
    let temp = n;
    let res = 0;
    while(temp>0){
        last = Math.floor(temp%10);
        res = res*10 + last;
        console.log(temp);
        temp=Math.floor(temp/10);
    }
    if(res == n) {
        alert("Palindrom");
    }
    else {
        alert("Not a palindrom");
    }
    str.value ="";
}
// trying to move button when NO input is given
function checkInput(){
    let n = str.value;
    if(n==undefined){

    }
}