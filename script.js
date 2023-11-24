function convertCADtoUSD(amount) {
    const exchangeRateCADtoUSD = 0.78;
    return amount * exchangeRateCADtoUSD;
}

function convertUSDtoCAD(amount) {
    const exchangeRateUSDtoCAD = 1.28;
    return amount * exchangeRateUSDtoCAD;
}

function convertCurrency() {
    const amountElement = document.getElementById('amount');
    const fromCurrencyElement = document.getElementById('fromCurrency');
    const toCurrencyElement = document.getElementById('toCurrency');
    const resultElement = document.getElementById('result');

   
    const amount = parseFloat(amountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;

    
    let result;
    if (fromCurrency === 'CAD' && toCurrency === 'USD') {
        result = convertCADtoUSD(amount);
    } else if (fromCurrency === 'USD' && toCurrency === 'CAD') {
        result = convertUSDtoCAD(amount);
    } else {
        alert('Invalid');
        return;
    }
    console.log(result);
    resultElement.value = result.toFixed(3);
}
