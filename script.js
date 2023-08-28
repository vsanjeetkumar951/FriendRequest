var istatus=document.querySelector("p");
var btn1=document.querySelector(".btn-1");

var check=0;



btn1.addEventListener("click",function() {
    if(check===0){
        istatus.innerHTML="Friends"
        istatus.style.color="red"
        check=1
    }else{
        istatus.innerHTML="Stranger"
        istatus.style.color="Green"
        check=0
    }
   
    
})

    
    
