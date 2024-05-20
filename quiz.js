const questionObj = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: ['Suzanne Collins','James Fenimore Cooper','L. Frank Baum','Donna Leon',],
    question:"Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: ['Atlanta United','Atlanta Impact','Atlanta Bulls','Atlanta Stars',],
    question:'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: ['A Sow','A Lioness','A Hen','A Nanny',],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: ['J. R. R. Tolkien','P. L. Travers','Lewis Carroll','Enid Blyton',],
    question:"Which author wrote 'Mary Poppins'?",
  },
];

let score=0;
let currentQuestion = 0;
let totalscore = questionObj.length ;


const divQuestion = document.getElementById('question');
const divOption = document.getElementById('options');
const divScore = document.getElementById('score');

const divnext = document.getElementById("next")


showQuestion();
divnext.addEventListener("click", ()=>{
  divScore.innerText = `Score: ${score} / ${totalscore}`
  nextquestion();
})

function showQuestion(){ 
  const {correctAnswer, options, question} = questionObj[currentQuestion];
  divQuestion.textContent= question;
  const new_option = shuffleOption(options);

  new_option.forEach((opt)=>{
    const btn = document.createElement('button');
    btn.textContent = opt
    divOption.appendChild(btn);

    btn.addEventListener('click', ()=>{
      if(btn.innerHTML === correctAnswer){
      score = score +1;
      divScore.innerText = `Score: ${score} / ${totalscore}`;
    }else{
      score = score - 0.25;
      divScore.innerText = `Score: ${score} / ${totalscore}`;
    }

    nextquestion();
  })
})

}

function nextquestion(){
  currentQuestion++;
  divOption.textContent = " ";
  if(questionObj.length > currentQuestion){
    showQuestion();
  }else{
    divQuestion.textContent = "Quize Completed"
    divOption.textContent = " ";
    // document.getElementById('btn').textContent = ' '; 
    document.getElementById('btn').remove(); //Optional
  }
}




function shuffleOption(op){
  for(let i= op.length - 1; i>=0; i--){
    let j = Math.floor(Math.random()* (i+1));
    [op[i], op[j]] = [op[j], op[i]];
  }
  return op;
}

