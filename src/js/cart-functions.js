"use strict";

const calculateChange = (total, payment) => {
    // return parseFloat((payment - total).toFixed(2));
    return (payment * 100 - total * 100) / 100;
};


const isSufficientPayment = (total, payment) => {
    // if (payment >= total) {
    //     return true;
    // } else {
    //     return false;
    // }

    // return payment >= total ? true : false;

    return payment >= total;
};


const calculateTotal = (itemsArray)=>{
  // Initialize a variable to hold the total price.
  let total = 0;

for (let i = 0; i < itemsArray.length; i++) {
    total += itemsArray[i].price;
}
//toFixed(2) -- 2 decimals but total is still string. 
//Used parseFloat() -- converted string to #
 return parseFloat(total.toFixed(2));

};

const addItem = (itemsArray, name, price) => {

        const newItem = { name, price };
        itemsArray.push(newItem);
        console.log(itemsArray);
};

const removeItem = (itemsArray, index) => {
    itemsArray.splice(index, 1);

};





module.exports = {calculateChange, isSufficientPayment, addItem, removeItem, calculateTotal};