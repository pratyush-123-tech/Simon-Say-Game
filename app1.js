//code
let i=0;
let h3=document.querySelector("h3");
let h4=document.querySelector("h4");
let arr=[];
let brr=[];
let j=0;
let y=0;
let maxi=0;
document.addEventListener("keypress",function (){
    i++;
    y=0;
    h3.innerText=`Level ${i}`;
    let rand=Math.floor(Math.random()*4)+1;
    arr.push(rand);
    console.log(arr);
    let btn=document.querySelector(`.box${rand}`);
    flash(btn);

});
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function change(bod){
    bod.classList.add("change");
    setTimeout(function(){
        bod.classList.remove("change");
    },250);
}
function next(){
    i++;
    h3.innerText=`Level ${i}`;
    let rand=Math.floor(Math.random()*4)+1;
    arr.push(rand);
    console.log(arr);
    let btn=document.querySelector(`.box${rand}`);
    console.dir(btn);
    flash(btn);
}
let x1=document.querySelector(".box1");
let x2=document.querySelector(".box2");
let x3=document.querySelector(".box3");
let x4=document.querySelector(".box4");
x1.addEventListener("click",function(){
    flash(x1);
    brr.push(1);
    console.log(brr);
    checker();
});
x2.addEventListener("click",function(){
    flash(x2);
    brr.push(2);
    console.log(brr);
    checker();
     
});
x3.addEventListener("click",function(){
    flash(x3);
    brr.push(3);
    console.log(brr);
    checker();
});
x4.addEventListener("click",function(){
    flash(x4);
    brr.push(4);
    console.log(brr);
    checker();
});
function checker(){
    if(brr[j]==arr[j]){
        j++;
    }
    else{
        if(i-1>maxi){
            maxi=i-1;
        }
        h4.innerText=`Highest score:${maxi}`;
        h3.innerText=`Game over! your score was ${i-1} Press any key to restart`;
        i=0;
        j=0;
        let bod=document.querySelector(".bd");
        change(bod);
        arr.splice(0,arr.length);
        brr.splice(0,brr.length);
        y=1;
    }
    if(j==arr.length && y!=1){
        brr.splice(0,brr.length);
        j=0;
        setTimeout(next,1000);
    }
}
 


 
            
