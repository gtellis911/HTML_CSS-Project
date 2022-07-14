main("Roses", 55, 250);
main("Tulips", 88, 260);
main("Narcissus", 119, 360);

function main(typeOfFlowers, noOfFlowers, budget) {
    let pricePerPiece = 0;
    if (typeOfFlowers == "Roses") {
        (noOfFlowers > 80) ? pricePerPiece = 5 * 0.9 : pricePerPiece = 5;
    } else if (typeOfFlowers == "Dahlias") {
        (noOfFlowers > 90) ? pricePerPiece = 3.80 * 0.85 : pricePerPiece = 3.80;
    } else if (typeOfFlowers == "Tulip") {
        (noOfFlowers > 80) ? pricePerPiece = 2.80 * 0.85 : pricePerPiece = 2.80;
    } else if (typeOfFlowers == "Narcissus") {
        (noOfFlowers < 120) ? pricePerPiece = 3 * 1.15 : pricePerPiece = 3;
    } else {
        (noOfFlowers < 80) ? pricePerPiece = 2.50 * 1.20 : pricePerPiece = 2.50;
    }
    if (noOfFlowers * pricePerPiece > budget) {
        console.log(`Not enough money, you need ${Math.abs(budget - (noOfFlowers * pricePerPiece)).toFixed(2)} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${noOfFlowers} ${typeOfFlowers} and ${(budget - (noOfFlowers * pricePerPiece)).toFixed(2)} leva left.`)
    }
}