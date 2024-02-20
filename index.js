function createConversionString(val, factor, fromUnit, toUnit) {
    return `${val} ${fromUnit} = ${(val*factor).toFixed(3)} ${toUnit} | ${val} ${toUnit} = ${(val/factor).toFixed(3)} ${fromUnit}`
}

document.getElementById('convert').addEventListener('click', function(){
    const val = Number(document.getElementById('start-value').value)
    document.getElementById('meter-feet').textContent = createConversionString(val, 3.281, "meters", "feet")
    document.getElementById('liter-gallon').textContent = createConversionString(val, 0.264, "liters", "gallons")
    document.getElementById('kilogram-pound').textContent = createConversionString(val, 2.204, "kilograms", "pounds")
})