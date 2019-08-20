const board = []
function play(clickedId){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)
    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }
    const topLeft = board[0]
    const topCenter = borad[1]
    const topRight = board[2]
    const midLeft = board[3]
    const midCenter = board [4]
    const midRight = board[5]
    const botLeft = board[6]
    const botMid = board[7]
    const botRight = board[8]
    
    if (topLeft !== undefined && 
        topLeft ===topCenter && topRight){
            alert(`${topLeft}is the winner`)
            return
    }
    if (midLeft !== undefined && 
        midLeft ===midCenter && midRight){
            alert(`${midLeft}is the winner`)
            return
    }
    if (botLeft !== undefined && 
        botLeft ===botCenter && botRight){
            alert(`${botLeft}is the winner`)
            return
    }if (topLeft !== undefined && 
        topLeft ===midCenter && botRight){
            alert(`${topLeft}is the winner`)
            return
    }
    if (topCenter !== undefined && 
        topCenter ===midCenter && botRight){
            alert(`${topCenter}is the winner`)
            return
    }
    if (topRight !== undefined && 
        topRight ===midRight && botRight){
            alert(`${topRight}is the winner`)
            return
    }
    if (topLeft !== undefined && 
        topLeft ===midCenter && botRight){
            alert(`${topLeft}is the winner`)
            return
    }
    if (topRight !== undefined && 
        topRight ===midCenter && botLeft){
            alert(`${topRight}is the winner`)
            return
    }
    let boardFull = true
    for (let i = 0; i<=8; i++){
        if (board[i] ===undefined) {
            boardFull = false
        }
        if (boardFull === true){
            alert("Cat's game, there is no winner")
        }
    }
}
function reset (){
    let squares = document.getElementsByTagName('td')
    var playerSpan = document.getElementById('player')
    for (let i = 0; i < squares.length; i++){
        squares[i].innerText = ''
    }
    playerSpan.innerText = 'X'
    board.splice(0,9)
}