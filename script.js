console.log ('hello world')

var health= 40

function drawHealth(){
    document.getElementById('phealth').innerHTML=`${health}`
}

drawHealth()

function pageColor(){
    color= document.getElementById('page_color').value
    console.log(color)
    document.getElementById('player_page').style.backgroundColor = color
}

function seeSettings(){
    document.querySelector('.settings').style.left = "0%"
    
}

function closeSettings(){
    document.querySelector('.settings').style.left = "-50%"
    
}

function addHealth(){
    health ++
    drawHealth()
}

function loseHealth(){
    health --
    drawHealth()
}