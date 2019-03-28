/* 
A 90 - 100, B 80 - 89, C 70 - 79, D 60 - 69, F 0 - 59 
15/20 --> You got a C (75%)!

*/
let gradeCalc = (score) => {
    if (score < 0) {
        console.log("Error, This is a negative number");
    } else if (score <= 59) {
        console.log(`You got a F (${score}%)`);
    } else if (score <= 69) {
        console.log(`You got a D (${score}%)`);
    } else if (score <= 79) {
        console.log(`You got a C (${score}%)`);
    } else if (score <= 89) {
        console.log(`You got a B (${score}%)`);
    } else if (score <= 100) {
        console.log(`You got a A (${score}%)`);
    } else {
        console.log("Error, This score is too high");
    }
}

gradeCalc(-2);