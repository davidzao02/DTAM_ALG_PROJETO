let firstName = prompt('Insert first player name!')

let secondName = prompt('Insert second player name!')

let pointsFirst = 0, pointsSecond = 0

let winner

if (pointsFirst == 12 || pointsSecond == 12){
    if (pointsFirst == 12) {
        winner = firstName
    }else if (pointsSecond == 12){
        winner = secondName
    }
    alert(`FIM DO JOGO! O VENCEDOR É ${winner}`)
}

