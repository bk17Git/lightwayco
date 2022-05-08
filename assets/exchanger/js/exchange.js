document.addEventListener("DOMContentLoaded", () => {

    document.querySelector('form').onsubmit = () => {

        const baseCur = document.querySelector('#base-currency').value.toUpperCase()

        fetch('https://api.exchangerate.host/latest?base=' + baseCur)
        .then(response => response.json())
        .then(data => {
            const currency = document.querySelector('#currency').value.toUpperCase();
            const rate = data.rates[currency];
            const amount = document.querySelector('#amount').value;
            const result = rate * amount;
            if(rate !== undefined && amount >= 1 && amount <= 999999999){
                const resultArea = document.querySelector('#result');
                resultArea.innerHTML = `${amount} ${baseCur} is equal to ${result.toFixed(2)} ${currency}`;
                
            }
            else if(rate == undefined)
            {
                document.querySelector('#result').innerHTML = "Invalid currency";
            }
            else if(amount > 999999999){
                document.querySelector('#result').innerHTML = "Please enter an smaller amount!";
            }
            else{
                document.querySelector('#result').innerHTML =`1 ${baseCur} is equal to ${rate.toFixed(2)} ${currency}`;
            }
            
        });


        
        return false;
    }

 

});    
