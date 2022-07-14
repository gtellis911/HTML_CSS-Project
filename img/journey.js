// main(50, "summer");
// main(75, "winter");
// main(312, "summer");
// main(678.53, "winter");
// main(1500, "winter");
main(4033.42, "summer");

function main(budget, season) {
    let results = 0;
    if (budget <= 100) {
        if (season == "summer") {
            results = budget * 0.3;
            console.log(`Somewhere in Bulgaria\nCamp - ${results.toFixed(2)}`);
        } else if (season == "winter") {
            results = budget * 0.7;
            console.log(`Somewhere in Bulgaria\nHotel - ${results.toFixed(2)}`);
        }
    } else if (budget > 100 && budget <= 1000) {
        if (season == "summer") {
            results = budget * 0.4;
            console.log(`Somewhere in Balkans\nCamp - ${results.toFixed(2)}`);
        } else if (season == "winter") {
            results = budget * 0.8;
            console.log(`Somewhere in Balkans\nHotel - ${results.toFixed(2)}`);
        }
    } else if (budget > 1000) {
        results = budget * 0.9;
        console.log(`Somewhere in Europe\nHotel - ${results.toFixed(2)}`);
    }
}