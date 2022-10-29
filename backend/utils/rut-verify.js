const verify = (enteredRut) => {

    let returnValue = false

    const rutLength = enteredRut.length

    //rut sin dv
    const rut = enteredRut.substring(0, rutLength - 2)
    const dv = enteredRut.substring(rutLength - 1).toLowerCase()

    //reverse rut
    const reverseRut = rut.split("").reverse().join("")

    let factor = 2
    let sum = 0
    for (let digit of reverseRut) {
        if (factor <= 7) {
            digit = +digit * factor
            sum = sum + +digit
            factor++
        } else {
            factor = 2
            digit = +digit * factor
            sum = sum + +digit
            factor++
        }
    }


    //obtener el resto de la suma /11
    const rest = sum % 11
    let dv2 = 11 - rest

    if (dv2 === 10) {
        dv2 = 'k'
    } else if (dv2 === 11) {
        dv2 = 0
    }

    if (dv2.toString() === dv) {
        return returnValue = true
    }

    return returnValue
}

module.exports = verify
