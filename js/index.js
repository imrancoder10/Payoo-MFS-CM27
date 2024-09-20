// search: form submit reloading the page


// step - 1: set event handler
document.getElementById('login-btn').addEventListener('click', function (event) {
    // step - 2: prevent default behavior(prevent reloading browser)
    event.preventDefault();
    // step - 3: get the phone number and pin number
    const inputPhoneNumber = document.getElementById('input-phone-number').value;
    const inputPinNumber = document.getElementById('input-pin-number').value;

    // step - 4: validate phone and pin
    // this is temporary. you should do like this............
    if (inputPhoneNumber === '5' && inputPinNumber === '1234') {
        // step - 5: allow user to use website.
        window.location.href = '/home.html';
    } else {
        alert('Wrong phone number or pin');
    }
});