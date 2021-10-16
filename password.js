const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`
╦ ╦┌─┐┬  ┌─┐┌─┐┌┬┐┌─┐  ╦ ╦┌─┐┌─┐┬─┐┬
║║║├┤ │  │  │ ││││├┤   ║ ║└─┐├┤ ├┬┘│
╚╩╝└─┘┴─┘└─┘└─┘┴ ┴└─┘  ╚═╝└─┘└─┘┴└─o`)

reader.question('Enter the password you would like to validate below.\nPassword: ', function(input){
    let array = input.split('')
    // console.log(array)

    if (input.includes(0) || input.includes(1) || input.includes (2) || input.includes(3) || input.includes(4) || input.includes(5) || input.includes(6) || input.includes(7) || input.includes(8) || input.includes(9)){
    // checks to see if any # 0-9 was included in the input
        if (input.length >= 10){
            console.log('Nice job! Your password is at least 10 characters long and includes a #')
        } else {
            console.log('Please try again. Your password must be at least 10 characters long.')
        }
    } else {
        console.log('Please try again. Your password must include a #')
    }
    // This line closes the connection to the command line interface.
	reader.close()
});