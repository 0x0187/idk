document.addEventListener("DOMContentLoaded", function() {
    const expressionInput = document.getElementById('expression');
    const resultInput = document.getElementById('result');

    expressionInput.addEventListener('input', calculate);

    function calculate() {
        let expression = expressionInput.value;
        try {
            let result = eval(expression);
            resultInput.value = result;
        } catch (error) {
            resultInput.value = 'Error';
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const expressionInput = document.getElementById('expression');
    const resultInput = document.getElementById('result');

    expressionInput.addEventListener('input', calculate);

    function calculate() {
        let expression = expressionInput.value;
        try {
            let result = eval(expression);
            resultInput.value = result;
        } catch (error) {
            resultInput.value = 'Error';
        }
    }
});
