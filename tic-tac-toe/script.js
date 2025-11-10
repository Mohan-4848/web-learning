const tiles = document.querySelectorAll("#game button")
const game = document.getElementById("game")
const wincCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

let chance = 0;

for(let tile of tiles){
   tile.addEventListener("click",()=>{
    if(!(tile.classList.contains("ans-x")||tile.classList.contains("ans-y"))){
        if(chance%2===0){
            tile.innerHTML = 'X'
            tile.classList.add('ans-x')
        }
        else{
            tile.innerHTML = 'O'
            tile.classList.add("ans-y")
        }
        chance++

        const won = checkWin()

        if(!won&&chance===9){
            setTimeout(()=>{
                alert("Draw")
                window.location.reload()
            },500)
        }
   }  
    }
    )
}

function checkWin(){
    for(let combi of wincCombination){
        if(tiles[combi[0]].classList.contains("ans-x")&&tiles[combi[1]].classList.contains("ans-x")&&tiles[combi[2]].classList.contains("ans-x")){
            setTimeout(()=>{
                alert("X won")
                window.location.reload()
            },500)
            return true
        }
        else if(tiles[combi[0]].classList.contains("ans-y")&&tiles[combi[1]].classList.contains("ans-y")&&tiles[combi[2]].classList.contains("ans-y")){
            setTimeout(()=>{
                alert("O won")
                window.location.reload()
            },500)
            return true
        }
    }
    return false
}

