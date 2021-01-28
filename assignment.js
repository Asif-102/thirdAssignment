function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return 'kilometer can not be negative number';
    }
    let meter = kilometer * 1000;
    let result = meter;
    return result;
}
let getMeter1 = kilometerToMeter(23);//checking for positive number
console.log(getMeter1, ' meter');
let getMeter2 = kilometerToMeter(-3);//checking for negative number
console.log(getMeter2);

function budgetCalculator(watch, phone, laptop) {
    let watchPrice = watch * 50;
    let phonePrice = phone * 100;
    let laptopPrice = laptop * 500;
    let totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
let shoppingCost = budgetCalculator(2, 5, 7);
console.log('Your total shopping cost is : ', shoppingCost);

function hotelCost(days) {
    let cost = 0;
    if (days < 0) {
        return 'Day can not ber negative';//checking for wrong input
    }
    else if (days <= 10) {
        cost = days * 100;
    } else if (days <= 20) {
        let first10days = 10 * 100;
        let remainingDays = days - 10;
        let second10days = remainingDays * 80;
        cost = first10days + second10days;
    } else {
        let first10days = 10 * 100;
        let second10days = 10 * 80;
        let remainingDays = days - 20;
        let after20days = remainingDays * 50;
        cost = first10days + second10days + after20days;
    }
    return cost;
}
let totalCostOfHOtel = hotelCost(31);
console.log('Your total cost of hotel is: ', totalCostOfHOtel);

function megaFriend(friendsName) {
    bigName = friendsName[0];
    for (let i = 0; i < friendsName.length; i++) {
        let name = friendsName[i];
        if (name > bigName) {
            bigName = name;
        }
    }
    return bigName;
}
let myFriends = ['Joy', 'Amit', 'Nipun', 'Sourojit', 'Sayem'];
let bigNameOfMyFriend = megaFriend(myFriends);
console.log(bigNameOfMyFriend);