//criação do tabuleiro do jogo
let board=['','','','','','','','','']
// jogador sera 0 para o jogador 1 , e 1 para o jogador 2

let playerTime = 0
let simbols = ['o','x']

function handleMove(position){
 
board[position]= simbols[playerTime]
 if(playerTime==0){
     playerTime=1
 }else{
     playerTime=0
 }


}

