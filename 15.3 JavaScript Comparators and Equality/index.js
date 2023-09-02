// === : is equal to and it's datatype is the same
// ==  : is equal to regardless it's datatype
// !== : is not equal to
// >   : is greater than
// <   : is lesser than
// >=  : is greater or equal to
// <=  : is lesser or equal to

// Combining Comparators with:
// 1. && : AND
// 2. || : OR
// 3. !  : NOT

function bmiCalculator (weight, height) {
    let bmi = (weight/Math.pow(height, 2));
    
    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if (bmi >= 25) {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
}

// function : keyword untuk membangun function
// bmiCalculator (weight, height) : nama function dan parameter
// {..} : perintah yang akan dieksekusi
/* let bmi = (weight/Math.pow(height, 2)); : perintah untuk membangun variabel bmi agar bisa digunakan di dalam 
pengkondisian
*/
// Your code passed this test.