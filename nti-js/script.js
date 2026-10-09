function exchangeEgyPound(amount) {
    const rate = 52;

    return amount / rate;
}

function task2() {
    let input = prompt("Enter amount in EGP");
    alert("Amount in usd: " + exchangeEgyPound(input))
}





alert("welcome to my first site");



let num = 0;
document.querySelector("#increment").addEventListener("click",
    () => {
        let value = ++num % 2 === 0 ? "I'm even" : num;
        document.getElementById("number").innerHTML = value;   
    }
)

document.querySelector("#task2").addEventListener("click",
task2
)

function task3() {
    let firstName = prompt("Please enter your name");
    let mobileNumber = prompt("Please enter your number")
    let birthYear = Number(prompt("Please enter your birth year"))
    let color = prompt("Please enter a color").toLowerCase();


    const fnPattern = /[a-zA-Z ]+/
    const mnPattern = /[0-9]{11}/
    const currentYear = new Date().getFullYear();

    while (!fnPattern.test(firstName)) {
        firstName = prompt("Please enter your name");
    }

    while (!mnPattern.test(mobileNumber)) {
        mobileNumber = prompt("Please enter your number");
    }

    while (birthYear == NaN || birthYear < 1900 || birthYear > currentYear) {
        birthYear = prompt("Please enter your birth year");
    }

    while (! (color == "red" || color == "green" || color == "blue")) {
        color = prompt("Please enter a color").toLowerCase();
    }


    // const welcomeMessage = document.createElement();
    // welcomeMessage.innerHTML = "<p class='t4' style='color:" +color + "'>welcome dear " + firstName + "</p>";
    // const age = document.createElement();
    // age.innerHTML = "<p class='t4' style='color:" +color + ">you age: " + currentYear - birthYear  + "</p>";

    // document.body.append(welcomeMessage);
    // document.body.append(age);

    
    alert("welcome dear " + firstName);
    console.log(currentYear);
    alert("your age " + (currentYear - birthYear));
    alert("your mobile is " + mobileNumber);

    console.log("welcome dear " + firstName);
}

function equalFunc(a, b, c) {
    let eqA = 0;

    if (a === b) {
        eqA++;
    }

    if (a === c) {
        eqA++;
    }

    if (eqA != 0) {
        eqA++;
    }

    if (b === c && eqA < 3) {
        return 2;
    }

    return eqA;
}

let sum = 0;
function isNumeric(a) {
    if (typeof a != "number" || (0-a == NaN)) {
        return;
    }
    if (sum + a >= 50) {
        return;
    }
    sum += a;
}

task3();