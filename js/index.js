// search: form submit reloading the page


// step - 1: set event handler
document.getElementById('login-btn').addEventListener('click', function (event) {
    // step - 2: prevent default behavior(prevent reloading browser)
    event.preventDefault();
    // step - 3: get the phone number and pin number
    const inputPhoneNumber = document.getElementById('input-phone-number').value;
    const inputPinNumber = document.getElementById('input-pin-number').value;

    if(inputPhoneNumber==='5' && inputPinNumber==='1234'){
        console.log('You are logged in.');
    }
    else{
        alert('Wrong phone number or pin');
    }
});