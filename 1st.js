
let a=document.querySelector("#bulb")
console.log(a);

let b=document.querySelector("#btn")
console.log(b);

let c=document.querySelector("#heading")
console.log(c);

b.addEventListener("mouseover",function(){
    b.style.backgroundColor="red" ;
    b.style.color="white";
})
b.addEventListener("mouseout",function(){
    b.style.backgroundColor="white" ;
    b.style.color="red";
})

c.addEventListener("mouseover",function(){
    c.style.color="yellow"
    c.style.fontSize="110px" ;
})
c.addEventListener("mouseout" , function(){
    c.style.color="white"
    c.style.fontSize="100px" ;
})

a.addEventListener("mouseover", function(){
    a.style.border="6px solid black"
})
a.addEventListener("mouseout", function(){
    a.style.border="3px solid black"
})

var x = 0 ;
b.addEventListener("click", function(){
    if(x==0){
     a.style.backgroundColor="yellow"
     b.innerHTML="OFF"
     x=1
    }
    else{
        a.style.backgroundColor="white"
        b.innerHTML="ON"
        x=0     
    }

    
})