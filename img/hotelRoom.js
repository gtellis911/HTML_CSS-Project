main("May", 15);
main("June", 14);
main("September", 143);
main("August", 63);

function main(hotelMonth, lengthOfStay) {
    let studioResults = 0;
    let apartmentResults = 0;
    if (hotelMonth == "May" || hotelMonth == "October") {
        if (lengthOfStay > 7 && lengthOfStay <= 14) {
            studioResults = 50 * 0.95 * lengthOfStay;
            apartmentResults = 65 * lengthOfStay;
        } else if (lengthOfStay > 14) {
            studioResults = 50 * 0.7 * lengthOfStay;
            apartmentResults = 65 * 0.9 * lengthOfStay;
        } else if (lengthOfStay <= 7) {
            studioResults = 50 * lengthOfStay;
            apartmentResults = 65 * lengthOfStay;
        }
    } else if (hotelMonth == "June" || hotelMonth == "September") {
        if (lengthOfStay > 14) {
            studioResults = 75.20 * 0.8 * lengthOfStay;
            apartmentResults = 68.70 * 0.9 * lengthOfStay;
        } else {
            studioResults = 75.20 * lengthOfStay;
            apartmentResults = 68.70 * lengthOfStay;
        }
    } else if (hotelMonth == "July" || hotelMonth == "August") {
        studioResults = 76 * lengthOfStay;
        if (lengthOfStay < 14) {
            apartmentResults = 77 * lengthOfStay;
        } else {
            apartmentResults = 77 * 0.9 * lengthOfStay;
        }
    }
    console.log(`Apartment: ${apartmentResults.toFixed(2)} lv.\nStudio: ${studioResults.toFixed(2)} lv.`);
}