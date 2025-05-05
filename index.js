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


export function toggleTask(outputId, taskFunction) {
    const outputElement = document.getElementById(outputId);

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
