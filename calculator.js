document.addEventListener("DOMContentLoaded", function() {
    const expressionInput = document.getElementById('expression');
    const resultsDiv = document.getElementById('results');
    let history = [];

    expressionInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            calculate();
        }
    });

    function calculate() {
        let expression = expressionInput.value;
        try {
            let result = eval(expression);
            displayResult(expression, result);
            expressionInput.value = '';
        } catch (error) {
            displayError(expression);
            expressionInput.value = '';
        }
    }

    function displayResult(expression, result) {
        let resultText = `${expression} = ${result}`;
        let resultElement = document.createElement('input');
        resultElement.type = 'text';
        resultElement.value = resultText;
        resultElement.readOnly = true;
        resultElement.classList.add('result');
        resultsDiv.prepend(resultElement); // Add the new result at the beginning of the resultsDiv
        history.unshift(resultText); // Add the new result to the beginning of the history array
    }

    function displayError(expression) {
        let errorText = `Error: ${expression}`;
        let errorElement = document.createElement('input');
        errorElement.type = 'text';
        errorElement.value = errorText;
        errorElement.readOnly = true;
        errorElement.classList.add('error');
        resultsDiv.prepend(errorElement); // Add the new error at the beginning of the resultsDiv
        history.unshift(errorText); // Add the new error to the beginning of the history array
    }
});
