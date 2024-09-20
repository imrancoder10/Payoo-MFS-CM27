// add money to the account
/**
 * S- 1: add event handler and prevent page reload after form submit
 * S-2: get money to be added to the account balance
 * 
 */

// step - 1: add an event handler to the add money button inside the form
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    // Browser reloade prevent
    event.preventDefault();
    // Get pin
    const inputPin = document.getElementById('input-pin').value;
    // validation pin
    if (inputPin === '1234') {
        //    Get money and amount
        const inputAmount = Number(document.getElementById('input-amount').value);
        const avilableAmount = Number(document.getElementById('amount').innerText);
        const updateAmount = inputAmount + avilableAmount;
        // update the balance in the UI/DOM
        document.getElementById('amount').innerText = updateAmount;

    } else {
        alert('Wrong Pin');
    }

});