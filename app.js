let list=document.getElementById("toDos")
let buton=document.getElementById("btn")
let inputText=document.getElementById("inputText")
let todo=document.getElementById("todo") // Check için 
let p=document.getElementById("klass") // check sayac
let pp=document.getElementById("klasss")

let greenCou=document.getElementById("greeen")
let reeedCou=document.getElementById("reeed")

let div=document.getElementById("contextim")



let daatelr=new Date()
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 

let divColorR=document.getElementById("colorr")



buton.addEventListener("click",()=>{
    if(inputText.value=="") alert("Yazıdığına eminmisin :) ")

    else{
        let newLi=document.createElement("li")
        newLi.innerHTML=`${inputText.value}`;
        newLi.classList.add("todo")
        list.insertBefore(newLi,list.childNodes[0])
        
        daatelr=new Date() // ekleme sebebim o anda yenida oluştuyom ve
        newLi.innerHTML=`<div class="contextim"><p>${inputText.value}</p>  <b id="ayKısmı" class="ekledim"> ${month[daatelr.getMonth()]+" "+ daatelr.getDate()}</b></div> `
        inputText.value="";                                                                         
       
        
       // toggle fonksiyonu burda şey olmadı.
        newLi.addEventListener("click",()=>{
         
            if(newLi.classList.contains("checked")==true){
                newLi.classList.remove("checked")
            }

            else{
                newLi.classList.add("checked")
            }
            
        })

        
    }

  

   
})



// list.addEventListener("click",listClick)


// function listClick(e) {
//     if (e.target.tagName == "P" ) {
//       e.target.classList.toggle("checked");
//       // DİV VE TODO 
//       console.log(e.target.classList)
//     }
// }
    




let CHECKED=0;
let NCHECKED=0;
document.addEventListener("click",()=>{
    
    for(let i=0;i<list.childElementCount;i++){ // list içi 
        if(list.children[i].classList.contains("checked")){
            CHECKED++;
        }
    }
    
   
    greenCou.innerHTML=`${CHECKED}`;
    NCHECKED=list.childElementCount-CHECKED
    reeedCou.innerHTML=`${NCHECKED}`;
    
  
     if(Number(NCHECKED)==0){
         divColorR.style.backgroundColor="rgb(218, 160, 160)"
     }
     else{
         divColorR.style.backgroundColor="rgb(230, 65, 65)"
     }
   


    CHECKED=0;



 })




















