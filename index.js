// question for the project

import data from './data.js';

const btn = document.querySelector('.btn');

let inputs = document.querySelectorAll('input[name="answer"]');

let questionNumber = 0;

let points = 0;

let selectedValue;

console.log(data);


function setQuestion() {
    const question = document.querySelector('.question');

    const op1 = document.getElementById('a');

    const op2 = document.getElementById('b');

    const op3 = document.getElementById('c');

    const op4 = document.getElementById('d');

    question.innerText = data[questionNumber].question;

    op1.innerText = data[questionNumber].options[0];
    op2.innerText = data[questionNumber].options[1];
    op3.innerText = data[questionNumber].options[2];
    op4.innerText = data[questionNumber].options[3];   

}

inputs.forEach((e)=>{
    e.addEventListener('change', (option)=>{
        if(option.target.checked) {
                btn.style.opacity = '1';
                selectedValue = parseInt(option.target.value);
            }
        })
    })


btn.addEventListener('click', ()=>{
    if(inputs[selectedValue].checked) {
    let answerIndex = data[questionNumber].options.indexOf(data[questionNumber].correctAnswer);

    if(answerIndex === selectedValue) {
        points++;
    }

    inputs[selectedValue].checked = false;

    if(questionNumber === 9) {
        alert(`total score is ${points}`);
        questionNumber = 0;
    }
    else{
    questionNumber++;
    }

    setQuestion();
}
    
    
});

setQuestion();




