let  pi = 3.14;

function circleArea(r){
    let area = pi * r * r;
    console.log(area);
};

function circleCircumference (r){
    let circumrefence = 2 * pi * r * r;
    console.log(circumrefence);
};

module.exports = {circleArea, circleCircumference};