let vitoryPoints = 12,
    pointsFirst = 0,
    pointsSecond = 0,
    winner = '',
    turn = 1,
    players = [],
    existWinner,
    audio

let map = [
    [null, 2, null, 2, null, 2, null, 2],
    [2, null, 2, null, 2, null, 2, null],
    [null, 2, null, 2, null, 2, null, 2],
    [0, null, 0, null, 0, null, 0, null],
    [null, 0, null, 0, null, 0, null, 0],
    [1, null, 1, null, 1, null, 1, null],
    [null, 1, null, 1, null, 1, null, 1],
    [1, null, 1, null, 1, null, 1, null]
]

let bluePieces = document.getElementsByName('bluePiece')
let redPieces = document.getElementsByName('redPiece')
let table = document.getElementById('board')

if (typeof (Storage) !== undefined) {
    audio = localStorage.getItem('sound')
    theme = localStorage.getItem('theme')
}else{
    alert(`THIS BROWSER DOESN'T SUPPORT LOCAL STORAGE!`)
}

fillTable();
getPlayers();

//OBTER NOME DOS JOGADORES (FEITO)

function getPlayers() {
    for (let i = 0; i < 2; i++) {
        let text = document.getElementById(`player${i+1}`)
        text.innerHTML = prompt(`Digite o nome do jogador ${i+1}`)
        players[i] = text.innerHTML;
    }
}

//CRIAR TABULEIRO E POSICIONAR PEÇAS (FEITO)

function fillTable() {
    for (let i = 0; i < map.length; i++) {
        let line = document.createElement('tr')
        line.id = `linha_${i}`
        for (let j = 0; j < map[i].length; j++) {
            let col = document.createElement('td')
            col.id = `cell_${i}_${j}`
            if (map[i][j] == 1) {
                let bluePiece = document.createElement('img')
                bluePiece.src = 'images/bluePiece.png'
                //bluePiece.id = `bluePiece_${i+1}_${j+1}`
                bluePiece.name = 'bluePiece'
                col.append(bluePiece)
                col.classList.add('black')
            } else if (map[i][j] == 2) {
                let redPiece = document.createElement('img')
                redPiece.src = 'images/redPiece.png'
                //redPiece.id = `redPiece_${i+1}_${j+1}`
                redPiece.name = 'redPiece'
                col.classList.add('black')
                col.append(redPiece);
            } else if (map[i][j] == 0) {
                col.classList.add('black')
            } else if (map[i][j] == null) {
                col.classList.add('white')
            }
            line.append(col)
        }
        table.append(line)
    }
}

//VERIFICAR SE É POSSIVEL MOVER A PEÇA

function verifyPositions(piece) {
    let cell = piece.parentElement
    cell.classList.add('cell-selected')

    let line = parseInt(cell.id.substring(5, 6))

    let col = parseInt(cell.id.substring(7, 8))

    if (turn == 1) {
        if (map[line - 1][col - 1] == 0 && map[line - 1][col + 1] == 0) {
            let cellRight = document.getElementById(`cell_${line - 1}_${col - 1}`)
            let cellLeft = document.getElementById(`cell_${line - 1}_${col + 1}`)
            cellRight.classList.add('cell-moves')
            cellLeft.classList.add('cell-moves')
        } else if (map[line - 1][col - 1] == 2 || map[line - 1][col + 1] == 2) {
            let cellRight = document.getElementById(`cell_${line - 3}_${col - 2}`)
            let cellLeft = document.getElementById(`cell_${line - 3}_${col + 2}`)
            cellRight.classList.add('cell-moves')
            cellLeft.classList.add('cell-moves')
        }
    } else {
        if (map[line + 1][col + 1] == 0 && map[line + 1][col - 1] == 0) {
            let cellRight = document.getElementById(`cell_${line + 1}_${col - 1}`)
            let cellLeft = document.getElementById(`cell_${line + 1}_${col + 1}`)
            cellRight.classList.add('cell-moves')
            cellLeft.classList.add('cell-moves')
        } else if (map[line + 1][col + 1] == 1 || map[line + 1][col - 1] == 1) {
            let cellRight = document.getElementById(`cell_${line + 3}_${col - 2}`)
            let cellLeft = document.getElementById(`cell_${line + 3}_${col + 2}`)
            cellRight.classList.add('cell-moves')
            cellLeft.classList.add('cell-moves')
        }
    }
}

