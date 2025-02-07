let userscore=0;
let compscore=0;
let user_score=document.querySelector(".user-score");
let comp_score=document.querySelector(".comp-score");
let choices=document.querySelectorAll(".rocky");
let h4=document.querySelector(".h4");
const getcomputer=()=>{
    let choices=["rock","paper","scissors"];
    let random=(Math.floor(Math.random()*3));
    return choices[random];
}
const playgame=(userchoice)=>{
    const computerchoice=getcomputer();
    if(userchoice===computerchoice){
        h4.innerText="It's a tie";
        h4.style.backgroundColor="black";
        h4.style.color="white";
        h4.style.border="4px double white";
    }
    else if((userchoice==="rock" && computerchoice==="paper")||(userchoice==="paper" && computerchoice==="scissors")||(userchoice==="scissors" && computerchoice==="rock")){
        h4.innerText=`You Lost!You choosen ${userchoice} and computer choosen ${computerchoice}`;
        h4.style.backgroundColor="Red";
        h4.style.color="white";
        comp_score.innerText=++compscore;
    }
    else if((userchoice==="rock" && computerchoice==="scissors")||(userchoice==="paper" && computerchoice==="rock")||(userchoice==="scissors" && computerchoice==="paper")){
        h4.innerText=`You Win!You choosen ${userchoice} and computer choosen ${computerchoice}`;
        user_score.innerText=++userscore;
        h4.style.backgroundColor="green";
        h4.style.color="white";
    }
}
for(let choice of choices){
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
}