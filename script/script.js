
document.addEventListener('DOMContentLoaded', () =>{
    

    let squares = document.querySelectorAll(".square")
    

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)//${playerTime +1}
    
    })
    
    })
    
    function handleClick(event){
        let square = event.target
        let postion = square.id

        if(handleMove(postion)){
            updateSquares()

            setTimeout(()=>{
               resultado.innerHTML=`
               <div class="alert alert-success alert-dismissible centro">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                     Fim de jogo o vencedor foi o jogador ${playerTime +1}.
                </div>
               
               `
            },10)
            
        }
        updateSquares()
    }

    function updateSquares(){

        let squares = document.querySelectorAll(".square")
    

        squares.forEach((square)=>{
            let postion =square.id
            let symbol = board[postion]

            if(symbol != ''){
                square.innerHTML = `<div class = '${symbol}'></div>`
            }
        
        })

    }
    