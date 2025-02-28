// document.getElementById('cashout-btn').addEventListener('click', function(event) {
//     event.preventDefault();
//     const amount = document.getElementById('cashout-amount').value;
//     const convertedAmount = parseFloat(amount);
//     const pin = document.getElementById

// })

document.getElementById('cashout-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = document.getElementById('cashout-amount').value;
        const convertedAmount = parseFloat(amount);
        const pin = document.getElementById('cashout-pin').value;
        const convertedPin = parseInt(pin);
        const mainBalance = document.getElementById('BankBalance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        
        if(convertedAmount > 0 ){
            if(convertedPin === 1234){
                if(convertedAmount <= convertedMainBalance){
                    const remainingBlance = convertedMainBalance - convertedAmount;
                    document.getElementById('BankBalance').innerText = remainingBlance;
                    document.getElementById('cashout-amount').value = '';
                    document.getElementById('cashout-pin').value = '';
                    alert('Cashout successful');
                    
                }
            }
        }

    })