// function moneyBox(coins) {
//     let saveCoins = 0
//     saveCoins += coins

//     return console.log(`Ahorros: ${saveCoins}`)
// }

// moneyBox(5);
// moneyBox(5);



function moneyBox() {
    let saveCoins = 0
    function countCoins(coins) {
        saveCoins += coins
        console.log(`Ahorros: ${saveCoins}`)
    }

    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const myMoneyBoxOrlando = moneyBox();
myMoneyBoxOrlando(100);
myMoneyBoxOrlando(25);
myMoneyBoxOrlando(25);
