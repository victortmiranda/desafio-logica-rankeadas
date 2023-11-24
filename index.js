
// função que calcula o saldo do jogador
function getPlayerBalance(wins = 0, loses = 0){
    return (wins - loses)
}
// função que mensura o rank do jogador
function getPlayerRank(playerBalance){
    if (playerBalance <= 10){
        return "Ferro"
    }else if(playerBalance > 10 && playerBalance <= 20){
        return "Bronze"
    }else if(playerBalance > 20 && playerBalance <= 50){
        return "Prata"
    }else if(playerBalance > 50 && playerBalance <= 80){
        return "Ouro"
    }else if(playerBalance > 80 && playerBalance <= 90){
        return "Diamante"
    }else if(playerBalance > 90 && playerBalance <= 100){
        return "Lendário"
    }else{
        return "Imortal"
    }
}

function main(){
    let playerBalance = getPlayerBalance(150,151)
    let playerRank = getPlayerRank(playerBalance)
    console.log(`O Herói tem de saldo de ${playerBalance} está no nível de ${playerRank}`)
}

main()