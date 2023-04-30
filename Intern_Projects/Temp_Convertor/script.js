function convert() {
    // Get user input
    let temperature = document.getElementById("temperature").value;
    let fromUnit = document.getElementById("from").value;
    let toUnit = document.getElementById("to").value;

    // Convert temperature to Celsius
    if (fromUnit === "fahrenheit") {
        temperature = (temperature - 32) * 5 / 9;
    } else if (fromUnit === "kelvin") {
        temperature = temperature - 273.15;
    }

    // Convert temperature to desired unit
    if (toUnit === "fahrenheit") {
        temperature = temperature * 9 / 5 + 32;
    } else if (toUnit === "kelvin") {
        temperature = temperature + 273.15;
    }

    // Display result
    document.getElementById("result").innerHTML = temperature.toFixed(2) + " " + toUnit.toUpperCase();
}