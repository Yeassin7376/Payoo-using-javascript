const addMoney = document.getElementById('add-money');
addMoney.addEventListener('click', function(event){
    event.preventDefault();
    const Amount = document.getElementById('amount').value;
    convertedAmount = parseFloat(Amount);
    const pin = document.getElementById('Pin').value;
    convertedPin = parseInt(pin);
    if(convertedAmount > 0){
        if(convertedPin === 1234){
            const mainBalance = document.getElementById('BankBalance').innerText;
            const convertedMainBalance = parseFloat(mainBalance);
            const totalBalance = convertedMainBalance + convertedAmount;
            document.getElementById('BankBalance').innerText = totalBalance;
            document.getElementById('amount').value = '';
            document.getElementById('Pin').value = '';

            alert('Money added successfully');
        }
        else{
            alert('Wrong Pin');
        }
    }
    else{
        alert('Amount must be greater than 0');
    }
    
})