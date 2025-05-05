// task 1
export function calcRectangleArea(outputElement) {
    const width = Number(prompt("Введіть ширину прямокутника:"));
    const height = Number(prompt("Введіть висоту прямокутника:"));

    if (isNaN(width) || isNaN(height)) {
        throw new Error('Параметри мають бути числами');
    }
    const square = width * height;
    outputElement.innerHTML = `Площа прямокутника: ${square}`;
}

window.calcRectangleArea = calcRectangleArea;


//   task 2
export function checkAge(outputElement) {
    let age = prompt("Please enter your age:");
    try {
        if (age === "") {
            throw new Error("The field is empty! Please enter your age");
        }
        if (isNaN(age)) {
            throw new Error("The value entered is not a number! Please enter a valid number.");
        }
        if (age < 14) {
            throw new Error("You are too young");
        }
        alert("You are allowed to watch the movie!");
    } catch (error) {
        outputElement.innerHTML = `Error: ${error.name}<br>Description: ${error.message}`;
    }
}
window.checkAge = checkAge;


// task 3

class MonthException{
    constructor(message){
        this.message = message;
        this.name = 'MonthException';
    }
}
    export function showMonthName(outputElement) {
        const month = Number(prompt('Введіть число від 1 - 12'));
        try{
            const months = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
            if (month < 1 || month > 12 || isNaN(month)){
                throw new MonthException('Incorrect month number');
            }    
            outputElement.innerHTML = `Місяць: ${months[month - 1]}`;
        } catch(error){
            outputElement.innerHTML = `${error.name}: ${error.message}`;
        }
    }
        
window.showMonthName = showMonthName;

// task4
class showUser {
    constructor(id) {
        this.id = id;
    }
}
export function showUsers(ids){
    
}

export function toggleTask(outputId, taskFunctionName) {
    const outputElement = document.getElementById(outputId);
    const taskFunction = window[taskFunctionName];

    if (typeof taskFunction !== 'function') {
        outputElement.innerHTML = 'Помилка: Невірна назва функції';
        return;
    }

    if (outputElement.innerHTML === '') {
        try {
            taskFunction(outputElement);
        } catch (error) {
            outputElement.innerHTML = `Помилка: ${error.message}`;
        }
    } else {
        outputElement.innerHTML = '';
    }
}


window.toggleTask = toggleTask;

