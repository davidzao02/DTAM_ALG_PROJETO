window.onload = function () {
    getPlayers();
    fillTable();
}

let pointsFirst = 0,
    pointsSecond = 0,
    winner = '',
    turn = 1;

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

//OBTER NOME DOS JOGADORES

function getPlayers() {
    for (let i = 0; i < 2; i++) {
        let text = document.getElementById(`player${i+1}`)
        text.innerHTML = prompt(`Digite o nome do jogador ${i+1}`)
    }
}

//CRIAR TABULEIRO E POSICIONAR PEÇAS

function fillTable() {
    let table = document.getElementById('board')

    for (let i = 0; i < map.length; i++) {
        let line = document.createElement('tr')
        line.id = `linha_${i+1}`
        for (let j = 0; j < map[i].length; j++) {
            let col = document.createElement('td')
            col.id = `cell_${i+1}_${j+1}`
            if (map[i][j] == 1) {
                let bluePiece = document.createElement('img')
                bluePiece.src = 'images/bluePiece.png'
                bluePiece.id = `bluePiece_${i+1}_${j+1}`
                bluePiece.name = 'bluePiece'
                col.append(bluePiece)
                col.classList.add('black')
            } else if (map[i][j] == 2) {
                let redPiece = document.createElement('img')
                redPiece.src = 'images/redPiece.png'
                redPiece.id = `redPiece_${i+1}_${j+1}`
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

let bluePiece = document.getElementsByName('bluePiece')
let redPiece = document.getElementsByName('redPiece')

//EFETUAR JOGADA E VERIFICAR SE O JOGADOR VENCEU

function movePiece() {

    //MOVER A PEÇA


    //VERIFICAR SE O JOGADOR EFETUOU UMA DAMA (CHEGOU AO OUTRO LADO DO TABULEIRO)

    if (turn == 1) {
        bluePiece.forEach(pieces => {
            if (piece.id == '') {

            }
        });
    }

    //VERIFICAR SE O JOGADOR VENCEU APÓS A JOGADA
    if (pointsFirst == 12 || pointsSecond == 12) {
        if (pointsFirst == 12) {
            winner = firstName
        } else if (pointsSecond == 12) {} else if (pointsSecond == 12) {
            winner = secondName
        }
        alert(`FIM DO JOGO! O VENCEDOR É ${winner}`)
    }
}