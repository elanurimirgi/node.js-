let arguments = process.argv.slice(2);

function calculate_area(radius){
    const pi = 3.14;
    let area = pi * radius* radius;
    console.log(`circle area: ${parseFloat(area)}`)
};

calculate_area(parseFloat(arguments[0]));
