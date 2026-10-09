let isShowDate = false;

function showDate() {
    const datetime = document.getElementById("datetime");

    if (!isShowDate) {
        const value = new Date().toLocaleString();
        isShowDate = true;
        datetime.innerHTML = value;
    } else {
        isShowDate = false;
        datetime.innerHTML = "";
    }
}


function adWindow() {
    setTimeout(() => {
    window.open(
        "ad.html", 
        "_blank", 
        "width=800,height=600,scrollbars=yes,resizable=yes"
    );
    }, 3000);
}


function matchEven(s) {
    let evenPattern = /^[1-9]+[02468]$/

    return evenPattern.test(s);
}

console.log(matchEven("2341"))
console.log(matchEven("132"))
console.log(matchEven("29"))
console.log(matchEven("5578"))

function displayInfo() {
    let name = prompt("Please enter your name");
    let phoneNumber = prompt("Please enter your phone number")
    let mobileNumber = prompt("Please enter your mobile number")
    let email = prompt("Please enter your email").toLowerCase();
    let color = prompt("Please enter a color").toLowerCase();


    const fnPattern = /^[a-zA-Z ]+$/
    const phnPattern = /^[0-9]{8}$/
    const mobPattern = /^0(10|11|12|15)[0-9]{8}$/
    const emlPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    while (!fnPattern.test(name)) {
        name = prompt("Please enter your name");
    }


    while (!phnPattern.test(phoneNumber)) {
        phoneNumber = prompt("Please enter your phone number");
    }

    while (!mobPattern.test(mobileNumber)) {
        mobileNumber = prompt("Please enter your mobile number");
    }

    while (!emlPattern.test(email)) {
        email = prompt("Please enter your email");
    }

    while (! (color == "red" || color == "green" || color == "blue")) {
        color = prompt("Please enter a color").toLowerCase();
    }

    let container = document.getElementById("container");

    let nameElement = document.createElement("div")
    nameElement.setAttribute("style", "color: " + color);
    nameElement.innerHTML = "Welcome, " + name;
    container.appendChild(nameElement);

    let dateElement = document.createElement("div")
    dateElement.setAttribute("style", "color: " + color);
    dateElement.innerHTML = "Today's date: " + new Date().toLocaleString(); 
    container.appendChild(dateElement);

    let phoneNumberElement = document.createElement("div");
    phoneNumberElement.setAttribute("style", "color: " + color);
    phoneNumberElement.innerHTML = phoneNumber;
    container.appendChild(phoneNumberElement);


    let mobileNumberElement = document.createElement("div");
    mobileNumberElement.setAttribute("style", "color: " + color);
    mobileNumberElement.innerHTML = mobileNumber;
    container.appendChild(mobileNumberElement);


    let emailElement = document.createElement("div");
    emailElement.setAttribute("style", "color: " + color);
    emailElement.innerHTML = email;
    container.appendChild(emailElement);


}

displayInfo();
