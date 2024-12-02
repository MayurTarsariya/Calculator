document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
    function handleButtonClick(event) {
        const buttonText = event.target.innerText;
        switch (buttonText) {
            case '=':
                try {
                    inputBox.value = eval(inputBox.value);
                } catch (error) {
                    if (error instanceof SyntaxError || error instanceof TypeError) {
                        inputBox.value = 'Error';
                    }
                }
                break;
            case 'AC':
                try {
                    inputBox.value = '';
                } catch (error) {
                    inputBox.value = error;
                }
                break;
            case 'DEL':
                try {
                    inputBox.value = inputBox.value.slice(0, -1);
                } catch (error) {
                    inputBox.value = error;
                }
                break;
            default:
                inputBox.value += buttonText;
                break;
        }
    }
});