let homeScore=document.getElementById("home")
let guestScore=document.getElementById("guest")



function homeadd1(){
    
    let points=parseInt(homeScore.textContent)
    homeScore.textContent=points+1
}
function homeadd2(){
    
    let points=parseInt(homeScore.textContent)
    homeScore.textContent=points+2
}
function homeadd3(){
    
    let points=parseInt(homeScore.textContent)
    homeScore.textContent=points+3
}

function guestadd1(){
    
    let points=parseInt(guestScore.textContent)
    guestScore.textContent=points+1
}
function guestadd2(){
    
    let points=parseInt(guestScore.textContent)
    guestScore.textContent=points+2
}
function guestadd3(){
    
    let points=parseInt(guestScore.textContent)
    guestScore.textContent=points+3
}

function newgame(){

    homeScore.textContent=0
    guestScore.textContent=0
}