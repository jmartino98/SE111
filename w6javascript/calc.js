var myButton = document.querySelector('button')

myButton.addEventListener('click', dataPrompt)


function dataPrompt() {

    var hourlyPayNumber = prompt('Enter your hourly pay', 'Hourly Pay')
    var hoursWorkedNumber = prompt('Enter the amount of hours youve worked this week', 'Hours Worked This Week')
    var taxRateNumber = prompt('Enter the tax rate', 'Tax Rate')

    var grossPayResult = Number(hourlyPayNumber) * Number(hoursWorkedNumber)
    var uncleSamsShare = Number(grossPayResult) * Number(taxRateNumber)
    var netPayResult = Number(grossPayResult) - Number(uncleSamsShare)




    document.querySelector('span').innerHTML =`
    Gross Pay: $${grossPayResult.toFixed(2)}
    <br>
    Uncle Sams Share: $${uncleSamsShare.toFixed(2)}
    <br>
    Net Pay: $${netPayResult.toFixed(2)}`

    console.log(`
    Gross Pay: $${grossPayResult.toFixed(2)}
    Uncle Sams Share: $${uncleSamsShare.toFixed(2)}
    Net Pay: $${netPayResult.toFixed(2)}`)



}