//VERIFICAR SE O JOGADOR EFETUOU UMA DAMA (CHEGOU AO OUTRO LADO DO TABULEIRO)

// function verifyChecker() {
//     for (let i = 0; i < bluePieces.length; i++) {
//         let cell = bluePieces[i].parentElement

//         if (cell.id == ) {
            
//         }
        
//     }
// }

//FAZER A TROCA DE TURNOS (FEITO)

function endTurn() {
    let spanTurn1 = document.getElementById('turn1')
    let spanTurn2 = document.getElementById('turn2')

    if (turn == 1) {
        turn = 2
        spanTurn1.hidden = false;
        spanTurn2.hidden = true;
    } else {
        turn = 1
        spanTurn1.hidden = true;
        spanTurn2.hidden = false;
    }
}


//VERIFICAR SE O JOGADOR GANHOU
function checkWinner() {
    if (pointsFirst == vitoryPoints || pointsSecond == vitoryPoints) {
        if (pointsFirst == vitoryPoints) {
            winner = players[0]
        } else if (pointsSecond == vitoryPoints) {
            winner = players[1]
        }

        if (typeof (Storage) !== undefined) {
            if (localStorage.getItem('winners') === null) {

            } else {
                let winners = JSON.parse(localStorage.getItem('winners'))

                for (let i = 0; i < winners.length; i++) {
                    if (winners[i][0] == winner) {
                        existWinner = true
                    }
                }
                if (existWinner) {

                }
            }
        } else {
            alert(`THIS BROWSER DOESN'T SUPPORT LOCAL STORAGE!`)
        }

        let restart = confirm(`GAME WON BY ${winner}! RESTART?`)

        if (restart) {
            location.reload()
        } else {
            location.replace('index.html')
        }
    }
}

function movePiece(line, col) {

    let cell = document.getElementById(`cell_${line}_${col}`)

    if (cell.classList.contains('cell-moves')) {
        let lastCell = document.getElementsByClassName('cell-selected')
        let sound = document.getElementById('movePiece')
        let piece = document.createElement('img')

        lastCell[0].innerHTML = ''

        lastCell[0].classList.remove('cell-selected');

        if (turn == 1) {
            piece.src = 'images/bluePiece.png'
            map[line][col] = 1
            cell.append(piece)
        } else {
            piece.src = 'images/redPiece.png'
            map[line][col] = 2
            cell.append(piece)
        }

        let redCells = document.getElementsByClassName('cell-moves')

        for (let i = 0; i < redCells.length; i++) {
            redCells[i].classList.remove('cell-moves')
        }

        if (audio) {
            sound.play();   
        }
    }
}

//VERIFICAR QUAIS SÃO AS POSSIBILIDADES DE JOGADA APÓS O CLIQUE NUMA PEÇA

for (let i = 0; i < bluePieces.length; i++) {
    bluePieces[i].addEventListener('click', function () {

        if (turn == 1) {
            verifyPositions(bluePieces[i]);
        } else {
            alert(`É a vez de ${players[0]}`)
        }
    })
}

for (let i = 0; i < redPieces.length; i++) {
    redPieces[i].addEventListener('click', function () {

        if (turn == 2) {
            verifyPositions(redPieces[i]);
        } else {
            alert(`É a vez de ${players[1]}`)
        }
    })
}

//EFETUAR JOGADA APÓS CLIQUE NUMA CÉLULA DO TABULEIRO

table.addEventListener('click', (ev) => {
    let col = ev.target.cellIndex
    let row = ev.target.parentElement.rowIndex

    let cell = document.getElementById(`cell_${row}_${col}`)

    if (cell.classList.contains('cell-moves')) {
        movePiece(row, col)

        // verifyChecker();

        endTurn();

        checkWinner();
    } else {
        alert('MOVE TO A VALID POSITION!')
    }
})