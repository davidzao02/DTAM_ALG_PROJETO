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

function fillTable(map) {
    let cells = document.querySelectorAll('td')
    // let col = 1, line = 1

    // for (let o = 0; o < 64; o++) {

    //     cells[o].setAttribute('id', `cell${col}_${line}`)
    // }

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
    } else if (pointsSecond == 12) {} else if (pointsSecond == 12) {
        winner = secondName
    }
    alert(`FIM DO JOGO! O VENCEDOR É ${winner}`)
}