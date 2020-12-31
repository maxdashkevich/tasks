let str = "Каждый охотник желает знать, где сидит фазан."; 

function firstLetter(str) {

    return str.split(' ').filter(el => el.length > 0).map(el => el.charAt(0));
}

console.log(firstLetter(str));