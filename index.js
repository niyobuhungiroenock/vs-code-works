const form=document.getElementById("form1");
const btnel=document.getElementById("new");
const titlel=document.getElementById("title");
const subm=document.getElementById("btn3");
const contel=document.getElementById("container");

btnel.addEventListener("click",()=>{
    form.style.display= "block";
    contel.style.display="none";
})
subm.addEventListener("click",()=>{
    form.style.display="none";
    contel.style.display="block";
    contel.style.width="300px";
    contel.style.height="500px";
    titlel.style.color="red";
    titlel.style.fontFamily="culsive";
    titlel.style.textDecoration="underline";
    titlel.style.backgroundColor="black";
    titlel.style.borderRadius="20px";
})