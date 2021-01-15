window.onload = function () {
    getPlayers();
    fillTable();
}

let vitoryPoints = 12,
    pointsFirst = 0,
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

let bluePieces = document.getElementsByName('bluePiece')
let redPieces = document.getElementsByName('redPiece')

//OBTER NOME DOS JOGADORES (FEITO)

function getPlayers() {
    for (let i = 0; i < 2; i++) {
        let text = document.getElementById(`player${i+1}`)
        text.innerHTML = prompt(`Digite o nome do jogador ${i+1}`)
    }
}

//CRIAR TABULEIRO E POSICIONAR PEÇAS (FEITO)

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

function verifyPositions(piece) {
    console.log(piece.id);
}

//EFETUAR JOGADA E VERIFICAR SE O JOGADOR VENCEU

for (let i = 0; i < bluePieces.length; i++) {
    bluePieces[i].addEventListener('click', function movePiece() {

        verifyPositions(bluePieces[i]);

        //MOVER A PEÇA



        // verifyChecker();
        endTurn();
    })
}



//VERIFICAR SE O JOGADOR EFETUOU UMA DAMA (CHEGOU AO OUTRO LADO DO TABULEIRO)

function verifyChecker() {

    // if (turn == 1) {
    //     bluePiece.forEach(pieces => {
    //         if (piece.id == '') {

    //         }
    //     });
    // }
}

//VERIFICAR SE O JOGADOR VENCEU APÓS A JOGADA E FAZER A TROCA DE TURNOS (FEITO)

function endTurn() {

    if (pointsFirst == vitoryPoints || pointsSecond == vitoryPoints) {
        if (pointsFirst == vitoryPoints) {
            winner = firstName
        } else if (pointsSecond == vitoryPoints) {
            winner = secondName
        }
        alert(`FIM DO JOGO! O VENCEDOR É ${winner}`)
    }

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