const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('Account-Number').value;
    const pin = document.getElementById('PIN').value;
    const Numberlength = accountNumber.length;
    if(Numberlength == 11){
        if(pin.length == 4){
            if(pin === '1234'){
                window.location.href = 'main.html';
            }
            else{
                alert('wrong pin')
            }
        }
        else{
            alert('PIN must be 4 digit')
        }
    }
    else{
        alert('Need a valid number')
    }
})



