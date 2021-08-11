const salary = document.querySelector('#salary');
const salaryOutput = document.querySelector('.salary-output')
salary.addEventListener('input', function () {
    salaryOutput.textContent = salary.value;
    console.log(salaryOutput.textContent);
});

//name validation
const nameText = document.querySelector('#name');
const nameTextError = document.querySelector('.name-error')
nameText.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
    console.log(nameText);
    if (nameRegex.test(nameText.value)) 
        nameTextError.textContent = ' ';
    else 
        nameTextError.textContent = 'Name invalid'
});

// Validate the email using the REGEX expression

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
    let emailRegex = RegExp(
        "^[a-zA-Z0-9_+&*#$^!-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{" +
        "2,7}$"
    );
    if (emailRegex.test(email.value)) 
        emailError.emailContent = ' ';
    else 
        emailError.emailContent = "Email is InValid";
    }
);

// Validate  phone number using the REGEX expression

const number = document.querySelector('#tel');
const numberError = document.querySelector('.tel-error');
number.addEventListener('input', function () {
    let numberRegex = RegExp('^[1-9]{2}\\s{0,1}[1-9]{1}[0-9]{9}$');
    if (numberRegex.test(number.value)) {
        console.log("correct");
        numberError.textContent = ' ';
    } else 
        numberError.textContent = 'Invalid Number!';
    }
);
