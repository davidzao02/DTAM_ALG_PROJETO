document.addEventListener('DOMContentLoaded', function () {
    let firstName = prompt('Insert first player name!')

    document.getElementById(pPlayer1).innerText = firstName

    let secondName = prompt('Insert second player name!')

    document.getElementById(pPlayer2).innerText = secondName
});

let pointsFirst = 0,
    pointsSecond = 0,
    winner = '';

let map = [
        [2, 0, 2, 0, 2, 0, 2, 0],
        [0, 2, 0, 2, 0, 2, 0, 2],
        [2, 0, 2, 0, 2, 0, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0]
]

function fillTable(map){    
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] == 1) {
                
            }   
        }        
    }
}



if (pointsFirst == 12 || pointsSecond == 12) {
    if (pointsFirst == 12) {
        winner = firstName
    } else if (pointsSecond == 12) {
        winner = secondName
    }
    alert(`FIM DO JOGO! O VENCEDOR É ${winner}`)
}