//  Question One

// Function to take inputs and add 15% to each element
function returnExtraPercentage() {
    let value = 100.01
    value += value * 0.15
    return value
}

// Calling the Method
valuePlusPercentage = returnExtraPercentage()

// Printing Outputs
console.log(valuePlusPercentage.toFixed(2))


// Question Two

// Function to return on odd numbers (inverted order) from a provided list
function oddNumbers() {
    const inputValues = [1, 7, 4 ,3]
    const oddValues = []
    for (i = 0; i < inputValues.length; i++) {
        if (inputValues[i] % 2 != 0) {
            oddValues.push(inputValues[i])
        }
    }
    oddValues.reverse()
    return oddValues
}

// Calling the Method
oddValues = oddNumbers()

// Printing Outputs
console.log(oddValues)


// Question Three

// Function to return multiples of five (inverted order) from a provided list
function multiplesOfFive() {
    const inputValues = [1, 3, 25, 10, 11]
    const multipleValues = []
    for (i = 0; i < inputValues.length; i++) {
        if (inputValues[i] % 5 == 0) {
            multipleValues.push(inputValues[i])
        }
    }
    multipleValues.reverse()
    return multipleValues
}

// Calling the Method
multipleValues = multiplesOfFive()

// Printing Outputs
console.log(multipleValues)