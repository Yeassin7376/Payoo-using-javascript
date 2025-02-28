const addMoneySection = document.getElementById('addmoney-section');
const cashOutSection = document.getElementById('cashout-section');
addMoneySection.style.display = 'block';
cashOutSection.style.display = 'none';

document.getElementById('addmoney-box')
    .addEventListener('click',function(){
        addMoneySection.style.display ='block';
        cashOutSection.style.display = 'none';
    } )
document.getElementById('cashout-box')
    .addEventListener('click',function(){
        addMoneySection.style.display ='none';
        cashOutSection.style.display = 'block';
    } )