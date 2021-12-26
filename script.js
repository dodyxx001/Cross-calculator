let input1 = document.querySelector('#field1');
let input2 = document.querySelector('#field2');
let input3 = document.querySelector('#field3');
let resultField = document.querySelector('#resultfield');


document.addEventListener('keyup', () => {
    if (input3.value){
        resultField.value = (Number(input3.value) * Number(input2.value)) / 
        Number(input1.value);
    };
}); 