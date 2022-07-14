main(10, 12, "+");
main(10, 1, "-");
main(7, 3, "*");
main(123, 12, "/");
main(10, 3, "%");
main(112, 0, "/");
main(10, 0, "%");

function main(num1, num2, operand) {
    let dbz = false;
    let results = 0;
    if ((operand == "/" || operand == "%") && num2 == 0) {
        console.log(`Cannot divide ${num1} by zero`);
        dbz = true;
    } else {
        switch (operand) {
            case "+":
                results = num1 + num2;
                break;
            case "-":
                results = num1 - num2;
                break;
            case "*":
                results = num1 * num2;
                break;
            case "/":
                results = num1 / num2;
                break;
            case "%":
                results = num1 % num2;
                break;
            default:
                operand = "not found";
                break;
        }
    }
    if (!dbz) {
        console.log(`${num1} ${operand} ${num2} = ${results}`);
    }
}